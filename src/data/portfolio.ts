import type {
  Achievement,
  Certification,
  EducationItem,
  ExperienceItem,
  NavItem,
  Project,
  SocialLink,
  TechCategory,
  FAQItem,
  Testimonial,
} from "@/types/portfolio";

export const profile = {
  name: "Devulapelly Kushal Kumar Reddy",
  title: "AI Engineer • Full Stack Developer • Agentic Workflow Builder",
  summary:
    "AI-focused Full-Stack Engineer delivering production SaaS platforms, LLM-powered products, and end-to-end automation systems.",
  location: "Hyderabad, Telangana",
  email: "kushalkumar2506@gmail.com",
  phone: "+91 6309251113",
  website: "https://devulapellykushal.vercel.app",
};

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/DevulapellyKushal" },
  { label: "LinkedIn", href: "https://linkedin.com/in/devulapellykushal" },
  { label: "Email", href: "mailto:kushalkumar2506@gmail.com" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "ApexNeural",
    role: "AI Context Engineer",
    period: "Aug 2025 - Present",
    location: "Hyderabad",
    highlights: [
      "Built LLM interviewer pipelines that cut requirement clarification loops by approximately 25%.",
      "Delivered production automation across NestJS, FastAPI, Django, and React, reducing handoff defects by approximately 15%.",
      "Engineered OCR and RAG pipelines with Vision APIs and vector databases, improving retrieval relevance by approximately 18%.",
      "Established end-to-end and regression testing infrastructure, reducing production incidents by approximately 20%.",
    ],
    technologies: ["NestJS", "FastAPI", "Django", "React", "Vector DB", "OCR", "RAG"],
  },
  {
    company: "Symbiotes.ai",
    role: "Freelance AI Engineer",
    period: "2023 - Till Date",
    location: "Remote",
    highlights: [
      "Delivered production-grade AI backend systems for client workloads and feature rollouts.",
      "Built and deployed voice agent workflows for real-time conversational use cases.",
      "Shipped AI-powered content creation pipelines for campaign and product automation needs.",
    ],
    technologies: ["FastAPI", "LLM Orchestration", "Voice Agents", "Python", "Automation"],
  },
  {
    company: "NIT Warangal",
    role: "Research and Development Intern",
    period: "Apr 2025 - Jul 2025",
    location: "Warangal",
    certificateUrl:
      "https://www.linkedin.com/in/devulapellykushal/overlay/Position/2626910495/treasury/?profileId=ACoAADhQ98sBnuekUSKgg7RaTPvzwl20hCy1BLw",
    highlights: [
      "Built AgriHelp, an AI-powered agricultural supply chain platform using Python, FastAPI, Flask, and TensorFlow.",
      "Trained and evaluated ML models with TensorFlow, PyTorch, SHAP, and LIME, improving recommendation consistency by approximately 12%.",
      "Authored technical documentation and streamlined experiment setup, reducing reporting time by approximately 15%.",
    ],
    technologies: ["Python", "FastAPI", "Flask", "TensorFlow", "PyTorch", "SHAP", "LIME"],
  },
];

export const aboutHighlights = [
  { metric: "AI + SaaS", text: "Production delivery across LLM systems, OCR pipelines, and workflow automation." },
  { metric: "25% Faster", text: "Requirement clarity improvement from LLM interviewer pipelines at ApexNeural." },
  { metric: "Reliability Focus", text: "Regression and E2E infrastructure that reduced production incidents by ~20%." },
];

export const faqItems: FAQItem[] = [
  {
    question: "What roles am I currently open to?",
    answer:
      "I am open to AI Engineer, Applied AI Engineer, and Full Stack AI Product Engineer roles where I can build production LLM workflows and reliable backend systems.",
  },
  {
    question: "Which technologies do I use most in production projects?",
    answer:
      "My production stack centers on Python, FastAPI, React, TypeScript, PostgreSQL, vector databases, and cloud deployment pipelines with CI/CD automation.",
  },
  {
    question: "What outcomes do I typically optimize for?",
    answer:
      "I optimize for faster requirement clarity, lower production incident rates, and measurable workflow automation gains in support, operations, and document intelligence systems.",
  },
  {
    question: "Do I work only on AI prototypes?",
    answer:
      "No. My focus is production delivery: shipping tested systems with deployment pipelines, observability, and maintainable architecture across frontend and backend services.",
  },
];

