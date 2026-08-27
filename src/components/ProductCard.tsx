import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}/`}
      className="flex flex-col rounded-3xl border border-emerald-900/10 bg-white p-4 shadow-[0_8px_30px_rgba(28,58,42,0.06)] transition active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${product.gradient} text-3xl`}
        >
          {product.emoji}
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-800">
          {product.category}
        </span>
      </div>
      <h3 className="mt-3 text-base font-bold text-emerald-950">{product.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-stone-500">{product.tagline}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-amber-700">★ {product.rating.toFixed(1)}</span>
        <span className="font-bold text-emerald-900">{formatPrice(product.price)}</span>
      </div>
    </Link>
  );
}
