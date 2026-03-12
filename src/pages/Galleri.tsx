import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, X } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroImage from "@/assets/hero-fireplace.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";
import installationImage from "@/assets/installation-work.jpg";

// Real business images
import funkisOvn from "@/assets/funkis-ovn.jpg";
import hvitOvn from "@/assets/hvit-ovn.jpg";
import hvitOvn2 from "@/assets/hvit-ovn-2.jpg";
import ovnSolrik from "@/assets/ovn-solrik.jpg";
import pipeTak from "@/assets/pipe-tak.jpg";
import takInnside from "@/assets/tak-innside.jpg";
import takUtside from "@/assets/tak-utside.jpg";

// New gallery images
import galleryModernPeis from "@/assets/gallery-modern-peis.png";
import galleryPipeSol from "@/assets/gallery-pipe-sol.jpg";
import galleryPipeFjord from "@/assets/gallery-pipe-fjord.jpg";
import galleryOvnGra from "@/assets/gallery-ovn-gra.jpg";
import galleryPipeUtvendig from "@/assets/gallery-pipe-utvendig.jpg";
import galleryOvnSvart from "@/assets/gallery-ovn-svart.jpg";
import galleryPipeRehab from "@/assets/gallery-pipe-rehabilitering.jpg";
import galleryStalpipeSvart from "@/assets/gallery-stalpipe-svart.jpg";
import galleryTakstigePlatetak from "@/assets/gallery-takstige-platetak.jpg";
import galleryTakstigeSno from "@/assets/gallery-takstige-sno.jpg";
import galleryStalpipeTakstige from "@/assets/gallery-stalpipe-takstige.jpg";
import galleryTakstigePipe from "@/assets/gallery-takstige-pipe.jpg";
import galleryStalpipePlatetak from "@/assets/gallery-stalpipe-platetak.jpg";
import galleryStalpipeFeieplattform from "@/assets/gallery-stalpipe-feieplattform.jpg";

// Before/After images
import beforeFireplace from "@/assets/before-fireplace.jpg";
import afterFireplace from "@/assets/after-fireplace.jpg";
import beforeStove from "@/assets/before-stove.jpg";
import afterStove from "@/assets/after-stove.jpg";

const projects = [
  {
    id: 2,
    image: hvitOvn2,
    title: "Hvit hjørnepeis med glass",
    location: "Molde",
    category: "Peis",
    description: "Moderne hvit peis med treveis glass som gir utsikt til flammene fra flere vinkler.",
  },
  {
    id: 3,
    image: hvitOvn,
    title: "Hvit frittstående peis",
    location: "Ålesund",
    category: "Peis",
    description: "Stilren hvit peis med hjørneglassløsning, perfekt plassert i overgangen mellom rom.",
  },
  {
    id: 4,
    image: ovnSolrik,
    title: "Vedovn i hagestue",
    location: "Kristiansund",
    category: "Ovn",
    description: "Klassisk vedovn installert i lys hagestue med panoramautsikt og naturlige omgivelser.",
  },
  {
    id: 5,
    image: pipeTak,
    title: "Piperehabilitering",
    location: "Molde",
    category: "Installasjon",
    description: "Profesjonell pipearbeid på tak med ny pipehatt og beslag, med utsikt mot Molde by.",
  },
  {
    id: 8,
    image: galleryModernPeis,
    title: "Modern hjørnepeis med panorama",
    location: "Molde",
    category: "Peis",
    description: "Stilfull grå hjørnepeis med tresiders glass, integrert i moderne stue med utsikt over byen.",
  },
  {
    id: 9,
    image: galleryPipeSol,
    title: "Pipehatt på hytte",
    location: "Molde",
    category: "Installasjon",
    description: "Stålpipe med pipehatt montert på hytte - Alt i Ild Molde.",
  },
  {
    id: 11,
    image: galleryPipeFjord,
    title: "Stålpipe med fjordutsikt",
    location: "Molde",
    category: "Installasjon",
    description: "Blankt stålpipehode montert på tak med spektakulær utsikt over fjorden og fjellene.",
  },
  {
    id: 12,
    image: galleryOvnGra,
    title: "Moderne vedovn med grå vegg",
    location: "Molde",
    category: "Ovn",
    description: "Stilren svart vedovn på glassplate, montert mot grå pusset vegg i lys stue.",
  },
  {
    id: 13,
    image: galleryPipeUtvendig,
    title: "Pipehatt på tak",
    location: "Molde",
    category: "Installasjon",
    description: "Svart pipehatt og beslag montert på tak - Alt i Ild Molde.",
  },
  {
    id: 14,
    image: galleryOvnSvart,
    title: "Svart vedovn i stue",
    location: "Molde",
    category: "Ovn",
    description: "Elegant svart vedovn på glassplate mellom store vinduer med vinterutsikt.",
  },
  {
    id: 15,
    image: galleryPipeRehab,
    title: "Piperehabilitering - foringsrør",
    location: "Molde",
    category: "Installasjon",
    description: "Piperehabilitering med keramiske foringsrør sett ovenfra - Alt i Ild Molde.",
  },
  {
    id: 16,
    image: galleryStalpipeSvart,
    title: "Isolert stålpipe veggmontert",
    location: "Molde",
    category: "Installasjon",
    description: "Isolert stålpipe veggmontert på hvitt hus med fjellutsikt – Alt i Ild Molde.",
  },
  {
    id: 17,
    image: galleryTakstigePlatetak,
    title: "Takstige på platetak",
    location: "Møre og Romsdal",
    category: "Taksikring",
    description: "Takstige montert på platetak for trygg tilkomst til pipe for feiing.",
  },
  {
    id: 18,
    image: galleryTakstigeSno,
    title: "Takstige og pipe vinterstid",
    location: "Møre og Romsdal",
    category: "Taksikring",
    description: "Takstige og pipe på snødekt platetak med stålpipe og feieplattform.",
  },
  {
    id: 19,
    image: galleryStalpipeTakstige,
    title: "Gjennomføring i tak – stålpipe",
    location: "Møre og Romsdal",
    category: "Installasjon",
    description: "Gjennomføring av stålpipe i tak med lasermåling – Alt i Ild Molde.",
  },
  {
    id: 20,
    image: galleryTakstigePipe,
    title: "Takstige langs husvegg",
    location: "Møre og Romsdal",
    category: "Taksikring",
    description: "Takstige montert langs husvegg for tilkomst til pipe og tak.",
  },
  {
    id: 21,
    image: galleryStalpipePlatetak,
    title: "Stålpipe gjennom vinterhage",
    location: "Møre og Romsdal",
    category: "Installasjon",
    description: "Isolert stålpipe montert gjennom vinterhage med pipehatt – Alt i Ild Molde.",
  },
  {
    id: 22,
    image: galleryStalpipeFeieplattform,
    title: "Utvendig stålpipe på hus",
    location: "Møre og Romsdal",
    category: "Installasjon",
    description: "Utvendig isolert stålpipe montert på moderne hus – Alt i Ild Molde.",
  },
  {
    id: 23,
    image: takInnside,
    title: "Hagestue med ovn",
    location: "Møre og Romsdal",
    category: "Ovn",
    description: "Vedovn installert i moderne hagestue med glasstak og utsikt.",
  },
  {
    id: 24,
    image: takUtside,
    title: "Takarbeid utvendig",
    location: "Møre og Romsdal",
    category: "Installasjon",
    description: "Takarbeid og pipegjennomføring sett fra utsiden.",
  },
];

