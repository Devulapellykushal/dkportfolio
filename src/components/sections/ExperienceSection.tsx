import { SectionShell } from "@/components/ui/SectionShell";
import { experiences } from "@/data/portfolio";
import type { ExperienceItem, ExperienceRole } from "@/types/portfolio";

function experienceMeta(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" · ");
}

function RoleBlock({ role }: { role: ExperienceRole }) {
  return (
    <div className="relative">
      <span className="absolute -left-[1.2rem] top-1.5 h-2 w-2 rounded-full bg-brand-gold" />
      <p className="text-xs uppercase tracking-[0.15em] text-zinc-400">
        {experienceMeta([role.period, role.location, role.workMode])}
      </p>
      <h4 className="mt-1 font-heading text-lg text-white">{role.title}</h4>
      {role.summary ? <p className="mt-2 text-sm text-zinc-300">{role.summary}</p> : null}
      <ul className="mt-3 space-y-2 text-sm text-zinc-200">
        {role.highlights.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
      {role.technologies && role.technologies.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {role.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-zinc-600 px-2 py-1 text-xs text-zinc-200">
              {tech}
            </span>
          ))}
        </div>
      ) : null}
      {role.links && role.links.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-3">
          {role.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex text-sm text-brand-gold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const hasRoles = Boolean(item.roles && item.roles.length > 0);

  return (
    <article className="glass-card relative overflow-hidden">
      <span className="absolute -left-[1.55rem] top-6 h-2.5 w-2.5 rounded-full bg-brand-gold shadow-glow-gold sm:-left-[2.05rem] sm:h-3 sm:w-3" />
      <p className="break-words text-[0.65rem] uppercase tracking-[0.16em] text-zinc-400 sm:text-xs sm:tracking-[0.2em]">
        {experienceMeta([item.period, item.employmentType, item.location, item.workMode])}
      </p>
      <h3 className="mt-2 font-heading text-xl text-white sm:text-2xl">{item.role}</h3>
      <p className="text-sm text-brand-gold">{item.company}</p>
      {item.tagline ? <p className="mt-2 text-sm text-zinc-300">{item.tagline}</p> : null}

      {hasRoles ? (
        <div className="mt-5 space-y-6 border-l border-zinc-700 pl-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Role Timeline</p>
          {item.roles?.map((role) => (
            <RoleBlock key={`${role.title}-${role.period}`} role={role} />
          ))}
        </div>
      ) : (
        <ul className="mt-4 space-y-2 text-sm text-zinc-200">
          {item.highlights.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      )}

      {!hasRoles && item.technologies.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-zinc-600 px-2 py-1 text-xs text-zinc-200">
              {tech}
            </span>
          ))}
        </div>
      ) : null}

      {(item.url || item.certificateUrl) && (
        <div className="mt-4 flex flex-wrap gap-3">
          {item.url ? (
            <a
              href={item.url}
              className="inline-flex text-sm text-brand-gold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {item.urlLabel ?? "Visit Website"}
            </a>
          ) : null}
          {item.certificateUrl ? (
            <a href={item.certificateUrl} className="btn-secondary text-xs" target="_blank" rel="noreferrer">
              View Certificate
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Built in production, not prototypes"
      description="Delivery history across Node-Zero Labs, ApexNeural, Symbiotes, and NIT Warangal — from RL infrastructure to forward-deployed AI solutions."
    >
      <div className="relative space-y-6 border-l border-brand-gold-deep pl-4 sm:space-y-8 sm:pl-6">
        {experiences.map((item) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}
