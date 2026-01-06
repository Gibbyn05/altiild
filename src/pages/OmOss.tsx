import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Shield, Award, Heart, Users, MapPin, CheckCircle, ClipboardCheck, Wrench, FileCheck, Eye } from "lucide-react";

import larsKlemmImage from "@/assets/lars-klemm.jpg";
import hvitOvn from "@/assets/hvit-ovn.jpg";
import omOssHero from "@/assets/om-oss-hero.png";
import teamImage from "@/assets/team.jpg";

const values = [
  {
    icon: Shield,
    title: "Trygghet",
    description: "Alt utføres i henhold til gjeldende krav og forskrifter.",
  },
  {
    icon: Award,
    title: "Kvalitet",
    description: "Nøyaktig håndverk og teknisk riktige løsninger.",
  },
  {
    icon: Users,
    title: "Ryddighet",
    description: "Vi jobber effektivt og rent – både inne og ute.",
  },
  {
    icon: MapPin,
    title: "Lokal tilstedeværelse",
    description: "Vi kjenner Molde og Møre og Romsdal.",
  },
  {
    icon: Heart,
    title: "Ærlighet",
    description: "Vi anbefaler kun løsninger som faktisk passer din bolig.",
  },
];

const workProcess = [
  { 
    icon: Eye, 
    step: "01", 
    title: "Før-befaring & kartlegging", 
    desc: "Vi undersøker pipe, ildsted, lufttilførsel og byggets forhold. Ved piperehabilitering vurderer vi sprekkdannelser, tetthet, trekkproblemer og brannrisiko." 
  },
  { 
    icon: ClipboardCheck, 
    step: "02", 
    title: "Gjennomgang av løsning med kunde", 
    desc: "Vi forklarer hva som trengs og hvorfor – i klart språk. Du får forslag til riktige materialer, metoder og eventuelle alternativer." 
  },
  { 
    icon: Wrench, 
    step: "03", 
    title: "Fagmessig og trygg utførelse", 
    desc: "Alt arbeid utføres av sertifiserte fagfolk, uansett om det gjelder montering av vedovn eller peisovn, piperehabilitering, stålpipemontering eller bytte av røykrør." 
  },
  { 
    icon: FileCheck, 
    step: "04", 
    title: "Dokumentasjon underveis", 
    desc: "Vi tar bilder, målinger og registrerer alle kontrollpunkter. Dette sikrer sporbarhet og enkel godkjenning." 
  },
  { 
    icon: Shield, 
    step: "05", 
    title: "Sluttkontroll & ferdigmelding", 
    desc: "Når arbeidet er ferdig, gjennomfører vi sluttkontroll og sender ferdigmelding til kommune og brannvesen." 
  },
];

const expertise = [
  "Piperehabilitering og rehabilitering av teglsteinskorsteiner",
  "Montering av ildsted (vedovn, peisovn, innsats)",
  "Installasjon av isolert stålpipe og komplette skorsteinsløsninger",
  "Inspeksjon, vurdering og feilsøking på skorsteiner og røykrør",
  "Problemløsning ved dårlig trekk eller feil lufttilførsel",
  "Håndtering av avvik fra brannvesenet",
  "Optimalisering av forbrenning og varmeeffekt",
];

const specialCompetence = [
  "Exodraft røyksugere og tekniske trekkforbedringer",
  "Materialvalg for piperehabilitering (stålrør i pipe, keramiske rør, osv.)",
  "Dokumentasjon i henhold til brannforskrifter og TEK17",
];

const certifications = [
  "Montering av ildsted",
  "Skorsteinsarbeid",
  "Piperehabilitering",
  "Dokumentasjon til kommune, brannvesen og boligmappen",
];

