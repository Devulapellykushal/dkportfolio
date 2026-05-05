import { SectionHeading } from "@/components/SectionHeading";
import { GALLERY } from "@/data/gallery";

export function Gallery() {
  return (
    <section id="gallery" className="border-y border-white/5 bg-inkElevated py-[var(--section-y)]">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Gallery"
          title="Real emotion — captured in three dimensions"
          subtitle="Couples, babies, families — close-up detail you can feel proud to display. Replace these placeholders with your studio photography."
        />
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY.map((g) => (
            <figure
              key={g.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-card"
            >
              <div className="group relative overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-4 text-sm font-medium text-snow opacity-0 transition group-hover:opacity-100">
                  <span className="rounded-full bg-gold/20 px-2 py-0.5 text-xs text-gold">
                    {g.tag}
                  </span>
                  <span className="mt-1 block text-mist">{g.alt}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
