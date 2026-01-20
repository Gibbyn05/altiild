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
  hasFiringBan?: boolean;
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

    const { name, email, phone, address, subject, message, imageUrls, hasFiringBan } = requestData;

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
        <tr>
          <td colspan="2" style="padding: 20px 0 10px 0; border-top: 1px solid #e5e5e5;">
            <h3 style="margin: 0 0 15px 0; color: #333; font-size: 16px;">📷 Vedlagte bilder (${imageUrls.length})</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              ${imageUrls.map((url, i) => `<a href="${sanitizeHtml(url)}" target="_blank" style="display: inline-block;"><img src="${sanitizeHtml(url)}" alt="Bilde ${i + 1}" style="max-width: 150px; max-height: 150px; border-radius: 8px; border: 1px solid #ddd;" /></a>`).join('')}
            </div>
          </td>
        </tr>
      `
      : '';

    // Build firing ban alert
    const firingBanAlert = hasFiringBan 
      ? `
        <tr>
          <td colspan="2" style="padding: 15px; background-color: #fef2f2; border-radius: 8px; border-left: 4px solid #b1222f;">
            <strong style="color: #b1222f;">⚠️ VIKTIG: Kunden har fyringsforbud eller avvik!</strong>
          </td>
        </tr>
        <tr><td colspan="2" style="height: 15px;"></td></tr>
      `
      : '';

    // Send notification to business with improved formatting
    const businessEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Alt i Ild <noreply@altiild.no>",
        to: ["post@altiild.no"],
        subject: `${hasFiringBan ? '⚠️ ' : ''}Ny henvendelse: ${safeSubject}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header -->
              <tr>
                <td style="background-color: #b1222f; padding: 25px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Ny henvendelse</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 30px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${firingBanAlert}
                    
                    <!-- Tjeneste/Emne -->
                    <tr>
                      <td style="padding: 12px 15px; background-color: #f8f8f8; border-radius: 8px;">
                        <strong style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Tjeneste</strong>
                        <p style="margin: 5px 0 0 0; font-size: 18px; color: #333; font-weight: 600;">${safeSubject}</p>
                      </td>
                    </tr>
                    <tr><td style="height: 15px;"></td></tr>
                    
                    <!-- Kontaktinfo -->
                    <tr>
                      <td style="padding: 0;">
                        <h3 style="margin: 0 0 15px 0; color: #333; font-size: 16px; border-bottom: 2px solid #b1222f; padding-bottom: 8px;">👤 Kontaktinformasjon</h3>
                        <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #fafafa; border-radius: 8px;">
                          <tr>
                            <td width="100" style="color: #666; font-weight: 500;">Navn:</td>
                            <td style="color: #333;">${safeName}</td>
                          </tr>
                          <tr>
                            <td style="color: #666; font-weight: 500;">Telefon:</td>
                            <td style="color: #333;">
                              ${safePhone ? `<a href="tel:${safePhone}" style="color: #b1222f; text-decoration: none; font-weight: 600;">${safePhone}</a>` : '<span style="color: #999;">Ikke oppgitt</span>'}
                            </td>
                          </tr>
                          <tr>
                            <td style="color: #666; font-weight: 500;">E-post:</td>
                            <td style="color: #333;">
                              <a href="mailto:${safeEmail}" style="color: #b1222f; text-decoration: none;">${safeEmail}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="color: #666; font-weight: 500;">Adresse:</td>
                            <td style="color: #333;">${safeAddress || '<span style="color: #999;">Ikke oppgitt</span>'}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr><td style="height: 20px;"></td></tr>
                    
                    <!-- Melding -->
                    <tr>
                      <td style="padding: 0;">
                        <h3 style="margin: 0 0 15px 0; color: #333; font-size: 16px; border-bottom: 2px solid #b1222f; padding-bottom: 8px;">💬 Melding</h3>
                        <div style="background-color: #fafafa; border-radius: 8px; padding: 15px; border-left: 3px solid #b1222f;">
                          <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${safeMessage.replace(/\n/g, "<br>")}</p>
                        </div>
                      </td>
                    </tr>
                    
                    ${imagesHtml}
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e5e5e5;">
                  <p style="margin: 0; color: #666; font-size: 12px;">
                    Denne e-posten ble sendt fra kontaktskjemaet på altiild.no
                  </p>
                </td>
              </tr>
            </table>
          </body>
          </html>
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
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header -->
              <tr>
                <td style="background-color: #b1222f; padding: 25px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Takk for din henvendelse!</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 30px;">
                  <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0 0 20px 0;">
                    Hei ${safeName}! 👋
                  </p>
                  <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0 0 20px 0;">
                    Vi har mottatt henvendelsen din og vil ta kontakt så snart som mulig, vanligvis innen 24 timer.
                  </p>
                  
                  <!-- Summary box -->
                  <div style="background-color: #fafafa; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 3px solid #b1222f;">
                    <h3 style="margin: 0 0 15px 0; color: #333; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Din henvendelse</h3>
                    <p style="margin: 0 0 10px 0; color: #666;">
                      <strong style="color: #333;">Tjeneste:</strong> ${safeSubject}
                    </p>
                    <p style="margin: 0; color: #666; line-height: 1.6;">
                      <strong style="color: #333;">Melding:</strong><br>
                      ${safeMessage.replace(/\n/g, "<br>")}
                    </p>
                  </div>
                  
                  <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 20px 0;">
                    Har du spørsmål i mellomtiden? Ta gjerne kontakt med oss:
                  </p>
                  
                  <!-- Contact info -->
                  <table cellpadding="8" cellspacing="0" style="margin: 20px 0;">
                    <tr>
                      <td style="color: #666;">📞 Telefon:</td>
                      <td><a href="tel:+4798844844" style="color: #b1222f; text-decoration: none; font-weight: 600;">+47 988 44 844</a></td>
                    </tr>
                    <tr>
                      <td style="color: #666;">✉️ E-post:</td>
                      <td><a href="mailto:post@altiild.no" style="color: #b1222f; text-decoration: none;">post@altiild.no</a></td>
                    </tr>
                  </table>
                  
                  <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 20px 0 0 0;">
                    Med vennlig hilsen,<br>
                    <strong style="color: #b1222f;">Alt i Ild</strong>
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e5e5e5;">
                  <p style="margin: 0; color: #666; font-size: 12px;">
                    Alt i Ild AS | Molde, Møre og Romsdal<br>
                    <a href="https://altiild.no" style="color: #b1222f; text-decoration: none;">altiild.no</a>
                  </p>
                </td>
              </tr>
            </table>
          </body>
          </html>
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
