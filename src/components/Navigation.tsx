import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Flame, Construction, Shield, Eye, Wrench, Hammer, Wind, FileText } from "lucide-react";
import logo from "@/assets/logo.png";

const serviceLinks = [
  { href: "/tjenester/montering", label: "Montering av peis og ovn", icon: Flame },
  { href: "/tjenester/piperehabilitering", label: "Piperehabilitering", icon: Construction },
  { href: "/tjenester/stalpiper", label: "Isolerte stålpiper", icon: Shield },
  { href: "/tjenester/inspeksjon", label: "Inspeksjon & vurdering", icon: Eye },
  { href: "/tjenester/service", label: "Service & vedlikehold", icon: Wrench },
  { href: "/tjenester/taksikring", label: "Stige & taksikring", icon: Hammer },
  { href: "/tjenester/darlig-trekk", label: "Dårlig trekk", icon: Wind },
  { href: "/dokumentasjon", label: "Dokumentasjon", icon: FileText },
];

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester", hasDropdown: true },
  { href: "/om-oss", label: "Om oss" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServicesDropdown(false);
    setShowMobileServicesDropdown(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="container-wide flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 relative z-[60]"
          >
            <img 
              src={logo} 
              alt="Alt i Ild - Peis, Ovn og Pipe" 
              className={cn(
                "transition-all duration-300",
                isScrolled ? "h-14 sm:h-16 md:h-20" : "h-16 sm:h-20 md:h-28"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors link-underline flex items-center gap-1",
                      location.pathname === link.href || location.pathname.startsWith("/tjenester")
                        ? isScrolled ? "text-primary" : "text-warm-cream"
                        : isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-warm-cream/90 hover:text-warm-cream"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      showServicesDropdown ? "rotate-180" : ""
                    )} />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                      showServicesDropdown 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="bg-background rounded-xl shadow-xl border border-border/50 p-2 min-w-[280px]">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          <service.icon className="h-4 w-4 text-primary" />
                          {service.label}
                        </Link>
                      ))}
                      <div className="border-t border-border/50 mt-2 pt-2">
                        <Link
                          to="/tjenester"
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                        >
                          Se alle tjenester
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors link-underline",
                    location.pathname === link.href
                      ? isScrolled ? "text-primary" : "text-warm-cream"
                      : isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-warm-cream/90 hover:text-warm-cream"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button 
              variant="hero" 
              size="lg" 
              className={cn(
                "border-2",
                isScrolled ? "" : "border-white bg-primary text-white"
              )}
              asChild
            >
              <Link to="/kontakt">Kontakt oss</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-all duration-300 relative z-[60]",
              isOpen
                ? "text-foreground"
                : isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-warm-cream hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={cn(
                "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out",
                isOpen ? "top-3 rotate-45" : "top-1"
              )} />
              <span className={cn(
                "absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ease-out",
                isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              )} />
              <span className={cn(
                "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out",
                isOpen ? "top-3 -rotate-45" : "top-5"
              )} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Navigation - Full Screen Slide Down */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[55] bg-background transition-all duration-500 ease-out",
          isOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        {/* Logo */}
        <Link
          to="/"
          className="absolute top-5 left-6 z-[60]"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "scale(1)" : "scale(0.5)",
            transition: "opacity 400ms cubic-bezier(0.34, 1.56, 0.64, 1) 150ms, transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1) 150ms",
          }}
        >
          <img 
            src={logo} 
            alt="Alt i Ild" 
            className="h-20"
          />
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-lg text-foreground hover:bg-muted transition-colors z-[60]"
          aria-label="Lukk meny"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-90deg)",
            transition: "opacity 400ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms, transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms",
          }}
        >
          <div className="relative w-6 h-6">
            <span className="absolute left-0 top-3 w-6 h-0.5 bg-current rotate-45" />
            <span className="absolute left-0 top-3 w-6 h-0.5 bg-current -rotate-45" />
          </div>
        </button>
        {/* Menu Content */}
        <div className={cn(
          "flex flex-col justify-center items-center h-full px-8",
          isScrolled ? "pt-[76px]" : "pt-[92px]"
        )}>
          <div className="flex flex-col items-center gap-6 w-full max-w-sm">
            {navLinks.map((link, index) => (
              link.hasDropdown ? (
                <div key={link.href} className="w-full">
                  <button
                    onClick={() => setShowMobileServicesDropdown(!showMobileServicesDropdown)}
                    className={cn(
                      "text-2xl font-heading font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full text-center flex items-center justify-center gap-2",
                      location.pathname.startsWith("/tjenester") || location.pathname === "/dokumentasjon"
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    )}
                    style={{
                      transitionDelay: isOpen ? `${100 + index * 75}ms` : "0ms",
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                    }}
                  >
                    {link.label}
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      showMobileServicesDropdown ? "rotate-180" : ""
                    )} />
                  </button>
                  
                  {/* Mobile Services Dropdown */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 w-full",
                      showMobileServicesDropdown ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="bg-muted rounded-xl p-2 space-y-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-base text-foreground hover:bg-background hover:text-primary transition-colors"
                        >
                          <service.icon className="h-4 w-4 text-primary" />
                          {service.label}
                        </Link>
                      ))}
                      <div className="border-t border-border/50 mt-2 pt-2">
                        <Link
                          to="/tjenester"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium text-primary hover:bg-background transition-colors"
                        >
                          Se alle tjenester
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-2xl font-heading font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full text-center",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                  style={{
                    transitionDelay: isOpen ? `${100 + index * 75}ms` : "0ms",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div 
              className="mt-6 pt-6 border-t border-border w-full"
              style={{
                transitionDelay: isOpen ? "400ms" : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                transition: "opacity 400ms ease-out, transform 400ms ease-out",
              }}
            >
              <Button variant="hero" size="lg" className="w-full text-lg py-6" asChild>
                <Link to="/kontakt">Kontakt oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
