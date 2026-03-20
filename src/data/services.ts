import { 
  Flame, 
  Construction, 
  Shield, 
  Eye, 
  Wrench, 
  Hammer, 
  Wind,
  LucideIcon
} from "lucide-react";

import pipeTak from "@/assets/pipe-tak.jpg";
import tjenesterPeis from "@/assets/tjenester-peis.png";
import hvitOvn from "@/assets/hvit-ovn.jpg";
import hvitOvn2 from "@/assets/hvit-ovn-2.jpg";
import ovnSolrik from "@/assets/ovn-solrik.jpg";
import funkisOvn from "@/assets/funkis-ovn.jpg";
import installationImage from "@/assets/installation-work.jpg";
import takUtside from "@/assets/ovn-solrik.jpg";
import takInnside from "@/assets/4.png";
import stalpipeUtvendig from "@/assets/stalpipe-utvendig.jpg";
import stalpipeInnvendig from "@/assets/stalpipe-innvendig.jpg";
import takstigeNy from "@/assets/takstige-ny.png";
import galleryPipeFjord from "@/assets/gallery-pipe-fjord.jpg";
import galleryPipeRehab from "@/assets/gallery-pipe-rehabilitering.jpg";
import galleryStalpipeSvart from "@/assets/gallery-stalpipe-svart.jpg";
import galleryTakstigePlatetak from "@/assets/gallery-takstige-platetak.jpg";
import galleryTakstigeSno from "@/assets/gallery-takstige-sno.jpg";
import galleryStalpipeTakstige from "@/assets/gallery-stalpipe-takstige.jpg";
import galleryTakstigePipe from "@/assets/gallery-takstige-pipe.jpg";
import galleryStalpipePlatetak from "@/assets/gallery-stalpipe-platetak.jpg";
import galleryStalpipeFeieplattform from "@/assets/gallery-stalpipe-feieplattform.jpg";
import galleryExodraft1 from "@/assets/gallery-exodraft-1.jpg";
import galleryExodraft2 from "@/assets/gallery-exodraft-2.jpg";
import galleryExodraft3 from "@/assets/gallery-exodraft-3.jpg";
import galleryPipehatt1 from "@/assets/gallery-pipehatt-1.jpg";
import galleryPipehatt2 from "@/assets/gallery-pipehatt-2.jpg";
import galleryStalpipe1 from "@/assets/gallery-stalpipe-1.jpg";
import galleryStalpipe2 from "@/assets/gallery-stalpipe-2.jpg";
import galleryStalpipe3 from "@/assets/gallery-stalpipe-3.jpg";
import galleryStalpipe4 from "@/assets/gallery-stalpipe-4.jpg";
import galleryStalpipe5 from "@/assets/gallery-stalpipe-5.jpg";
import galleryStalpipe6 from "@/assets/gallery-stalpipe-6.jpg";
import galleryStalpipe7 from "@/assets/gallery-stalpipe-7.jpg";

