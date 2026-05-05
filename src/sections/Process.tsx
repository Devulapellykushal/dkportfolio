import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    n: "01",
    title: "We visit your home",
    body: "Book on WhatsApp — we arrive on time, fully equipped for a calm session.",
  },
  {
    n: "02",
    title: "Casting done in ~5 minutes",
    body: "Guided posing, gentle materials, and expert hands — most guests are surprised how quick it is.",
  },
  {
    n: "03",
    title: "Delivered in 3–4 days",
    body: "Finishing, detailing, optional framing — then pickup at Lulu Mall or arranged delivery.",
  },
];

export function Process() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section id="process" ref={ref} className="py-[var(--section-y)]">
      <div className="container-narrow">
        <div className={`reveal ${visible ? "is-visible" : ""}`}>
          <SectionHeading eyebrow="How it works" title="Three calm steps — we handle everything" />
          {/* Timeline rail sits in the badge column only — never centered on full width (that drew through cards on md+). */}
          <div className="relative mx-auto mt-14 max-w-2xl">
            <div
              className="pointer-events-none absolute bottom-8 left-5 top-8 z-0 w-px -translate-x-1/2 bg-gradient-to-b from-gold/90 via-gold/35 to-transparent"
              aria-hidden
            />
            <ol className="relative z-[1] m-0 list-none space-y-10 p-0">
              {steps.map((s) => (
                <li key={s.n} className="relative flex gap-5 md:items-start">
                  <span className="relative z-[2] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ink font-display text-sm font-bold text-gold shadow-glow ring-2 ring-ink">
                    {s.n}
                  </span>
                  <div className="relative z-[2] flex-1 rounded-2xl border border-white/10 bg-inkSoft p-6 shadow-card md:bg-inkSoft/95 md:text-center">
                    <h3 className="font-display text-xl text-snow">{s.title}</h3>
                    <p className="mt-2 text-sm text-mist">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
