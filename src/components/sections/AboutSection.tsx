import { SectionShell } from "@/components/ui/SectionShell";
import { aboutHighlights, profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="AI-first engineer and founder shipping production systems"
      description="I build production AI systems that are scalable, testable, and business-ready — from RL environments and forward-deployed solutions to SaaS platforms for enterprise teams."
    >
      <p className="mb-5 max-w-4xl text-sm text-zinc-300 sm:text-base">{profile.summary}</p>
      <p className="mb-5 max-w-4xl text-sm text-zinc-300 sm:text-base">
        Current work spans Node-Zero Labs (RL environments and AI infrastructure) and ApexNeural (Forward Deployed
        Engineer — after AI Context Engineer and AI Solutions Engineer), shipping products like Kutum and E2EQA Labs.
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
