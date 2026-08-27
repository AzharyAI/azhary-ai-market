"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, placeOrder, ready } = useCart();
  const [error, setError] = useState("");

  if (!ready) return <p className="text-stone-500">جاري التحميل...</p>;

  if (items.length === 0) {
    return (
      <div className="rounded-[28px] bg-white p-8 text-center">
        <p className="font-bold text-emerald-950">لا يوجد شيء لإتمامه</p>
        <Link href="/" className="mt-4 inline-block text-sm text-emerald-800">
          العودة للسوق
        </Link>
      </div>
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    if (!name || !phone || !city || !address) {
      setError("أكمل كل الحقول لإتمام الطلب التجريبي.");
      return;
    }
    const order = placeOrder({ name, phone, city, address, payment: "cod" });
    router.push(`/orders/?placed=${order.id}`);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-emerald-950">إتمام الطلب</h1>
      <p className="text-sm text-stone-500">
        هذه معاينة. الدفع عند الاستلام فقط، والطلب يُحفظ على هذا الجهاز.
      </p>
      <form onSubmit={onSubmit} className="space-y-3 rounded-[28px] bg-white p-5">
        <input name="name" placeholder="الاسم" className="w-full rounded-2xl bg-emerald-50/70 px-4 py-3 outline-none" />
        <input name="phone" placeholder="رقم الجوال" inputMode="tel" className="w-full rounded-2xl bg-emerald-50/70 px-4 py-3 outline-none" />
        <input name="city" placeholder="المدينة" className="w-full rounded-2xl bg-emerald-50/70 px-4 py-3 outline-none" />
        <textarea name="address" placeholder="العنوان بالتفصيل" rows={3} className="w-full rounded-2xl bg-emerald-50/70 px-4 py-3 outline-none" />
        {error && <p className="text-sm text-rose-700">{error}</p>}
        <div className="flex items-center justify-between pt-2 text-sm">
          <span>الإجمالي · الدفع عند الاستلام</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        <button type="submit" className="w-full rounded-2xl bg-emerald-800 py-3.5 text-sm font-bold text-white">
          تأكيد الطلب التجريبي
        </button>
      </form>
    </div>
  );
}
