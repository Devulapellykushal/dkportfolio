import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/config/site";
import { GALLERY } from "@/data/gallery";

/** Lightweight “feed” tiles — swap for Instagram Basic Display API or embed when you have a token. */
export function InstagramFeed() {
  const tiles = GALLERY.slice(0, 4);
  return (
    <section id="instagram" className="py-[var(--section-y)]">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Instagram"
          title="Follow the craft — new casts & behind-the-scenes"
          subtitle="See fresh work on Instagram. Tap a tile to open our profile."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tiles.map((t) => (
            <a
              key={t.src}
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 shadow-card"
            >
              <img
                src={t.src}
                alt=""
                width={400}
                height={400}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/60 text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition group-hover:opacity-100">
                View on IG
              </span>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-snow transition hover:border-gold hover:text-gold"
          >
            Open Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
