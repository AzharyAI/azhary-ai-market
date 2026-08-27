"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export function AddToCartButton({ productId, stock }: { productId: string; stock: number }) {
  const { add } = useCart();
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div>
      <button
        type="button"
        disabled={stock < 1}
        onClick={() => {
          const error = add(productId);
          setMessage(error ?? "أُضيف إلى السلة");
        }}
        className="w-full rounded-2xl bg-emerald-800 px-5 py-3.5 text-sm font-bold text-white disabled:bg-stone-300"
      >
        {stock < 1 ? "نفد المخزون" : "أضف إلى السلة"}
      </button>
      {message && <p className="mt-2 text-center text-sm text-emerald-800">{message}</p>}
    </div>
  );
}
