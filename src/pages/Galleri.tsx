import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroImage from "@/assets/hero-fireplace.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";
import installationImage from "@/assets/installation-work.jpg";

const projects = [
  {
    id: 1,
    image: gallery1,
    title: "Moderne hjørnepeis",
    location: "Ålesund",
    category: "Peis",
    description: "Svevende hjørnepeis med 360-graders glass gir panoramautsikt til flammene fra hele rommet.",
  },
  {
    id: 2,
    image: gallery2,
    title: "Rustikk steinpeis",
    location: "Molde",
    category: "Peis",
    description: "Tradisjonell steinpeis med naturstein og massiv tremantel – hygge på gamlemåten.",
  },
  {
    id: 3,
    image: gallery3,
    title: "Dobbeltsidig peis",
    location: "Kristiansund",
    category: "Peis",
    description: "Elegant dobbeltsidig peis som deler stue og spisestue, synlig fra begge rom.",
  },
  {
    id: 4,
    image: heroImage,
    title: "Skandinavisk stue",
    location: "Volda",
    category: "Peis",
    description: "Moderne integrert peis og frittstående vedovn i lyst, skandinavisk interiør.",
  },
  {
    id: 5,
    image: stoveImage,
    title: "Klassisk vedovn",
    location: "Ørsta",
    category: "Ovn",
    description: "Tradisjonell støpejernsvn med høy virkningsgrad og tidløs design.",
  },
  {
    id: 6,
    image: installationImage,
    title: "Under installasjon",
    location: "Ålesund",
    category: "Installasjon",
    description: "Profesjonell montering av moderne peisinnstats i steinvegg.",
  },
];

const categories = ["Alle", "Peis", "Ovn", "Installasjon"];

const Galleri = () => {
  const [filter, setFilter] = useState("Alle");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === "Alle" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <SEO 
        title="Galleri | Se våre peis- og ovnsprosjekter"
        description="Bli inspirert av våre tidligere peis- og ovnsinstallasjoner i Møre og Romsdal. Se bilder fra prosjekter i Molde, Ålesund, Kristiansund og mer."
        canonical="/galleri"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Galleri
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-primary-foreground">
              Våre prosjekter
            </h1>
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Bli inspirert av et utvalg av våre tidligere installasjoner. 
              Hver peis og ovn er unik, tilpasset kundens ønsker og bolig.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl aspect-square text-left"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary text-sm font-medium mb-1">{project.category}</p>
                    <h3 className="text-primary-foreground font-display text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">{project.location}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal/50 text-primary-foreground flex items-center justify-center hover:bg-charcoal/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-8">
              <p className="text-primary text-sm font-medium mb-2">{selectedProject.category} • {selectedProject.location}</p>
              <h3 className="font-display text-2xl font-semibold mb-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Liker du det du ser?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Vi kan skape noe like flott for deg. Kontakt oss for en uforpliktende prat.
          </p>
          <Button variant="default" size="lg" asChild>
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
