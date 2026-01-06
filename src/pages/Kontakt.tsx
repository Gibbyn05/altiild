import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  ImagePlus, 
  X,
  Facebook
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

import heroImage from "@/assets/hero-fireplace.jpg";
import stoveImage from "@/assets/stove-cozy.jpg";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "98 844 844",
    href: "tel:+4798844844",
    description: "Ring oss gjerne ved akutte problemer",
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
    value: "Molde, Møre og Romsdal",
    href: null,
  },
  {
    icon: Clock,
    label: "Åpningstider",
    value: "Man-Fre: 08:00-16:00",
    description: "Kveld og helg etter avtale",
    href: null,
  },
];

const serviceOptions = [
  "Montering av peis/ovn",
  "Piperehabilitering",
  "Montering av stålpipe",
  "Inspeksjon/vurdering",
  "Service/vedlikehold",
  "Dårlig trekk/Exodraft",
  "Taksikring/tilkomst",
  "Annet",
];

const serviceAreas = [
  "Molde",
  "Aukra", 
  "Hustadvika",
  "Midsund",
  "Rauma",
  "Sunndal",
  "Averøy",
  "Kristiansund",
  "Gjemnes",
  "Tingvoll",
];

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    hasFiringBan: false,
    message: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [addressError, setAddressError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAddress = (address: string): boolean => {
    if (!address.trim()) return true;
    const hasNumber = /\d/.test(address);
    return hasNumber;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length > 5) {
      toast({
        title: "Maks 5 bilder",
        description: "Du kan laste opp maksimalt 5 bilder.",
        variant: "destructive",
      });
      return;
    }
    
    const validFiles = files.filter(file => {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Ugyldig filtype",
          description: `${file.name} er ikke et bilde.`,
          variant: "destructive",
        });
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "Filen er for stor",
          description: `${file.name} er større enn 10MB.`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });

    setImages(prev => [...prev, ...validFiles]);
    
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.address && !validateAddress(formData.address)) {
      setAddressError("Vennligst inkluder gatenummer (f.eks. Storgata 15)");
      toast({
        title: "Ugyldig adresse",
        description: "Adressen må inneholde gatenummer.",
        variant: "destructive",
      });
      return;
    }
    
    setAddressError(null);
    setIsSubmitting(true);
    
    try {
      const imageUrls: string[] = [];
      for (const image of images) {
        const fileExt = image.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("contact-images")
          .upload(fileName, image);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          continue;
        }

        const { data: urlData } = supabase.storage
          .from("contact-images")
          .getPublicUrl(fileName);
        
        imageUrls.push(urlData.publicUrl);
      }

      const firingBanText = formData.hasFiringBan ? "\n\n⚠️ HAR FYRINGSFORBUD/AVVIK" : "";
      
      const { error: dbError } = await supabase
        .from("customer_inquiries")
        .insert({
          name: formData.name,
          phone: formData.phone || "Ikke oppgitt",
          email: formData.email || null,
          address: formData.address || null,
          inquiry_type: formData.service || "kontakt",
          desired_solution: `Tjeneste: ${formData.service || "Ikke valgt"}\n\n${formData.message}${firingBanText}${imageUrls.length > 0 ? `\n\nBilder: ${imageUrls.join(", ")}` : ""}`,
          source: "form",
          status: "new"
        });

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          subject: formData.service || "Henvendelse",
          message: `${formData.message}${firingBanText}`,
          imageUrls,
        },
      });

      if (emailError) {
        console.error("Email error:", emailError);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setImages([]);
      setImagePreviews([]);
      toast({
        title: "Melding sendt!",
        description: "Vi tar kontakt med deg så snart som mulig.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      toast({
        title: "Feil",
        description: "Kunne ikke sende meldingen. Prøv igjen.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData(prev => ({
      ...prev,
      [target.name]: value,
    }));
  };

  return (
    <Layout>
      <SEO 
        title="Kontakt oss | Bestill gratis befaring | Alt i Ild"
        description="Kontakt Alt i Ild for gratis befaring og uforpliktende tilbud på peis og ovn. Ring 988 44 844. Vi betjener Molde, Aukra, Hustadvika, Rauma og hele Møre og Romsdal."
        keywords="kontakt Alt i Ild, gratis befaring peis, tilbud ovn Molde, peismontør telefon, piperehabilitering Møre og Romsdal"
        canonical="/kontakt"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Alt i Ild",
            "telephone": "+47 988 44 844",
            "email": "post@altiild.no",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Barvegen 16",
              "addressLocality": "Molde",
              "postalCode": "6411",
              "addressCountry": "NO"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "16:00"
            }
          }
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/60" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Kontakt oss
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
              Kontakt oss
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Du er alltid velkommen til å ta kontakt med oss – enten du ønsker gratis befaring, har spørsmål om montering, piperehabilitering eller opplever akutte problemer som dårlig trekk, røyk i rommet, avvik fra brannvesenet eller fyringsforbud. Vi svarer så raskt vi kan.
            </p>
          </div>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="relative z-20 -mt-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <div 
                key={item.label} 
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="font-medium text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-3xl font-semibold mb-4">
                  Hvorfor velge Alt i Ild?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Med mange års erfaring er vi eksperter på ildsted og skorstein. 
                  Vi tilbyr gratis befaring og rådgivning i hele Møre og Romsdal.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-10">
                  {[
                    "Sertifisert montør og kontrollør",
                    "Kvalifisert for søknadspliktig arbeid",
                    "Gratis befaring og tilbud",
                    "Garanti på alt arbeid",
                    "Eksperter på dårlig trekk",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Service area */}
                <div className="bg-muted rounded-xl p-6 mb-6">
                  <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Vårt serviceområde
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Vi betjener kunder i hele Møre og Romsdal:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((city) => (
                      <span 
                        key={city} 
                        className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    Følg oss
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61574577441905"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/3T9BK5YwkqHvH2iA8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Google</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-1 bg-primary rounded-full" />
                  <span className="text-primary text-sm font-medium uppercase tracking-wide">Gratis befaring</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                  Send oss en henvendelse
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fyll ut skjemaet under, så tar vi kontakt innen 24 timer.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      Takk for din henvendelse!
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Vi har mottatt meldingen din og vil ta kontakt så snart som mulig, 
                      vanligvis innen 24 timer.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", address: "", service: "", hasFiringBan: false, message: "" });
                      }}
                    >
                      Send ny melding
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Navn <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ditt fulle navn"
                          className="h-12 bg-background border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Telefon <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+47 123 45 678"
                          className="h-12 bg-background border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          E-post
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="din@epost.no"
                          className="h-12 bg-background border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium mb-2">
                          Adresse
                        </label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={(e) => {
                            handleChange(e);
                            if (addressError) setAddressError(null);
                          }}
                          placeholder="Gatenavn og nummer (f.eks. Storgata 15)"
                          className={`h-12 bg-background border-border/50 focus:border-primary ${addressError ? 'border-destructive' : ''}`}
                        />
                        {addressError && (
                          <p className="text-destructive text-sm mt-1">{addressError}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Hva gjelder henvendelsen? <span className="text-primary">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-3 rounded-md bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Velg tjeneste...</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    {/* Firing ban checkbox */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="hasFiringBan"
                          checked={formData.hasFiringBan}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <div>
                          <span className="font-medium text-foreground">Har du fyringsforbud eller avvik fra brannvesenet?</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Kryss av hvis du har mottatt fyringsforbud eller avvik som må utbedres.
                          </p>
                        </div>
                      </label>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Beskriv ditt prosjekt <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Fortell oss om ditt prosjekt. Hva slags peis eller ovn ønsker du? Har du noen spesielle ønsker eller utfordringer?"
                        rows={5}
                        className="resize-none bg-background border-border/50 focus:border-primary"
                      />
                    </div>

                    {/* Image upload */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Bilder (valgfritt)
                      </label>
                      <p className="text-xs text-muted-foreground mb-3">
                        Last opp bilder av din peis, skorstein eller prosjekt (maks 5 bilder, 10MB per bilde)
                      </p>
                      
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      
                      <div className="flex flex-wrap gap-3">
                        {imagePreviews.map((preview, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={preview}
                              alt={`Opplastet bilde ${index + 1}`}
                              className="w-20 h-20 object-cover rounded-lg border border-border"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                        
                        {images.length < 5 && (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-20 h-20 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-1 hover:border-primary hover:bg-primary/5 transition-colors"
                          >
                            <ImagePlus className="h-5 w-5 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Legg til</span>
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
                      <p className="text-xs text-muted-foreground">
                        <span className="text-primary">*</span> Påkrevde felter
                      </p>
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        disabled={isSubmitting}
                        className={isSubmitting ? "" : "animate-gentle-pulse"}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Sender...
                          </>
                        ) : (
                          <>
                            Bestill gratis befaring
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Image Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${stoveImage})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        
        <div className="container-wide relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
            Vi kommer til deg
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Gratis befaring i hele Møre og Romsdal. Vi tar oss av alt – fra vurdering til ferdig godkjent installasjon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+4798844844">
                <Phone className="mr-2 h-4 w-4" />
                Ring oss: 988 44 844
              </a>
            </Button>
            <Button variant="heroOutlineLight" size="lg" asChild>
              <a href="mailto:post@altiild.no">
                <Mail className="mr-2 h-4 w-4" />
                post@altiild.no
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
