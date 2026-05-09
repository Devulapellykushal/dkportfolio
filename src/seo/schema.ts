import { faqItems, profile, projects } from "@/data/portfolio";
import { seoConfig } from "@/seo/seoConfig";

type JsonLd = Record<string, unknown>;

function asListItem(position: number, name: string, path: string): JsonLd {
  return {
    "@type": "ListItem",
    position,
    name,
    item: `${seoConfig.siteUrl}${path}`,
  };
}

export function buildPersonSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seoConfig.person.name,
    jobTitle: seoConfig.person.jobTitle,
    image: seoConfig.person.image,
    email: `mailto:${seoConfig.person.email}`,
    telephone: seoConfig.person.telephone,
    url: seoConfig.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: seoConfig.person.addressLocality,
      addressRegion: seoConfig.person.addressRegion,
      addressCountry: "IN",
    },
    sameAs: seoConfig.person.sameAs,
    knowsAbout: [
      "Large Language Models",
      "Agentic Workflows",
      "FastAPI",
      "React",
      "RAG Systems",
      "OCR Pipelines",
    ],
  };
}

export function buildWebsiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    author: {
      "@type": "Person",
      name: seoConfig.person.name,
    },
  };
}

export function buildOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    founder: {
      "@type": "Person",
      name: seoConfig.person.name,
    },
    sameAs: seoConfig.person.sameAs,
  };
}

export function buildBreadcrumbSchema(pathname: string): JsonLd {
  const items: JsonLd[] = [asListItem(1, "Home", "/")];

  if (pathname === "/projects") {
    items.push(asListItem(2, "Projects", "/projects"));
  } else if (pathname === "/experience") {
    items.push(asListItem(2, "Experience", "/experience"));
  } else if (pathname === "/certifications") {
    items.push(asListItem(2, "Certifications", "/certifications"));
  } else if (pathname === "/contact") {
    items.push(asListItem(2, "Contact", "/contact"));
  } else if (pathname === "/blog") {
    items.push(asListItem(2, "Blog", "/blog"));
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function buildFAQSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildProjectsCollectionSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${profile.name} Projects`,
    description: "Production AI and SaaS project portfolio",
    url: `${seoConfig.siteUrl}/projects`,
    mainEntity: projects.map((project) => ({
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      codeRepository: project.links.github,
      url: project.links.live,
      programmingLanguage: project.technologies,
      creator: {
        "@type": "Person",
        name: profile.name,
      },
      abstract: project.impact,
    })),
  };
}