const OmOss = () => {
  return (
    <Layout>
      <SEO 
        title="Om oss | Alt i Ild - Lokal fagbedrift i Molde"
        description="Alt i Ild AS er en lokal fagbedrift i Molde, spesialisert på piperehabilitering, ildstedsmontering, stålpiper og inspeksjon. Sertifiserte montører med mange års erfaring."
        keywords="Alt i Ild, peis ekspert Molde, ovn spesialist Møre og Romsdal, sertifisert peismontør, Lars Klemm, piperehabilitering"
        canonical="/om-oss"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Alt i Ild",
            "founder": {"@type": "Person", "name": "Lars Klemm"},
            "description": "Sertifisert montør, kontrollør og fagansvarlig til søknadspliktig arbeid på ildsteder og skorsteiner.",
            "areaServed": "Møre og Romsdal"
          }
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${omOssHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Om Alt i Ild
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              Hvem vi er – erfaring, fagkompetanse & sertifiseringer
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Alt i Ild AS er en lokal fagbedrift i Molde, spesialisert på ildsted, skorstein og piperehabilitering i hele Møre og Romsdal.
            </p>
          </div>
        </div>
      </section>

      {/* 2.1 Hvem vi er */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Erfaring og fagkompetanse
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Vi leverer ikke bare produkter – vi leverer løsninger som er trygge, dokumenterte og teknisk riktige for både nye og eldre boliger.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Vår bakgrunn består av mange års erfaring innen:
              </p>
              <ul className="space-y-3 mb-8">
                {expertise.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={larsKlemmImage}
                alt="Lars Klemm - grunnlegger av Alt i Ild"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spesialkompetanse og sertifiseringer */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-background rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Spesialkompetanse
              </h3>
              <p className="text-muted-foreground mb-4">
                Vi har spesialkompetanse innen:
              </p>
              <ul className="space-y-3">
                {specialCompetence.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Sertifiseringer & godkjenninger
              </h3>
              <p className="text-muted-foreground mb-4">
                Vårt arbeid utføres av sertifiserte montører, med nødvendig godkjenning for:
              </p>
              <ul className="space-y-3">
                {certifications.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 text-sm">
                Vi legger stor vekt på faglig kvalitet og kontinuerlig utvikling – slik at du som kunde alltid får en løsning som er både trygg og fremtidsrettet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 Våre verdier */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Våre verdier
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Vårt arbeid bygger på fem kjerneverdier
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-muted rounded-2xl p-8 text-center hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground">
              Vi er ikke butikk. Vi er fagfolk som gir ærlige råd basert på boligens behov – ikke hva som står på lager.
            </p>
          </div>
        </div>
      </section>

      {/* 2.2 Arbeidsmetode */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Slik jobber vi
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Vår arbeidsmetode
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workProcess.map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="text-primary font-bold text-sm mb-2">{item.step}</div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.3 Lokal forankring */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={teamImage}
                alt="Alt i Ild i Molde"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Lokal forankring
              </p>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Molde & Møre og Romsdal
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Alt i Ild AS er lokalt forankret i Molde, og vi kjenner forholdene i Møre og Romsdal – både når det gjelder klima, byggetradisjoner og kommunale krav. Dette gjør oss ekstra godt rustet til å levere løsninger som:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Gir optimalt trekk i kystklima",
                  "Følger lokale forskrifter og praksis hos feiervesenet",
                  "Tar hensyn til eldre murverk og tradisjonelle teglsteinsskorsteiner",
                  "Sikrer korrekt godkjenning ved kommunal søknadsplikt",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Vi samarbeider med lokale aktører, og vi er vant til å jobbe i:
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Molde", "Hustadvika", "Aukra", "Midsund", "Rauma"].map((area) => (
                  <span 
                    key={area}
                    className="px-4 py-2 bg-muted rounded-full text-sm text-foreground border border-border"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                For deg betyr dette rask respons, gode vurderinger og en leverandør som kjenner lokale forhold og myndighetskrav.
              </p>
              <Button variant="default" size="lg" className="animate-gentle-pulse" asChild>
                <Link to="/kontakt">
                  Bestill gratis befaring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OmOss;
