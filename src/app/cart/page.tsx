"use client";

import Link from "next/link";
import { formatPrice, getProduct } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, total, setQty, remove, ready } = useCart();

  if (!ready) return <p className="text-stone-500">جاري التحميل...</p>;

  if (items.length === 0) {
    return (
      <div className="rounded-[28px] bg-white p-8 text-center">
        <p className="text-lg font-bold text-emerald-950">سلتك فارغة</p>
        <p className="mt-2 text-sm text-stone-500">أضف منتجاً من السوق أو عبر المساعد.</p>
        <Link
          href="/"
          className="mt-5 inline-block rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-bold text-white"
        >
          تصفح السوق
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-emerald-950">السلة</h1>
      <ul className="space-y-3">
        {items.map((item) => {
          const product = getProduct(item.productId);
          if (!product) return null;
          return (
            <li
              key={item.productId}
              className="flex items-center gap-3 rounded-3xl bg-white p-4"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${product.gradient} text-2xl`}
              >
                {product.emoji}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold text-emerald-950">{product.name}</p>
                <p className="text-sm text-stone-500">{formatPrice(product.price)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQty(item.productId, item.qty - 1)}
                    className="h-8 w-8 rounded-full bg-emerald-50 text-lg"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{item.qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty(item.productId, item.qty + 1)}
                    className="h-8 w-8 rounded-full bg-emerald-50 text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => remove(item.productId)}
                className="text-xs text-rose-700"
              >
                حذف
              </button>
            </li>
          );
        })}
      </ul>
      <div className="rounded-3xl bg-emerald-900 p-5 text-white">
        <div className="flex items-center justify-between">
          <span>الإجمالي</span>
          <span className="text-xl font-bold">{formatPrice(total)}</span>
        </div>
        <Link
          href="/checkout/"
          className="mt-4 block rounded-2xl bg-white py-3 text-center text-sm font-bold text-emerald-900"
        >
          إتمام الطلب
        </Link>
      </div>
    </div>
  );
}
