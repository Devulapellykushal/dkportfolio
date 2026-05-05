import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

const points = [
  { icon: "🏠", title: "Done at your home", text: "Comfort, privacy, zero travel stress — we come to you." },
  { icon: "🍼", title: "Safe for newborn babies", text: "Trained professionals, baby-friendly process, calm pacing." },
  { icon: "✨", title: "Premium materials", text: "Quality compounds and finishes for a luxury look and feel." },
  { icon: "🪨", title: "Long-lasting & crack-resistant", text: "Built to stay beautiful on your shelf for years to come." },
  { icon: "🎓", title: "Handled by professionals", text: "Expert technique — clean edges, fine detail, no guesswork." },
];

export function WhyChooseUs() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-white/5 bg-inkElevated py-[var(--section-y)]">
      <div className="container-narrow">
        <div className={`reveal ${visible ? "is-visible" : ""}`}>
          <SectionHeading eyebrow="Trust" title="Why families choose Kalakruthi" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {points.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-ink/80 p-6 shadow-card"
              >
                <span className="text-2xl" aria-hidden>
                  {p.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg text-gold">{p.title}</h3>
                  <p className="mt-1 text-sm text-mist">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
