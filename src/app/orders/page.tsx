"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { formatPrice, getProduct } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

function OrdersList() {
  const { orders, ready } = useCart();
  const placed = useSearchParams().get("placed");

  if (!ready) return <p className="text-stone-500">جاري التحميل...</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-emerald-950">طلباتي</h1>
      {placed && (
        <p className="rounded-2xl bg-emerald-100 px-4 py-3 text-sm text-emerald-900">
          تم تسجيل الطلب {placed}. هذه تجربة محلية على جهازك.
        </p>
      )}
      {orders.length === 0 ? (
        <div className="rounded-[28px] bg-white p-8 text-center text-stone-500">
          لا توجد طلبات بعد.
          <Link href="/" className="mt-3 block text-emerald-800">
            ابدأ التسوق
          </Link>
        </div>
      ) : (
        <ul className="space-y-3">
          {orders.map((order) => (
            <li key={order.id} className="rounded-3xl bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-bold text-emerald-950">{order.id}</p>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-900">
                  {order.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-stone-500">
                {order.name} · {order.city} · {formatPrice(order.total)}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-stone-700">
                {order.items.map((item) => {
                  const product = getProduct(item.productId);
                  return (
                    <li key={item.productId}>
                      {product?.name ?? item.productId} × {item.qty}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<p className="text-stone-500">جاري التحميل...</p>}>
      <OrdersList />
    </Suspense>
  );
}
