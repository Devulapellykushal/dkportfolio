import { SITE } from "@/config/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE.brand} – ${SITE.tagline}`,
    image:
      "https://images.unsplash.com/photo-1520854221050-0f2c2af1ec36?w=1200&q=80&auto=format&fit=crop",
    telephone: `+${SITE.phoneE164}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: SITE.city,
      addressCountry: "IN",
    },
    areaServed: "Hyderabad",
    description:
      "Premium 3D hand casting for couples, babies, and families in Hyderabad. Home visits and studio at Lulu Mall. Keywords: handcasting Hyderabad, couple hand mold, baby casting.",
    priceRange: "₹₹",
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
