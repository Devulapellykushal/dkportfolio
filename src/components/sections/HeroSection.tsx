import { ArrowUpRight } from "lucide-react";
import { SocialIconLinks } from "@/components/ui/SocialIconLinks";

const TRUST_MARKS = ["Node-Zero Labs", "ApexNeural", "RL Environments", "Agentic AI", "FastAPI", "NestJS"];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/media/hero-atmosphere.jpg"
          alt=""
          className="h-full w-full scale-105 object-cover object-center opacity-55"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#02071a]/75 via-[#02071a]/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121314] via-[#121314]/20 to-[#02071a]/40" />
        <div className="pointer-events-none absolute -left-10 top-0 h-[70%] w-[55%] rotate-[-12deg] bg-[radial-gradient(ellipse_at_top,rgba(140,220,255,0.35),transparent_70%)] blur-2xl" />
      </div>

      <div className="container-shell relative flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-14 sm:pt-32 lg:justify-center lg:pb-24 lg:pt-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="deccan-badge max-w-full text-left leading-relaxed">
            // Founder, Node-Zero Labs · Forward Deployed Engineer
          </p>

          <h1 className="mt-6 break-words font-heading text-[2.15rem] font-normal leading-[1.08] tracking-[-0.04em] text-[#f6f3f0] sm:mt-7 sm:text-6xl lg:text-[4.35rem]">
            Devulapelly Kushal
            <span className="mt-1 block">Kumar Reddy</span>
          </h1>

          <p className="font-meta mt-4 max-w-xl text-[0.92rem] font-light leading-[1.45] text-[#f6f3f0]/70 sm:mt-5 sm:text-[1.05rem] sm:leading-[1.35]">
            Bridge ideation to execution with production RL environments, agentic systems, and AI products —
            from Node-Zero Labs and ApexNeural to Kutum and E2EQA Labs.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="/projects" className="btn-primary w-full justify-center sm:w-auto">
              View Projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="/kushal.pdf" className="btn-secondary w-full justify-center sm:w-auto" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a href="/contact" className="btn-secondary w-full justify-center sm:w-auto">
              Contact Me
            </a>
          </div>

          <SocialIconLinks className="mt-6 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-3" />
        </div>

        <div className="mt-12 sm:mt-20 lg:mt-24">
          <p className="deccan-trusted">// Trusted partners and production stack</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-7 sm:gap-y-3">
            {TRUST_MARKS.map((mark) => (
              <span
                key={mark}
                className="font-meta text-[0.8rem] font-medium tracking-wide text-[#f6f3f0]/85 sm:text-base"
              >
                {mark}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
