import type { PropsWithChildren } from "react";

interface GlowCardProps extends PropsWithChildren {
  className?: string;
}

export function GlowCard({ className = "", children }: GlowCardProps) {
  return <article className={`glass-card ${className}`.trim()}>{children}</article>;
}