export const entrepreneurship = {
  heading: "Founder, p4ai.in",
  period: "Independent (Outside Full-Time Role)",
  points: [
    "Founded and led an independent AI tech agency delivering automation and LLM solutions for startups.",
    "Generated over USD 4,800 (INR 400,000) in project revenue through execution-focused client delivery.",
    "Got the opportunity to work with strong clients, learned how the market actually works, and improved strategic decision-making under real business constraints.",
    "Built a more stable and resilient founder mindset through execution pressure, with a long-term principle to think big and stay humble.",
    "Handled architecture, product execution, integrations, and deployment with outcome-driven milestones.",
  ],
  url: "https://p4ai.in",
};

export const techStack: TechCategory[] = [
  { title: "Languages", icon: "languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Dart"] },
  { title: "Backend", icon: "backend", items: ["FastAPI", "NestJS", "Django", "Flask", "REST APIs", "Microservices"] },
  { title: "Frontend", icon: "frontend", items: ["React", "Vite", "TailwindCSS", "TypeScript", "Responsive Design"] },
  { title: "AI/ML", icon: "aiml", items: ["LLM Orchestration", "Agentic Workflows", "RAG", "OCR", "TensorFlow", "PyTorch"] },
  { title: "Databases", icon: "databases", items: ["PostgreSQL", "MongoDB", "MySQL", "ClickHouse", "Vector Databases"] },
  { title: "DevOps & Cloud", icon: "cloud", items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Render", "Vercel"] },
  { title: "Testing", icon: "testing", items: ["Regression Testing", "End-to-End Testing", "Automation QA"] },
];

