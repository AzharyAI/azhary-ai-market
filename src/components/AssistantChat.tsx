"use client";

import { useState } from "react";
import Link from "next/link";
import { answerShopper } from "@/lib/assistant";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

type ChatItem = {
  role: "user" | "assistant";
  text: string;
  products?: Product[];
};

const starters = [
  "أبي لابتوب للدراسة تحت 2000",
  "كتاب فقه مناسب للمبتدئ",
  "هدية عطر أقل من 200",
];

export function AssistantChat() {
  const { add } = useCart();
  const [input, setInput] = useState("");
  const [added, setAdded] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatItem[]>([
    {
      role: "assistant",
      text: "مرحباً، أنا مساعد سوق أزهري. صف احتياجك بالعربية وسأرشّح من المنتجات الموجودة فقط.",
    },
  ]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = answerShopper(trimmed);
    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: reply.text, products: reply.products },
    ]);
    setInput("");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {starters.map((starter) => (
          <button
            key={starter}
            type="button"
            onClick={() => send(starter)}
            className="rounded-full bg-white px-3 py-2 text-xs text-emerald-900 ring-1 ring-emerald-900/10"
          >
            {starter}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[92%] rounded-3xl px-4 py-3 text-sm leading-7 ${
              message.role === "user"
                ? "mr-auto bg-emerald-800 text-white"
                : "ml-auto bg-white text-stone-800 ring-1 ring-emerald-900/10"
            }`}
          >
            <p>{message.text}</p>
            {message.products && message.products.length > 0 && (
              <ul className="mt-3 space-y-2">
                {message.products.map((product) => (
                  <li
                    key={product.id}
                    className="rounded-2xl bg-emerald-50/80 p-3 text-emerald-950"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <Link href={`/product/${product.id}/`} className="font-bold">
                        {product.emoji} {product.name}
                      </Link>
                      <span className="text-xs">{formatPrice(product.price)}</span>
                    </div>
                    <p className="mt-1 text-xs text-stone-600">{product.tagline}</p>
                    <button
                      type="button"
                      onClick={() => {
                        const error = add(product.id);
                        setAdded(error ?? `أُضيف ${product.name}`);
                      }}
                      className="mt-2 text-xs font-bold text-emerald-800"
                    >
                      أضف للسلة
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {added && <p className="text-sm text-emerald-800">{added}</p>}

      <form
        className="sticky bottom-20 flex gap-2 md:bottom-4"
        onSubmit={(event) => {
          event.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="اكتب طلبك هنا..."
          className="flex-1 rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 outline-none"
        />
        <button
          type="submit"
          className="rounded-2xl bg-emerald-800 px-4 py-3 text-sm font-bold text-white"
        >
          إرسال
        </button>
      </form>
    </div>
  );
}
