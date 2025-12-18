import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { 
  Flame, 
  Wrench, 
  Shield, 
  Truck, 
  MessageCircle, 
  Star,
  ArrowRight,
  CheckCircle,
  X
} from "lucide-react";

import heroImage from "@/assets/hero-fireplace.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";
import installationImage from "@/assets/installation-work.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";


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
  "Sertifisert montør",
  "Kvalifisert montør og kontrollør",
  "Gratis befaring",
  "Garanti på alt arbeid",
];

const galleryImages = [
  { src: null, alt: "Funkis ovn", title: "Funkis Ovn" },
  { src: null, alt: "Hvit ovn", title: "Hvit Ovn" },
  { src: null, alt: "Ovn i sollys", title: "Ovn i Sollys" },
];

const testimonials = [
  {
    name: "Anette Lien",
    source: "Google",
    text: "Bedre enn bestilt! Alt i Ild leverer håndverk på et nivå som imponerer. Lars ga oss gode og treffsikre råd, la en klar plan som ble utført ryddig og strukturert.",
  },
  {
    name: "Ida K. Johansen",
    source: "Google",
    text: "Vi er kjempefornøyde med arbeidet fra Lars. Han kom på gratis befaring samme dag, tok seg god tid til å finne en god løsning. Anbefaler på det sterkeste!",
  },
  {
    name: "Cornelia Fischer",
    source: "Google",
    text: "Lars ga oss gode råd helt fra starten av. Han jobbet veldig rent og profesjonelt. Anbefales på det sterkeste!",
  },
  {
    name: "Cato Stranden Bergseth",
    source: "Google",
    text: "Alt i Ild AS leverte en svært god opplevelse ved montering av ny Contura-peis. De håndterte utfordringer profesjonelt.",
  },
  {
    name: "Christian D",
    source: "Google",
    text: "Konkurransedyktig på pris, hurtig, god kommunikasjon og en mann som brenner for faget. Meget godt fornøyd!",
  },
  {
    name: "Kjetil Avset",
    source: "Facebook",
    text: "Lars yter service og er fleksibel. Utrolig hyggelig kar å ha med å gjøre. Ingenting å si på arbeidet, tip top!",
  },
  {
    name: "Arne Gussiås",
    source: "Google",
    text: "Arbeidet ble gjennomført med svært bra kvalitet, effektivt og ryddig! Kan trygt anbefale Alt i Ild!",
  },
  {
    name: "Arne Enge Jeremiassen",
    source: "Facebook",
    text: "Fikk montert ny stålpipe i hytte på fjellet. Meget god oppfølging og alt har gått på skinner. Anbefaler på det sterkeste.",
  },
  {
    name: "Svein Jarle Garseth",
    source: "Google",
    text: "Lars Klemm monterte nytt ildsted med pipe på vårt sommerhus. Veldig ryddig utført, og god informasjon underveis.",
  },
  {
    name: "Trond Haukebø",
    source: "Google",
    text: "Alt er nå kontrollert og godkjent av Brannvesenet. Profesjonelt og effektivt utført. Meget fornøyd!",
  },
  {
    name: "Roar Markussen",
    source: "Facebook",
    text: "Dette er yrkesfaglig perfeksjonisme på sitt beste. Service langt utover det vanlige. Anbefales sterkt!",
  },
];

const TestimonialsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4 px-4 md:px-8">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="flex-none w-[280px] md:w-[320px] bg-background ring-foreground/10 rounded-xl border border-transparent p-4 ring-1"
          >
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed line-clamp-4">
              {review.text}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-foreground text-xs font-medium">{review.name}</span>
              <span aria-hidden className="bg-foreground/25 size-1 rounded-full"></span>
              <span className="text-muted-foreground text-xs">{review.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  const galleryImagesWithSrc = [
    { src: funkisOvn, alt: "Funkis ovn", title: "Funkis Ovn" },
    { src: hvitOvn, alt: "Hvit ovn", title: "Hvit Ovn" },
    { src: ovnSolrik, alt: "Ovn i sollys", title: "Ovn i Sollys" },
  ];

  return (
    <Layout>
      <SEO 
        title="Alt i Ild | Peis og ovn spesialister i Møre og Romsdal"
        description="Alt i Ild leverer profesjonell installasjon av peiser og ovner i Molde og Møre og Romsdal. Gratis befaring, sertifiserte montører, og garanti på alt arbeid."
        keywords="peis Molde, ovn Møre og Romsdal, peisinstallasjon, vedovn, ildsted, peisinnsats, peismontør, gratis befaring"
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
            <p className="text-primary font-semibold mb-4 tracking-wider uppercase text-base md:text-lg drop-shadow-lg">
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
              <Button variant="hero" size="xl" className="animate-gentle-pulse !border-2 !border-white" asChild>
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

        {/* Scroll indicator - desktop only */}
        <button 
          onClick={() => {
            document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll ned"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </button>
      </section>

      {/* Benefits Bar */}
      <section id="benefits-section" className="bg-primary py-6 md:py-8">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center justify-center gap-2 text-primary-foreground text-center">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="font-medium text-sm md:text-base">{benefit}</span>
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
                    <p className="text-sm text-muted-foreground">Kvalifisert montør</p>
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
                Fra rådgivning til ferdig installert peis, vi tar hånd om hele prosessen.
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
                Med base i Molde betjener vi kunder i hele Møre og Romsdal. 
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {galleryImagesWithSrc.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Se mer
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/90 backdrop-blur-sm animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <div 
                className="relative max-w-4xl max-h-[90vh] w-full animate-scale-in"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 md:top-4 md:right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                  aria-label="Lukk bilde"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl md:rounded-2xl"
                />
                <p className="text-center text-primary-foreground mt-3 md:mt-4 font-display text-lg md:text-xl">
                  {selectedImage.title}
                </p>
              </div>
            </div>
          )}

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

      {/* Testimonials Carousel */}
      <section className="section-padding bg-muted overflow-hidden">
        <div className="container-wide mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Kundeomtaler
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Hva kundene sier
            </h2>
          </div>
        </div>

        <TestimonialsCarousel />

        <div className="container-wide">
          <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.app.goo.gl/3T9BK5YwkqHvH2iA8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Se anmeldelser på Google
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574577441905"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Se anmeldelser på Facebook
              <ArrowRight className="h-4 w-4" />
            </a>
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
