import { SectionShell } from "@/components/ui/SectionShell";
import { certifications } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <SectionShell id="certifications" eyebrow="Certifications" title="Proof of continuous learning and execution">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item) => (
          <article key={item.title} className="glass-card">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gold-deep">{item.issuer}</p>
            <h3 className="mt-2 font-heading text-lg text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{item.meta}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex text-xs text-brand-gold hover:underline">
                  View Credential
                </a>
              ) : null}
              {item.verified ? (
                <span className="inline-flex rounded-full border border-brand-gold bg-zinc-900 px-2 py-1 text-xs text-brand-gold">
                  Verified
                </span>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
