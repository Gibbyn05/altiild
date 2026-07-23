import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Shield, Award, Heart, Users, MapPin, CheckCircle, ClipboardCheck, Wrench, FileCheck, Eye } from "lucide-react";
import larsKlemmImage from "@/assets/lars-klemm.jpg";
import hvitOvn from "@/assets/hvit-ovn.jpg";
import omOssHero from "@/assets/om-oss-hero.png";
import teamImage from "@/assets/team.jpg";
import galleryPipeFjord from "@/assets/gallery-pipe-fjord.jpg";
import content from "@/content/om-oss.json";

// Ikoner beholdes i koden og kobles til tekst fra JSON via rekkefølge
const valueIcons = [Shield, Award, Users, MapPin, Heart, Award];
const values = content.valuesSection.values.map((value, index) => ({
  ...value,
  icon: valueIcons[index]
}));

const workProcessIcons = [Eye, ClipboardCheck, Wrench, FileCheck, Shield];
const workProcess = content.workProcessSection.steps.map((step, index) => ({
  ...step,
  icon: workProcessIcons[index]
}));
const OmOss = () => {
  return <Layout>
      <SEO title="Om oss | Alt i Ild - Lokal fagbedrift i Molde" description="Alt i Ild AS er en lokal fagbedrift i Molde, spesialisert på piperehabilitering, ildstedsmontering, stålpiper og inspeksjon. Sertifiserte montører med mange års erfaring." keywords="Alt i Ild, peis ekspert Molde, ovn spesialist Møre og Romsdal, sertifisert peismontør, Lars Klemm, piperehabilitering" canonical="/om-oss" jsonLd={{
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Alt i Ild",
        "founder": {
          "@type": "Person",
          "name": "Lars Klemm"
        },
        "description": "Sertifisert montør, kontrollør og fagansvarlig til søknadspliktig arbeid på ildsteder og skorsteiner.",
        "areaServed": "Møre og Romsdal"
      }
    }} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${omOssHero})`
      }}>
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

      {/* 2.1 Hvem vi er */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="lg:my-[125px]">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                {content.whoWeAre.title}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                {content.whoWeAre.paragraph1}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                {content.whoWeAre.paragraph2}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {content.whoWeAre.expertise.map(item => <li key={item} className="flex items-start gap-2 md:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="relative order-first lg:order-last">
              <img src={larsKlemmImage} alt="Lars Klemm - grunnlegger av Alt i Ild" className="rounded-xl md:rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Spesialkompetanse og sertifiseringer */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-background rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                {content.competenceAndCertifications.competenceTitle}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                {content.competenceAndCertifications.competenceIntro}
              </p>
              <ul className="space-y-2 md:space-y-3">
                {content.competenceAndCertifications.specialCompetence.map(item => <li key={item} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="bg-background rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                {content.competenceAndCertifications.certificationsTitle}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                {content.competenceAndCertifications.certificationsIntro}
              </p>
              <ul className="space-y-2 md:space-y-3">
                {content.competenceAndCertifications.certifications.map(item => <li key={item} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
              <p className="text-muted-foreground mt-4 md:mt-6 text-xs md:text-sm">
                {content.competenceAndCertifications.certificationsFooter}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 Våre verdier */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              {content.valuesSection.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
              {content.valuesSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {values.map(value => <div key={value.title} className="bg-muted rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 mb-3 md:mb-4 lg:mb-6">
                  <value.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <h3 className="font-display text-sm md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {value.description}
                </p>
              </div>)}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base lg:text-lg text-foreground">
              {content.valuesSection.callout}
            </p>
          </div>
        </div>
      </section>

      {/* 2.2 Arbeidsmetode */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              {content.workProcessSection.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
              {content.workProcessSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {workProcess.map((item, index) => <div key={item.step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-primary text-primary-foreground mb-2 md:mb-3 lg:mb-4">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7" />
                </div>
                <div className="text-primary font-bold text-[10px] md:text-xs lg:text-sm mb-1 md:mb-2">{item.step}</div>
                <h3 className="font-display text-xs md:text-sm lg:text-lg font-semibold mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-[10px] md:text-xs lg:text-sm hidden sm:block">
                  {item.desc}
                </p>
                {index < workProcess.length - 1 && <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-primary/20" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* 2.3 Lokal forankring */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src={galleryPipeFjord} alt="Utsikt over Molde og fjorden" className="rounded-xl md:rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
                {content.localSection.eyebrow}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                {content.localSection.title}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                {content.localSection.paragraph1}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {content.localSection.benefits.map(item => <li key={item} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                {content.localSection.paragraph2}
              </p>
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {content.localSection.areas.map(area => <span key={area} className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-full text-xs md:text-sm text-foreground border border-border">
                    {area}
                  </span>)}
              </div>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-8">
                {content.localSection.paragraph3}
              </p>
              <Button variant="default" size="lg" className="animate-gentle-pulse text-sm md:text-base" asChild>
                <Link to="/kontakt">
                  {content.localSection.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default OmOss;
