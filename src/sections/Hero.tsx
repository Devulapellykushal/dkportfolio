import { HERO_IMAGE } from "@/data/gallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-end overflow-hidden pb-16 pt-8 sm:pb-24"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Kalakruthi — 3D handcasting, premium keepsakes in Hyderabad"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>
      <div className="container-narrow relative z-10 animate-fade-up">
        <p className="mb-3 inline-flex rounded-full border border-gold/30 bg-ink/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
          Hyderabad • Home visits • Premium casting
        </p>
        <h1 className="max-w-4xl font-display text-balance text-4xl font-semibold leading-tight text-snow sm:text-5xl md:text-6xl">
          Turn Your Precious Moments into a{" "}
          <span className="bg-gold-shine bg-clip-text text-transparent">3D Memory</span>{" "}
          Forever
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-mist sm:text-xl">
          Couples • Babies • Families • Lifetime keepsakes
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <WhatsAppButton className="w-full sm:w-auto">
            Book Now on WhatsApp
          </WhatsAppButton>
          <a
            href="#gallery"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-white/25 bg-ink/40 px-6 py-3 text-center text-base font-semibold text-snow backdrop-blur transition hover:border-gold/60 hover:text-gold sm:w-auto"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
