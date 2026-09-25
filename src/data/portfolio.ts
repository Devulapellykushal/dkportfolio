import type {
  Achievement,
  Certification,
  EducationItem,
  EntrepreneurshipVenture,
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
  title: "Founder, Node-Zero Labs • Forward Deployed Engineer • AI Engineer",
  summary:
    "Founder of Node-Zero Labs and Forward Deployed Engineer at ApexNeural — delivering RL environments, evaluation workflows, agentic AI systems, and production SaaS platforms.",
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
    company: "Node-Zero Labs",
    role: "Founder",
    period: "Apr 2026 - Present",
    location: "Bengaluru, Karnataka, India",
    employmentType: "Full-time",
    workMode: "Hybrid",
    tagline: "AI Infrastructure Studio — the production layer for AI intelligence.",
    highlights: [
      "Founder at Node-Zero Labs, building production-grade RL environments, evaluation workflows, and AI infrastructure for frontier AI teams.",
      "Leading product, partnerships, and business development while working closely on environment design and delivery.",
      "Building training data, RL environments, evaluations, expert workflows, and applied AI research for AI labs.",
      "Designing high-fidelity environments for computer-use, coding, tool-use, multi-app, and long-horizon agentic systems.",
    ],
    technologies: ["RL Environments", "Evaluations", "Training Data", "Agentic Tasks", "Expert Workflows"],
    url: "https://node-zero.in",
    urlLabel: "Visit node-zero.in",
  },
  {
    company: "ApexNeural",
    role: "Forward Deployed Engineer",
    period: "Aug 2025 - Present",
    location: "Hyderabad, Telangana, India",
    employmentType: "Full-time",
    tagline: "Full-time · 1 yr 2 mos — progression across Context Engineering, Solutions, and Forward Deployed Engineering.",
    highlights: [
      "Forward Deployed Engineer working directly across business, product, and engineering to turn real-world operational problems into deployable AI solutions.",
      "Previously AI Solutions Engineer and AI Context Engineer — shipping Kutum, E2EQA Labs, ApexNeural website, and production agentic systems.",
    ],
    technologies: [
      "Forward Deployed Engineering",
      "Agentic AI",
      "RAG",
      "LangGraph",
      "FastAPI",
      "PostgreSQL",
      "ClickHouse",
      "Langfuse",
    ],
    roles: [
      {
        title: "Forward Deployed Engineer",
        period: "Sep 2026 - Present",
        location: "Hyderabad, Telangana, India",
        workMode: "Hybrid",
        summary:
          "Forward Deployed Engineer working directly across business, product, and engineering to turn real-world operational problems into deployable AI and technology solutions.",
        highlights: [
          "Work closely with businesses and stakeholders to understand business models, workflows, pain points, requirements, and operational constraints.",
          "Translate business requirements into AI solutions, automation systems, data platforms, and agentic workflows.",
          "Identify opportunities where AI, automation, and software systems can reduce cost, improve execution, increase efficiency, or enable scale.",
          "Lead solution discovery from problem definition → requirements → solution design → development → deployment → iteration.",
          "Work directly with technical teams to scope, prioritize, and deliver solutions aligned with customer and business outcomes.",
          "Coordinate across product, engineering, business, and customer stakeholders to drive implementation and resolve execution gaps.",
          "Support deployment and integration of AI agents, RAG systems, workflow automation, backend platforms, and enterprise applications.",
          "Contribute to emerging AI agent training and evaluation initiatives, including environments, tasks, and evaluation workflows through a specialized technical team.",
          "Translate technical capabilities into business use cases, proposals, GTM opportunities, and scalable offerings.",
          "Measure solutions against practical outcomes including revenue, cost reduction, time saved, operational efficiency, and execution speed.",
        ],
        technologies: [
          "Forward Deployed Engineering",
          "Enterprise AI",
          "AI Agents",
          "Agentic AI",
          "Automation",
          "RL Environments",
          "Agent Evaluation",
          "GTM",
        ],
      },
      {
        title: "AI Solutions Engineer",
        period: "Apr 2026 - Aug 2026",
        location: "Greater Hyderabad Area",
        workMode: "Hybrid",
        summary:
          "AI Solutions Engineer working at the intersection of AI, business operations, data, and technology — designing solutions that improve workflows, reduce manual effort, and enable operational scale.",
        highlights: [
          "Analyze business processes, operational workflows, and requirements to identify opportunities for automation and AI-driven improvements.",
          "Work closely with cross-functional stakeholders to translate business requirements into technical solutions.",
          "Support development and implementation of AI automation, workflow systems, and enterprise applications.",
          "Perform SQL-based data analysis, dataset validation, reporting, and data quality checks to support business decisions.",
          "Coordinate QA, testing, documentation, deployment, and process improvements across projects.",
          "Work across business, product, and engineering teams to move solutions from requirement → implementation → deployment.",
          "Support Agile project delivery, stakeholder communication, sprint coordination, and continuous process improvement.",
        ],
        technologies: [
          "AI Solutions",
          "Business Process Automation",
          "SQL",
          "AI Agents",
          "QA",
          "Agile Delivery",
          "Stakeholder Management",
        ],
      },
      {
        title: "AI Context Engineer",
        period: "Aug 2025 - Mar 2026",
        location: "Hyderabad, Telangana, India",
        workMode: "On-site",
        summary:
          "Built production-grade agentic AI systems, enterprise automation platforms, and real-time analytics infrastructure — converting advanced AI concepts into secure, scalable, deployable enterprise solutions.",
        highlights: [
          "Designed and developed the ApexNeural company website, presenting the organization’s AI platforms, solutions, and technical capabilities.",
          "Built Kutum – Family Information OS, a secure platform for organizing family records, documents, health data, and life events with AI-driven reminders.",
          "Developed E2EQA Labs – AI Code Analysis & Testing Platform for automated end-to-end testing, intelligent code analysis, automated reporting, and CI/CD-integrated QA workflows.",
          "Built vision-based analytics and business intelligence dashboards for retail operations, including customer insights, operational monitoring, and real-time analytics.",
          "Implemented secure backend architectures and API systems following OWASP security principles, authentication best practices, and scalable infrastructure design.",
          "Worked on observability and AI evaluation pipelines using Langfuse and Promptfoo for prompt tracking, LLM evaluation, experimentation, and production monitoring.",
        ],
        technologies: [
          "Agentic AI",
          "LangGraph",
          "GPT-4o",
          "RAG",
          "FastAPI",
          "Node.js",
          "PostgreSQL",
          "ClickHouse",
          "Apache Superset",
          "Computer Vision",
          "Vector Databases",
          "Langfuse",
          "Promptfoo",
          "OWASP",
          "CI/CD",
        ],
        links: [
          { label: "ApexNeural", href: "https://apexneural.com" },
          { label: "Kutum – Family Information OS", href: "https://kutum.apexneural.cloud" },
          { label: "E2EQA Labs", href: "https://e2eqalab.apexneural.cloud" },
        ],
      },
    ],
  },
  {
    company: "Symbiotes",
    role: "Freelance",
    period: "Jan 2024 - Present",
    location: "Remote",
    employmentType: "Freelance",
    highlights: [
      "Collaborating with cross-functional teams to translate complex client requirements into intelligent, end-to-end technology solutions spanning AI/ML, Full-Stack, DevOps, and UI/UX.",
      "Designing and deploying AI-driven systems for content creation, workflow automation (n8n), and enterprise process optimization.",
      "Enhancing the AI service pipeline through GenAI model training, LLM fine-tuning, and edge device quantization for scalable, production-ready solutions.",
    ],
    technologies: ["AI/ML", "Full-Stack", "DevOps", "n8n", "GenAI", "LLM Fine-tuning"],
  },
  {
    company: "National Institute of Technology Warangal",
    role: "AI ML Researcher",
    period: "Apr 2025 - Jul 2025",
    location: "Warangal, Telangana, India",
    employmentType: "Full-time",
    workMode: "Hybrid",
    certificateUrl:
      "https://www.linkedin.com/in/devulapellykushal/overlay/Position/2626910495/treasury/?profileId=ACoAADhQ98sBnuekUSKgg7RaTPvzwl20hCy1BLw",
    highlights: [
      "Worked on Applied AI, Explainable AI (XAI), and full-stack development projects.",
      "Contributed to ML model building, backend systems, and model interpretability using LIME and SHAP.",
      "Gained hands-on research experience through real-world applications and end-to-end development.",
    ],
    technologies: ["Applied AI", "Explainable AI", "LIME", "SHAP", "Full-Stack", "Research"],
  },
];

