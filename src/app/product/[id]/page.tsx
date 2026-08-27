import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatPrice, getProduct, products } from "@/lib/products";
import { AddToCartButton } from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[id]">): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "المنتج غير موجود — سوق أزهري الذكي" };
  return {
    title: `${product.name} — سوق أزهري الذكي`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/product/[id]">) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) notFound();

  return (
    <div className="space-y-6">
      <Link href="/" className="text-sm text-stone-500">
        → العودة للسوق
      </Link>

      <section className="rounded-[28px] bg-white p-5 shadow-[0_8px_30px_rgba(28,58,42,0.06)]">
        <div
          className={`grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br ${product.gradient} text-5xl`}
        >
          {product.emoji}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold text-emerald-950">{product.name}</h1>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-800">
            {product.category}
          </span>
        </div>
        <p className="mt-2 text-stone-600">{product.tagline}</p>
        <p className="mt-2 text-sm text-stone-500">البائع: {product.seller}</p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-emerald-900">{formatPrice(product.price)}</p>
            <p className="text-xs text-stone-500">
              ★ {product.rating.toFixed(1)} ({product.reviews}) · المخزون {product.stock}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <AddToCartButton productId={product.id} stock={product.stock} />
        </div>
      </section>

      <section className="rounded-[28px] bg-white p-5">
        <h2 className="font-bold text-emerald-950">الوصف</h2>
        <p className="mt-2 leading-8 text-stone-600">{product.description}</p>
        <h2 className="mt-6 font-bold text-emerald-950">المواصفات</h2>
        <ul className="mt-2 space-y-2 text-stone-700">
          {product.specs.map((spec) => (
            <li key={spec} className="flex gap-2">
              <span className="text-emerald-700">•</span>
              {spec}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
