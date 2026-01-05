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

import installationImage from "@/assets/installation-work.jpg";
import pipeTak from "@/assets/pipe-tak.jpg";

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
    description: "Når jobben er ferdig, sender vi ferdigmelding til lokalt brannvesen for godkjenning.",
  },
  {
    icon: Home,
    title: "Boligmappa",
    description: "All dokumentasjon lastes opp til din Boligmappa for trygg oppbevaring.",
  },
];

const whyImportant = [
  "Installasjon uten dokumentasjon kan gi problemer ved salg av bolig",
  "Brannvesenet kan pålegge utbedring eller fyringsforbud",
  "Forsikringsselskapet kan avvise krav ved skade",
  "Feil montering kan føre til brann eller helseskadelig røyk",
];

const whatWeDocument = [
  "Komplett søknad til kommunen",
  "Produktdokumentasjon og sertifikater",
  "Bilder fra montering og ferdig resultat",
  "Kontrollerklæring fra sertifisert montør",
  "Ferdigmelding til brannvesenet",
  "Garantidokumenter",
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
          style={{ backgroundImage: `url(${installationImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Dokumentasjon
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              Trygghet gjennom dokumentasjon
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Vi håndterer ALT av dokumentasjon og myndighetskrav – fra søknad til ferdig godkjent installasjon.
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
                Hvorfor er dokumentasjon viktig?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Montering av ildsted og skorstein er søknadspliktig arbeid. Riktig dokumentasjon 
                beskytter deg som huseier og sikrer at installasjonen er trygg.
              </p>
              
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Uten dokumentasjon risikerer du:</h3>
                    <ul className="space-y-2">
                      {whyImportant.map((item) => (
                        <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-destructive">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-foreground font-medium">
                Med Alt i Ild får du alltid komplett dokumentasjon – inkludert i prisen.
              </p>
            </div>
            <div>
              <img
                src={pipeTak}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentationSteps.map((step, index) => (
              <div key={step.title} className="bg-background rounded-2xl p-6 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-4">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="text-primary font-bold text-sm mb-2">0{index + 1}</div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
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
                  <h3 className="font-display text-xl font-semibold">Dokumentasjonspakke</h3>
                </div>
                <ul className="space-y-4">
                  {whatWeDocument.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Boligmappa Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-4xl font-semibold mb-6">
              Boligmappa
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Boligmappa er Norges digitale plattform for boligdokumentasjon. 
              All dokumentasjon fra Alt i Ild lastes automatisk opp til din Boligmappa, 
              slik at du alltid har tilgang til viktig informasjon om boligen din.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Sikker oppbevaring", "Alltid tilgjengelig", "Verdifullt ved salg", "Enkel oversikt"].map((item) => (
                <span 
                  key={item}
                  className="px-4 py-2 bg-background rounded-full text-sm text-foreground border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${installationImage})` }}
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
