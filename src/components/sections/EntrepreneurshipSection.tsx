import { SectionShell } from "@/components/ui/SectionShell";
import { entrepreneurship } from "@/data/portfolio";

export function EntrepreneurshipSection() {
  return (
    <SectionShell
      id="entrepreneurship"
      eyebrow="Entrepreneurship"
      title="Independent execution beyond full-time roles"
      description="Independent AI agency work delivering automation and LLM solutions with measurable business outcomes."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {entrepreneurship.map((venture) => (
          <article key={venture.heading} className="glass-card">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gold-deep">{venture.period}</p>
            <h3 className="mt-2 font-heading text-2xl text-brand-gold">{venture.heading}</h3>
            {venture.tagline ? <p className="mt-2 text-sm text-zinc-300">{venture.tagline}</p> : null}
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {venture.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <a
              href={venture.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm text-brand-gold hover:underline"
            >
              {venture.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
