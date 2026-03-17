import { Link } from "react-router-dom";
import { Phone, Mail, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { PrivacyPolicyDialog } from "./PrivacyPolicyDialog";
import { TermsDialog } from "./TermsDialog";

const footerLinks = {
  tjenester: [
    { label: "Peisinstallasjon", href: "/tjenester" },
    { label: "Ovnsmontering", href: "/tjenester" },
    { label: "Vedlikehold", href: "/tjenester" },
    { label: "Rådgivning", href: "/tjenester" },
  ],
  selskap: [
    { label: "Tjenester", href: "/tjenester" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Galleri", href: "/galleri" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="Alt i Ild - Peis, Ovn og Pipe" 
                className="h-32 brightness-0 invert"
              />
            </Link>
            <p className="text-secondary-foreground/80 mb-6">
              Din lokale ekspert på peis og ovn. Vi skaper varme hjem med kvalitet og håndverk.
            </p>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-3">
              {footerLinks.tjenester.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selskap */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Selskap</h3>
            <ul className="space-y-3">
              {footerLinks.selskap.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+4798844844" className="hover:text-primary transition-colors">
                  +47 98 844 844
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:post@altiild.no" className="hover:text-primary transition-colors">
                  post@altiild.no
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Facebook className="h-5 w-5 text-primary" />
                <a 
                  href="https://www.facebook.com/p/Alt-I-Ild-As-61574577441905/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Alt i Ild. Alle rettigheter reservert.
          </p>
          <p className="text-secondary-foreground/60 text-sm">
            Laget av{" "}
            <a 
              href="https://nexra.no" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              NEXRA
            </a>
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <PrivacyPolicyDialog>
              <button className="hover:text-primary transition-colors">
                Personvern
              </button>
            </PrivacyPolicyDialog>
            <TermsDialog>
              <button className="hover:text-primary transition-colors">
                Vilkår
              </button>
            </TermsDialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
