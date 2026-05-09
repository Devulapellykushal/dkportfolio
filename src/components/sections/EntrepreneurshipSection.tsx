import { SectionShell } from "@/components/ui/SectionShell";
import { entrepreneurship } from "@/data/portfolio";

export function EntrepreneurshipSection() {
  return (
    <SectionShell
      id="entrepreneurship"
      eyebrow="Entrepreneurship"
      title="Independent execution beyond full-time roles"
      description="Built and delivered client-facing AI systems through an independent agency model with measurable business outcomes."
    >
      <article className="glass-card">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-gold-deep">{entrepreneurship.period}</p>
        <h3 className="mt-2 font-heading text-2xl text-brand-gold">{entrepreneurship.heading}</h3>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {entrepreneurship.points.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
        <a href={entrepreneurship.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm text-brand-gold hover:underline">
          Visit p4ai.in
        </a>
      </article>
    </SectionShell>
  );
}
