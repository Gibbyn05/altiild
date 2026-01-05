import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/dokumentasjon", label: "Dokumentasjon" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/galleri", label: "Galleri" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
                isScrolled ? "h-20" : "h-28"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
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
              <Link to="/kontakt">Be om tilbud</Link>
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
                <Link to="/kontakt">Be om tilbud</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
