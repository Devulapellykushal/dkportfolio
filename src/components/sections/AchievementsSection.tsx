import { SectionShell } from "@/components/ui/SectionShell";
import { achievements } from "@/data/portfolio";
import { Award, Handshake, Users } from "lucide-react";

const achievementIcons: Record<string, typeof Award> = {
  "NSS Coordinator": Users,
  "Give and Growth Event": Handshake,
  "GenAI Hackathon Winner": Award,
};

export function AchievementsSection() {
  return (
    <SectionShell id="achievements" eyebrow="Leadership" title="Achievements and leadership highlights">
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((item) => (
          <article key={item.title} className="glass-card">
            <div className="inline-flex rounded-lg border border-brand-gold-deep/60 bg-zinc-900 p-2 text-brand-gold">
              {(() => {
                const Icon = achievementIcons[item.title] ?? Award;
                return <Icon size={18} strokeWidth={1.8} />;
              })()}
            </div>
            <h3 className="mt-3 font-heading text-xl text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-200">{item.description}</p>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs text-brand-gold hover:underline">
                View Certificate
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
