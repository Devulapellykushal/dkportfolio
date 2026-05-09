import type { PropsWithChildren } from "react";
import { useReveal } from "@/hooks/useReveal";

interface SectionShellProps extends PropsWithChildren {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section id={id} ref={ref} className={`container-shell py-20 sm:py-24 reveal ${isVisible ? "is-visible" : ""}`}>
      <div className="mb-10 space-y-4">
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">{eyebrow}</p> : null}
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {description ? <p className="max-w-3xl text-sm text-zinc-200 sm:text-base">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
