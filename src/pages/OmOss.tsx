import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Shield, Award, Heart, Users, MapPin, CheckCircle, ClipboardCheck, Wrench, FileCheck, Eye } from "lucide-react";
import larsKlemmImage from "@/assets/lars-klemm.jpg";
import hvitOvn from "@/assets/hvit-ovn.jpg";
import omOssHero from "@/assets/om-oss-hero.png";
import teamImage from "@/assets/team.jpg";
import galleryPipeFjord from "@/assets/gallery-pipe-fjord.jpg";
const values = [{
  icon: Shield,
  title: "Trygghet",
  description: "Alt utføres i henhold til gjeldende krav og forskrifter."
}, {
  icon: Award,
  title: "Kvalitet",
  description: "Nøyaktig håndverk og teknisk riktige løsninger."
}, {
  icon: Users,
  title: "Ryddighet",
  description: "Vi jobber effektivt og rent - både inne og ute."
}, {
  icon: MapPin,
  title: "Lokal tilstedeværelse",
  description: "Vi kjenner Molde og Møre og Romsdal."
}, {
  icon: Heart,
  title: "Ærlighet",
  description: "Vi anbefaler kun løsninger som faktisk passer din bolig."
}];
const workProcess = [{
  icon: Eye,
  step: "01",
  title: "Før-befaring & kartlegging",
  desc: "Vi undersøker pipe, ildsted, lufttilførsel og byggets forhold. Ved piperehabilitering vurderer vi sprekkdannelser, tetthet, trekkproblemer og brannrisiko."
}, {
  icon: ClipboardCheck,
  step: "02",
  title: "Gjennomgang av løsning med kunde",
  desc: "Vi forklarer hva som trengs og hvorfor - i klart språk. Du får forslag til riktige materialer, metoder og eventuelle alternativer."
}, {
  icon: Wrench,
  step: "03",
  title: "Fagmessig og trygg utførelse",
  desc: "Alt arbeid utføres av sertifiserte fagfolk, uansett om det gjelder montering av vedovn eller peisovn, piperehabilitering, stålpipemontering eller bytte av røykrør."
}, {
  icon: FileCheck,
  step: "04",
  title: "Dokumentasjon underveis",
  desc: "Vi tar bilder, målinger og registrerer alle kontrollpunkter. Dette sikrer sporbarhet og enkel godkjenning."
}, {
  icon: Shield,
  step: "05",
  title: "Sluttkontroll & ferdigmelding",
  desc: "Når arbeidet er ferdig, gjennomfører vi sluttkontroll og sender ferdigmelding til kommune og brannvesen."
}];
const expertise = ["Piperehabilitering og rehabilitering av teglsteinskorsteiner", "Montering av ildsted (vedovn, peisovn, innsats)", "Installasjon av isolert stålpipe og komplette skorsteinsløsninger", "Inspeksjon, vurdering og feilsøking på skorsteiner og røykrør", "Problemløsning ved dårlig trekk eller feil lufttilførsel", "Håndtering av avvik fra brannvesenet", "Optimalisering av forbrenning og varmeeffekt"];
const specialCompetence = ["Exodraft røyksugere og tekniske trekkforbedringer", "Materialvalg for piperehabilitering (stålrør i pipe, keramiske rør, osv.)", "Dokumentasjon i henhold til brannforskrifter og TEK17"];