export interface ServiceData {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  galleryImages?: { src: string; alt: string; zoom?: boolean; objectPosition?: string }[];
  intro?: string;
  features?: string[];
  problems?: string[];
  causes?: string[];
  solutionsIntro?: string;
  solutions?: string[];
  suitableFor?: string[];
  typicalProjects?: string[];
  symptoms?: string[];
  checkIntro?: string;
  checks?: string[];
  services?: string[];
  workIntro?: string;
  work?: string[];
  includes?: string[];
  benefitsIntro?: string;
  benefits?: string[];
  conclusion?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const services: ServiceData[] = [
  {
    id: "montering",
    slug: "montering",
    icon: Flame,
    title: "Montering av peis og ovn",
    shortTitle: "Peis og ovn",
    description: "En trygg og riktig montert vedovn eller peisovn er avgjørende for både varmeeffekt og brannsikkerhet. Alt i Ild AS tilbyr fagmessig montering av ildsted i hele Møre og Romsdal - for både nye og eldre boliger.",
    image: hvitOvn,
    galleryImages: [
      { src: hvitOvn, alt: "hvit-ovn" },
      { src: hvitOvn2, alt: "hvit-ovn-2" },
      { src: ovnSolrik, alt: "ovn-solrik" },
    ],
    intro: "Vi vurderer alltid:",
    features: [
      "Trekkforhold i skorsteinen",
      "Lufttilførsel i rommet",
      "Riktig dimensjon på røykrør",
      "Avstand til brennbart materiale",
      "Gulvplate og brannsikring",
      "Tilstand på eksisterende skorstein",
    ],
    conclusion: "Målet er en installasjon som fungerer optimalt fra første fyring - uten røyk i rommet, dårlig trekk eller brannrisiko. Vi hjelper deg også med valg av riktig ildsted: moderne, rentbrennende ovner, klassiske vedovner, større peisinnsatser eller kompakte løsninger for mindre rom. Etter montering mottar du komplett dokumentasjon, og vi sender ferdigmelding til kommunen og brannvesenet på dine vegne.",
    metaTitle: "Montering av peis og ovn | Sertifisert installasjon | Alt i Ild",
    metaDescription: "Profesjonell montering av peis og vedovn i Molde og Møre og Romsdal. Sertifisert montør, gratis befaring, komplett dokumentasjon og ferdigmelding.",
    keywords: "peismontering Molde, ovnsmontering, vedovn installasjon, sertifisert montør, peis Møre og Romsdal",
  },
  {
    id: "piperehabilitering",
    slug: "piperehabilitering",
    icon: Construction,
    title: "Piperehabilitering",
    shortTitle: "Piperehabilitering",
    description: "En slitt eller skadet pipe kan føre til dårlig trekk, sotlukt, røyklekkasje, sprekkdannelser og i verste fall fyringsforbud. Alt i Ild AS er spesialister på piperehabilitering i Molde og hele Møre og Romsdal.",
    image: pipeTak,
    galleryImages: [
      { src: galleryPipeFjord, alt: "Rehabilitert pipe med utsikt over fjorden - Alt i Ild Molde" },
      { src: takUtside, alt: "Piperehabilitering sett fra utsiden av taket - Alt i Ild Molde" },
      { src: stalpipeUtvendig, alt: "Isolert stålpipe montert utvendig på husvegg - Alt i Ild Molde" },
      { src: stalpipeInnvendig, alt: "Moderne peisovn med stålpipe innvendig - Alt i Ild Molde" },
    ],
    intro: "Vanlige tegn på at pipe må rehabiliteres:",
    problems: [
      "Røyk kommer ut i rommet",
      "Dårlig trekk i pipe",
      "Misfarging på mur / pipe",
      "Avvik fra brannstasjonen",
      "Kondens eller fukt i skorstein",
      "Gammel teglpipe som smuldrer",
      "Pipe som ikke er godkjent",
    ],
    solutionsIntro: "Vi benytter riktige metoder basert på pipens tilstand:",
    solutions: [
      "Stålrør i pipe - fleksibelt og trygt",
      "Keramiske rør - svært holdbart og varmebestandig",
      "Tetting og utbedring",
    ],
    conclusion: "Rehabilitering av pipe er søknadspliktig arbeid. Vi håndterer hele prosessen: befaring og tilstandsvurdering, valg av metode, komplett søknad til kommunen, dokumentasjon underveis og ferdigmelding til brannvesen og kommune.",
    metaTitle: "Piperehabilitering | Rehabilitering av skorstein | Alt i Ild",
    metaDescription: "Spesialister på piperehabilitering i Molde og Møre og Romsdal. Stålrør, keramiske rør, tetting og utbedring. Gratis befaring og komplett søknadshåndtering.",
    keywords: "piperehabilitering Molde, skorstein rehabilitering, stålrør pipe, teglpipe, fyringsforbud",
  },
  {
    id: "stalpiper",
    slug: "stalpiper",
    icon: Shield,
    title: "Montering av isolerte stålpiper",
    shortTitle: "Stålpiper",
    description: "Mangler boligen skorstein, eller ønsker du en fleksibel plassering av ildstedet? Da er isolert stålpipe ofte den beste løsningen.",
    image: funkisOvn,
    galleryImages: [
      { src: stalpipeUtvendig, alt: "Isolert stålpipe montert utvendig på husvegg - Alt i Ild" },
      { src: stalpipeInnvendig, alt: "Moderne peisovn med stålpipe i stue - Alt i Ild" },
      { src: galleryStalpipe3, alt: "Svart stålpipe montert på husvegg" },
      { src: galleryStalpipe5, alt: "Utvendig stålpipe på hvit trevegg" },
      { src: galleryStalpipe7, alt: "Moderne peisovn med stålpipe innvendig", zoom: true },
      { src: galleryStalpipe2, alt: "Stålpipe gjennomføring på tak" },
      { src: galleryStalpipe4, alt: "Stålpipe gjennom glasstak i vinterhage", zoom: true, objectPosition: "center 60%" },
      { src: galleryStalpipe6, alt: "Gjennomføring i vegg klargjort for stålpipe" },
    ],
    intro: "Fordeler med stålpipe:",
    suitableFor: [
      "Rask installasjon",
      "Fleksibel plassering av ildsted",
      "Lav vekt - egnet for både nye og eldre bygg",
      "Kan føres gjennom vegg eller tak",
      "Minimalt inngrep i eksisterende konstruksjon",
      "Svært brannsikkert",
    ],
    typicalProjects: [
      "Nyinstallasjon av vedovn i hus uten pipe",
      "Utskifting av gammel pipe",
      "Plassering av ovn i kjeller, tilbygg eller loft",
      "Fritidsboliger og hytter",
    ],
    conclusion: "Vi sørger for riktig dimensjonering, brannsikre løsninger og komplett dokumentasjon.",
    metaTitle: "Isolerte stålpiper | Montering av stålpipe | Alt i Ild",
    metaDescription: "Montering av isolerte stålpiper i Molde og Møre og Romsdal. Fleksibel løsning for hus uten skorstein. Rask installasjon og komplett dokumentasjon.",
    keywords: "stålpipe montering, isolert stålpipe, skorstein stål, pipe hytte, vedovn uten pipe",
  },
  {
    id: "inspeksjon",
    slug: "inspeksjon",
    icon: Eye,
    title: "Inspeksjon & vurdering av pipe og ildsted",
    shortTitle: "Inspeksjon",
    description: "Opplever du problemer med pipen eller ildstedet? Da er det tid for en profesjonell inspeksjon.",
    image: installationImage,
    intro: "Opplever du problemer som:",
    symptoms: [
      "Dårlig trekk",
      "Røyk kommer inn i rommet",
      "Sotlukt",
      "Misfargede vegger",
      "Høyt vedforbruk",
      "Brannvesenet har gitt avvik",
    ],
    checkIntro: "Dette sjekker vi:",
    checks: [
      "Skorsteinsløp og tetthet",
      "Røykrør og overgang",
      "Brennkammer og pakninger",
      "Pipehøyde og trekkforhold",
      "Lufttilførsel i rommet",
      "Eventuelle brannfarlige forhold",
    ],
    conclusion: "Vi gir deg en tydelig rapport med anbefalt løsning - enten det gjelder mindre utbedringer, service eller full piperehabilitering.",
    metaTitle: "Inspeksjon av pipe og ildsted | Tilstandsvurdering | Alt i Ild",
    metaDescription: "Profesjonell inspeksjon og vurdering av pipe og ildsted i Molde. Få en tydelig rapport med anbefalte løsninger. Gratis befaring.",
    keywords: "pipeinspeksjon, tilstandsvurdering skorstein, kontroll ildsted, avvik brannvesen, dårlig trekk",
  },
  {
    id: "service",
    slug: "service",
    icon: Wrench,
    title: "Service & vedlikehold",
    shortTitle: "Service",
    description: "Regelmessig service sikrer trygg fyring, bedre varmeeffekt og mindre sot. Slitasje på deler er naturlig, og vedlikehold forhindrer større problemer som lekkasjer og dårlig trekk.",
    image: tjenesterPeis,
    intro: "Hva inngår i service?",
    services: [
      "Kontroll av røykrør og feste",
      "Sjekk av pakninger",
      "Kontroll av brennkammer",
      "Vurdering av trekk og lufttilførsel",
      "Sjekk for sprekkdannelser og misfarging",
    ],
    workIntro: "Vi utfører:",
    work: [
      "Pakningsskifte - viktig for korrekt forbrenning",
      "Glassbytte - ved skadet eller slitt ovnsglass",
      "Bytte av vermikulittplater - forbedrer forbrenning og varmeeffekt",
    ],
    conclusion: "Dette gjør ildstedet ditt tryggere og mer effektivt.",
    metaTitle: "Service og vedlikehold av peis og ovn | Alt i Ild",
    metaDescription: "Regelmessig service av peis og vedovn i Molde. Pakningsskifte, glassbytte, kontroll av brennkammer. Sikrer trygg fyring og bedre varmeeffekt.",
    keywords: "service peis, vedlikehold ovn, pakningsskifte, ovnsglass, brennkammer",
  },
  {
    id: "taksikring",
    slug: "taksikring",
    icon: Hammer,
    title: "Stige, taksikring & tilkomst til pipe",
    shortTitle: "Taksikring",
    description: "Feiervesenet krever trygg og sikker tilkomst til pipe. Vi monterer løsninger som oppfyller alle krav til tilkomst, sikkerhet og vedlikehold.",
    image: takstigeNy,
    galleryImages: [
      { src: galleryTakstigeSno, alt: "Takstige og pipe på snødekt tak - Alt i Ild" },
      { src: galleryTakstigePlatetak, alt: "Takstige montert på platetak - Alt i Ild Molde" },
      { src: galleryTakstigePipe, alt: "Takstige langs pipe på husvegg - Alt i Ild" },
    ],
    intro: "Vi monterer:",
    includes: [
      "Pipestige",
      "Stigetrinn",
      "Takstige",
      "Pipeplattform / plattform for feiing",
      "Sikringskroker",
    ],
    metaTitle: "Taksikring og pipestige | Tilkomst for feiing | Alt i Ild",
    metaDescription: "Montering av pipestige, takstige og taksikring i Molde. Oppfyller alle krav fra feiervesenet. Trygg tilkomst til pipe for vedlikehold.",
    keywords: "pipestige, takstige, taksikring, tilkomst pipe, feiervesen krav",
  },
  {
    id: "darlig-trekk",
    slug: "darlig-trekk",
    icon: Wind,
    title: "Dårlig trekk",
    shortTitle: "Dårlig trekk",
    description: "Dårlig trekk i pipen er et av de vanligste problemene vi løser. Feil trekk kan føre til røyk i rommet, dårlig forbrenning, sotutslag og ubehagelig lukt - spesielt i moderne, tette boliger.",
    image: takUtside,
    galleryImages: [
      { src: galleryExodraft1, alt: "Exodraft røyksuger på pipe med fjordutsikt - Alt i Ild Molde" },
      { src: galleryExodraft2, alt: "Exodraft røyksuger montert på tegltak - Alt i Ild" },
      { src: galleryExodraft3, alt: "Exodraft røyksuger nærbilde - piperehabilitering Molde" },
      { src: galleryPipehatt1, alt: "Roterende pipehatt med fjordutsikt - Alt i Ild" },
      { src: galleryPipehatt2, alt: "Roterende pipehatt nærbilde - dårlig trekk løsning" },
    ],
    intro: "Vanlige årsaker til dårlig trekk:",
    causes: [
      "Undertrykk i huset",
      "Kald pipe",
      "Fukt eller lekkasjer i skorstein",
      "Feil dimensjon på pipe",
      "Tette røykrør",
      "Moderne bygg med lite naturlig ventilasjon",
      "Lav pipehøyde",
      "Feil montert ildsted",
    ],
    solutionsIntro: "Løsninger vi tilbyr:",
    solutions: [
      "Exodraft røyksuger - markedets beste løsning for varig trekkforbedring",
      "Tilførsel av friskluft (luftventiler eller rør)",
      "Justering av røykrør",
      "Optimalisering av pipehøyde og tverrsnitt",
      "Rehabilitering ved skader",
    ],
    benefitsIntro: "En røyksuger gir:",
    benefits: [
      "Stabilt og kraftig trekk i all slags vær",
      "Tryggere og renere forbrenning",
      "Enklere opptenning",
      "Mindre røyk i rommet",
      "Bedre varmeeffekt",
    ],
    metaTitle: "Dårlig trekk i pipe | Exodraft røyksuger | Alt i Ild",
    metaDescription: "Løsninger for dårlig trekk i pipen. Exodraft røyksuger, friskluft-tilførsel og piperehabilitering. Spesialister i Molde og Møre og Romsdal.",
    keywords: "dårlig trekk pipe, røyksuger Exodraft, røyk i rommet, trekkproblemer, ventilasjon peis",
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find(service => service.slug === slug);
};
