import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Animated hamburger menu - no icons needed
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
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

  return (
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
          className="flex items-center gap-2"
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
          <Button variant={isScrolled ? "hero" : "heroOutline"} size="lg" asChild>
            <Link to="/kontakt">Be om tilbud</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-all duration-300",
            isScrolled 
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

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 z-40",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "lg:hidden fixed left-0 right-0 bg-background shadow-xl z-50 overflow-hidden transition-all duration-500 ease-out",
          isScrolled ? "top-[76px]" : "top-[92px]",
          isOpen 
            ? "max-h-[400px] opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        )}
        style={{
          transitionProperty: "max-height, opacity, transform",
        }}
      >
        <div className="px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted"
              )}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-10px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div 
            className="mt-4 pt-4 border-t border-border"
            style={{
              transitionDelay: isOpen ? "200ms" : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-10px)",
              transition: "opacity 300ms ease-out, transform 300ms ease-out",
            }}
          >
            <Button variant="hero" size="lg" className="w-full" asChild>
              <Link to="/kontakt">Be om tilbud</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