export const aboutHighlights = [
  {
    metric: "Node-Zero",
    text: "Founded an AI infrastructure studio for RL environments, evaluation workflows, and frontier AI delivery.",
  },
  {
    metric: "ApexNeural",
    text: "Full-time progression: AI Context Engineer → AI Solutions Engineer → Forward Deployed Engineer.",
  },
  {
    metric: "Products",
    text: "Shipped Kutum Family Information OS, E2EQA Labs, and production agentic AI systems.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What roles am I currently open to?",
    answer:
      "I am open to AI Engineer, Applied AI Engineer, and Full Stack AI Product Engineer roles — and partnerships around RL environments, training data, and evaluation infrastructure through Node-Zero Labs.",
  },
  {
    question: "Which technologies do I use most in production projects?",
    answer:
      "My production stack centers on Python, FastAPI, NestJS, Django, React, TypeScript, PostgreSQL, vector databases, RAG pipelines, OCR, and cloud deployment with CI/CD automation.",
  },
  {
    question: "What outcomes do I typically optimize for?",
    answer:
      "I optimize for faster requirement clarity, lower production incident rates, stronger evaluation quality, and measurable automation gains across support, legal, family ops, and document intelligence systems.",
  },
  {
    question: "Do I work only on AI prototypes?",
    answer:
      "No. My focus is production delivery: shipping tested systems, RL environments, and agentic products with deployment pipelines, observability, and maintainable architecture.",
  },
];

