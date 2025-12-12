import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/galleri", label: "Galleri" },
  { href: "/kontakt", label: "Kontakt" },
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
              isScrolled ? "h-18" : "h-24"
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
            "lg:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-warm-cream"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] bg-background/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-wide py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-lg font-medium py-2 transition-colors",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="hero" size="lg" className="mt-4" asChild>
            <Link to="/kontakt">Be om tilbud</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
