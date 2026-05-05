import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

export function EmotionalHook() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-white/5 bg-inkElevated py-[var(--section-y)]">
      <div className="container-narrow">
        <div className={`reveal ${visible ? "is-visible" : ""}`}>
          <SectionHeading
            eyebrow="Why this matters"
            title="Photos fade. Memories don’t have to."
            subtitle="Capture the touch, bond, and love in a form you can keep forever."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              { icon: "💞", title: "Love", text: "Freeze the feeling of togetherness — not just how you looked, but how you held each other." },
              { icon: "👨‍👩‍👧", title: "Family", text: "A chapter of your story, cast in time — for you and the generations after you." },
              { icon: "👶", title: "Little ones", text: "Those tiny fingers change overnight. Preserve them while they’re still small enough to fit in your palm." },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-inkSoft/60 p-8 text-center shadow-card"
              >
                <div className="mb-4 text-4xl" aria-hidden>
                  {c.icon}
                </div>
                <h3 className="font-display text-2xl text-gold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
