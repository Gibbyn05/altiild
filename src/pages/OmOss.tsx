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
    description: "Din sikkerhet er vår førsteprioritet. Alt arbeid utføres etter gjeldende forskrifter.",
  },
  {
    icon: Award,
    title: "Kvalitet",
    description: "Vi bruker kun materialer og produkter av høyeste kvalitet, og utfører alt arbeid etter bransjestandard.",
  },
  {
    icon: Users,
    title: "Ryddighet",
    description: "Vi holder orden på arbeidsplassen og etterlater alt i bedre stand enn vi fant det.",
  },
  {
    icon: MapPin,
    title: "Lokal tilstedeværelse",
    description: "Med base i Molde er vi alltid i nærheten og kjenner de lokale forholdene.",
  },
  {
    icon: Heart,
    title: "Ærlig rådgivning",
    description: "Vi gir deg alltid ærlige råd – også når det betyr å fraråde unødvendige løsninger.",
  },
];

const workProcess = [
  { icon: Eye, step: "01", title: "Befaring", desc: "Vi kommer hjem til deg for å vurdere muligheter og gi faglige råd." },
  { icon: ClipboardCheck, step: "02", title: "Gjennomgang", desc: "Vi presenterer løsningen og går gjennom alle detaljer med deg." },
  { icon: Wrench, step: "03", title: "Utførelse", desc: "Fagmessig installasjon av sertifiserte montører." },
  { icon: FileCheck, step: "04", title: "Dokumentasjon", desc: "Alt dokumenteres underveis for full sporbarhet." },
  { icon: Shield, step: "05", title: "Sluttkontroll", desc: "Ferdigmelding og godkjent installasjon fra brannvesenet." },
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
              Hvem vi er
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Alt i Ild AS er en lokal fagbedrift i Molde, spesialisert på ildsted og skorstein. 
              Vi tilbyr piperehabilitering, ildstedsmontering, stålpiper, inspeksjon og problemløsning ved dårlig trekk.
            </p>
          </div>
        </div>
      </section>

      {/* 2.1 Hvem vi er */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Fagbedrift med komplett tilbud
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Alt i Ild AS ble grunnlagt av Lars Klemm, sertifisert montør, kontrollør 
                og fagansvarlig til søknadspliktig arbeid på ildsteder og skorsteiner.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Vi tilbyr komplette løsninger innen:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Piperehabilitering og utbedring",
                  "Ildstedsmontering og utskifting",
                  "Stålpiper til nybygg og hytter",
                  "Inspeksjon og vurdering",
                  "Problemløsning ved dårlig trekk",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Alt arbeid dokumenteres og ferdigmeldes etter gjeldende krav. Du får en trygg, 
                godkjent installasjon.
              </p>
              <p className="text-primary font-semibold text-lg">
                Gratis befaring, helt uforpliktende!
              </p>
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

      {/* 2.2 Våre verdier */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Våre verdier
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Det vi står for
            </h2>
            <p className="text-muted-foreground text-lg">
              Disse verdiene ligger til grunn for alt vi gjør.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background rounded-2xl p-8 text-center hover-lift"
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
        </div>
      </section>

      {/* 2.2 Arbeidsmetode */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Slik jobber vi
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Vår arbeidsmetode
            </h2>
            <p className="text-muted-foreground text-lg">
              En strukturert prosess som sikrer kvalitet og trygghet.
            </p>
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
      <section className="section-padding bg-muted">
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
                Med base i Molde betjener vi kunder i hele Møre og Romsdal. Vi har god kjennskap 
                til feiervesenet og lokale krav i regionen.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Vår lokalkunnskap gjør at vi raskt kan vurdere muligheter og gi deg en løsning 
                som passer til klimaet og forholdene i området.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Molde", "Aukra", "Hustadvika", "Midsund", "Rauma", "Sunndal", "Averøy", "Kristiansund"].map((area) => (
                  <span 
                    key={area}
                    className="px-4 py-2 bg-background rounded-full text-sm text-foreground border border-border"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <Button variant="default" size="lg" className="animate-gentle-pulse" asChild>
                <Link to="/kontakt">
                  Kontakt oss
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Hvorfor velge oss?
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Sertifisert montør og kontrollør",
                  "Kvalifisert for søknadspliktig arbeid",
                  "Gratis befaring og uforpliktende tilbud",
                  "Full garanti på arbeid og produkter",
                  "Service og vedlikehold etter installasjon",
                  "Eksperter på dårlig trekk og Exodraft røyksugere",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="lg" className="animate-gentle-pulse" asChild>
                <Link to="/kontakt">
                  Bestill gratis befaring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-2 lg:order-1">
              <img
                src={hvitOvn}
                alt="Hvit peis installert av Alt i Ild"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OmOss;
