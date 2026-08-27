import Link from "next/link";
import { Marketplace } from "@/components/Marketplace";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-900 via-emerald-800 to-amber-800 px-5 py-7 text-white">
        <p className="text-xs font-medium text-amber-200">المرحلة 0 — معاينة للجوال</p>
        <h1 className="mt-2 text-3xl font-bold leading-snug">
          سوق يفهم طلبك
          <span className="block text-amber-200">ويرشّح من البضاعة الحقيقية</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-emerald-50/90">
          تصفح، اسأل المساعد بالعربية، أضف للسلة، وأتمّ طلباً تجريبياً بالدفع عند الاستلام.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/assistant/"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-bold text-emerald-900"
          >
            اسأل المساعد
          </Link>
          <a
            href="#market"
            className="rounded-full bg-white/10 px-4 py-2.5 text-sm font-bold text-white ring-1 ring-white/20"
          >
            تصفح المنتجات
          </a>
        </div>
      </section>

      <div id="market">
        <Marketplace initialProducts={products} />
      </div>
    </div>
  );
}
