import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex items-center justify-between">
        <div
          className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${product.gradient} text-2xl`}
        >
          {product.emoji}
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
          {product.category}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{product.name}</h3>
      <p className="mt-1 text-sm text-slate-400">{product.tagline}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {product.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
        <span className="flex items-center gap-1 text-amber-400">
          ★ <span className="text-slate-300">{product.rating.toFixed(1)}</span>
          <span className="text-slate-500">({product.reviews})</span>
        </span>
        <span className="font-semibold text-white">
          ${product.pricePerMonth}
          <span className="text-xs font-normal text-slate-500">/mo</span>
        </span>
      </div>
    </Link>
  );
}
