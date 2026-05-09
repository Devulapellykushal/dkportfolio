import { SectionShell } from "@/components/ui/SectionShell";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <SectionShell id="education" eyebrow="Education" title="Academic foundation in computer science">
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item) => (
          <article key={item.level} className="glass-card">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gold-deep">{item.period}</p>
            <h3 className="mt-2 font-heading text-xl text-white">{item.level}</h3>
            <p className="mt-2 text-sm text-zinc-200">{item.institute}</p>
            {item.stream ? <p className="mt-1 text-xs text-zinc-400">Stream: {item.stream}</p> : null}
            <p className="mt-4 inline-flex rounded-full border border-brand-gold-deep px-3 py-1 text-xs text-brand-gold">
              {item.scoreLabel}: {item.score}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
