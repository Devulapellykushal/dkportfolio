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
      "AI-first full-stack engineer and Node-Zero Labs founder delivering RL environments, LLM systems, automation platforms, and measurable product outcomes.",
    keywords: [
      "AI Engineer Hyderabad",
      "Node-Zero Labs",
      "RL Environments",
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
      "Explore AI and SaaS project case studies covering Kutum family ops, LawFolks legal agentic AI, support automation, OCR, voice AI, and vision systems.",
    keywords: [
      "AI projects portfolio",
      "Kutum family app",
      "LawFolks legal AI",
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
      "Experience across Node-Zero Labs, ApexNeural (Context → Solutions → Forward Deployed), Symbiotes, and NIT Warangal.",
    keywords: [
      "AI engineer experience",
      "Node-Zero Labs founder",
      "Forward Deployed Engineer",
      "ApexNeural",
      "RL environments",
      "production LLM systems",
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
