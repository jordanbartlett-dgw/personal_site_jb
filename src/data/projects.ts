export type ProjectStatus = "active" | "shipped" | "exploring";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  status: ProjectStatus;
  url?: string;
  order: number;
};

export const projects: Project[] = [
  {
    id: "jb-home-base",
    name: "JB Home Base",
    tagline: "Agent framework for rapid deployment to businesses",
    description:
      "A multi-channel agent platform built on Pydantic AI that lets small teams deploy customized AI agents in days, not months. Gateway handles Telegram, Slack, and web. Each vertical gets its own system prompt and tools.",
    techStack: ["Python", "Pydantic AI", "FastAPI", "Supabase"],
    status: "active",
    order: 1,
  },
  {
    id: "dgw-branded",
    name: "DGW Branded",
    tagline: "Branded merchandise as a force for good",
    description:
      "Full-service promotional products social enterprise and public benefit corporation. Every order funds Foster Greatness. Built the tech stack from storefront to fulfillment.",
    techStack: ["Next.js", "HubSpot", "Vercel"],
    status: "active",
    url: "https://doinggoodworks.com",
    order: 2,
  },
  {
    id: "foster-greatness",
    name: "Foster Greatness",
    tagline: "Lifelong community for current and former foster youth",
    description:
      "501(c)(3) nonprofit platform serving 2,000+ members nationwide. Lived experience-led. Free to join. No aging out. Building the infrastructure that the system never provided.",
    techStack: ["Notion", "Supabase", "MCP Integrations"],
    status: "active",
    url: "https://fostergreatness.co",
    order: 3,
  },
  {
    id: "infrastructure-of-belonging",
    name: "Infrastructure of Belonging",
    tagline: "Newsletter on building things that matter",
    description:
      "Weekly newsletter on technology for social impact, scaling yourself before scaling headcount, and what it means to build belonging on purpose. Published on Beehiiv, distributed everywhere.",
    techStack: ["Beehiiv", "Next.js"],
    status: "active",
    url: "/blog",
    order: 4,
  },
  {
    id: "jordanbartlett-co",
    name: "jordanbartlett.co",
    tagline: "This site, built in public",
    description:
      "Editorial personal brand site. Typography-forward design. Beehiiv-powered blog, Supabase contact form, Infisical secrets. The site itself is a project.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Supabase"],
    status: "active",
    url: "https://jordanbartlett.co",
    order: 5,
  },
  {
    id: "obsidian-knowledge-system",
    name: "Obsidian Knowledge System",
    tagline: "Second brain with AI-powered interviews",
    description:
      "Personal knowledge management vault with an agent that interviews me, processes 10 years of founder emails into atomic notes, and feeds content creation. The system that remembers so I can focus on building.",
    techStack: ["Obsidian", "Python", "AI Agents"],
    status: "active",
    order: 6,
  },
];
