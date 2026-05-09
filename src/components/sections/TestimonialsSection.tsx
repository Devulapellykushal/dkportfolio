import { SectionShell } from "@/components/ui/SectionShell";
import { testimonials } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useRef } from "react";

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;

    const amount = Math.max(node.clientWidth * 0.9, 320);
    node.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <SectionShell
      id="testimonials"
      eyebrow="Testimonials"
      title="What people say about my work"
      description="Feedback from peers, collaborators, and clients across AI, product engineering, and business delivery engagements."
    >
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="btn-secondary !px-3 !py-2"
          aria-label="Scroll testimonials left"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="btn-secondary !px-3 !py-2"
          aria-label="Scroll testimonials right"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-visible px-1 pt-2 pb-3"
      >
        {testimonials.map((item) => (
          <article
            key={`${item.name}-${item.organization}`}
            className="glass-card w-full shrink-0 snap-start md:w-[calc((100%-1.25rem)/2)]"
          >
            <Quote size={18} className="text-brand-gold" />
            <p className="mt-4 text-sm leading-7 text-zinc-200">{item.quote}</p>

            <div className="mt-5 border-t border-zinc-700 pt-4">
              <h3 className="font-heading text-xl text-white">{item.name}</h3>
              <p className="text-sm text-brand-gold">{item.title}</p>
              <p className="text-sm text-zinc-300">{item.organization}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">{item.relationship}</p>

              <div className="mt-3 flex flex-wrap gap-3 text-xs">
                {item.profileUrl ? (
                  <a href={item.profileUrl} target="_blank" rel="noreferrer" className="text-zinc-300 underline-offset-4 hover:text-brand-gold hover:underline">
                    Profile
                  </a>
                ) : null}
                {item.companyUrl ? (
                  <a href={item.companyUrl} target="_blank" rel="noreferrer" className="text-zinc-300 underline-offset-4 hover:text-brand-gold hover:underline">
                    Company
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
