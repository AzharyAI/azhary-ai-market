import { Marketplace } from "@/components/Marketplace";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent)]" />
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            🚀 {products.length} curated AI products and counting
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The marketplace for{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI that ships
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Browse, compare, and deploy the best language models, image
            generators, voice engines, and autonomous agents — all in one place.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#marketplace"
              className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Explore the marketplace
            </a>
          </div>
        </div>
      </section>

      <div id="marketplace" className="scroll-mt-20">
        <Marketplace initialProducts={products} />
      </div>
    </>
  );
}
