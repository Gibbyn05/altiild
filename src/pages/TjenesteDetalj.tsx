import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import ImageLightbox from "@/components/ImageLightbox";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";

const TjenesteDetalj = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  if (!service) {
    return <Navigate to="/tjenester" replace />;
  }

  const currentIndex = services.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  const Icon = service.icon;

  return (
    <Layout>
      <SEO 
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/tjenester/${service.slug}`}
        keywords={service.keywords}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service.title,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Alt i Ild",
            "telephone": "+47 98 844 844"
          },
          "areaServed": "Møre og Romsdal",
          "description": service.description
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-[40vh] md:min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50 md:from-charcoal/90 md:via-charcoal/70 md:to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Link 
              to="/tjenester" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Alle tjenester</span>
            </Link>
            <div className="flex items-center gap-3 md:gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground">
                {service.title}
              </h1>
            </div>
            <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {service.intro && (
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-4">
                    {service.intro}
                  </h2>
                  
                  {service.features && (
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {service.problems && (
                    <ul className="space-y-3">
                      {service.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {service.causes && (
                    <ul className="space-y-3">
                      {service.causes.map((cause) => (
                        <li key={cause} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{cause}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {service.suitableFor && (
                    <ul className="space-y-3">
                      {service.suitableFor.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {service.symptoms && (
                    <ul className="space-y-3">
                      {service.symptoms.map((symptom) => (
                        <li key={symptom} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {service.services && (
                    <ul className="space-y-3">
                      {service.services.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {service.includes && (
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {service.solutionsIntro && (
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-4">
                    {service.solutionsIntro}
                  </h2>
                  {service.solutions && (
                    <ul className="space-y-3">
                      {service.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {service.checkIntro && (
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-4">
                    {service.checkIntro}
                  </h2>
                  {service.checks && (
                    <ul className="space-y-3">
                      {service.checks.map((check) => (
                        <li key={check} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{check}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {service.workIntro && (
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-4">
                    {service.workIntro}
                  </h2>
                  {service.work && (
                    <ul className="space-y-3">
                      {service.work.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {service.typicalProjects && (
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-4">
                    Typiske prosjekter
                  </h2>
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

              {service.benefitsIntro && (
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-4">
                    {service.benefitsIntro}
                  </h2>
                  {service.benefits && (
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {service.galleryImages && service.galleryImages.length > 0 && (
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-4">
                    Bilder fra våre prosjekter
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.galleryImages.map((img, idx) => (
                      <figure
                        key={idx}
                        className="rounded-xl overflow-hidden border border-border/50 cursor-pointer"
                        onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className={`w-full h-full object-cover block hover:scale-105 transition-transform duration-300 ${img.zoom ? 'scale-125' : ''}`}
                            style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="text-[10px] text-muted-foreground/60 px-2 py-1 text-center">
                          {img.alt}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {service.conclusion && (
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.conclusion}
                </p>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA Card */}
                <div className="bg-muted/50 rounded-2xl p-6 border border-border/50">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Trenger du hjelp?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Vi tilbyr gratis og uforpliktende befaring.
                  </p>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <Link to="/kontakt">
                      Bestill gratis befaring
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="mt-4 text-center">
                    <a 
                      href="tel:98844844" 
                      className="text-primary hover:underline font-medium"
                    >
                      Ring +47 98 844 844
                    </a>
                  </div>
                </div>

                {/* Other Services */}
                <div className="bg-background rounded-2xl p-6 border border-border/50">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    Andre tjenester
                  </h3>
                  <ul className="space-y-2">
                    {services.filter(s => s.slug !== slug).slice(0, 4).map((s) => {
                      const ServiceIcon = s.icon;
                      return (
                        <li key={s.slug}>
                          <Link 
                            to={`/tjenester/${s.slug}`}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                          >
                            <ServiceIcon className="h-4 w-4 text-primary" />
                            <span>{s.shortTitle}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Link 
                    to="/tjenester" 
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 hover:underline"
                  >
                    Se alle tjenester
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
            {prevService ? (
              <Link 
                to={`/tjenester/${prevService.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors flex-1"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Forrige</p>
                  <p className="font-medium">{prevService.shortTitle}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
            
            {nextService ? (
              <Link 
                to={`/tjenester/${nextService.slug}`}
                className="flex items-center justify-end gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors flex-1 text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground">Neste</p>
                  <p className="font-medium">{nextService.shortTitle}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-charcoal">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Klar for å komme i gang?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Kontakt oss i dag for en uforpliktende befaring og prisestimat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">
                Bestill gratis befaring
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+4798844844">Ring +47 98 844 844</a>
            </Button>
          </div>
        </div>
      </section>
      <ImageLightbox
        src={lightbox?.src || ""}
        alt={lightbox?.alt || ""}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />
    </Layout>
  );
};

export default TjenesteDetalj;
