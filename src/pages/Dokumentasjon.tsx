import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  CheckCircle,
  FileCheck,
  Shield,
  ClipboardCheck,
  Building,
  Home,
  AlertTriangle
} from "lucide-react";

import content from "@/content/dokumentasjon.json";

import dokumentasjonHero from "@/assets/dokumentasjon-hero.png";

const documentationStepIcons = [ClipboardCheck, FileCheck, Shield];

const Dokumentasjon = () => {
  return (
    <Layout>
      <SEO
        title="Dokumentasjon | Trygg og godkjent installasjon | Alt i Ild"
        description="Alt i Ild håndterer all dokumentasjon for ildsted og skorstein. Kommunesøknad, ferdigmelding til brannvesen og Boligmappa. Gratis befaring i Molde og Møre og Romsdal."
        canonical="/dokumentasjon"
        keywords="dokumentasjon ildsted, ferdigmelding brannvesen, søknadspliktig peis, Boligmappa, godkjent installasjon"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dokumentasjonHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              {content.hero.eyebrow}
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              {content.hero.title}
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Documentation Matters */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                {content.duringWorkSection.eyebrow}
              </p>
              <h2 className="font-display text-4xl font-semibold mb-6">
                {content.duringWorkSection.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {content.duringWorkSection.paragraph1}
              </p>

              <p className="font-medium mb-3">{content.duringWorkSection.listIntro}</p>
              <ul className="space-y-3 mb-6">
                {content.duringWorkSection.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground">
                {content.duringWorkSection.paragraph2}
              </p>
            </div>
            <div>
              <img
                src={dokumentasjonHero}
                alt="Dokumentert pipeinstallasjon"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Process */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              {content.processSection.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              {content.processSection.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.processSection.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {content.processSection.steps.map((step, index) => {
              const StepIcon = documentationStepIcons[index];
              return (
                <div key={step.title} className="flex items-center">
                  <div className="bg-background rounded-2xl p-6 text-center hover-lift w-full md:w-auto md:min-w-[280px]">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-4">
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                  {index < content.processSection.steps.length - 1 && (
                    <ArrowRight className="hidden md:block h-8 w-8 text-primary mx-4 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Document */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <FileCheck className="h-8 w-8 text-primary" />
                  <h3 className="font-display text-xl font-semibold">{content.whatWeDocumentSection.cardTitle}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {content.whatWeDocumentSection.cardParagraph}
                </p>
                <p className="font-medium mb-3">{content.whatWeDocumentSection.cardListIntro}</p>
                <ul className="space-y-4">
                  {content.whatWeDocumentSection.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 text-sm">
                  {content.whatWeDocumentSection.cardNote}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                {content.whatWeDocumentSection.eyebrow}
              </p>
              <h2 className="font-display text-4xl font-semibold mb-6">
                {content.whatWeDocumentSection.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {content.whatWeDocumentSection.paragraph1}
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                {content.whatWeDocumentSection.paragraph2}
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/kontakt">
                  {content.whatWeDocumentSection.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${dokumentasjonHero})` }}
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
              {content.cta.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Dokumentasjon;
