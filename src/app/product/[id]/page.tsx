import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[id]">): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Product not found — Azhary AI Market" };
  return {
    title: `${product.name} — Azhary AI Market`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/product/[id]">) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/"
        className="text-sm text-slate-400 transition hover:text-white"
      >
        ← Back to marketplace
      </Link>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div
          className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${product.gradient} text-4xl`}
        >
          {product.emoji}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold text-white">{product.name}</h1>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
              {product.category}
            </span>
          </div>
          <p className="mt-2 text-lg text-slate-400">{product.tagline}</p>
          <div className="mt-3 flex items-center gap-4 text-sm text-slate-400">
            <span>by {product.provider}</span>
            <span className="flex items-center gap-1 text-amber-400">
              ★{" "}
              <span className="text-slate-300">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-slate-500">({product.reviews} reviews)</span>
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
          <div className="text-3xl font-bold text-white">
            ${product.pricePerMonth}
            <span className="text-sm font-normal text-slate-500">/mo</span>
          </div>
          <button
            type="button"
            className="mt-3 w-full rounded-xl bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Deploy now
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <h2 className="text-lg font-semibold text-white">Overview</h2>
          <p className="mt-3 leading-relaxed text-slate-400">
            {product.description}
          </p>

          <h2 className="mt-8 text-lg font-semibold text-white">Capabilities</h2>
          <ul className="mt-3 space-y-2">
            {product.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-2 text-slate-300"
              >
                <span className="mt-1 text-emerald-400">✓</span>
                {capability}
              </li>
            ))}
          </ul>
        </div>

        <aside>
          <h2 className="text-lg font-semibold text-white">Tags</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
