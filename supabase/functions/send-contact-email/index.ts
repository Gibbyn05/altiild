import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  subject: string;
  message: string;
  imageUrls?: string[];
}

// Simple in-memory rate limiting (per IP, 5 requests per minute)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT) {
    return true;
  }
  
  record.count++;
  return false;
}

// Input validation
function validateInput(data: ContactEmailRequest): { valid: boolean; error?: string } {
  // Name validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return { valid: false, error: 'Navn er påkrevd' };
  }
  if (data.name.length > 100) {
    return { valid: false, error: 'Navn kan ikke være lengre enn 100 tegn' };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== 'string' || !emailRegex.test(data.email)) {
    return { valid: false, error: 'Ugyldig e-postadresse' };
  }
  if (data.email.length > 255) {
    return { valid: false, error: 'E-post kan ikke være lengre enn 255 tegn' };
  }

  // Phone validation (optional but if provided, must be valid)
  if (data.phone && typeof data.phone === 'string') {
    const cleanPhone = data.phone.replace(/[\s\-\(\)]/g, '');
    if (cleanPhone.length > 0 && (cleanPhone.length < 8 || cleanPhone.length > 20)) {
      return { valid: false, error: 'Ugyldig telefonnummer' };
    }
  }

  // Address validation (optional)
  if (data.address && data.address.length > 500) {
    return { valid: false, error: 'Adresse kan ikke være lengre enn 500 tegn' };
  }

  // Subject validation
  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length === 0) {
    return { valid: false, error: 'Emne er påkrevd' };
  }
  if (data.subject.length > 200) {
    return { valid: false, error: 'Emne kan ikke være lengre enn 200 tegn' };
  }

  // Message validation
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    return { valid: false, error: 'Melding er påkrevd' };
  }
  if (data.message.length > 5000) {
    return { valid: false, error: 'Melding kan ikke være lengre enn 5000 tegn' };
  }

  // Image URLs validation
  if (data.imageUrls && Array.isArray(data.imageUrls)) {
    if (data.imageUrls.length > 5) {
      return { valid: false, error: 'Maksimalt 5 bilder tillatt' };
    }
    for (const url of data.imageUrls) {
      if (typeof url !== 'string' || !url.startsWith('https://')) {
        return { valid: false, error: 'Ugyldig bilde-URL' };
      }
    }
  }

  return { valid: true };
}

// Sanitize HTML to prevent XSS
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';
    
    if (isRateLimited(clientIp)) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: 'For mange forespørsler. Vennligst vent litt før du prøver igjen.' }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const requestData: ContactEmailRequest = await req.json();

    // Validate input
    const validation = validateInput(requestData);
    if (!validation.valid) {
      console.warn(`Validation failed: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, phone, address, subject, message, imageUrls } = requestData;

    // Sanitize all user inputs for HTML
    const safeName = sanitizeHtml(name.trim());
    const safeEmail = sanitizeHtml(email.trim());
    const safePhone = phone ? sanitizeHtml(phone.trim()) : null;
    const safeAddress = address ? sanitizeHtml(address.trim()) : null;
    const safeSubject = sanitizeHtml(subject.trim());
    const safeMessage = sanitizeHtml(message.trim());

    console.log("Sending contact email for:", { name: safeName, email: safeEmail, subject: safeSubject, imageCount: imageUrls?.length || 0 });

    // Build images HTML
    const imagesHtml = imageUrls && imageUrls.length > 0 
      ? `
        <hr />
        <h3>Vedlagte bilder:</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${imageUrls.map((url, i) => `<a href="${sanitizeHtml(url)}" target="_blank"><img src="${sanitizeHtml(url)}" alt="Bilde ${i + 1}" style="max-width: 200px; max-height: 200px; border-radius: 8px;" /></a>`).join('')}
        </div>
      `
      : '';

    // Send notification to business
    const businessEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Alt i Ild <noreply@altiild.no>",
        to: ["post@altiild.no"],
        subject: `Ny henvendelse: ${safeSubject}`,
        html: `
          <h2>Ny henvendelse fra kontaktskjema</h2>
          <p><strong>Navn:</strong> ${safeName}</p>
          <p><strong>E-post:</strong> ${safeEmail}</p>
          <p><strong>Telefon:</strong> ${safePhone || "Ikke oppgitt"}</p>
          <p><strong>Adresse:</strong> ${safeAddress || "Ikke oppgitt"}</p>
          <p><strong>Emne:</strong> ${safeSubject}</p>
          <hr />
          <h3>Melding:</h3>
          <p>${safeMessage.replace(/\n/g, "<br>")}</p>
          ${imagesHtml}
        `,
      }),
    });

    if (!businessEmailRes.ok) {
      const errorData = await businessEmailRes.text();
      console.error("Business email error:", errorData);
      throw new Error(`Failed to send business email: ${errorData}`);
    }

    console.log("Business email sent successfully");

    // Send confirmation to customer
    const customerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Alt i Ild <noreply@altiild.no>",
        to: [email],
        subject: "Vi har mottatt din henvendelse - Alt i Ild",
        html: `
          <h2>Takk for din henvendelse, ${safeName}!</h2>
          <p>Vi har mottatt meldingen din og vil ta kontakt så snart som mulig, vanligvis innen 24 timer.</p>
          <hr />
          <h3>Din melding:</h3>
          <p><strong>Emne:</strong> ${safeSubject}</p>
          <p>${safeMessage.replace(/\n/g, "<br>")}</p>
          <hr />
          <p>Med vennlig hilsen,<br><strong>Alt i Ild</strong></p>
          <p>Telefon: +47 70 12 34 56<br>E-post: post@altiild.no</p>
        `,
      }),
    });

    if (!customerEmailRes.ok) {
      const errorData = await customerEmailRes.text();
      console.error("Customer email error:", errorData);
    } else {
      console.log("Customer confirmation email sent successfully");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
