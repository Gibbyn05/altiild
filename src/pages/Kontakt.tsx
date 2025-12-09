import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+47 70 12 34 56",
    href: "tel:+4770123456",
  },
  {
    icon: Mail,
    label: "E-post",
    value: "post@altiild.no",
    href: "mailto:post@altiild.no",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Industriveien 42, 6413 Molde",
    href: "https://maps.google.com/?q=Industriveien+42+Molde",
  },
  {
    icon: Clock,
    label: "Åpningstider",
    value: "Man-Fre: 08:00-16:00",
    href: null,
  },
];

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Melding sendt!",
      description: "Vi tar kontakt med deg så snart som mulig.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Kontakt
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              Ta kontakt med oss
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Har du spørsmål eller ønsker et uforpliktende tilbud? 
              Fyll ut skjemaet eller ring oss direkte. Vi svarer gjerne!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-semibold mb-8">
                Kontaktinformasjon
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="font-medium hover:text-primary transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10">
                <h3 className="font-display text-lg font-semibold mb-4">Vårt område</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Vi betjener kunder i hele Møre og Romsdal, inkludert:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Molde</li>
                  <li>• Ålesund</li>
                  <li>• Kristiansund</li>
                  <li>• Volda</li>
                  <li>• Ørsta</li>
                  <li>• Ulsteinvik</li>
                  <li>• Stranda</li>
                  <li>• Sykkylven</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-semibold mb-2">
                  Send oss en melding
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fyll ut skjemaet under, så tar vi kontakt innen 24 timer.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      Takk for din henvendelse!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Vi har mottatt meldingen din og vil ta kontakt så snart som mulig.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                      }}
                    >
                      Send ny melding
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Navn *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ditt fulle navn"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          E-post *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="din@epost.no"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Telefon
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+47 123 45 678"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Emne *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Hva gjelder henvendelsen?"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Melding *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Fortell oss om ditt prosjekt..."
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sender...
                        </>
                      ) : (
                        <>
                          Send melding
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
