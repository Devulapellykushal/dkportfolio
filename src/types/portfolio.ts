export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  location: string;
  workMode?: string;
  summary?: string;
  highlights: string[];
  technologies?: string[];
  links?: ExperienceLink[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType?: string;
  workMode?: string;
  highlights: string[];
  technologies: string[];
  tagline?: string;
  roles?: ExperienceRole[];
  certificateUrl?: string;
  url?: string;
  urlLabel?: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  impact: string;
  links: {
    live: string;
    github: string;
    caseStudy: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  name: string;
  title: string;
  organization: string;
  relationship: string;
  quote: string;
  profileUrl?: string;
  companyUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  meta: string;
  verified: boolean;
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export interface EducationItem {
  level: string;
  institute: string;
  period: string;
  scoreLabel: string;
  score: string;
  stream?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EntrepreneurshipVenture {
  heading: string;
  period: string;
  tagline?: string;
  points: string[];
  url: string;
  linkLabel: string;
}