export const projects: Project[] = [
  {
    title: "L1 Support Chatbot",
    description: "AI-powered enterprise support assistant that automates repetitive tickets and improves first-response quality.",
    achievements: [
      "Reduced manual ticket handling by approximately 35% through workflow automation.",
      "Introduced triage and escalation pipelines that reduced resolution time by approximately 25%.",
      "Standardized response playbooks for consistent support quality across teams.",
    ],
    technologies: ["LLM", "RAG", "FastAPI", "PostgreSQL", "Automation"],
    impact: "Improved support efficiency and customer-facing response speed.",
    links: {
      live: "https://l1enterprisesaas.vercel.app",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://l1enterprisesaas.vercel.app",
    },
  },
  {
    title: "Voice AI Enterprise Platform",
    description: "Enterprise outreach and campaign platform powered by real-time speech and conversational AI.",
    achievements: [
      "Built real-time voice pipelines combining STT, LLM orchestration, and TTS synthesis.",
      "Designed campaign workflows for outbound and engagement-based voice operations.",
      "Developed analytics dashboards for call outcomes and engagement intelligence.",
    ],
    technologies: ["Python", "FastAPI", "LLM", "Speech-to-Text", "Text-to-Speech", "React"],
    impact: "Enabled scalable voice-driven outreach with operational analytics.",
    links: {
      live: "https://voiceai-enterprise.vercel.app/",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://voiceai-enterprise.vercel.app/",
    },
  },
  {
    title: "PharmaOCR",
    description: "Indic handwritten OCR pipeline for pharmaceutical forms and mixed-script medical documentation.",
    achievements: [
      "Implemented denoising, skew correction, and contrast normalization pipeline.",
      "Improved extraction quality for complex prescriptions and medical records.",
      "Increased downstream validation throughput by approximately 20%.",
    ],
    technologies: ["OCR", "Computer Vision", "Python", "FastAPI"],
    impact: "Accelerated document intelligence workflows in healthcare operations.",
    links: {
      live: "https://github.com/Devulapellykushal/PharmaOCR",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://github.com/Devulapellykushal/PharmaOCR",
    },
  },
  {
    title: "Kutum",
    description: "Multi-agent family management platform combining planning, reminders, budgeting, and health records.",
    achievements: [
      "Designed scalable multi-agent architecture for coordinated workflows.",
      "Integrated AI nudges with OpenAI and Groq APIs for proactive automation.",
      "Reduced manual follow-up effort by approximately 20% for active users.",
    ],
    technologies: ["NestJS", "React", "TailwindCSS", "PostgreSQL", "Agentic Workflows"],
    impact: "Brought AI-first automation to daily family operations.",
    links: {
      live: "https://kutum.apexneural.cloud",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://kutum.apexneural.cloud",
    },
  },
  {
    title: "LawFolks",
    description: "AI-first legal automation platform for drafting, filing workflows, and research acceleration.",
    achievements: [
      "Built RAG-based legal research and drafting assistant workflows.",
      "Shipped production backend APIs with Django and PostgreSQL.",
      "Delivered responsive product UI with React and TailwindCSS.",
    ],
    technologies: ["Django", "React", "PostgreSQL", "RAG", "TailwindCSS"],
    impact: "Enabled faster legal operations for process-heavy teams.",
    links: {
      live: "https://lawfolks.vercel.app",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://lawfolks.vercel.app",
    },
  },
  {
    title: "Vision AI Platform",
    description: "Enterprise-grade Vision AI SaaS for live camera analytics and automated operational reporting.",
    achievements: [
      "Built real-time inference pipelines for high-throughput camera streams.",
      "Integrated analytics stack with Apache Superset and ClickHouse for low-latency insights.",
      "Designed reporting workflows for business teams with measurable observability.",
    ],
    technologies: ["Python", "Vision AI", "ClickHouse", "Apache Superset", "FastAPI"],
    impact: "Delivered faster insight cycles for monitoring-heavy use cases.",
    links: {
      live: "https://devulapellykushal.vercel.app",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://devulapellykushal.vercel.app",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dhiraj Shinde",
    title: "Summer Internship Peer",
    organization: "NIT Warangal",
    relationship: "Internship Peer-mate",
    quote:
      "During our summer internship at NIT Warangal, Kushal consistently showed dedication and a strong learning mindset. His work across web development and machine learning was solid, and his proactive problem-solving stood out from day one.",
    profileUrl: "https://www.linkedin.com/in/dhirajrshinde/",
  },
  {
    name: "Ramavath Sridhar",
    title: "Software Engineer",
    organization: "Tech Solutions",
    relationship: "Engineering Collaborator",
    quote:
      "Kushal's full-stack and machine learning expertise helped us build a robust, scalable application. His communication and ownership made collaboration smooth across both product and engineering.",
    profileUrl: "https://www.linkedin.com/in/ramavath-sridhar-03248a272/",
  },
  {
    name: "Santosh Metta",
    title: "Founder",
    organization: "Chalyati",
    relationship: "Client",
    quote:
      "I am genuinely happy with the website Kushal built for us. The product feels polished across desktop and mobile, and it has already improved how customers perceive our brand online.",
    companyUrl: "https://www.chalyati.com/",
  },
  {
    name: "Rakesh Kumar",
    title: "Business Development Consultant",
    organization: "Jewels Workshop",
    relationship: "Client Partner",
    quote:
      "Kushal delivered enterprise-grade systems for our retail jewelry initiatives with strong execution speed. He translated business requirements into reliable product workflows and helped us move faster with confidence.",
    profileUrl: "https://www.linkedin.com/in/rakesh-kumar-a86614112/",
    companyUrl: "https://jewelsworkshop.in/",
  },
  {
    name: "Kalakruthi Handcasting Team",
    title: "Business Partner Team",
    organization: "Kalakruthi 3D Handcasting",
    relationship: "Development and Growth Partner",
    quote:
      "Kushal has been a strong development and marketing partner for our brand. He helped us shape a premium digital presence, improve conversion-oriented messaging, and better communicate the emotional value of our home-visit casting service.",
    companyUrl: "https://kalakruthihandcasting.vercel.app/",
  },
  {
    name: "Srinivas Reddy",
    title: "Client",
    organization: "HSR Green Homes",
    relationship: "Real Estate Portfolio Client",
    quote:
      "Kushal delivered a clean and professional web presence for our real estate showcase. The structure, design, and clarity now reflect our brand quality far better and help us present projects with confidence.",
    companyUrl: "https://www.hsrgreenhomes.com/",
  },
  {
    name: "ReelOnGo Team",
    title: "Product Team",
    organization: "ReelOnGo",
    relationship: "Product and Delivery Collaboration",
    quote:
      "Kushal supported our fast-turnaround content platform with practical execution and dependable delivery. His ability to balance product speed with technical quality made a strong impact in a high-velocity workflow.",
    companyUrl: "https://www.reelongo.com/",
  },
  {
    name: "Oracle Investigating Agency Team",
    title: "Operations Team",
    organization: "Oracle Investigating Agency",
    relationship: "Automation Client",
    quote:
      "Kushal set up an OCR-driven automation pipeline for our insurance document operations. The system significantly reduced manual processing effort and saved substantial turnaround time for our team.",
  },
  {
    name: "Sharan Medamoni",
    title: "Software Developer",
    organization: "Tech Solutions",
    relationship: "Engineering Collaborator",
    quote:
      "Kushal's attention to detail and commitment to quality are outstanding. He consistently delivered production-ready code and was always available when the team needed technical support.",
    profileUrl: "https://www.linkedin.com/in/sharan-medamoni/",
  },
];

export const education: EducationItem[] = [
  {
    level: "Bachelor of Technology (B.Tech) - Computer Science Engineering",
    institute: "Keshav Memorial Institute of Technology, Hyderabad",
    period: "2021 - 2025",
    scoreLabel: "CGPA",
    score: "7.79",
  },
  {
    level: "Intermediate",
    institute: "Narayana Junior College, Ayyappa Society, Madhapur, Hyderabad",
    period: "2019 - 2021",
    scoreLabel: "GPA",
    score: "9.43",
    stream: "MPC",
  },
  {
    level: "Schooling",
    institute: "Paramita High School, Karimnagar",
    period: "Until 2019",
    scoreLabel: "GPA",
    score: "9.7",
  },
];

export const certifications: Certification[] = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    meta: "Verified - Mar 2026",
    verified: true,
    link: "https://verify.skilljar.com/c/wtz67dveudfm",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    meta: "Verified - Mar 2026",
    verified: true,
    link: "https://verify.skilljar.com/c/3oe3ppcsjtmu",
  },
  {
    title: "LangChain Essentials",
    issuer: "LangChain",
    meta: "Credential",
    verified: true,
    link: "https://academy.langchain.com/certificates/pysxne98c8",
  },
  {
    title: "LangSmith Course",
    issuer: "LangSmith",
    meta: "Credential",
    verified: true,
    link: "https://academy.langchain.com/certificates/okdhaglrrr",
  },
  {
    title: "GenAI Hackathon Winner",
    issuer: "Hackathon",
    meta: "Achievement Certificate",
    verified: true,
    link: "https://drive.google.com/file/d/1DpEQDPBmkFI9rJrK1F85aZqIcpZegaVB/view?usp=drive_link",
  },
  {
    title: "NIT Warangal Internship Certificate",
    issuer: "NIT Warangal",
    meta: "Official Certificate",
    verified: true,
    link: "https://www.linkedin.com/in/devulapellykushal/overlay/Position/2626910495/treasury/?profileId=ACoAADhQ98sBnuekUSKgg7RaTPvzwl20hCy1BLw",
  },
];

export const achievements: Achievement[] = [
  {
    title: "NSS Coordinator",
    description: "Led student initiatives and coordinated impactful community programs.",
    icon: "leadership",
    link: "https://drive.google.com/file/d/1zl3DsLzyhxi6pCag8jExOa8AJwDPPf4b/view?usp=drive_link",
  },
  {
    title: "Give and Growth Event",
    description: "Organized leadership and growth-oriented events with execution ownership.",
    icon: "community",
    link: "https://drive.google.com/file/d/1zP6bl9VEJPhJL407M2phr5CZQxikjRpv/view?usp=drive_link",
  },
  {
    title: "GenAI Hackathon Winner",
    description: "Won competitive hackathon by delivering practical AI-first product outcomes.",
    icon: "award",
  },
];
