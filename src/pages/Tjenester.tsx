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

import content from "@/content/tjenester.json";

const serviceMeta = [
  { id: "montering", icon: Flame },
  { id: "piperehabilitering", icon: Construction },
  { id: "stalpiper", icon: Shield },
  { id: "inspeksjon", icon: Eye },
  { id: "service", icon: Wrench },
  { id: "taksikring", icon: Hammer },
  { id: "darlig-trekk", icon: Wind },
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
            "telephone": "+47 98 844 844"
          },
          "areaServed": "Møre og Romsdal",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Våre tjenester",
            "itemListElement": content.services.map(s => ({
              "@type": "Offer",
              "itemOffered": {"@type": "Service", "name": s.title}
            }))
          }
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-[40vh] md:min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${content.hero.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50 md:from-charcoal/90 md:via-charcoal/70 md:to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              {content.hero.eyebrow}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 md:mb-6 text-primary-foreground">
              {content.hero.title}
            </h1>
            <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-wide space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {content.services.map((service, index) => {
            const meta = serviceMeta[index];
            const Icon = meta.icon;
            return (
            <div
              key={meta.id}
              id={meta.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6">
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
                    <p className="font-medium mb-3">{content.typicalProjectsLabel}</p>
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
                    {content.ctaButton}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                />
                {service.extraImages && service.extraImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {service.extraImages.map((extra, i) => (
                      <figure key={i} className="space-y-2">
                        <img
                          src={extra.image}
                          alt={extra.alt}
                          className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover"
                        />
                        {extra.caption && (
                          <figcaption className="text-xs text-muted-foreground text-center">{extra.caption}</figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              {content.process.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.process.steps.map((item) => (
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
          style={{ backgroundImage: `url(${content.ctaImage})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto">
            {content.cta.description}
          </p>
          <Button variant="hero" size="xl" className="animate-gentle-pulse" asChild>
            <Link to="/kontakt">
              {content.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Tjenester;
