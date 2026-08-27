export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  seller: string;
  price: number;
  stock: number;
  rating: number;
  reviews: number;
  tags: string[];
  specs: string[];
  gradient: string;
  emoji: string;
};

export const CATEGORIES = [
  "إلكترونيات",
  "كتب",
  "أزياء",
  "منزل",
  "جمال",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const products: Product[] = [
  {
    id: "study-laptop",
    name: "لابتوب الدراسة برو",
    tagline: "خفيف وسريع للمحاضرات والبحث",
    description:
      "لابتوب مناسب للطالب والباحث: شاشة واضحة، بطارية طويلة، وأداء يكفي الكتابة والتصفح وبرامج الدراسة دون ثقل.",
    category: "إلكترونيات",
    seller: "متجر النور",
    price: 1899,
    stock: 7,
    rating: 4.8,
    reviews: 214,
    tags: ["لابتوب", "دراسة", "جامعة"],
    specs: ["شاشة 14 بوصة", "ذاكرة 16 جيجا", "بطارية حتى 12 ساعة", "وزن 1.3 كجم"],
    gradient: "from-emerald-700 to-teal-800",
    emoji: "💻",
  },
  {
    id: "city-phone",
    name: "هاتف أزهري S",
    tagline: "كاميرا نقية وبطارية ليوم كامل",
    description:
      "هاتف يومي بكاميرا واضحة للشراء أونلاين والمذاكرة، مع شحن سريع وبصمة جانبية.",
    category: "إلكترونيات",
    seller: "ركن التقنية",
    price: 4299,
    stock: 11,
    rating: 4.6,
    reviews: 508,
    tags: ["جوال", "هاتف", "كاميرا"],
    specs: ["شاشة 6.6 بوصة", "بطارية 5000 مللي", "شحن 45 واط", "ذاكرة 256 جيجا"],
    gradient: "from-slate-700 to-emerald-900",
    emoji: "📱",
  },
  {
    id: "quiet-buds",
    name: "سماعات هدوء",
    tagline: "عزل للصوت أثناء المذاكرة",
    description:
      "سماعات لاسلكية بعزل للضجيج ووضع شفافية، مناسبة للمكتبة والمواصلات.",
    category: "إلكترونيات",
    seller: "صوت النقى",
    price: 349,
    stock: 24,
    rating: 4.5,
    reviews: 331,
    tags: ["سماعات", "مذاكرة", "بلوتوث"],
    specs: ["عزل نشط", "شحن علبة 28 ساعة", "مقاومة للماء", "ميكروفون واضح"],
    gradient: "from-amber-600 to-yellow-700",
    emoji: "🎧",
  },
  {
    id: "smart-watch",
    name: "ساعة فجر الذكية",
    tagline: "تنبيهات الصلاة ونشاطك اليومي",
    description:
      "ساعة خفيفة تعرض الوقت، الخطوات، ومواعيد الصلاة، مع مقاومة للماء للاستخدام اليومي.",
    category: "إلكترونيات",
    seller: "ركن التقنية",
    price: 279,
    stock: 18,
    rating: 4.3,
    reviews: 146,
    tags: ["ساعة", "رياضة", "صلاة"],
    specs: ["بطارية 7 أيام", "مقاومة ماء", "تتبع نوم", "تنبيهات ذكية"],
    gradient: "from-teal-700 to-cyan-800",
    emoji: "⌚",
  },
  {
    id: "fiqh-book",
    name: "مختصر الفقه الميسر",
    tagline: "طبعة واضحة بغلاف مقوى",
    description:
      "كتاب مرتب للعناية بالمسائل اليومية، بخط مقروء وهوامش مناسبة للتدريس والمراجعة.",
    category: "كتب",
    seller: "مكتبة الأزهر",
    price: 85,
    stock: 40,
    rating: 4.9,
    reviews: 672,
    tags: ["كتاب", "فقه", "دراسة"],
    specs: ["غلاف مقوى", "ورق كريمي", "فهرس موضوعي", "حجم متوسط"],
    gradient: "from-lime-800 to-emerald-900",
    emoji: "📖",
  },
  {
    id: "nahw-book",
    name: "تيسير النحو",
    tagline: "شرح لطيف لطلاب العربية",
    description:
      "مدخل مبسّط للنحو مع أمثلة معاصرة وتمارين قصيرة في نهاية كل درس.",
    category: "كتب",
    seller: "مكتبة الأزهر",
    price: 65,
    stock: 33,
    rating: 4.7,
    reviews: 290,
    tags: ["نحو", "عربية", "طلاب"],
    specs: ["192 صفحة", "تمارين محلولة", "غلاف مرن", "مناسب للمرحلة الأولى"],
    gradient: "from-green-800 to-stone-800",
    emoji: "📗",
  },
  {
    id: "canvas-tote",
    name: "حقيبة طالب متينة",
    tagline: "تتسع للكتب واللابتوب معاً",
    description:
      "حقيبة قماش مقوّى بجيب للابتوب حتى 15 بوصة وجيوب داخلية للقلم والدفاتر.",
    category: "أزياء",
    seller: "خياطة القاهرة",
    price: 159,
    stock: 21,
    rating: 4.4,
    reviews: 188,
    tags: ["حقيبة", "جامعة", "قماش"],
    specs: ["جيب لابتوب", "كتف مبطّن", "قماش مقاوم للماء", "سحّاب قوي"],
    gradient: "from-stone-600 to-emerald-800",
    emoji: "🎒",
  },
  {
    id: "cotton-thobe",
    name: "ثوب قطن صيفي",
    tagline: "خفيف للطقس الحار",
    description:
      "ثوب قطني فضفاض بخياطة نظيفة، مناسب للبيت والخروج الخفيف في الصيف.",
    category: "أزياء",
    seller: "خياطة القاهرة",
    price: 220,
    stock: 15,
    rating: 4.6,
    reviews: 97,
    tags: ["ثوب", "قطن", "صيفي"],
    specs: ["قطن 100%", "مقاسات متعددة", "سهل الغسيل", "لون أبيض عاجي"],
    gradient: "from-neutral-500 to-stone-700",
    emoji: "🤍",
  },
  {
    id: "desk-lamp",
    name: "إضاءة مكتب دافئة",
    tagline: "تحمي العين أثناء القراءة",
    description:
      "مصباح مكتبي بثلاث درجات إضاءة وذراع مرن، مثالي للسهر على المذاكرة دون إجهاد.",
    category: "منزل",
    seller: "بيت الدفء",
    price: 119,
    stock: 27,
    rating: 4.5,
    reviews: 154,
    tags: ["إضاءة", "مكتب", "قراءة"],
    specs: ["3 درجات", "ذراع مرن", "منفذ USB", "لمسة تشغيل"],
    gradient: "from-yellow-700 to-amber-900",
    emoji: "💡",
  },
  {
    id: "tea-set",
    name: "طقم شاي الضيافة",
    tagline: "إبريق وأكواب لستة أشخاص",
    description:
      "طقم بورسلين بزخرفة هادئة للضيافة اليومية، يشمل إبريقًا وستة أكواب وصحونًا.",
    category: "منزل",
    seller: "بيت الدفء",
    price: 245,
    stock: 9,
    rating: 4.2,
    reviews: 76,
    tags: ["شاي", "ضيافة", "مطبخ"],
    specs: ["بورسلين", "6 أكواب", "آمن لغسالة الأطباق", "علبة إهداء"],
    gradient: "from-rose-800 to-amber-800",
    emoji: "🍵",
  },
  {
    id: "oud-oil",
    name: "دهن عود أصيل",
    tagline: "رائحة ثابتة بتركيز معتدل",
    description:
      "دهن عود بحجم السفر، مناسب للمناسبات والاستخدام اليومي الخفيف دون مبالغة.",
    category: "جمال",
    seller: "عطور المشكاة",
    price: 180,
    stock: 16,
    rating: 4.8,
    reviews: 243,
    tags: ["عطر", "عود", "هدايا"],
    specs: ["3 مل", "ثبات عالٍ", "تركيز دهني", "علبة مخمل"],
    gradient: "from-yellow-800 to-stone-900",
    emoji: "✨",
  },
  {
    id: "miswak-set",
    name: "طقم عناية يومية",
    tagline: "مسواك وفرشاة ولوشن خفيف",
    description:
      "مجموعة صغيرة للعناية اليومية: مسواك طبيعي، فرشاة ناعمة، ولوشن يد برائحة خفيفة.",
    category: "جمال",
    seller: "عطور المشكاة",
    price: 75,
    stock: 30,
    rating: 4.4,
    reviews: 121,
    tags: ["عناية", "مسواك", "يومي"],
    specs: ["مسواك طازج", "فرشاة ناعمة", "لوشن 50 مل", "حجم سفر"],
    gradient: "from-emerald-600 to-lime-800",
    emoji: "🌿",
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ar-EG")} ج.م`;
}

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
      activeCategory === "الكل" ||
      product.category === activeCategory;

    if (!matchesCategory) return false;
    if (!query) return true;

    const haystack = [
      product.name,
      product.tagline,
      product.description,
      product.seller,
      product.category,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}
