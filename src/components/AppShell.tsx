"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartProvider, useCart } from "@/components/CartProvider";
import { BottomNav } from "@/components/BottomNav";

function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-20 border-b border-emerald-900/10 bg-[#FBF7EE]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-emerald-800 to-amber-700 text-sm font-bold text-white">
              أ
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-emerald-950">سوق أزهري الذكي</span>
              <span className="block text-[11px] text-stone-500">معاينة تجريبية للجوال</span>
            </span>
          </Link>
          <div className="hidden items-center gap-4 text-sm font-medium text-emerald-900 md:flex">
            <Link href="/assistant/" className="hover:text-amber-800">
              المساعد الذكي
            </Link>
            <Link href="/orders/" className="hover:text-amber-800">
              طلباتي
            </Link>
            <Link
              href="/cart/"
              className="rounded-full bg-emerald-800 px-3 py-1.5 text-white"
            >
              السلة {count > 0 ? `(${count})` : ""}
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-4 md:pb-10">{children}</main>
      <BottomNav pathname={pathname} />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Shell>{children}</Shell>
    </CartProvider>
  );
}
