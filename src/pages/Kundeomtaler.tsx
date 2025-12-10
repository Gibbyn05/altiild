import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Star, ArrowRight, Quote } from "lucide-react";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: "Kari og Ola Nordmann",
    location: "Ålesund",
    rating: 5,
    text: "Alt i Ild leverte langt over forventning. Fra første konsultasjon til ferdig installert peis – alt gikk knirkefritt. Hans Erik og teamet var profesjonelle, punktlige og ryddige. Nå koser vi oss foran peisen hver kveld!",
    project: "Moderne peisinnstats i stue",
  },
  {
    id: 2,
    image: testimonial2,
    name: "Ingrid Solheim",
    location: "Molde",
    rating: 5,
    text: "Jeg var usikker på hvilken ovn som passet best for mitt lille hus, men rådgivningen fra Alt i Ild var fantastisk. De anbefalte en vedovn som både varmer godt og ser flott ut. Veldig fornøyd kunde!",
    project: "Vedovn i eldre trehus",
  },
  {
    id: 3,
    image: testimonial3,
    name: "Per Hansen",
    location: "Kristiansund",
    rating: 5,
    text: "Hytta vår trengte en skikkelig varmekilde, og Alt i Ild leverte akkurat det vi trengte. Solid håndverk og god oppfølging. Anbefales på det sterkeste til alle som vurderer peis eller ovn.",
    project: "Steinpeis på fjellhytte",
  },
];

const stats = [
  { value: "1000+", label: "Fornøyde kunder" },
  { value: "4.9", label: "Gjennomsnittlig vurdering" },
  { value: "15+", label: "År i bransjen" },
  { value: "100%", label: "Garanti på arbeid" },
];

const Kundeomtaler = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${stoveImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Kundeomtaler
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              Hva kundene sier
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Vi er stolte av jobben vi gjør og tilbakemeldingene vi får. 
              Her er noen ord fra våre fornøyde kunder.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-2xl p-8 hover-lift relative"
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                  Prosjekt: {testimonial.project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center">
            <Quote className="h-16 w-16 text-primary mx-auto mb-8" />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-secondary-foreground mb-8 leading-relaxed">
              "Alt i Ild forandret hjemmet vårt. Peisen har blitt husets hjerte, 
              et naturlig samlingssted for hele familien. Profesjonelle fra 
              start til slutt!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-secondary-foreground/70">|</span>
              <span className="text-secondary-foreground">Familie Berge, Ørsta</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Vil du bli vår neste fornøyde kunde?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Ta kontakt for en uforpliktende prat om dine ønsker.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/kontakt">
              Be om tilbud
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Kundeomtaler;
