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
import teamImage from "@/assets/team.jpg";

const services = [
  {
    icon: Flame,
    title: "Montering av peis og ovn",
    description: "Vi monterer peisovn, vedovn og innsats på en trygg og fagmessig måte. Vi sørger for riktig avstand til brennbart materiale, god lufttilførsel, riktig dimensjonert røykrør og stabilt trekk.",
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
    description: "Har du en gammel teglsteinskorstein, sprekkdannelser, dårlig trekk eller pipe som ikke er godkjent? Vi utfører piperehabilitering med stålrør i pipe, keramiske rør eller andre fagløsninger.",
    features: [
      "Dårlig trekk i pipe",
      "Fyringsforbud",
      "Pipe ikke godkjent",
      "Avvik fra brannvesenet",
      "Lekkasjer eller kondens i skorstein",
    ],
  },
  {
    icon: Shield,
    title: "Montering av stålpiper",
    description: "Vi leverer og monterer isolert stålpipe – en fleksibel og trygg løsning når boligen mangler skorstein eller når ildstedet må plasseres annerledes.",
    features: [
      "Nybygg",
      "Hytter",
      "Eldre hus",
    ],
  },
  {
    icon: Eye,
    title: "Inspeksjon av pipe og ildsted",
    description: "Vi utfører inspeksjon ved problemer eller krav om kontroll etter avvik.",
    features: [
      "Røyk i rommet",
      "Sotlukt",
      "Misfarging på pipe",
      "Dårlig trekk",
      "Problemer med fyring",
    ],
  },
  {
    icon: Wrench,
    title: "Service & vedlikehold",
    description: "God service og vedlikehold er avgjørende for sikker og effektiv fyring. Mange problemer oppstår fordi pakninger, glass eller vermikulittplater i brennkammeret er slitt.",
    features: [
      "Pakningsskifte for bedre forbrenning",
      "Glassbytte ved sprekk eller slitasje",
      "Bytte av vermikulitt røykfordelerplate",
    ],
  },
];

const processSteps = [
  { 
    icon: ClipboardCheck, 
    step: "01", 
    title: "Planlegging & rådgivning", 
    desc: "Vi vurderer hvilken vedovn eller peis som passer best, hvilken skorsteinsløsning som kreves, behov for friskluft, ventilasjon eller røyksuger, om pipe må rehabiliteres og risiko for avvik ved kontroll." 
  },
  { 
    icon: Truck, 
    step: "02", 
    title: "Levering", 
    desc: "Vi leverer røykrør, ovner, stålpipe, stålrør, keramiske rør og Exodraft røyksugere – alt som trengs for en komplett installasjon." 
  },
  { 
    icon: Wrench, 
    step: "03", 
    title: "Montering", 
    desc: "Sertifiserte montører utfører jobben i henhold til TEK17, produsentens krav og lokale forskrifter." 
  },
  { 
    icon: FileCheck, 
    step: "04", 
    title: "Dokumentasjon underveis", 
    desc: "Vi dokumenterer alt arbeid: bilder, målinger, teknisk beskrivelse og kontrollpunkter. Dokumentasjonen sendes til kommune og brannvesen ved behov." 
  },
  { 
    icon: Shield, 
    step: "05", 
    title: "Sluttkontroll & ferdigdokumentasjon", 
    desc: "Vi utfører sluttkontroll, sender ferdigmelding til brannvesenet og du får komplett dokumentasjon for boligmappen." 
  },
];