export const entrepreneurship: EntrepreneurshipVenture[] = [
  {
    heading: "Founder, p4ai.in",
    period: "Independent (Outside Full-Time Role)",
    tagline: "Independent AI tech agency for automation and LLM solutions.",
    points: [
      "Founded and led an independent AI tech agency delivering automation and LLM solutions for startups.",
      "Generated over USD 4,800 (INR 400,000) in project revenue through execution-focused client delivery.",
      "Got the opportunity to work with strong clients, learned how the market actually works, and improved strategic decision-making under real business constraints.",
      "Built a more stable and resilient founder mindset through execution pressure, with a long-term principle to think big and stay humble.",
      "Handled architecture, product execution, integrations, and deployment with outcome-driven milestones.",
    ],
    url: "https://p4ai.in",
    linkLabel: "Visit p4ai.in",
  },
];

export const techStack: TechCategory[] = [
  { title: "Languages", icon: "languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Dart"] },
  { title: "Backend", icon: "backend", items: ["FastAPI", "NestJS", "Django", "Flask", "REST APIs", "Microservices"] },
  { title: "Frontend", icon: "frontend", items: ["React", "Vite", "TailwindCSS", "TypeScript", "Responsive Design"] },
  {
    title: "AI/ML",
    icon: "aiml",
    items: [
      "Generative AI",
      "LLM Orchestration",
      "Agentic Workflows",
      "LangGraph",
      "RAG",
      "OCR",
      "RL Environments",
      "Langfuse",
      "Promptfoo",
      "TensorFlow",
      "PyTorch",
      "Explainable AI",
    ],
  },
  { title: "Databases", icon: "databases", items: ["PostgreSQL", "MongoDB", "MySQL", "ClickHouse", "Vector Databases"] },
  { title: "DevOps & Cloud", icon: "cloud", items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Render", "Vercel"] },
  { title: "Testing", icon: "testing", items: ["Regression Testing", "End-to-End Testing", "Automation QA"] },
];

