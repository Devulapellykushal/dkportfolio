import { SectionShell } from "@/components/ui/SectionShell";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Built in production, not prototypes"
      description="Delivery history across ApexNeural, Symbiotes.ai, and NIT Warangal with measurable AI engineering and reliability impact."
    >
      <div className="relative space-y-8 border-l border-brand-gold-deep pl-6">
        {experiences.map((item) => (
          <article key={item.company} className="glass-card relative">
            <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-brand-gold shadow-glow-gold" />
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {item.period} · {item.location}
            </p>
            <h3 className="mt-2 font-heading text-2xl text-white">{item.role}</h3>
            <p className="text-sm text-brand-gold">{item.company}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              {item.highlights.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-zinc-600 px-2 py-1 text-xs text-zinc-200">
                  {tech}
                </span>
              ))}
            </div>
            {item.certificateUrl ? (
              <div className="mt-4">
                <a href={item.certificateUrl} className="btn-secondary text-xs" target="_blank" rel="noreferrer">
                  View Internship Certificate
                </a>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
