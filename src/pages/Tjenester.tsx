import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { 
  Flame, 
  Wrench, 
  Shield, 
  Truck, 
  MessageCircle, 
  Settings,
  ArrowRight,
  CheckCircle,
  Construction,
  Cylinder
} from "lucide-react";

import installationImage from "@/assets/installation-work.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";

const services = [
  {
    icon: Flame,
    title: "Peisinstallasjon",
    description: "Profesjonell montering av alle typer peiser – fra moderne innsatser til tradisjonelle murt peis. Vi håndterer hele prosessen fra planlegging til ferdig installasjon.",
    features: [
      "Vurdering av pipeløp og avtrekk",
      "Montering av peisinnssats eller kassett",
      "Ferdigstilling med gulv og vegg",
      "Dokumentasjon og godkjenning",
    ],
  },
  {
    icon: Wrench,
    title: "Ovnsmontering",
    description: "Effektiv og sikker installasjon av vedovner, pelletskaminer og kombinasjonsovner. Vi finner riktig ovn for ditt behov og sørger for optimal plassering.",
    features: [
      "Valg og levering av ovn",
      "Montering på forskriftsmessig underlag",
      "Tilkobling til pipe",
      "Oppstart og brukerveiledning",
    ],
  },
  {
    icon: Construction,
    title: "Piperehabilitering",
    description: "Oppgradering og rehabilitering av eksisterende piper for bedre ytelse og sikkerhet. Vi utbedrer skader og tilpasser pipen til moderne krav.",
    features: [
      "Inspeksjon og tilstandsvurdering",
      "Foring av eksisterende pipe",
      "Reparasjon av sprekker og skader",
      "Etterisolering og tetting",
    ],
  },
  {
    icon: Cylinder,
    title: "Isolerte stålpiper",
    description: "Montering av moderne isolerte stålpiper for effektiv og sikker røykavledning. Ideelt for nybygg eller der tradisjonell pipe ikke er mulig.",
    features: [
      "Planlegging og dimensjonering",
      "Montering innvendig eller utvendig",
      "Brannsikker gjennomføring",
      "Komplett med beslag og tilbehør",
    ],
  },
  {
    icon: Shield,
    title: "Vedlikehold & Service",
    description: "Regelmessig vedlikehold forlenger levetiden på din peis eller ovn og sikrer optimal ytelse. Vi tilbyr servicekontrakter og akutt hjelp.",
    features: [
      "Årlig service og kontroll",
      "Utskifting av slitedeler",
      "Røykgassmåling",
      "Rens av glass og brennkammer",
    ],
  },
  {
    icon: MessageCircle,
    title: "Rådgivning",
    description: "Usikker på hvilken løsning som passer for deg? Vi tilbyr gratis rådgivning og hjelper deg med å finne riktig peis eller ovn basert på dine behov.",
    features: [
      "Befaring i ditt hjem",
      "Energirådgivning",
      "Designforslag",
      "Kostnadsestimat",
    ],
  },
  {
    icon: Truck,
    title: "Levering",
    description: "Vi håndterer transport og levering av din nye peis eller ovn trygt og effektivt, direkte til installasjonsstedet.",
    features: [
      "Levering til hele Møre og Romsdal",
      "Innbæring inkludert",
      "Forsikret transport",
      "Fleksible leveringstider",
    ],
  },
  {
    icon: Settings,
    title: "Tilbehør",
    description: "Alt du trenger for å komplettere din varmeløsning – fra vedstativ til peisverktøy, sotluker og røykrør.",
    features: [
      "Vedstativ og vedbokser",
      "Peisverktøy",
      "Gulvplater",
      "Røykrør og tilbehør",
    ],
  },
];

const Tjenester = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Tjenester
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              Komplett tilbud for varme og trivsel
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Fra første befaring til ferdig installert peis – vi tar hånd om hele prosessen. 
              Utforsk våre tjenester og finn løsningen som passer for deg.
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
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${installationImage})` }}
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
