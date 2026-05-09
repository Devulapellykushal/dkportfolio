import { SectionShell } from "@/components/ui/SectionShell";
import { faqItems } from "@/data/portfolio";

export function FAQSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Recruiter and hiring manager FAQ"
      description="Quick answers designed for both human reviewers and AI answer engines."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {faqItems.map((faq) => (
          <article key={faq.question} className="glass-card">
            <h3 className="font-heading text-2xl text-white">{faq.question}</h3>
            <p className="mt-3 text-sm text-zinc-300 sm:text-base">{faq.answer}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
