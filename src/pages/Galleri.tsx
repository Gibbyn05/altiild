import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, X } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import content from "@/content/galleri.json";

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

// Image imports and stable ids stay in code; text comes from galleri.json (by index)
const projectMeta = [
  { id: 2, image: hvitOvn2 },
  { id: 3, image: hvitOvn },
  { id: 4, image: ovnSolrik },
  { id: 5, image: pipeTak },
  { id: 8, image: galleryModernPeis },
  { id: 9, image: galleryPipeSol },
  { id: 11, image: galleryPipeFjord },
  { id: 12, image: galleryOvnGra },
  { id: 13, image: galleryPipeUtvendig },
  { id: 14, image: galleryOvnSvart },
  { id: 15, image: galleryPipeRehab },
  { id: 16, image: galleryStalpipeSvart },
  { id: 17, image: galleryTakstigePlatetak },
  { id: 18, image: galleryTakstigeSno },
  { id: 19, image: galleryStalpipeTakstige },
  { id: 20, image: galleryTakstigePipe },
  { id: 21, image: galleryStalpipePlatetak },
  { id: 22, image: galleryStalpipeFeieplattform },
  { id: 23, image: takInnside },
  { id: 24, image: takUtside },
];

const projects = projectMeta.map((meta, index) => ({
  ...meta,
  ...content.projects[index],
}));

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
              {content.hero.eyebrow}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 md:mb-6 text-primary-foreground">
              {content.hero.title}
            </h1>
            <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed">
              {content.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Carousels */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background overflow-hidden pb-6 md:pb-8">
        <div className="container-wide mb-6 md:mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-medium mb-2 md:mb-3 tracking-wide uppercase text-xs sm:text-sm">
              {content.carouselSection.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
              {content.carouselSection.title}
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
              {content.beforeAfterSection.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
              {content.beforeAfterSection.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              {content.beforeAfterSection.description}
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
            {content.cta.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            {content.cta.description}
          </p>
          <Button variant="default" size="lg" className="text-sm md:text-base" asChild>
            <Link to="/kontakt">
              {content.cta.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Galleri;