export const projects: Project[] = [
  {
    title: "Kutum – Family Information OS",
    description:
      "Secure Family Information OS for organizing family records, documents, health data, and life events with AI-driven reminders.",
    achievements: [
      "Built a secure platform for family records, documents, health data, and life-event management.",
      "Added AI-driven reminders for document renewals, insurance expiry, birthdays, and important family dates.",
      "Designed multi-agent workflows for coordinated family planning, vaults, and daily operations.",
      "Shipped a responsive product experience for busy founders and family units.",
    ],
    technologies: ["Agentic AI", "NestJS", "React", "TailwindCSS", "PostgreSQL", "OpenAI", "Groq"],
    impact: "Helped families and busy founders stay on top of documents, health data, and life events.",
    links: {
      live: "https://kutum.apexneural.cloud",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://kutum.apexneural.cloud",
    },
  },
  {
    title: "E2EQA Labs",
    description:
      "AI Code Analysis & Testing Platform for automated end-to-end testing, intelligent code analysis, reporting, and CI/CD-integrated QA.",
    achievements: [
      "Built automated E2E testing workflows with framework detection and CI/CD integration.",
      "Added AI-powered code analysis for bugs, security issues, and quality recommendations.",
      "Delivered automated reporting with screenshots, videos, logs, and structured QA outputs.",
    ],
    technologies: ["E2E Testing", "AI Code Analysis", "CI/CD", "Playwright", "pytest", "Jest"],
    impact: "Enabled faster, higher-confidence release cycles through automated testing and code analysis.",
    links: {
      live: "https://e2eqalab.apexneural.cloud",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://e2eqalab.apexneural.cloud",
    },
  },
  {
    title: "LawFolks",
    description:
      "AI-first legal automation platform with agentic workflows for lawyers and law students — drafting, filing, research, and study acceleration.",
    achievements: [
      "Built RAG-based legal research and drafting assistant workflows for practicing lawyers.",
      "Added agentic AI use cases for law students — guided research, study workflows, and structured drafting support.",
      "Shipped production backend APIs with Django and PostgreSQL.",
      "Delivered a responsive product UI with React and TailwindCSS.",
    ],
    technologies: ["Django", "React", "PostgreSQL", "RAG", "Agentic AI", "TailwindCSS"],
    impact: "Enabled faster legal operations and study workflows for process-heavy legal teams and students.",
    links: {
      live: "https://lawfolks.vercel.app",
      github: "https://github.com/DevulapellyKushal",
      caseStudy: "https://lawfolks.vercel.app",
      linkedin: "https://www.linkedin.com/company/107871767",
    },
  },
  {
    title: "Voice AI Enterprise Platform",
    description: "Enterprise outreach and campaign platform powered by real-time speech and conversational AI.",
    achievements: [
      "Built an enterprise Voice AI platform for outreach and campaign workflows.",
      "Designed real-time voice pipelines combining STT, LLM orchestration, and TTS synthesis.",
      "Developed analytics dashboards for call outcomes and engagement tracking.",
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
    title: "L1 Support AI",
    description:
      "AI-powered Level 1 support chatbot that automates repetitive enterprise queries and improves first-contact resolution.",
    achievements: [
      "Decreased manual ticket handling by approximately 35% through workflow automation.",
      "Created ticket triage, knowledge-retrieval, and escalation workflows that cut average resolution time by approximately 25%.",
      "Executed structured response playbooks for consistent support quality across teams.",
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
    title: "PharmaOCR",
    description: "Indic handwritten OCR pipeline for pharmaceutical forms and mixed-script medical documentation.",
    achievements: [
      "Built an Indic handwritten OCR pipeline using denoising, binarization, skew correction, and contrast normalization.",
      "Enabled accurate extraction from complex medical forms and prescriptions across mixed scripts.",
      "Improved downstream validation throughput by approximately 20%.",
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
    title: "Vision AI Platform",
    description: "Enterprise-grade Vision AI SaaS for live camera analytics and automated operational reporting.",
    achievements: [
      "Built vision-based analytics and business intelligence dashboards for retail operations.",
      "Developed real-time inference pipelines and automated reporting workflows.",
      "Integrated Apache Superset and ClickHouse for fast analytics dashboards.",
    ],
    technologies: ["Python", "Vision AI", "ClickHouse", "Apache Superset", "FastAPI"],
    impact: "Delivered faster insight cycles for monitoring-heavy enterprise use cases.",
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
    title: "NIT Warangal R&D Certificate",
    issuer: "National Institute of Technology Warangal",
    meta: "AI ML Researcher · Official Certificate",
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