// En sjette "verdi" for å fylle gridet symmetrisk
const valuesWithSixth = [...values, {
  icon: Award,
  title: "Faglig utvikling",
  description: "Vi holder oss oppdatert på nye krav og løsninger."
}];
const certifications = ["Montering av ildsted", "Skorsteinsarbeid", "Piperehabilitering", "Dokumentasjon til kommune, brannvesen og boligmappen"];
const OmOss = () => {
  return <Layout>
      <SEO title="Om oss | Alt i Ild - Lokal fagbedrift i Molde" description="Alt i Ild AS er en lokal fagbedrift i Molde, spesialisert på piperehabilitering, ildstedsmontering, stålpiper og inspeksjon. Sertifiserte montører med mange års erfaring." keywords="Alt i Ild, peis ekspert Molde, ovn spesialist Møre og Romsdal, sertifisert peismontør, Lars Klemm, piperehabilitering" canonical="/om-oss" jsonLd={{
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Alt i Ild",
        "founder": {
          "@type": "Person",
          "name": "Lars Klemm"
        },
        "description": "Sertifisert montør, kontrollør og fagansvarlig til søknadspliktig arbeid på ildsteder og skorsteiner.",
        "areaServed": "Møre og Romsdal"
      }
    }} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${omOssHero})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50 md:from-charcoal/90 md:via-charcoal/70 md:to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              Om Alt i Ild
            </p>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 md:mb-6 text-primary-foreground">
              Hvem vi er - erfaring, fagkompetanse & sertifiseringer
            </h1>
            <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed">
              Alt i Ild AS er en lokal fagbedrift i Molde, spesialisert på ildsted, skorstein og piperehabilitering i hele Møre og Romsdal.
            </p>
          </div>
        </div>
      </section>

      {/* 2.1 Hvem vi er */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="lg:my-[125px]">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                Erfaring og fagkompetanse
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Vi leverer ikke bare produkter - vi leverer løsninger som er trygge, dokumenterte og teknisk riktige for både nye og eldre boliger.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Vår bakgrunn består av mange års erfaring innen:
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {expertise.map(item => <li key={item} className="flex items-start gap-2 md:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="relative order-first lg:order-last">
              <img src={larsKlemmImage} alt="Lars Klemm - grunnlegger av Alt i Ild" className="rounded-xl md:rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Spesialkompetanse og sertifiseringer */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-background rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Fagkompetanse
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                Vi har spesialkompetanse innen:
              </p>
              <ul className="space-y-2 md:space-y-3">
                {specialCompetence.map(item => <li key={item} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="bg-background rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Sertifiseringer & godkjenninger
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                Vårt arbeid utføres av sertifiserte montører, med nødvendig godkjenning for:
              </p>
              <ul className="space-y-2 md:space-y-3">
                {certifications.map(item => <li key={item} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
              <p className="text-muted-foreground mt-4 md:mt-6 text-xs md:text-sm">
                Vi legger stor vekt på faglig kvalitet og kontinuerlig utvikling - slik at du som kunde alltid får en løsning som er både trygg og fremtidsrettet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 Våre verdier */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              Våre verdier
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
              Vårt arbeid bygger på fem kjerneverdier
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {valuesWithSixth.map(value => <div key={value.title} className="bg-muted rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 mb-3 md:mb-4 lg:mb-6">
                  <value.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <h3 className="font-display text-sm md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {value.description}
                </p>
              </div>)}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base lg:text-lg text-foreground">
              Vi er ikke butikk. Vi er fagfolk som gir ærlige råd basert på boligens behov - ikke hva som står på lager.
            </p>
          </div>
        </div>
      </section>

      {/* 2.2 Arbeidsmetode */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              Slik jobber vi
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
              Vår arbeidsmetode
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {workProcess.map((item, index) => <div key={item.step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-primary text-primary-foreground mb-2 md:mb-3 lg:mb-4">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7" />
                </div>
                <div className="text-primary font-bold text-[10px] md:text-xs lg:text-sm mb-1 md:mb-2">{item.step}</div>
                <h3 className="font-display text-xs md:text-sm lg:text-lg font-semibold mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-[10px] md:text-xs lg:text-sm hidden sm:block">
                  {item.desc}
                </p>
                {index < workProcess.length - 1 && <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-primary/20" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* 2.3 Lokal forankring */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src={galleryPipeFjord} alt="Utsikt over Molde og fjorden" className="rounded-xl md:rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
                Lokal forankring
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                Molde & Møre og Romsdal
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Alt i Ild AS er lokalt forankret i Molde, og vi kjenner forholdene i Møre og Romsdal - både når det gjelder klima, byggetradisjoner og kommunale krav. Dette gjør oss ekstra godt rustet til å levere løsninger som:
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {["Gir optimalt trekk i kystklima", "Følger lokale forskrifter og praksis hos feiervesenet", "Tar hensyn til eldre murverk og tradisjonelle teglsteinsskorsteiner", "Sikrer korrekt godkjenning ved kommunal søknadsplikt"].map(item => <li key={item} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Vi samarbeider med lokale aktører, og vi er vant til å jobbe i:
              </p>
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {["Molde", "Hustadvika", "Aukra", "Midsund", "Rauma"].map(area => <span key={area} className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-full text-xs md:text-sm text-foreground border border-border">
                    {area}
                  </span>)}
              </div>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-8">
                For deg betyr dette rask respons, gode vurderinger og en leverandør som kjenner lokale forhold og myndighetskrav.
              </p>
              <Button variant="default" size="lg" className="animate-gentle-pulse text-sm md:text-base" asChild>
                <Link to="/kontakt">
                  Bestill gratis befaring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default OmOss;