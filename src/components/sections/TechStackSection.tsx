import { SectionShell } from "@/components/ui/SectionShell";
import { techStack } from "@/data/portfolio";
import { Braces, CloudCog, Code2, Database, Languages, Server, ShieldCheck } from "lucide-react";

const categoryIcons: Record<string, typeof Languages> = {
  Languages,
  Backend: Server,
  Frontend: Code2,
  "AI/ML": Braces,
  Databases: Database,
  "DevOps & Cloud": CloudCog,
  Testing: ShieldCheck,
};

export function TechStackSection() {
  return (
    <SectionShell
      id="tech-stack"
      eyebrow="Tech Stack"
      title="Modern stack for AI-driven products"
      description="Engineering choices optimized for shipping robust AI features, scalable APIs, and responsive product experiences."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {techStack.map((category) => (
          <article key={category.title} className="glass-card flex h-full flex-col">
            <div className="flex items-center gap-3 border-b border-zinc-700/70 pb-3">
              <div className="inline-flex w-fit rounded-lg border border-brand-gold-deep/60 bg-zinc-900 p-2 text-brand-gold">
                {(() => {
                  const Icon = categoryIcons[category.title] ?? Server;
                  return <Icon size={18} strokeWidth={1.8} />;
                })()}
              </div>
              <h3 className="font-heading text-xl leading-tight text-white">{category.title}</h3>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm leading-6 text-zinc-200 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="block h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
