
export default function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Coach Gerry Holly Lacrosse",
    "url": "https://www.603evo.com",
    "sport": "Lacrosse",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Hampton Rd",
      "addressLocality": "Exeter",
      "addressRegion": "NH",
      "postalCode": "03833"
    },
    "sameAs": ["https://instagram.com/lax.603evo"],
    "email": "lax@603evo.com"
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
