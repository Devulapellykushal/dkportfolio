import { profile, socialLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-zinc-800">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="container-shell relative py-24 sm:py-28">
        <p className="mb-4 inline-flex rounded-full border border-brand-gold-deep bg-zinc-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          AI Engineer Portfolio
        </p>
        <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-zinc-200 sm:text-2xl">{profile.title}</p>
        <p className="mt-5 max-w-3xl text-sm text-zinc-300 sm:text-lg">
          Building scalable AI systems, multi-agent workflows, and production-grade SaaS platforms.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/projects" className="btn-primary">
            View Projects
          </a>
          <a href="/kushal.pdf" className="btn-secondary" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a href="/contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {["LLM Orchestration", "Agentic Workflows", "FastAPI", "React", "AWS", "Vector DB"].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-brand-gold-deep bg-zinc-900/60 px-3 py-1 text-xs text-brand-gold"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-zinc-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
