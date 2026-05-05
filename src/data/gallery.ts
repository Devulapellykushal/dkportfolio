/** Curated stock imagery — replace with real Kalakruthi photos in production. */
export type GalleryItem = { src: string; alt: string; tag: string };

export const GALLERY: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80&auto=format&fit=crop",
    alt: "Couple holding hands — emotional moment preserved",
    tag: "Couples",
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80&auto=format&fit=crop",
    alt: "Newborn baby hands gently held",
    tag: "Babies",
  },
  {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80&auto=format&fit=crop",
    alt: "Family together — love and connection",
    tag: "Families",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop",
    alt: "Close detail of intertwined hands",
    tag: "Detail",
  },
  {
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80&auto=format&fit=crop",
    alt: "Warm golden light on hands",
    tag: "Couples",
  },
  {
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80&auto=format&fit=crop",
    alt: "Parent and child hands",
    tag: "Families",
  },
];

/** Hero background — file in `public/image.png` (served as `/image.png`). */
export const HERO_IMAGE = "/image.png";
