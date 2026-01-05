import { useState } from "react";
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
  MessageCircle, 
  Star,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Truck,
  FileCheck,
  Search,
  MapPin,
  Phone,
  Mail,
  Award,
  Users,
  ThermometerSun,
  Eye
} from "lucide-react";

import heroImage from "@/assets/hero-fireplace.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";
import installationImage from "@/assets/installation-work.jpg";
import pipeTak from "@/assets/pipe-tak.jpg";
import hvitOvn from "@/assets/hvit-ovn.jpg";
import funkisOvn from "@/assets/funkis-ovn.jpg";
import teamImage from "@/assets/team.jpg";

const services = [
  {
    icon: Flame,
    title: "Montering av peis og ovn",
    description: "Sikker og forskriftsmessig montering tilpasset boligen og eksisterende pipe.",
    features: [
      "Sikker montering",
      "Riktig lufttilførsel",
      "Korrekt røykrør",
      "Ferdigmelding og dokumentasjon",
    ],
  },
  {
    icon: Wrench,
    title: "Piperehabilitering",
    description: "Vi løser problemer med dårlig trekk, fyringsforbud og avvik fra brannvesenet.",
    features: [
      "Dårlig trekk",
      "Fyringsforbud",
      "Avvik fra brannvesenet",
      "Kondens og lekkasjer",
    ],
  },
  {
    icon: Shield,
    title: "Montering av stålpiper",
    description: "Fleksible løsninger for nybygg, eldre boliger og hytter.",
    features: [
      "Nybygg",
      "Eldre boliger",
      "Hytter",
      "Sikker og godkjent",
    ],
  },
  {
    icon: Eye,
    title: "Inspeksjon av pipe og ildsted",
    description: "Grundig kontroll ved symptomer som røyk, sotlukt eller dårlig trekk.",
    features: [
      "Røyk i rom",
      "Sotlukt",
      "Misfarging",
      "Dårlig trekk",
    ],
  },
  {
    icon: MessageCircle,
    title: "Service & vedlikehold",
    description: "Viktig for sikker og effektiv fyring over tid.",
    features: [
      "Pakningsskifte",
      "Glassbytte",
      "Vermikulitt/røykfordelerplate",
      "Rådgivning",
    ],
  },
];

const processSteps = [
  { icon: ClipboardCheck, step: "01", title: "Planlegging & rådgivning", desc: "Vi kommer på befaring og gir faglige råd tilpasset din bolig." },
  { icon: Truck, step: "02", title: "Levering", desc: "Vi håndterer bestilling og levering av utstyr." },
  { icon: Wrench, step: "03", title: "Montering", desc: "Fagmessig installasjon av sertifiserte montører." },
  { icon: FileCheck, step: "04", title: "Dokumentasjon", desc: "Alt dokumenteres underveis i prosessen." },
  { icon: Shield, step: "05", title: "Sluttkontroll", desc: "Ferdigmelding og godkjent installasjon." },
];

