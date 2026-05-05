import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    emoji: "💑",
    title: "Couples",
    desc: "Engagements, weddings, or ‘just because’ — your hands tell your story.",
  },
  {
    emoji: "👶",
    title: "Newborn babies",
    desc: "Gentle, quick, and safe — capture those first weeks in a timeless keepsake.",
  },
  {
    emoji: "🎁",
    title: "Anniversary gifts",
    desc: "Surprise your partner with something deeply personal they’ll never forget.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Families",
    desc: "Parents, siblings, grandparents — together in one beautiful sculpture.",
  },
];

export function PerfectFor() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-[var(--section-y)]">
      <div className="container-narrow">
        <div className={`reveal ${visible ? "is-visible" : ""}`}>
          <SectionHeading
            eyebrow="Perfect for"
            title="Moments that deserve more than a photograph"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((i) => (
              <article
                key={i.title}
                className="group rounded-2xl border border-white/10 bg-inkSoft/40 p-6 shadow-card transition hover:border-gold/35 hover:shadow-glow"
              >
                <div className="text-3xl transition group-hover:scale-110" aria-hidden>
                  {i.emoji}
                </div>
                <h3 className="mt-4 font-display text-xl text-snow">{i.title}</h3>
                <p className="mt-2 text-sm text-mist">{i.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
