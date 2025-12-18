import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Award, Users, Heart, Target } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import larsKlemmImage from "@/assets/lars-klemm.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";

// Real business images
import hvitOvn from "@/assets/hvit-ovn.jpg";
import hvitOvn2 from "@/assets/hvit-ovn-2.jpg";
import takInnside from "@/assets/tak-innside.jpg";
import beforeStove from "@/assets/before-stove.jpg";
import afterStove from "@/assets/after-stove.jpg";

const values = [
  {
    icon: Award,
    title: "Kvalitet",
    description: "Vi bruker kun materialer og produkter av høyeste kvalitet, og utfører alt arbeid etter bransjestandard.",
  },
  {
    icon: Users,
    title: "Kompetanse",
    description: "Vårt team består av sertifiserte fagfolk med mange års erfaring innen peis og ovnsbransjen.",
  },
  {
    icon: Heart,
    title: "Kundefokus",
    description: "Din tilfredshet er vår prioritet. Vi lytter til dine ønsker og tilpasser løsninger til ditt behov.",
  },
  {
    icon: Target,
    title: "Sikkerhet",
    description: "Alle installasjoner utføres i henhold til gjeldende forskrifter og brannsikkerhetskrav.",
  },
];

const OmOss = () => {
  return (
    <Layout>
      <SEO 
        title="Om oss | Alt i Ild - Din lokale peis og ovn ekspert"
        description="Alt i Ild i Molde leverer kvalitetsløsninger for peiser og ovner i Møre og Romsdal. Sertifisert montør, kontrollør og fagansvarlig."
        canonical="/om-oss"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hvitOvn2})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Om oss
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              Din lokale ekspert på peis og ovn
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Sertifisert montør, kontrollør og fagansvarlig, kvalifisert for 
              søknadspliktig arbeid på ildsteder og skorsteiner. Montering, kontroll og 
              rehabilitering utføres trygt, godkjent og dokumentert.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Vår historie
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Alt i Ild ble grunnlagt av Lars Klemm, sertifisert montør, kontrollør 
                og fagansvarlig til søknadspliktig arbeid på ildsteder og skorsteiner. 
                Med brennende lidenskap for ekte varme i norske hjem har vi raskt blitt 
                en anerkjent aktør i regionen.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Vi tilbyr montering av nye ovner og peiser, piperehabilitering og 
                isolerte stålpiper. Hver eneste jobb behandles med samme omhu og presisjon.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Fra vår base i Barvegen 16 i Molde betjener vi kunder i hele Møre og Romsdal.
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

      {/* Before/After */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Se forskjellen
            </h2>
            <p className="text-muted-foreground text-lg">
              Dra for å se før og etter installasjon av ny vedovn.
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage={beforeStove}
            afterImage={afterStove}
          />
        </div>
      </section>
      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Våre verdier
            </h2>
            <p className="text-muted-foreground text-lg">
              Disse verdiene ligger til grunn for alt vi gjør.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8"
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

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={hvitOvn}
                alt="Hvit peis installert av Alt i Ild"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-semibold mb-6">
                Hvorfor velge oss?
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Sertifisert montør",
                  "Kvalifisert for søknadspliktig arbeid",
                  "Gratis befaring og uforpliktende tilbud",
                  "Full garanti på arbeid og produkter",
                  "Service og vedlikehold etter installasjon",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
    </Layout>
  );
};

export default OmOss;
