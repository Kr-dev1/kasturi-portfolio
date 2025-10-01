export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const IS_SERVER = typeof window === "undefined";

export const GITHUB_USERNAME = "kr-dev1";

export const SITE_NAME = "Kasturi Ragnan";
export const SITE_KEYWORDS = [
  "Kasturi Ragnan",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Drizzle",
  "Cloudflare",
  "Vite",
  "Vitest",
  "Node.js",
  "React Query",
  "Tailwind CSS",
  "Radix UI",
  "Shadcn UI",
  "Ant Design",
  "Material UI",
  "Bootstrap",
  "Chakra UI",
  "Tailwind CSS",
  "Radix UI",
  "Shadcn UI",
  "Material UI",
  "Bootstrap",
];

export const SITE_GITHUB_URL = "https://github.com/kr-dev1";
export const SITE_X_URL = "https://x.com/Kasturi_rangan1";
export const SITE_LINKEDIN_URL = "https://www.linkedin.com/in/-kasturirangan/";

export const Projects = [
  {
    name: "Ask repo",
    description:
      "Built to tackle the frustration of navigating large, unfamiliar repositories, GitHub AI Insights lets users link any GitHub repo and have an AI analyze it. The AI understands the code, commits, and documentation, and later users can ask questions—like understanding architecture, key functions, or recent changes—and get clear, context-aware answers. It turns static repositories into interactive knowledge sources, making code exploration faster and onboarding smoother.",
    slug: "askrepo",
    tagline: "Ask questions on any Github repo",
    selected: true,
    techstack: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "PostgreSQL (pgvector)",
      "Vercel AI SDK",
      "LangChain",
      "Google Gemini",
      "Authjs",
      "TanStack Query",
      "Zod",
    ],
    homepage: "https://askrepo.vercel.app",
    github: "https://github.com/kr-dev1/askrepo",
  },
  {
    name: "Legal Hawk",
    description:
      "Legal Hawk is an AI-powered contract analysis chatbot that simplifies complex legal documents through interactive Q&A. Users can securely upload contracts as PDFs, which are validated, summarized, and transformed into searchable knowledge. Powered by a RAG pipeline with embeddings stored in PostgreSQL (pgvector) and responses generated using Llama 3.1 via Groq with Gemini fallback, it helps users quickly identify risks, understand clauses, and manage multiple contracts seamlessly.",
    slug: "legal-hawk",
    tagline: "AI-powered contract analysis chatbot",
    selected: true,
    techstack: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "PostgreSQL (pgvector)",
      "Vercel AI SDK",
      "LangChain",
      "Google Gemini",
      "Groq API (Llama 3)",
      "UploadThing",
      "Better-Auth",
      "TanStack Query",
      "Zod",
    ],
    homepage: "https://legal-hawk.vercel.app",
    github: "https://github.com/Kr-dev1/legal-eagle",
  },
  {
    name: "Financial Tracker",
    description:
      "Financial Tracker is a full-stack Vue.js 3 application for managing financial transactions, built with the Motia framework. It features a dynamic dashboard summarizing financial data, transaction creation, editing, and deletion, and an insights section for deeper analysis. The backend, powered by Motia, handles user authentication via Google OAuth, tracks recurring transactions, and generates AI-powered financial insights using the Gemini model.",
    slug: "financial-tracker",
    tagline: "Manage your finances with AI-powered insights.",
    selected: false,
    techstack: [
      "TypeScript",
      "Vue.js 3",
      "Vite",
      "Vue Router",
      "Pinia",
      "Tailwind CSS",
      "Prisma",
      "Prisma Client",
      "Zod",
      "Axios",
      "LangChain Google GenAI",
      "Motia",
    ],
    githubFrontend: "https://github.com/kr-dev1/finance-tracker",
    githubBackend: "https://github.com/Kr-dev1/finance-tracker-backend",
  },
  {
    name: "CryptoWiki",
    description:
      "The CryptoWiki integrates with Coingecko API and Firebase for watchlist management and user authentication. It offers users a comprehensive view of the cryptocurrency market by displaying the top 30 coins by market capitalization and top 7 trending coins with real-time data and detailed information. Users can create accounts, securely log in, and personalize their experience by adding coins to their watchlist, which is securely stored in Firebase.",
    slug: "cryptowiki",
    tagline: "Real-time crypto, personalized.",
    selected: false,
    techstack: ["React", "JavaScript", "CSS", "Tailwind", "Firebase"],
    homepage: "https://cryptowiki.surge.sh/",
    github: "https://github.com/Kr-dev1/CryptoWiki",
  },
  {
    name: "Mystery Message",
    description:
      "Mystry Message lets users create and share anonymous messages using QR codes. A sender types a message, generates a unique QR code (downloadable/shareable) that links to an anonymous message page — recipients scan the code to read or reply without identities being revealed. Built with Next.js + TypeScript and MongoDB for storage, with client-side QR generation for instant sharing.",
    slug: "mystre-message",
    tagline: "Real-time crypto, personalized.",
    selected: false,
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "MongoDB",
      "TypeScript",
      "Gemini API",
    ],
    homepage: "https://mystremessage.vercel.app",
    github: "https://github.com/Kr-dev1/Mystry-Message-",
  },
];
