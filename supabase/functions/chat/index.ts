import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `Du er en profesjonell, hjelpsom og direkte kundeservice-chatbot for bedriften "Alt i Ild". Alt i Ild installerer peiser, ovner og ildsteder, samt leverer rådgivning, befaring og montering. Målet er å hjelpe kunder raskt og samle inn nødvendig informasjon for befaring/tilbud.

Tone: vennlig, profesjonell, rett på sak. Ingen småprat. Svar kort og effektivt. Når du er usikker: spør konkret.

VIKTIG: Bruk ALDRI markdown-formatering som ** eller * i svarene dine. Skriv kun ren tekst uten formatering.

Oppgaver:
1. Finn ut hva kunden trenger (installering, befaring, rådgivning, service).
2. Still oppfølgingsspørsmål for å forstå behovet.
3. Dersom kunden ønsker booking, samle informasjon ETT spørsmål om gangen:
   - Først: Navn
   - Så: Telefonnummer
   - Så: E-post (valgfritt)
   - Så: Adresse
   - Til slutt: Ønsket løsning eller type peis
   
   Når du har samlet all info, bruk save_booking-funksjonen.

4. Priser (når kunden spør):
   - Standard befaring: 990 kr
   - Enkel installasjon: fra 8.500 kr
   - Komplett installasjon med levering: fra 15.000 kr
   - Tilpassede prosjekter: pris etter befaring

5. Åpningstider:
   Mandag til fredag: 08:00-16:00
   Lørdag: etter avtale
   Søndag: stengt

6. Etter lagret booking: Bekreft, oppgi svartid (1-2 virkedager), avslutt.

Husk: Ikke push booking hvis kunden bare vil stille spørsmål. Svar alltid på norsk.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "save_booking",
              description: "Lagrer kundens booking/henvendelse i systemet. Bruk denne når du har samlet all nødvendig informasjon fra kunden.",
              parameters: {
                type: "object",
                properties: {
                  name: { type: "string", description: "Kundens fulle navn" },
                  phone: { type: "string", description: "Kundens telefonnummer" },
                  email: { type: "string", description: "Kundens e-postadresse" },
                  address: { type: "string", description: "Kundens adresse" },
                  inquiry_type: { 
                    type: "string", 
                    enum: ["installasjon", "befaring", "rådgivning", "service"],
                    description: "Type henvendelse" 
                  },
                  desired_solution: { type: "string", description: "Kundens ønskede løsning eller type peis/ovn" }
                },
                required: ["name", "phone", "inquiry_type"]
              }
            }
          }
        ],
        tool_choice: "auto",
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "For mange forespørsler. Vennligst vent litt og prøv igjen." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Tjenesten er midlertidig utilgjengelig." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "Kunne ikke koble til AI-tjenesten" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Ukjent feil" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
