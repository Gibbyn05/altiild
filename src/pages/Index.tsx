import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { 
  Flame, 
  Wrench, 
  Shield, 
  Truck, 
  MessageCircle, 
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

import heroImage from "@/assets/hero-fireplace.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";
import installationImage from "@/assets/installation-work.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";

// Real business images
import funkisOvn from "@/assets/funkis-ovn.jpg";
import hvitOvn from "@/assets/hvit-ovn.jpg";
import hvitOvn2 from "@/assets/hvit-ovn-2.jpg";
import ovnSolrik from "@/assets/ovn-solrik.jpg";
import pipeTak from "@/assets/pipe-tak.jpg";
import takInnside from "@/assets/tak-innside.jpg";

const services = [
  {
    icon: Flame,
    title: "Peisinstallasjon",
    description: "Profesjonell montering av alle typer peiser og ildsteder, tilpasset ditt hjem.",
  },
  {
    icon: Wrench,
    title: "Ovnsmontering",
    description: "Effektiv og sikker installasjon av vedovner og pelletskaminer.",
  },
  {
    icon: Shield,
    title: "Vedlikehold & Service",
    description: "Regelmessig vedlikehold for optimal ytelse og sikkerhet.",
  },
  {
    icon: MessageCircle,
    title: "Rådgivning",
    description: "Ekspertråd om valg av peis, ovn og varmesystem for ditt hjem.",
  },
];

const benefits = [
  "Over 15 års erfaring",
  "Sertifiserte fagfolk",
  "Garanti på alt arbeid",
  "Gratis befaring",
];

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Alt i Ild | Peis og ovn spesialister i Møre og Romsdal"
        description="Alt i Ild leverer profesjonell installasjon av peiser og ovner i Møre og Romsdal. Gratis befaring, sertifiserte montører, og garanti på alt arbeid."
        canonical="/"
      />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Eksperter på peis og ovn
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 leading-tight">
              Skap varme og atmosfære i ditt hjem
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Alt i Ild leverer profesjonell installasjon av peiser og ovner. 
              Vi kombinerer håndverk, kvalitet og moderne design for å skape 
              det perfekte ildstedet for deg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="animate-gentle-pulse" asChild>
                <Link to="/kontakt">
                  Be om gratis tilbud
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutlineLight" size="xl" asChild>
                <Link to="/galleri">Se våre prosjekter</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => {
            document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll ned"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </button>
      </section>

      {/* Benefits Bar */}
      <section id="benefits-section" className="bg-primary py-6">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-primary-foreground">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <OptimizedImage
                src={installationImage}
                alt="Profesjonell peis- og ovnsinstallasjon"
                className="rounded-2xl shadow-2xl w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl hidden md:block border border-border">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-display text-lg font-semibold">Sertifisert</p>
                    <p className="text-sm text-muted-foreground">montør og kontrollør</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Våre tjenester
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
                Alt du trenger for et varmere hjem
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Fra rådgivning til ferdig installert peis – vi tar hånd om hele prosessen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-primary/5 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <service.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="default" size="lg" className="animate-gentle-pulse" asChild>
                <Link to="/tjenester">
                  Se alle tjenester
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <OptimizedImage
                src={stoveImage}
                alt="Koselig vedovn i skandinavisk interiør"
                className="rounded-2xl shadow-2xl w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="font-display text-4xl font-bold">15+</p>
                <p className="text-sm">års erfaring</p>
              </div>
            </div>
            
            <div>
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Om Alt i Ild
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
                Håndverk og kvalitet i over 15 år
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Alt i Ild ble grunnlagt med en lidenskap for varme og atmosfære. 
                Vi er et team av sertifiserte fagfolk som spesialiserer oss på 
                installasjon og vedlikehold av peiser, ovner og ildsteder.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Med base i Ålesund betjener vi kunder i hele Møre og Romsdal. 
                Vår filosofi er enkel: kvalitet, sikkerhet og kundetilfredshet 
                i alt vi gjør.
              </p>
              <Button variant="default" size="lg" className="animate-gentle-pulse" asChild>
                <Link to="/om-oss">
                  Les mer om oss
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Våre prosjekter
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Se hva vi har skapt
            </h2>
            <p className="text-muted-foreground text-lg">
              Utforsk et utvalg av våre tidligere prosjekter og bli inspirert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[funkisOvn, hvitOvn2, ovnSolrik].map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <OptimizedImage
                  src={img}
                  alt={`Peisprosjekt ${index + 1}`}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Se mer
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" className="animate-gentle-pulse" asChild>
              <Link to="/galleri">
                Se hele galleriet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-primary" />
              ))}
            </div>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-secondary-foreground mb-8 leading-relaxed">
              "Alt i Ild leverte langt over forventning. Fra første konsultasjon til ferdig 
              installert peis – alt gikk knirkefritt. Nå koser vi oss foran peisen hver kveld!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <OptimizedImage
                src={testimonial1}
                alt="Fornøyde kunder"
                className="w-16 h-16 rounded-full"
              />
              <div className="text-left">
                <p className="font-semibold text-secondary-foreground">Kari og Ola Nordmann</p>
                <p className="text-secondary-foreground/70">Ålesund</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${installationImage})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
            Klar for et varmere hjem?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto">
            Kontakt oss i dag for en uforpliktende prat om hvordan vi kan hjelpe deg.
          </p>
          <Button variant="hero" size="xl" className="animate-gentle-pulse" asChild>
            <Link to="/kontakt">
              Be om gratis tilbud
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
