import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { 
  Flame, 
  Shield, 
  Wrench,
  ArrowRight,
  CheckCircle,
  Construction
} from "lucide-react";

import installationImage from "@/assets/installation-work.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";

// Real business images
import funkisOvn from "@/assets/funkis-ovn.jpg";
import pipeTak from "@/assets/pipe-tak.jpg";
import tjenesterPeis from "@/assets/tjenester-peis.png";

const services = [
  {
    icon: Flame,
    title: "Montering og utskifting av peis og vedovn",
    description: "Vi monterer nye ildsteder og bytter ut gamle løsninger på en trygg og forskriftsmessig måte, tilpasset boligen og eksisterende pipe.",
    features: [
      "Montering av nye peiser og vedovner",
      "Utskifting av gamle ildsteder",
      "Tilpasning til eksisterende pipeløp",
      "Trygg og forskriftsmessig utførelse",
    ],
  },
  {
    icon: Construction,
    title: "Kontroll, rehabilitering og tilpasning av pipe",
    description: "Vi kontrollerer pipen før montering og utfører nødvendige utbedringer slik at ildstedet fungerer trygt og blir godkjent etter gjeldende krav.",
    features: [
      "Grundig kontroll av pipe før montering",
      "Rehabilitering og utbedring av skader",
      "Tilpasning til moderne krav",
      "Sikker og godkjent løsning",
    ],
  },
  {
    icon: Shield,
    title: "Sertifisert utførelse og ferdig godkjent installasjon",
    description: "Alt arbeid utføres av sertifiserte fagfolk, inkludert nødvendig dokumentasjon og ferdigmelding, slik at du slipper usikkerhet og ekstra oppfølging.",
    features: [
      "Sertifiserte fagfolk",
      "Komplett dokumentasjon",
      "Ferdigmelding til kommunen",
      "Ingen ekstra oppfølging nødvendig",
    ],
  },
  {
    icon: Wrench,
    title: "Service og oppfølging",
    description: "Vi er her for deg også etter at jobben er gjort. Trenger du service, vedlikehold eller har spørsmål? Ta kontakt, så hjelper vi deg.",
    features: [
      "Service og vedlikehold",
      "Rask respons ved behov",
      "Rådgivning og support",
      "Langsiktig kundeforhold",
    ],
  },
];

const Tjenester = () => {
  return (
    <Layout>
      <SEO 
        title="Tjenester | Peisinstallasjon, ovnsmontering og vedlikehold | Alt i Ild"
        description="Alt i Ild tilbyr profesjonell peisinstallasjon, ovnsmontering, piperehabilitering og vedlikehold. Gratis befaring i Molde og Møre og Romsdal."
        canonical="/tjenester"
        keywords="peisinstallasjon Molde, ovnsmontering Møre og Romsdal, piperehabilitering, vedlikehold peis, stålpipe, sertifisert montør"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Peis og ovn installasjon",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Alt i Ild",
            "telephone": "+47 988 44 844"
          },
          "areaServed": "Møre og Romsdal",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Våre tjenester",
            "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Montering og utskifting av peis og vedovn"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Kontroll, rehabilitering og tilpasning av pipe"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Sertifisert utførelse og ferdig godkjent installasjon"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Service og oppfølging"}}
            ]
          }
        }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tjenesterPeis})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Tjenester
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              Komplett tilbud for varme og trivsel
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Sertifisert for søknadspliktig arbeid på ildsteder og skorsteiner. 
              Vi håndterer montering, kontroll og rehabilitering, trygt, godkjent og dokumentert.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 md:p-10 hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-semibold mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Slik jobber vi
            </h2>
            <p className="text-muted-foreground text-lg">
              En enkel og trygg prosess fra start til slutt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Kontakt", desc: "Ta kontakt for en uforpliktende prat om dine ønsker og behov." },
              { step: "02", title: "Befaring", desc: "Vi kommer hjem til deg for å vurdere muligheter og gi tilbud." },
              { step: "03", title: "Installasjon", desc: "Våre fagfolk utfører installasjonen profesjonelt og effektivt." },
              { step: "04", title: "Nyt varmen", desc: "Vi viser deg hvordan alt fungerer, og du kan nyte din nye peis." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-display text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${pipeTak})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
            Klar for å komme i gang?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto">
            Kontakt oss i dag for en gratis og uforpliktende befaring.
          </p>
          <Button variant="hero" size="xl" className="animate-gentle-pulse" asChild>
            <Link to="/kontakt">
              Be om gratis befaring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Tjenester;
