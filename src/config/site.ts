/**
 * Central business config — override via Vite env for deployments.
 */
const rawPhone = import.meta.env.VITE_PHONE_E164 ?? "916301891292";

export const SITE = {
  brand: "Kalakruthi",
  tagline: "3D Handcasting",
  city: "Hyderabad",
  phoneDisplay: "6301891292",
  /** E.164 without + for wa.me */
  phoneE164: rawPhone.replace(/\D/g, ""),
  address: "Lulu Mall, Hyderabad (Near Metro, B1 Floor)",
  whatsappPrefill:
    import.meta.env.VITE_WHATSAPP_PREFILL ??
    "Hi, I want to book handcasting service",
  /** Official profile — feed tiles and CTAs open here. */
  instagramUrl:
    import.meta.env.VITE_INSTAGRAM_URL ??
    "https://www.instagram.com/kalakruthihandcasting",
  mapsEmbedSrc:
    import.meta.env.VITE_MAPS_EMBED_URL ??
    "https://www.google.com/maps?q=Lulu+Mall+Hyderabad&output=embed",
} as const;

export function telHref(): string {
  return `tel:+${SITE.phoneE164}`;
}
