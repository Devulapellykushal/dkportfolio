import { SectionShell } from "@/components/ui/SectionShell";
import { aboutHighlights, profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="AI-first engineer with full-stack execution depth"
      description="I build production AI systems that are scalable, testable, and business-ready, combining LLM orchestration, SaaS architecture, and automation-led product delivery for enterprise and startup teams."
    >
      <p className="mb-5 max-w-4xl text-sm text-zinc-300 sm:text-base">{profile.summary}</p>
      <p className="mb-5 max-w-4xl text-sm text-zinc-300 sm:text-base">
        Core entities in my work include FastAPI, React, TypeScript, PostgreSQL, vector databases, OCR pipelines, and
        multi-agent workflow orchestration aligned to measurable business outcomes.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {aboutHighlights.map((item) => (
          <article key={item.metric} className="glass-card">
            <p className="font-heading text-3xl font-bold text-brand-gold">{item.metric}</p>
            <p className="mt-2 text-sm text-zinc-300">{item.text}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
