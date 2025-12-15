import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `Du er en hjelpende og vennlig chatbot for Alt i Ild. Du gir korrekte svar på brukerens spørsmål om peiser, ovner, piper, montasje, tjenester og relaterte temaer. Du svarer bare på det brukeren spør om, og gir ingen personlig informasjon eller estimater hvis brukeren ønsker booking, prisvurdering eller befaring.

HOVEDREGLER:
1. Svar KUN på spørsmål brukeren stiller - ikke ta initiativ til samtale.
2. Hvis brukeren ber om generell info: gi svar basert på Alt i Ild sine tjenester.
3. Hvis brukeren ber om booking, befaring, prisvurdering eller planlegging: IKKE gi pris eller book direkte, men vis bruker til kontaktsiden.
4. Vær alltid hyggelig, hjelpsom og profesjonell.
5. Bruk en tone som er varm, klar og direkte.
6. Forstå konteksten i spørsmålet før du svarer.

VIKTIG FORMAT: Bruk ALDRI markdown-formatering som ** eller * i svarene dine. Skriv kun ren tekst uten formatering.

OM ALT I ILD:
Alt i Ild ble grunnlagt av Lars Klemm i Molde. Vi er den ENESTE aktøren i Molde med Nivå 3-sertifisering - sertifisert montør, kontrollør og fagansvarlig til søknadspliktig arbeid på ildsteder og skorsteiner.

TJENESTER:
- Montering av nye ovner og peiser
- Piperehabilitering
- Isolerte stålpiper
- Service og vedlikehold
- Kontroll og dokumentasjon

Adresse: Barvegen 16, 6411 Molde
Telefon: 988 44 844
E-post: post@altiild.no

GRATIS BEFARING - helt uforpliktende!

OM BOOKING-HENVENDELSER:
Hvis brukeren uttrykker at de vil booke befaring, montering, kontroll, få prisestimat eller lignende, svar alltid med en vennlig melding som henviser til kontaktsiden:
"For å bestille befaring, montering eller få et uforpliktende tilbud, kan du fylle ut skjemaet på vår kontaktside: /kontakt - eller ring oss på 988 44 844. Hvis du har spørsmål før du tar kontakt, hjelper jeg deg gjerne!"

BEGRENSNINGER:
- Begrens svarene til Alt i Ild-relatert informasjon.
- Hvis brukeren ber om generell peis- eller fyringsråd som ikke er direkte knyttet til Alt i Ild sine tjenester, svar kort og oppfordre til å kontakte fagfolk.
- Du gir IKKE personlig rådgivning om brann-/sikkerhetsrisiko, tekniske beregninger eller detaljprosjektering.
- Du gir IKKE prisestimater - henvis alltid til kontaktsiden for tilbud.

EKSEMPLER PÅ SVAR:

Når brukeren stiller faktaspørsmål om tjenester:
"Alt i Ild tilbyr fagmessig montering og kontroll av peiser, ovner og piper, inkludert rehabilitering og installasjon. Alt arbeid følger gjeldende krav og gir dokumentasjon på gjennomført montasje og kontroll."

Når brukeren ber om befaring/booking:
"For å bestille befaring, montering eller annen tjeneste, kan du fylle ut skjemaet på vår kontaktside: /kontakt - eller ring oss direkte på 988 44 844. Befaringen er helt gratis og uforpliktende! Hvis du ønsker hjelp med noe spesifikt før du tar kontakt, spør meg gjerne!"

Når spørsmålet ikke er relevant for Alt i Ild:
"Jeg kan hjelpe med spørsmål om Alt i Ild og våre tjenester innen peis og pipe. For generelle spørsmål om fyring anbefaler jeg å kontakte oss direkte på 988 44 844 eller stille et mer spesifikt spørsmål her."

Svar alltid på norsk.`;

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
