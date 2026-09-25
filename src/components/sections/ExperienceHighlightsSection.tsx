import { Link } from "react-router-dom";
import { SectionShell } from "@/components/ui/SectionShell";
import { experiences } from "@/data/portfolio";

const HIGHLIGHT_COMPANIES = ["Node-Zero Labs", "ApexNeural"] as const;

function experienceMeta(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" · ");
}

export function ExperienceHighlightsSection() {
  const highlights = HIGHLIGHT_COMPANIES.map((company) =>
    experiences.find((item) => item.company === company),
  ).filter((item) => item !== undefined);

  return (
    <SectionShell
      id="experience-highlights"
      eyebrow="Experience Highlights"
      title="Proven delivery across AI and product engineering"
      description="A quick snapshot of Node-Zero Labs and ApexNeural. Explore the full role timeline on the experience page."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {highlights.map((item) => {
          const currentRole = item.roles?.[0];
          const previewPoints = currentRole?.highlights.slice(0, 2) ?? item.highlights.slice(0, 2);
          const previewTechs = currentRole?.technologies?.slice(0, 4) ?? item.technologies.slice(0, 4);

          return (
            <article key={`${item.company}-${item.role}`} className="glass-card">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                {experienceMeta([
                  currentRole?.period ?? item.period,
                  item.employmentType,
                  currentRole?.location ?? item.location,
                  currentRole?.workMode ?? item.workMode,
                ])}
              </p>
              <h3 className="mt-2 font-heading text-2xl text-white">{currentRole?.title ?? item.role}</h3>
              <p className="text-sm text-brand-gold">{item.company}</p>
              {item.tagline ? <p className="mt-2 text-sm text-zinc-300">{item.tagline}</p> : null}
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                {previewPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              {previewTechs.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {previewTechs.map((tech) => (
                    <span key={tech} className="rounded-full border border-zinc-600 px-2 py-1 text-xs text-zinc-200">
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="mt-8">
        <Link to="/experience" className="btn-primary">
          View Full Experience
        </Link>
      </div>
    </SectionShell>
  );
}