const whyChooseUs = [
  { icon: MapPin, text: "Lokal fagbedrift i Molde" },
  { icon: Award, text: "Sertifiserte montører" },
  { icon: Users, text: "Mange års erfaring" },
  { icon: CheckCircle, text: "Komplette løsninger A–Å" },
  { icon: Search, text: "Gratis befaring" },
  { icon: ThermometerSun, text: "Eksperter på dårlig trekk & Exodraft" },
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
  return (
    <Layout>
      <SEO 
        title="Alt i Ild | Peis og ovn spesialister i Molde og Møre og Romsdal"
        description="Alt i Ild leverer komplette løsninger for ildsted og skorstein i Møre og Romsdal. Gratis befaring, sertifiserte montører. Montering, piperehabilitering, service og dokumentasjon."
        keywords="peis Molde, ovn Møre og Romsdal, peisinstallasjon, vedovn, ildsted, piperehabilitering, stålpipe, gratis befaring"
        canonical="/"
      />
      
      {/* 1.1 HERO-SEKSJON */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 leading-tight">
              Skap varme og trygghet i ditt hjem
            </h1>
            <p className="text-2xl text-primary font-medium mb-4">
              Komplette løsninger for ildsted og skorstein i Møre og Romsdal
            </p>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Alt i Ild AS leverer helhetlige, trygge og dokumenterte løsninger – fra vurdering til ferdig godkjent installasjon. Én partner hele veien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="hero" size="xl" className="animate-gentle-pulse !border-2 !border-white" asChild>
                <Link to="/kontakt">
                  Bestill gratis befaring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutlineLight" size="xl" asChild>
                <Link to="/tjenester">Se våre tjenester</Link>
              </Button>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Montering • Piperehabilitering • Service • Dokumentasjon
            </p>
          </div>
        </div>

        <button 
          onClick={() => {
            document.getElementById('tjenester-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll ned"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </button>
      </section>

      {/* 1.2 VÅRE TJENESTER */}
      <section id="tjenester-section" className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Våre tjenester
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Alt du trenger for ildsted og skorstein
            </h2>
            <p className="text-muted-foreground text-lg">
              Vi tilbyr både nye installasjoner og service på eksisterende ildsted og skorstein – alltid tilpasset boligen, trekkforhold og gjeldende krav.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-6 md:p-8 hover-lift border border-border/50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
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
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="/tjenester">
                Se alle tjenester
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 1.3 KOMPLETTE LØSNINGER – ÉN PARTNER HELE VEIEN */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Én partner hele veien
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Komplette løsninger fra A til Å
            </h2>
            <p className="text-muted-foreground text-lg">
              Med Alt i Ild slipper du å koordinere flere aktører. Vi håndterer hele prosessen for deg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
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
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.4 DOKUMENTASJON & MYNDIGHETSKRAV */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Trygghet og godkjenning
              </p>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Dokumentasjon & myndighetskrav
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Montering av ildsted og pipe er søknadspliktig. Alt i Ild AS håndterer ALT for deg – fra søknad til ferdig godkjent installasjon.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Kommunesøknad og nødvendige tillatelser",
                  "Ferdigmelding til brannvesenet",
                  "Dokumentasjon til Boligmappa",
                  "Sertifikat og garantidokumenter",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="lg" asChild>
                <Link to="/dokumentasjon">
                  Les mer om dokumentasjon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <OptimizedImage
                src={installationImage}
                alt="Profesjonell dokumentert installasjon"
                className="rounded-2xl shadow-2xl w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl hidden md:block border border-border">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-display text-lg font-semibold">100%</p>
                    <p className="text-sm text-muted-foreground">Dokumentert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 HVORFOR VELGE OSS? */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-primary-foreground">
              Hvorfor velge Alt i Ild?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.text} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-primary-foreground font-medium text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.6 LOKAL FORANKRING */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <OptimizedImage
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
                Vi kjenner de lokale forholdene – fra klimaet langs kysten til kommunale krav og feiervesenet i regionen. Med base i Molde er vi alltid i nærheten.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Vår lokalkunnskap gir deg trygghet for at løsningen vi velger er tilpasset nettopp ditt hjem og dine forhold.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Molde", "Aukra", "Hustadvika", "Midsund", "Rauma", "Sunndal", "Averøy"].map((area) => (
                  <span 
                    key={area}
                    className="px-4 py-2 bg-background rounded-full text-sm text-foreground border border-border"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-background overflow-hidden">
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

      {/* 1.7 KONTAKT & GRATIS BEFARING */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pipeTak})` }}
        >
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
                Klar for gratis befaring?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Vi kommer til deg for en uforpliktende vurdering av ditt prosjekt. Helt gratis.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-primary-foreground">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+4798844844" className="hover:text-primary transition-colors">
                    +47 988 44 844
                  </a>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:post@altiild.no" className="hover:text-primary transition-colors">
                    post@altiild.no
                  </a>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Molde, Møre og Romsdal</span>
                </div>
              </div>
              <Button variant="hero" size="xl" className="animate-gentle-pulse !border-2 !border-white" asChild>
                <Link to="/kontakt">
                  Bestill gratis befaring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <OptimizedImage
                src={stoveImage}
                alt="Ferdig montert ildsted"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