const whyChooseUs = [
  { icon: MapPin, text: "Lokal fagbedrift i Molde" },
  { icon: Users, text: "Mange års erfaring" },
  { icon: Award, text: "Sertifiserte montører" },
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
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50 md:from-charcoal/85 md:via-charcoal/60 md:to-transparent" />
        </div>
        
        <div className="container-wide relative z-10 pt-24 pb-16 md:pt-20 md:pb-0">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground mb-4 md:mb-6 leading-tight">
              Skap varme og atmosfære i ditt hjem
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-3 md:mb-4">
              Komplette løsninger for ildsted og skorstein i Møre og Romsdal
            </p>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-3 md:mb-4 leading-relaxed">
              Hos oss får du mer enn bare produkter. Vi leverer helhetlige løsninger som gir trygghet, komfort og riktig varme i hjemmet ditt.
            </p>
            <p className="hidden sm:block text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 leading-relaxed">
              Enten du har dårlig trekk i pipe, vurderer rehabilitering av pipe, har fått fyringsforbud, ønsker bedre varmeeffekt eller planlegger å montere en ny vedovn eller peisovn – vi finner den riktige løsningen for boligen din.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 md:mb-6">
              <Button variant="hero" size="lg" className="animate-gentle-pulse !border-2 !border-white text-sm sm:text-base md:text-lg" asChild>
                <Link to="/kontakt">
                  Bestill gratis befaring
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button variant="heroOutlineLight" size="lg" className="text-sm sm:text-base md:text-lg" asChild>
                <Link to="/tjenester">Se våre tjenester</Link>
              </Button>
            </div>
            <p className="text-primary-foreground/70 text-xs sm:text-sm">
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
      <section id="tjenester-section" className="py-12 md:py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              Våre tjenester
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
              Alt du trenger for ildsted og skorstein
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-2">
              Vi tilbyr både nye installasjoner og service på eksisterende ildsted og skorstein. Alle løsninger tilpasses boligen, trekkforholdene og gjeldende krav i Møre og Romsdal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover-lift border border-border/50"
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 md:mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                      <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Button variant="default" size="lg" className="text-sm md:text-base" asChild>
              <Link to="/tjenester">
                Se alle tjenester
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 1.3 KOMPLETTE LØSNINGER – ÉN PARTNER HELE VEIEN */}
      <section className="py-12 md:py-20 lg:py-28 bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              Én fagpartner hele veien
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
              Komplette løsninger fra A til Å
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-2">
              Vi tar hele ansvaret – fra rådgivning til ferdig godkjent installasjon. Du slipper å koordinere flere leverandører; vi håndterer alt.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {processSteps.map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground mb-3 md:mb-4">
                  <item.icon className="h-5 w-5 md:h-7 md:w-7" />
                </div>
                <div className="text-primary font-bold text-xs md:text-sm mb-1 md:mb-2">{item.step}</div>
                <h3 className="font-display text-sm md:text-lg font-semibold mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm hidden sm:block">
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
      <section className="py-12 md:py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
                Trygghet og godkjenning
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                Dokumentasjon & myndighetskrav
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                Arbeid på pipe og skorstein er ofte søknadspliktig. Dette gjelder piperehabilitering, ny stålpipe, bruk av stålrør i pipe og andre strukturelle endringer.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                Alt i Ild AS håndterer hele prosessen – dette gjør prosessen trygg og enkel:
              </p>
              <ul className="space-y-2 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Vurdering av skorstein",
                  "Valg av riktig rehabiliteringsmetode",
                  "Komplett søknad til kommunen i Møre og Romsdal",
                  "Dokumentasjon underveis",
                  "Ferdigmelding direkte til brannvesen og kommune",
                  "Dokumentpakke til boligmappen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 md:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="lg" className="text-sm md:text-base" asChild>
                <Link to="/dokumentasjon">
                  Les mer om dokumentasjon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative order-first lg:order-last">
              <OptimizedImage
                src={installationImage}
                alt="Profesjonell dokumentert installasjon"
                className="rounded-xl md:rounded-2xl shadow-2xl w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl hidden sm:block border border-border">
                <div className="flex items-center gap-2 md:gap-3">
                  <FileCheck className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  <div>
                    <p className="font-display text-base md:text-lg font-semibold">100%</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Dokumentert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 HVORFOR VELGE OSS? */}
      <section className="py-12 md:py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-primary-foreground">
              Hvorfor velge oss?
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-8 md:mb-12">
            {whyChooseUs.map((item) => (
              <div key={item.text} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary-foreground/10 mb-2 md:mb-4">
                  <item.icon className="h-4 w-4 md:h-6 md:w-6 text-primary-foreground" />
                </div>
                <p className="text-primary-foreground font-medium text-xs md:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary-foreground/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
              {[
                "Lokal fagbedrift innen ildsted og skorstein i Molde",
                "Mange års erfaring",
                "Sertifiserte montører",
                "Komplette løsninger fra A–Å",
                "Gratis befaring",
                "Ekspertise på dårlig trekk og Exodraft røyksugere",
                "Rehabilitering av pipe og stålpipeinstallasjon",
                "Dokumentasjon og ferdigmelding alltid inkludert",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 md:gap-3 text-primary-foreground text-xs sm:text-sm md:text-base">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/70 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
                Vi kjenner byggeskikk, klima og kommunale krav i regionen. Derfor vet vi hva som kreves for at ildsted og pipe blir godkjent uten problemer.
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
                Kontakt & gratis befaring
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Vi tilbyr gratis befaring ved:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Piperehabilitering",
                  "Montering av peis og vedovn",
                  "Dårlig trekk i pipe",
                  "Valg av riktig skorsteinsløsning",
                  "Vurdering før kjøp av peis eller ovn",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Kontakt oss i dag for en trygg og profesjonell løsning.
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
