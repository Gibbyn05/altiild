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
  Construction,
  Eye,
  Wind,
  Hammer,
  FileCheck
} from "lucide-react";

import pipeTak from "@/assets/pipe-tak.jpg";
import tjenesterPeis from "@/assets/tjenester-peis.png";
import hvitOvn from "@/assets/hvit-ovn.jpg";
import funkisOvn from "@/assets/funkis-ovn.jpg";
import installationImage from "@/assets/installation-work.jpg";

const services = [
  {
    id: "montering",
    icon: Flame,
    title: "Montering av peis og ovn",
    description: "Vi monterer nye peiser og vedovner på en trygg og forskriftsmessig måte, tilpasset boligen og eksisterende pipe.",
    image: hvitOvn,
    features: [
      "Sikker montering etter gjeldende forskrifter",
      "Riktig lufttilførsel for optimal forbrenning",
      "Korrekt røykrør og tilkobling",
      "Ferdigmelding og dokumentasjon inkludert",
    ],
  },
  {
    id: "piperehabilitering",
    icon: Construction,
    title: "Piperehabilitering",
    description: "Har du problemer med pipen? Vi løser utfordringer med dårlig trekk, fyringsforbud og avvik fra brannvesenet.",
    image: pipeTak,
    problems: [
      "Dårlig trekk",
      "Fyringsforbud",
      "Pipe ikke godkjent",
      "Avvik fra brannvesenet",
      "Kondens og lekkasjer",
    ],
  },
  {
    id: "stalpiper",
    icon: Shield,
    title: "Montering av stålpiper",
    description: "Isolerte stålpiper er en fleksibel og sikker løsning for mange boliger og hytter.",
    image: funkisOvn,
    suitableFor: [
      "Nybygg uten murpipe",
      "Eldre boliger med dårlig pipe",
      "Hytter og fritidsboliger",
      "Tilbygg og påbygg",
    ],
  },
  {
    id: "inspeksjon",
    icon: Eye,
    title: "Inspeksjon av pipe og ildsted",
    description: "Opplever du problemer med fyringen? Vi gjennomfører grundig inspeksjon for å avdekke årsaken.",
    image: installationImage,
    symptoms: [
      "Røyk som slår inn i rommet",
      "Sotlukt i boligen",
      "Misfarging rundt ildstedet",
      "Dårlig trekk og treig opptenning",
    ],
  },
  {
    id: "service",
    icon: Wrench,
    title: "Service & vedlikehold",
    description: "Regelmessig service er viktig for sikker og effektiv fyring. Vi hjelper deg med alt vedlikehold.",
    image: tjenesterPeis,
    services: [
      "Pakningsskifte på dører og glass",
      "Bytte av glass",
      "Bytte av vermikulitt/røykfordelerplate",
      "Generelt vedlikehold og sjekk",
    ],
  },
  {
    id: "taksikring",
    icon: Hammer,
    title: "Stige, taksikring & tilkomst",
    description: "Vi sørger for sikker tilkomst til pipe og tak, noe som er påkrevd ved installasjon.",
    image: pipeTak,
    includes: [
      "Montasje av takstige",
      "Taksikringsutstyr",
      "Tilkomst for feiing",
      "Godkjent av brannvesenet",
    ],
  },
  {
    id: "darlig-trekk",
    icon: Wind,
    title: "Dårlig trekk & Exodraft røyksugere",
    description: "Spesialister på løsninger for dårlig trekk. Vi monterer Exodraft røyksugere for optimal forbrenning.",
    image: funkisOvn,
    solutions: [
      "Analyse av trekkproblemer",
      "Exodraft røyksugere",
      "Tilpasning av pipeløp",
      "Optimalisering av lufttilførsel",
    ],
  },
];

const Tjenester = () => {
  return (
    <Layout>
      <SEO 
        title="Tjenester | Peisinstallasjon, piperehabilitering og vedlikehold | Alt i Ild"
        description="Alt i Ild tilbyr profesjonell peisinstallasjon, piperehabilitering, stålpiper, inspeksjon og service. Gratis befaring i Molde og Møre og Romsdal."
        canonical="/tjenester"
        keywords="peisinstallasjon Molde, ovnsmontering Møre og Romsdal, piperehabilitering, stålpipe, vedlikehold peis, sertifisert montør, dårlig trekk, Exodraft"
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
            "itemListElement": services.map(s => ({
              "@type": "Offer",
              "itemOffered": {"@type": "Service", "name": s.title}
            }))
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
              Våre tjenester
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              Komplett tilbud for ildsted og skorstein
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Sertifisert for søknadspliktig arbeid på ildsteder og skorsteiner. 
              Vi håndterer alt fra befaring til ferdig godkjent installasjon.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-semibold">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.description}
                </p>
                
                {service.features && (
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {service.problems && (
                  <div className="mb-6">
                    <p className="font-medium mb-3">Problemer vi løser:</p>
                    <ul className="space-y-3">
                      {service.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {service.suitableFor && (
                  <div className="mb-6">
                    <p className="font-medium mb-3">Passer for:</p>
                    <ul className="space-y-3">
                      {service.suitableFor.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {service.symptoms && (
                  <div className="mb-6">
                    <p className="font-medium mb-3">Typiske symptomer:</p>
                    <ul className="space-y-3">
                      {service.symptoms.map((symptom) => (
                        <li key={symptom} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {service.services && (
                  <div className="mb-6">
                    <p className="font-medium mb-3">Vi tilbyr:</p>
                    <ul className="space-y-3">
                      {service.services.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {service.includes && (
                  <div className="mb-6">
                    <p className="font-medium mb-3">Inkluderer:</p>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {service.solutions && (
                  <div className="mb-6">
                    <p className="font-medium mb-3">Våre løsninger:</p>
                    <ul className="space-y-3">
                      {service.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Button variant="default" size="lg" asChild>
                  <Link to="/kontakt">
                    Bestill gratis befaring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          ))}
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
              { step: "03", title: "Installasjon", desc: "Våre fagfolk utfører installasjonen profesjonelt og dokumentert." },
              { step: "04", title: "Godkjenning", desc: "Ferdigmelding og godkjent installasjon fra brannvesenet." },
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
              Bestill gratis befaring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Tjenester;
