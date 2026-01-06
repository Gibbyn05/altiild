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
  Hammer
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
    description: "En trygg og riktig montert vedovn eller peisovn er avgjørende for både varmeeffekt og brannsikkerhet. Alt i Ild AS tilbyr fagmessig montering av ildsted i hele Møre og Romsdal – for både nye og eldre boliger.",
    image: hvitOvn,
    intro: "Vi vurderer alltid:",
    features: [
      "Trekkforhold i skorsteinen",
      "Lufttilførsel i rommet",
      "Riktig dimensjon på røykrør",
      "Avstand til brennbart materiale",
      "Gulvplate og brannsikring",
      "Tilstand på eksisterende skorstein",
    ],
    conclusion: "Målet er en installasjon som fungerer optimalt fra første fyring – uten røyk i rommet, dårlig trekk eller brannrisiko. Vi hjelper deg også med valg av riktig ildsted: moderne, rentbrennende ovner, klassiske vedovner, større peisinnsatser eller kompakte løsninger for mindre rom. Etter montering mottar du komplett dokumentasjon, og vi sender ferdigmelding til kommunen og brannvesenet på dine vegne.",
  },
  {
    id: "piperehabilitering",
    icon: Construction,
    title: "Piperehabilitering",
    description: "En slitt eller skadet pipe kan føre til dårlig trekk, sotlukt, røyklekkasje, sprekkdannelser og i verste fall fyringsforbud. Alt i Ild AS er spesialister på piperehabilitering i Molde og hele Møre og Romsdal.",
    image: pipeTak,
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
      "Stålrør i pipe – fleksibelt og trygt",
      "Keramiske rør – svært holdbart og varmebestandig",
      "Tetting og utbedring",
    ],
    conclusion: "Rehabilitering av pipe er søknadspliktig arbeid. Vi håndterer hele prosessen: befaring og tilstandsvurdering, valg av metode, komplett søknad til kommunen, dokumentasjon underveis og ferdigmelding til brannvesen og kommune.",
  },
  {
    id: "stalpiper",
    icon: Shield,
    title: "Montering av isolerte stålpiper",
    description: "Mangler boligen skorstein, eller ønsker du en fleksibel plassering av ildstedet? Da er isolert stålpipe ofte den beste løsningen.",
    image: funkisOvn,
    intro: "Fordeler med stålpipe:",
    suitableFor: [
      "Rask installasjon",
      "Fleksibel plassering av ildsted",
      "Lav vekt – egnet for både nye og eldre bygg",
      "Kan føres gjennom vegg eller tak",
      "Minimalt inngrep i eksisterende konstruksjon",
      "Svært brannsikkert",
    ],
    typicalProjects: [
      "Nyinstallasjon av vedovn i hus uten pipe",
      "Utskifting av gammel pipe",
    ],
    conclusion: "Vi sørger for riktig dimensjonering, brannsikre løsninger og komplett dokumentasjon.",
  },
  {
    id: "inspeksjon",
    icon: Eye,
    title: "Inspeksjon & vurdering av pipe og ildsted",
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
    conclusion: "Vi gir deg en tydelig rapport med anbefalt løsning – enten det gjelder mindre utbedringer, service eller full piperehabilitering.",
  },
  {
    id: "service",
    icon: Wrench,
    title: "Service & vedlikehold",
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
      "Pakningsskifte – viktig for korrekt forbrenning",
      "Glassbytte – ved skadet eller slitt ovnsglass",
      "Bytte av vermikulittplater – forbedrer forbrenning og varmeeffekt",
    ],
    conclusion: "Dette gjør ildstedet ditt tryggere og mer effektivt.",
  },
  {
    id: "taksikring",
    icon: Hammer,
    title: "Stige, taksikring & tilkomst til pipe",
    description: "Feiervesenet krever trygg og sikker tilkomst til pipe. Vi monterer løsninger som oppfyller alle krav til tilkomst, sikkerhet og vedlikehold.",
    image: pipeTak,
    intro: "Vi monterer:",
    includes: [
      "Pipestige",
      "Stigetrinn",
      "Takstige",
      "Pipeplattform / plattform for feiing",
      "Sikringskroker",
    ],
  },
  {
    id: "darlig-trekk",
    icon: Wind,
    title: "Dårlig trekk & røyksugere (Exodraft)",
    description: "Dårlig trekk i pipen er et av de vanligste problemene vi løser. Feil trekk kan føre til røyk i rommet, dårlig forbrenning, sotutslag og ubehagelig lukt – spesielt i moderne, tette boliger.",
    image: funkisOvn,
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
      "Exodraft røyksuger – markedets beste løsning for varig trekkforbedring",
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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
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
                
                {service.intro && (
                  <p className="font-medium mb-3">{service.intro}</p>
                )}
                
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
                  <ul className="space-y-3 mb-6">
                    {service.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{problem}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {service.solutionsIntro && (
                  <p className="font-medium mb-3">{service.solutionsIntro}</p>
                )}
                
                {service.solutions && (
                  <ul className="space-y-3 mb-6">
                    {service.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {service.suitableFor && (
                  <ul className="space-y-3 mb-6">
                    {service.suitableFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.typicalProjects && (
                  <div className="mb-6">
                    <p className="font-medium mb-3">Typiske prosjekter:</p>
                    <ul className="space-y-3">
                      {service.typicalProjects.map((project) => (
                        <li key={project} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {service.symptoms && (
                  <ul className="space-y-3 mb-6">
                    {service.symptoms.map((symptom) => (
                      <li key={symptom} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.checkIntro && (
                  <p className="font-medium mb-3">{service.checkIntro}</p>
                )}

                {service.checks && (
                  <ul className="space-y-3 mb-6">
                    {service.checks.map((check) => (
                      <li key={check} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{check}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {service.services && (
                  <ul className="space-y-3 mb-6">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.workIntro && (
                  <p className="font-medium mb-3">{service.workIntro}</p>
                )}

                {service.work && (
                  <ul className="space-y-3 mb-6">
                    {service.work.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {service.includes && (
                  <ul className="space-y-3 mb-6">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.causes && (
                  <ul className="space-y-3 mb-6">
                    {service.causes.map((cause) => (
                      <li key={cause} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{cause}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.benefitsIntro && (
                  <p className="font-medium mb-3">{service.benefitsIntro}</p>
                )}

                {service.benefits && (
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.conclusion && (
                  <p className="text-muted-foreground mb-6">{service.conclusion}</p>
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
