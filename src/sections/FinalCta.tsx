import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/config/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-gold/20 bg-gradient-to-b from-inkElevated to-ink py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="container-narrow relative text-center">
        <h2 className="font-display text-balance text-4xl font-semibold text-snow sm:text-5xl">
          Limited Slots Available — Book Now
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-mist">
          Your hands will never be exactly the same again. Secure your date on WhatsApp — we’ll confirm timing and home-visit details instantly.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton className="min-w-[280px] text-lg" message={SITE.whatsappPrefill}>
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
