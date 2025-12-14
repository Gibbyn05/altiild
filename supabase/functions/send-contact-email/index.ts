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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, address, subject, message, imageUrls }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", { name, email, subject, imageCount: imageUrls?.length || 0 });

    // Build images HTML
    const imagesHtml = imageUrls && imageUrls.length > 0 
      ? `
        <hr />
        <h3>Vedlagte bilder:</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${imageUrls.map((url, i) => `<a href="${url}" target="_blank"><img src="${url}" alt="Bilde ${i + 1}" style="max-width: 200px; max-height: 200px; border-radius: 8px;" /></a>`).join('')}
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
        subject: `Ny henvendelse: ${subject}`,
        html: `
          <h2>Ny henvendelse fra kontaktskjema</h2>
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Ikke oppgitt"}</p>
          <p><strong>Adresse:</strong> ${address || "Ikke oppgitt"}</p>
          <p><strong>Emne:</strong> ${subject}</p>
          <hr />
          <h3>Melding:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
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
          <h2>Takk for din henvendelse, ${name}!</h2>
          <p>Vi har mottatt meldingen din og vil ta kontakt så snart som mulig, vanligvis innen 24 timer.</p>
          <hr />
          <h3>Din melding:</h3>
          <p><strong>Emne:</strong> ${subject}</p>
          <p>${message.replace(/\n/g, "<br>")}</p>
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
