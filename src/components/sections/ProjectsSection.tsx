import { SectionShell } from "@/components/ui/SectionShell";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Enterprise-ready AI products and platforms"
      description="Selected projects focused on measurable impact, platform reliability, and practical AI adoption."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="glass-card group">
            <h3 className="font-heading text-2xl text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{project.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {project.achievements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-brand-gold">{project.impact}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-zinc-600 px-2 py-1 text-xs text-zinc-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={project.links.live} className="btn-primary text-xs" target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.links.github} className="btn-secondary text-xs" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.links.caseStudy} className="btn-secondary text-xs" target="_blank" rel="noreferrer">
                Case Study
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