const GalleryCarousel = ({ 
  projects: carouselProjects, 
  onSelectProject,
  reverse = false 
}: { 
  projects: typeof projects;
  onSelectProject: (project: typeof projects[0]) => void;
  reverse?: boolean;
}) => {
  // Duplicate items for seamless loop
  const duplicatedProjects = [...carouselProjects, ...carouselProjects];
  
  return (
    <div className="overflow-hidden group/carousel">
      <div 
        className={`flex gap-4 px-4 md:px-8 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} group-hover/carousel:[animation-play-state:paused]`}
        style={{ width: 'max-content' }}
      >
        {duplicatedProjects.map((project, index) => (
          <button
            key={`${project.id}-${index}`}
            onClick={() => onSelectProject(project)}
            className="group flex-none w-[260px] md:w-[320px] overflow-hidden rounded-xl text-left"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary text-xs font-medium mb-1">{project.category}</p>
                  <h3 className="text-primary-foreground font-display text-base font-semibold mb-0.5 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-xs">{project.location}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const Galleri = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Layout>
      <SEO 
        title="Galleri | Se våre peis- og ovnsprosjekter | Alt i Ild"
        description="Bli inspirert av våre tidligere peis- og ovnsinstallasjoner i Møre og Romsdal. Se bilder fra prosjekter i Molde, Ålesund, Kristiansund og mer."
        keywords="peis galleri, ovn bilder, peisinstallasjon Molde, vedovn prosjekter, før og etter peis"
        canonical="/galleri"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Alt i Ild Prosjektgalleri",
          "description": "Galleri med peis- og ovnsinstallasjoner fra Alt i Ild i Møre og Romsdal",
          "url": "https://altiild.no/galleri"
        }}
      />
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-[35vh] md:min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50 md:from-charcoal/90 md:via-charcoal/70 md:to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              Galleri
            </p>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 md:mb-6 text-primary-foreground">
              Våre prosjekter
            </h1>
            <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed">
              Bli inspirert av et utvalg av våre tidligere installasjoner. 
              Hver peis og ovn er unik, tilpasset kundens ønsker og bolig.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Carousels */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background overflow-hidden pb-6 md:pb-8">
        <div className="container-wide mb-6 md:mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              Utvalgte prosjekter
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
              Se hva vi har skapt
            </h2>
          </div>
        </div>

        <GalleryCarousel projects={projects.slice(0, 6)} onSelectProject={setSelectedProject} />
      </section>

      <section className="bg-background overflow-hidden pb-8 md:pb-16">
        <GalleryCarousel projects={projects.slice(6)} onSelectProject={setSelectedProject} reverse />
      </section>

      {/* Before/After Section */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              Før og etter
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
              Se transformasjonen
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              Dra for å se forskjellen før og etter våre installasjoner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage={beforeStove}
              afterImage={afterStove}
            />
            <BeforeAfterSlider
              beforeImage={beforeFireplace}
              afterImage={afterFireplace}
            />
          </div>
        </div>
      </section>
      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-background rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-[4/3] sm:aspect-video object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-charcoal/50 text-primary-foreground flex items-center justify-center hover:bg-charcoal/70 transition-colors"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="p-4 sm:p-8">
              <p className="text-primary text-xs sm:text-sm font-medium mb-1 sm:mb-2">{selectedProject.category} • {selectedProject.location}</p>
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-muted">
        <div className="container-narrow text-center px-6">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
            Liker du det du ser?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            Vi kan skape noe like flott for deg. Kontakt oss for en uforpliktende prat.
          </p>
          <Button variant="default" size="lg" className="text-sm md:text-base" asChild>
            <Link to="/kontakt">
              Kontakt oss
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Galleri;
