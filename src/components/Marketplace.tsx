"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, searchProducts, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const FILTERS = ["All", ...CATEGORIES] as const;

export function Marketplace() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const results = useMemo<Product[]>(
    () => searchProducts({ q: query, category }),
    [query, category],
  );

  const heading = useMemo(() => {
    if (results.length === 0) return "No results found";
    return `${results.length} ${results.length === 1 ? "result" : "results"}`;
  }, [results.length]);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            🔎
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search models, agents, tools…"
            aria-label="Search the marketplace"
            className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-indigo-400"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((filter) => {
          const active = filter === category;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setCategory(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active
                  ? "bg-indigo-500 text-white"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-slate-400" aria-live="polite">
        {heading}
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {results.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-12 text-center text-slate-400">
          Try a different search term or category.
        </div>
      )}
    </section>
  );
}
