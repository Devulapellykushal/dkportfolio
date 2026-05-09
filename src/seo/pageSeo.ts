import { seoConfig } from "@/seo/seoConfig";

export interface PageSeoMeta {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  ogType?: "website" | "profile" | "article";
}

export const pageSeo: Record<string, PageSeoMeta> = {
  "/": {
    title: "AI Engineer Portfolio | Devulapelly Kushal Kumar Reddy",
    description:
      "AI-first full-stack engineer delivering production LLM systems, automation platforms, and measurable business outcomes.",
    keywords: [
      "AI Engineer Hyderabad",
      "LLM Orchestration Engineer",
      "Agentic Workflow Developer",
      "FastAPI React Portfolio",
      "Full Stack AI Engineer",
    ],
    canonicalPath: "/",
    ogType: "profile",
  },
  "/projects": {
    title: "AI and SaaS Projects | Devulapelly Kushal",
    description:
      "Explore enterprise AI and SaaS project case studies covering support automation, OCR intelligence, voice AI, and multi-agent systems.",
    keywords: [
      "AI projects portfolio",
      "RAG project case studies",
      "Voice AI platform",
      "OCR automation project",
      "Production SaaS engineering",
    ],
    canonicalPath: "/projects",
  },
  "/experience": {
    title: "Experience and Leadership | Devulapelly Kushal",
    description:
      "Professional experience building production AI systems, reliability-focused delivery workflows, and measurable engineering outcomes.",
    keywords: [
      "AI engineer experience",
      "production LLM systems",
      "backend automation experience",
      "engineering leadership portfolio",
    ],
    canonicalPath: "/experience",
  },
  "/certifications": {
    title: "Education and Certifications | Devulapelly Kushal",
    description:
      "Verified credentials, education history, and practitioner-focused certifications across AI engineering and modern software delivery.",
    keywords: [
      "AI certifications",
      "LangChain certification",
      "Anthropic Claude certification",
      "computer science portfolio",
    ],
    canonicalPath: "/certifications",
  },
  "/contact": {
    title: "Contact Devulapelly Kushal | AI Engineer",
    description:
      "Connect for AI engineering roles, consulting engagements, and product automation collaborations.",
    keywords: [
      "hire AI engineer",
      "contact full stack AI developer",
      "LLM consultant India",
      "AI automation engineer contact",
    ],
    canonicalPath: "/contact",
  },
  "/blog": {
    title: "AI Engineering Articles | Devulapelly Kushal",
    description:
      "Upcoming technical articles on LLM architecture, agentic systems, and practical AI product engineering.",
    keywords: ["AI engineering blog", "LLM architecture notes", "agentic workflow tutorials"],
    canonicalPath: "/blog",
    ogType: "article",
  },
};

export function absoluteCanonical(pathname: string): string {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return `${seoConfig.siteUrl}${normalizedPath}`;
}
