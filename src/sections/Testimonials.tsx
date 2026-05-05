import { SectionHeading } from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";
import { useReveal } from "@/hooks/useReveal";

export function Testimonials() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-[var(--section-y)]">
      <div className="container-narrow">
        <div className={`reveal ${visible ? "is-visible" : ""}`}>
          <SectionHeading
            eyebrow="Love letters"
            title="Stories from Hyderabad families"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-inkSoft/40 p-6 shadow-card"
              >
                <p className="text-sm leading-relaxed text-mist">“{t.quote}”</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 font-display text-lg font-semibold text-gold"
                    aria-hidden
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-snow">{t.name}</cite>
                    {t.city ? <p className="text-xs text-muted">{t.city}</p> : null}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
