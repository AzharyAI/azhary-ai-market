"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

const links = [
  { href: "/", label: "الرئيسية", icon: "⌂" },
  { href: "/assistant/", label: "المساعد", icon: "✦" },
  { href: "/cart/", label: "السلة", icon: "▣" },
  { href: "/orders/", label: "طلباتي", icon: "☰" },
];

export function BottomNav({ pathname }: { pathname: string }) {
  const { count } = useCart();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-emerald-900/10 bg-[#FBF7EE]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <ul className="mx-auto grid max-w-lg grid-cols-4">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href.replace(/\/$/, ""));
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium ${
                  active ? "text-emerald-800" : "text-stone-500"
                }`}
              >
                <span className="text-base leading-none">{link.icon}</span>
                {link.label}
                {link.href === "/cart/" && count > 0 && (
                  <span className="absolute left-1/2 top-1 inline-flex min-w-4 -translate-x-6 rounded-full bg-amber-600 px-1 text-[10px] font-bold text-white">
                    {count}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
