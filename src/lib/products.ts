export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  provider: string;
  pricePerMonth: number;
  rating: number;
  reviews: number;
  tags: string[];
  capabilities: string[];
  gradient: string;
  emoji: string;
};

export const CATEGORIES = [
  "Language",
  "Image",
  "Audio",
  "Video",
  "Agents",
  "Data",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const products: Product[] = [
  {
    id: "aria-lm",
    name: "Aria LM",
    tagline: "Frontier reasoning model for builders",
    description:
      "A general-purpose large language model tuned for complex reasoning, long-context understanding, and reliable tool use. Aria LM powers chat assistants, coding copilots, and autonomous workflows with a 256k token context window.",
    category: "Language",
    provider: "Azhary Labs",
    pricePerMonth: 49,
    rating: 4.8,
    reviews: 1284,
    tags: ["chat", "reasoning", "coding", "256k context"],
    capabilities: [
      "256k token context window",
      "Function calling & structured outputs",
      "Streaming responses",
      "Multi-language support",
    ],
    gradient: "from-indigo-500 to-purple-600",
    emoji: "🧠",
  },
  {
    id: "pixel-forge",
    name: "PixelForge",
    tagline: "Photorealistic image generation",
    description:
      "Generate stunning, high-resolution images from text prompts. PixelForge excels at product mockups, marketing art, and concept design with precise style control and inpainting.",
    category: "Image",
    provider: "Nova Studio",
    pricePerMonth: 29,
    rating: 4.6,
    reviews: 932,
    tags: ["text-to-image", "inpainting", "4k"],
    capabilities: [
      "Up to 4096×4096 output",
      "Inpainting & outpainting",
      "Style & reference conditioning",
      "Commercial license included",
    ],
    gradient: "from-pink-500 to-rose-600",
    emoji: "🎨",
  },
  {
    id: "echo-voice",
    name: "Echo Voice",
    tagline: "Natural text-to-speech in 40+ languages",
    description:
      "Convert text into lifelike speech with expressive, controllable voices. Echo Voice supports real-time streaming, voice cloning, and SSML for narration, IVR, and accessibility.",
    category: "Audio",
    provider: "Resonate AI",
    pricePerMonth: 19,
    rating: 4.5,
    reviews: 611,
    tags: ["tts", "voice cloning", "streaming"],
    capabilities: [
      "40+ languages and accents",
      "Real-time low-latency streaming",
      "Custom voice cloning",
      "SSML fine control",
    ],
    gradient: "from-amber-500 to-orange-600",
    emoji: "🎙️",
  },
  {
    id: "motion-craft",
    name: "MotionCraft",
    tagline: "Text-to-video for short-form content",
    description:
      "Turn scripts and storyboards into polished short videos. MotionCraft handles scene generation, transitions, and captions, ideal for social clips and product explainers.",
    category: "Video",
    provider: "Nova Studio",
    pricePerMonth: 59,
    rating: 4.3,
    reviews: 288,
    tags: ["text-to-video", "captions", "social"],
    capabilities: [
      "Up to 1080p 60fps clips",
      "Auto captions & subtitles",
      "Scene-to-scene transitions",
      "Royalty-free soundtrack library",
    ],
    gradient: "from-sky-500 to-cyan-600",
    emoji: "🎬",
  },
  {
    id: "swift-agent",
    name: "SwiftAgent",
    tagline: "Autonomous task-completing agents",
    description:
      "Deploy agents that plan, browse, and execute multi-step tasks with guardrails. SwiftAgent connects to your tools and APIs to automate research, data entry, and operations.",
    category: "Agents",
    provider: "Azhary Labs",
    pricePerMonth: 79,
    rating: 4.7,
    reviews: 415,
    tags: ["autonomous", "tools", "automation"],
    capabilities: [
      "Multi-step planning & execution",
      "Tool and API integrations",
      "Human-in-the-loop approvals",
      "Audit logs & guardrails",
    ],
    gradient: "from-emerald-500 to-teal-600",
    emoji: "🤖",
  },
  {
    id: "insight-db",
    name: "InsightDB",
    tagline: "Natural-language analytics over your data",
    description:
      "Ask questions in plain English and get charts, tables, and summaries from your databases and spreadsheets. InsightDB writes safe SQL and explains its reasoning.",
    category: "Data",
    provider: "Quanta",
    pricePerMonth: 39,
    rating: 4.4,
    reviews: 507,
    tags: ["analytics", "sql", "charts"],
    capabilities: [
      "Text-to-SQL with validation",
      "Auto-generated charts",
      "Connects to Postgres & CSV",
      "Row-level access controls",
    ],
    gradient: "from-violet-500 to-fuchsia-600",
    emoji: "📊",
  },
  {
    id: "code-pilot",
    name: "CodePilot",
    tagline: "AI pair programmer for every stack",
    description:
      "An in-editor assistant that completes code, writes tests, and reviews pull requests. CodePilot understands your repository context and follows your team's conventions.",
    category: "Language",
    provider: "Devscale",
    pricePerMonth: 25,
    rating: 4.9,
    reviews: 2043,
    tags: ["coding", "tests", "review"],
    capabilities: [
      "Repo-aware completions",
      "Automated test generation",
      "PR review comments",
      "40+ language support",
    ],
    gradient: "from-blue-500 to-indigo-600",
    emoji: "💻",
  },
  {
    id: "vision-scan",
    name: "VisionScan",
    tagline: "Understand and extract from any image",
    description:
      "Detect objects, read documents, and extract structured data from photos and scans. VisionScan powers OCR, moderation, and visual search pipelines at scale.",
    category: "Image",
    provider: "Quanta",
    pricePerMonth: 34,
    rating: 4.2,
    reviews: 356,
    tags: ["ocr", "detection", "extraction"],
    capabilities: [
      "High-accuracy OCR",
      "Object & scene detection",
      "Structured JSON extraction",
      "Content moderation",
    ],
    gradient: "from-lime-500 to-green-600",
    emoji: "🔍",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export type ProductQuery = {
  q?: string;
  category?: string;
};

export function searchProducts({ q, category }: ProductQuery = {}): Product[] {
  const query = (q ?? "").trim().toLowerCase();
  const activeCategory = (category ?? "").trim();

  return products.filter((product) => {
    const matchesCategory =
      !activeCategory ||
      activeCategory.toLowerCase() === "all" ||
      product.category.toLowerCase() === activeCategory.toLowerCase();

    if (!matchesCategory) return false;

    if (!query) return true;

    const haystack = [
      product.name,
      product.tagline,
      product.description,
      product.provider,
      product.category,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}
