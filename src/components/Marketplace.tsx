"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, searchProducts, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const FILTERS = ["الكل", ...CATEGORIES] as const;

export function Marketplace({ initialProducts }: { initialProducts: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("الكل");

  const results = useMemo(
    () => searchProducts({ q: query, category }),
    [query, category],
  );

  return (
    <section>
      <label className="block">
        <span className="sr-only">ابحث في السوق</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="ابحث: لابتوب، كتاب، عطر..."
          className="w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3.5 text-base text-emerald-950 outline-none ring-emerald-700/20 placeholder:text-stone-400 focus:ring-4"
        />
      </label>

      <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {FILTERS.map((filter) => {
          const active = filter === category;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setCategory(filter)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                active
                  ? "bg-emerald-800 text-white"
                  : "bg-white text-stone-600 ring-1 ring-emerald-900/10"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-stone-500">
        {results.length} منتج{results.length === 1 ? "" : "ات"}
      </p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {(results.length ? results : initialProducts.slice(0, 0)).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {results.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-emerald-900/15 bg-white/60 p-10 text-center text-stone-500">
          لا توجد نتائج. جرّب كلمة أخرى أو اسأل المساعد الذكي.
        </div>
      )}
    </section>
  );
}
