import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Generelt",
    questions: [
      {
        q: "Hvilket geografisk område dekker dere?",
        a: "Vi betjener kunder i hele Møre og Romsdal, fra Kristiansund i nord til Volda i sør. Ta kontakt for å sjekke om vi kan hjelpe deg i ditt område.",
      },
      {
        q: "Hvor lang tid tar en typisk installasjon?",
        a: "En standard ovnsinstallasjon tar vanligvis 1-2 arbeidsdager. Peisinstallasjoner kan ta 2-5 dager avhengig av kompleksitet. Vi gir alltid et estimat før vi starter.",
      },
      {
        q: "Tilbyr dere gratis befaring?",
        a: "Ja! Vi tilbyr alltid gratis og uforpliktende befaring. Vi kommer hjem til deg, vurderer mulighetene og gir et detaljert tilbud.",
      },
    ],
  },
  {
    title: "Sikkerhet",
    questions: [
      {
        q: "Er installasjonene godkjent av lokale brannmyndigheter?",
        a: "Absolutt. Alle våre installasjoner utføres i henhold til gjeldende forskrifter og TEK-krav. Vi leverer nødvendig dokumentasjon og bistår ved eventuelle kontroller.",
      },
      {
        q: "Hvor ofte bør peis/ovn kontrolleres?",
        a: "Vi anbefaler årlig service og kontroll for optimal sikkerhet og ytelse. Pipen bør feies av lokal feiermester i henhold til kommunens rutiner.",
      },
      {
        q: "Hvilke sikkerhetskrav gjelder for underlag og avstand til brennbare materialer?",
        a: "Kravene varierer avhengig av produkttype. Generelt kreves et ikke-brennbart underlag (gulvplate) og tilstrekkelig avstand til vegger. Vi sørger alltid for at installasjonen oppfyller alle krav.",
      },
    ],
  },
  {
    title: "Vedlikehold",
    questions: [
      {
        q: "Hvordan vedlikeholder jeg peisen/ovnen min?",
        a: "Regelmessig rengjøring av glass, fjerning av aske, og kontroll av pakninger er viktig. Vi gir deg en komplett brukerveiledning ved installasjon og tilbyr også servicekontrakter.",
      },
      {
        q: "Hva gjør jeg hvis glasset blir svart?",
        a: "Svart glass skyldes ofte feil forbrenning – typisk for lite trekk eller for fuktig ved. Rengjør med spesialmiddel og sørg for tørr ved (under 20% fuktighet) og god lufttilførsel.",
      },
      {
        q: "Når bør jeg bytte pakninger?",
        a: "Pakninger bør byttes når de blir harde eller sprø, vanligvis hvert 3-5 år. Sjekk tetning ved å klemme et papir i døren – drar du det lett ut, er det tid for nye pakninger.",
      },
    ],
  },
  {
    title: "Pris og betaling",
    questions: [
      {
        q: "Hva koster en peisinstallasjon?",
        a: "Prisen varierer mye basert på type peis, tilpasninger og arbeidets omfang. En enkel ovnsinstallasjon starter fra ca. 15.000 kr inkl. arbeid. Kontakt oss for et uforpliktende tilbud.",
      },
      {
        q: "Tilbyr dere finansiering?",
        a: "Ja, vi samarbeider med finansieringspartnere som tilbyr fleksible betalingsløsninger. Spør oss om mulighetene når du mottar tilbud.",
      },
      {
        q: "Hvilke garantier gir dere?",
        a: "Vi gir full garanti på vårt arbeid. I tillegg har produktene vi leverer produsentgaranti, typisk 2-5 år avhengig av merke og modell.",
      },
    ],
  },
  {
    title: "Leveringstid",
    questions: [
      {
        q: "Hvor lang leveringstid har dere?",
        a: "Leveringstiden avhenger av produkt og tilgjengelighet. Lagerovner kan ofte leveres innen 1-2 uker, mens spesialbestillinger kan ta 4-8 uker. Vi holder deg oppdatert underveis.",
      },
      {
        q: "Kan dere prioritere hasteoppdrag?",
        a: "I spesielle tilfeller kan vi prioritere hasteoppdrag, men dette avhenger av kapasitet. Ta kontakt så finner vi en løsning.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              FAQ
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              Vanlige spørsmål
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Finn svar på de vanligste spørsmålene om våre tjenester, sikkerhet, 
              vedlikehold og priser. Finner du ikke det du leter etter? Kontakt oss!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.title} className="mb-12">
                <h2 className="font-display text-2xl font-semibold mb-6 text-primary">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.title}-${index}`}
                      className="bg-card rounded-xl px-6 border-none"
                    >
                      <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Har du flere spørsmål?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Vi svarer gjerne på alle dine spørsmål. Ta kontakt med oss!
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/kontakt">
              Kontakt oss
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
