import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useReveal } from "@/hooks/useReveal";

const plans = [
  {
    name: "Basic",
    price: "₹1,999",
    blurb: "Perfect to try a single keepsake with clean presentation.",
    featured: false,
  },
  {
    name: "Couple",
    price: "₹2,999",
    blurb: "Two hands, one memory — our most popular for partners.",
    featured: true,
  },
  {
    name: "Premium Frame",
    price: "₹4,999",
    blurb: "Elevated display framing for a gallery-worthy centerpiece.",
    featured: false,
  },
];

export function Pricing() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section id="pricing" ref={ref} className="py-[var(--section-y)]">
      <div className="container-narrow">
        <div className={`reveal ${visible ? "is-visible" : ""}`}>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent packages — premium results"
            subtitle="Limited slots per day. Book today and get up to 20% OFF (ask on WhatsApp for today’s offer)."
          />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-semibold text-gold">
              Limited slots per day
            </span>
            <span className="rounded-full border border-white/15 px-4 py-1.5 text-mist">
              Book today — up to 20% OFF
            </span>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-card ${
                  p.featured
                    ? "border-gold/50 bg-gradient-to-b from-gold/10 to-inkSoft ring-1 ring-gold/30"
                    : "border-white/10 bg-inkSoft/50"
                }`}
              >
                {p.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-ink">
                    Most loved
                  </span>
                ) : null}
                <h3 className="font-display text-2xl text-snow">{p.name}</h3>
                <p className="mt-4 font-display text-4xl font-semibold text-gold">{p.price}</p>
                <p className="mt-4 flex-1 text-sm text-mist">{p.blurb}</p>
                <WhatsAppButton
                  className="mt-8 w-full"
                  message={`Hi, I'd like to book the ${p.name} package (${p.price}).`}
                >
                  Book this on WhatsApp
                </WhatsAppButton>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
