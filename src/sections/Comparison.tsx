import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

const rows = [
  { label: "Expert guidance", diy: "You’re on your own", us: "Professionals at every step" },
  { label: "Risk of mistakes", diy: "High — DIY errors are common", us: "Low — trained casting artists" },
  { label: "Retry if needed", diy: "Usually no — wasted kit", us: "Yes — we plan for success" },
  { label: "Finish & detail", diy: "Often uneven / rough", us: "Premium finish & fine detail" },
  { label: "Convenience", diy: "Shipping delays, mess at home", us: "We visit you — quick & calm" },
];

export function Comparison() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-white/5 bg-inkElevated py-[var(--section-y)]">
      <div className="container-narrow overflow-x-auto">
        <div className={`reveal min-w-[520px] ${visible ? "is-visible" : ""}`}>
          <SectionHeading
            eyebrow="Compare"
            title="Online kits vs our service"
            subtitle="When it’s a once-in-a-lifetime moment, experience and finish matter."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-card">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-ink">
                  <th className="p-4 font-semibold text-mist sm:p-5">What you get</th>
                  <th className="p-4 font-semibold text-muted sm:p-5">Online DIY kits</th>
                  <th className="p-4 font-semibold text-gold sm:p-5">Kalakruthi</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-white/10 bg-inkSoft/30">
                    <td className="p-4 font-medium text-snow sm:p-5">{r.label}</td>
                    <td className="p-4 text-muted sm:p-5">{r.diy}</td>
                    <td className="p-4 text-mist sm:p-5">{r.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
