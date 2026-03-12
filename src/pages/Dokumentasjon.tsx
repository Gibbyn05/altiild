import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { 
  ArrowRight,
  CheckCircle,
  FileCheck,
  Shield,
  ClipboardCheck,
  Building,
  Home,
  AlertTriangle
} from "lucide-react";

import dokumentasjonHero from "@/assets/dokumentasjon-hero.png";

const documentationSteps = [
  {
    icon: ClipboardCheck,
    title: "Søknad til kommunen",
    description: "Montering av ildsted og pipe er søknadspliktig. Vi håndterer hele søknadsprosessen for deg.",
  },
  {
    icon: FileCheck,
    title: "Dokumentasjon underveis",
    description: "Alt arbeid dokumenteres med bilder og beskrivelser underveis i prosessen.",
  },
  {
    icon: Shield,
    title: "Ferdigmelding til brannvesen",
    description: "Når jobben er ferdig, sender vi ferdigmelding til lokalt brannvesen/kommune og deg for godkjenning.",
  },
];

const whyImportant = [
  "Sikkerheten i boligen",
  "Godkjenning hos myndighetene",
  "Verdien av huset ditt",
];

const duringWork = [
  "Bilder av alle arbeidssteg",
  "Målinger (avstand til brennbart, pipedimensjoner)",
  "Materialvalg (stålrør, keramiske rør, isolasjon osv.)",
  "Kontrollpunkter (tetthet, brannsikring, røykrør-overganger)",
];

const whatWeDo = [
  "Vi utarbeider ferdigmelding",
  "Vi sender all dokumentasjon til kommune og brannvesen",
  "Vi legger ved bilder, målinger og rapport",
  "Vi sørger for at installasjonen blir godkjent",
  "Du får en komplett dokumentpakke klar for boligmappen",
];

const Dokumentasjon = () => {
  return (
    <Layout>
      <SEO 
        title="Dokumentasjon | Trygg og godkjent installasjon | Alt i Ild"
        description="Alt i Ild håndterer all dokumentasjon for ildsted og skorstein. Kommunesøknad, ferdigmelding til brannvesen og Boligmappa. Gratis befaring i Molde og Møre og Romsdal."
        canonical="/dokumentasjon"
        keywords="dokumentasjon ildsted, ferdigmelding brannvesen, søknadspliktig peis, Boligmappa, godkjent installasjon"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dokumentasjonHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Dokumentasjon
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              Hvorfor dokumentasjon er viktig
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Dokumentasjon er en av de viktigste delene av arbeidet på pipe og ildsted - både for sikkerheten i boligen, for godkjenning hos myndighetene og for verdien av huset ditt.
            </p>
          </div>
        </div>
      </section>

      {/* Why Documentation Matters */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Viktig å vite
              </p>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Dokumentasjon under arbeidet
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Vi dokumenterer hele arbeidsprosessen nøye, slik at både du, kommunen og brannvesenet får et klart bilde av hva som er gjort. Det gir trygghet og viser at alt er utført fagmessig i henhold til TEK17 og brannforskrifter.
              </p>
              
              <p className="font-medium mb-3">Under prosessen registrerer vi:</p>
              <ul className="space-y-3 mb-6">
                {duringWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground">
                Dette gir en fullstendig og profesjonell dokumentasjonslinje, noe som gjør godkjenning hos kommunen langt enklere og raskere.
              </p>
            </div>
            <div>
              <img
                src={dokumentasjonHero}
                alt="Dokumentert pipeinstallasjon"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Process */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Vår prosess
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Slik dokumenterer vi arbeidet
            </h2>
            <p className="text-muted-foreground text-lg">
              En strukturert prosess som sikrer at alt er på plass.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {documentationSteps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <div className="bg-background rounded-2xl p-6 text-center hover-lift w-full md:w-auto md:min-w-[280px]">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < documentationSteps.length - 1 && (
                  <ArrowRight className="hidden md:block h-8 w-8 text-primary mx-4 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Document */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <FileCheck className="h-8 w-8 text-primary" />
                  <h3 className="font-display text-xl font-semibold">Ferdigmelding & dokumentpakke</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Når arbeidet er ferdig, tar vi oss av alt som gjelder ferdigmelding og godkjenning. Du skal ikke fylle ut skjemaer, kontakte kommunen eller sende inn dokumenter - det gjør vi.
                </p>
                <p className="font-medium mb-3">Dette gjør vi for deg:</p>
                <ul className="space-y-4">
                  {whatWeDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 text-sm">
                  Du mottar en ferdig PDF med all nødvendig informasjon - trygg, oversiktlig og klar til bruk når du trenger den.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Komplett pakke
              </p>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Hva dokumenterer vi?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Ved hver installasjon leverer vi en komplett dokumentasjonspakke. 
                Alt lastes opp til Boligmappa og overleveres til deg.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Dokumentasjonen sikrer at du som huseier har full oversikt over 
                installasjonen – noe som er verdifullt både for egen trygghet og ved 
                eventuelt salg av boligen.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/kontakt">
                  Bestill gratis befaring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${dokumentasjonHero})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
            Trygg og dokumentert installasjon
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto">
            Kontakt oss for en gratis befaring. Vi tar oss av alt – inkludert dokumentasjon.
          </p>
          <Button variant="hero" size="xl" className="animate-gentle-pulse" asChild>
            <Link to="/kontakt">
              Bestill gratis befaring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Dokumentasjon;
