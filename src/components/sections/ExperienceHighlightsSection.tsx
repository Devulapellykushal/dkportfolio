import { Link } from "react-router-dom";
import { SectionShell } from "@/components/ui/SectionShell";
import { experiences } from "@/data/portfolio";

export function ExperienceHighlightsSection() {
  const aiEngineerRole = experiences.find((item) => item.company === "ApexNeural");
  const nitwRole = experiences.find((item) => item.company === "NIT Warangal");
  const highlights = [aiEngineerRole, nitwRole].filter((item) => item !== undefined);

  return (
    <SectionShell
      id="experience-highlights"
      eyebrow="Experience Highlights"
      title="Proven delivery across AI and product engineering"
      description="A quick snapshot of recent roles. Explore the full journey on the dedicated experience page."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {highlights.map((item) => (
          <article key={`${item.company}-${item.role}`} className="glass-card">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {item.period} · {item.location}
            </p>
            <h3 className="mt-2 font-heading text-2xl text-white">{item.role}</h3>
            <p className="text-sm text-brand-gold">{item.company}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              {item.highlights.slice(0, 2).map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="rounded-full border border-zinc-600 px-2 py-1 text-xs text-zinc-200">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/experience" className="btn-primary">
          View Full Experience
        </Link>
      </div>
    </SectionShell>
  );
}
