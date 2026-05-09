import { Link } from "react-router-dom";
import { SectionShell } from "@/components/ui/SectionShell";
import { projects } from "@/data/portfolio";

const HIGHLIGHT_COUNT = 2;

export function ProjectsHighlightsSection() {
  const highlights = projects.slice(0, HIGHLIGHT_COUNT);

  return (
    <SectionShell
      id="projects-highlights"
      eyebrow="Projects Highlights"
      title="Selected project outcomes"
      description="A quick look at two key projects. Open the full projects page for complete case studies."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {highlights.map((project) => (
          <article key={project.title} className="glass-card">
            <h3 className="font-heading text-2xl text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{project.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {project.achievements.slice(0, 2).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-brand-gold">{project.impact}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="rounded-full border border-zinc-600 px-2 py-1 text-xs text-zinc-200">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/projects" className="btn-primary">
          View All Projects
        </Link>
      </div>
    </SectionShell>
  );
}
