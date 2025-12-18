import * as React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  jsonLd?: object;
}

const SEO = React.forwardRef<HTMLDivElement, SEOProps>(
  (
    {
      title = "Alt i Ild | Peis og ovn spesialister i Møre og Romsdal",
      description = "Alt i Ild leverer profesjonell installasjon av peiser og ovner i Møre og Romsdal. Gratis befaring, sertifiserte montører, og garanti på alt arbeid.",
      keywords = "peis, ovn, peisinstallasjon, vedovn, Molde, Møre og Romsdal, ildsted, peisinnsats, peismontør",
      canonical,
      ogImage = "https://altiild.no/og-image.jpg",
      ogType = "website",
      noindex = false,
      jsonLd,
    },
    ref
  ) => {
    const siteUrl = "https://altiild.no";
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;

    // Default LocalBusiness JSON-LD
    const localBusinessJsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Alt i Ild",
      description: "Profesjonell installasjon av peiser og ovner i Møre og Romsdal",
      url: siteUrl,
      telephone: "+47 988 44 844",
      areaServed: "Møre og Romsdal",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "16:00",
        },
      ],
    };

    return (
      <div ref={ref}>
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          {fullCanonical && <link rel="canonical" href={fullCanonical} />}
          {noindex && <meta name="robots" content="noindex, nofollow" />}

          {/* Open Graph / Facebook */}
          <meta property="og:type" content={ogType} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ogImage} />
          {fullCanonical && <meta property="og:url" content={fullCanonical} />}
          <meta property="og:locale" content="nb_NO" />
          <meta property="og:site_name" content="Alt i Ild" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={ogImage} />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(jsonLd || localBusinessJsonLd)}
          </script>
        </Helmet>
      </div>
    );
  }
);

SEO.displayName = "SEO";

export default SEO;
