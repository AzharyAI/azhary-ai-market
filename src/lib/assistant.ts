import { products, type Product } from "@/lib/products";

export type AssistantReply = {
  text: string;
  products: Product[];
};

const CATEGORY_HINTS: { keys: string[]; category: Product["category"] }[] = [
  { keys: ["لابتوب", "كمبيوتر", "حاسب", "دراسة", "جامعة"], category: "إلكترونيات" },
  { keys: ["هاتف", "جوال", "موبايل", "كاميرا"], category: "إلكترونيات" },
  { keys: ["سماع", "أذان", "موسيقى", "عزل"], category: "إلكترونيات" },
  { keys: ["ساعة", "صلاة", "رياض"], category: "إلكترونيات" },
  { keys: ["كتاب", "فقه", "نحو", "مذاكرة", "قراءة"], category: "كتب" },
  { keys: ["حقيبة", "ثوب", "ملابس", "قطن"], category: "أزياء" },
  { keys: ["مصباح", "إضاءة", "شاي", "مكتب", "بيت", "منزل"], category: "منزل" },
  { keys: ["عطر", "عود", "مسواك", "جمال", "هدية"], category: "جمال" },
];

function extractBudget(message: string): number | null {
  const normalized = message.replace(/[٠-٩]/g, (digit) =>
    String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)),
  );
  const match = normalized.match(/(\d{2,6})/);
  return match ? Number(match[1]) : null;
}

export function answerShopper(message: string): AssistantReply {
  const text = message.trim();
  if (!text) {
    return {
      text: "اكتب ما تحتاجه بالعربية، مثل: لابتوب للدراسة تحت 2000.",
      products: [],
    };
  }

  const budget = extractBudget(text);
  const lowered = text.toLowerCase();

  const hintedCategories = CATEGORY_HINTS.filter((hint) =>
    hint.keys.some((key) => lowered.includes(key)),
  ).map((hint) => hint.category);

  let matches = products.filter((product) => {
    const withinBudget = budget ? product.price <= budget : true;
    const inCategory =
      hintedCategories.length === 0 || hintedCategories.includes(product.category);
    const inWords = [product.name, product.tagline, ...product.tags].some((value) =>
      lowered.includes(value.toLowerCase()) ||
      value.split(" ").some((part) => part.length > 2 && lowered.includes(part)),
    );
    return withinBudget && (inCategory || inWords);
  });

  if (matches.length === 0) {
    matches = products.filter((product) => (budget ? product.price <= budget : true));
  }

  matches = [...matches]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  if (matches.length === 0) {
    return {
      text: "لم أجد منتجاً مطابقاً داخل الكتالوج الحالي. جرّب فئة أخرى أو ميزانية أوسع.",
      products: [],
    };
  }

  const budgetNote = budget ? ` ضمن ميزانية ${budget.toLocaleString("ar-EG")} ج.م` : "";
  return {
    text: `وجدت ${matches.length} خيارات مناسبة${budgetNote}. اختر ما تريد إضافته للسلة:`,
    products: matches,
  };
}
