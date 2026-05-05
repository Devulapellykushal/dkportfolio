import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

const extras = [
  { title: "Home visit available", desc: "We bring the studio experience to your doorstep — ideal for newborns and busy families." },
  { title: "Custom colors & frames", desc: "Match your interiors or gift aesthetic with curated finishes." },
  { title: "Personalized designs", desc: "Layouts and compositions tailored to your family’s story." },
];

export function ExtraServices() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-white/5 bg-inkElevated py-[var(--section-y)]">
      <div className="container-narrow">
        <div className={`reveal ${visible ? "is-visible" : ""}`}>
          <SectionHeading eyebrow="Beyond casting" title="Extra services — same premium care" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {extras.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-gold/20 bg-gradient-to-b from-gold/5 to-transparent p-8 shadow-card"
              >
                <h3 className="font-display text-xl text-gold">{e.title}</h3>
                <p className="mt-3 text-sm text-mist">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
