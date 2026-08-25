import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azhary AI Market — Discover and deploy AI models",
  description:
    "A marketplace to browse, compare, and deploy the best AI models, agents, and tools.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-600 text-sm">
                A
              </span>
              <span className="text-lg tracking-tight">
                Azhary <span className="text-indigo-400">AI Market</span>
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm text-slate-300">
              <Link href="/" className="transition hover:text-white">
                Marketplace
              </Link>
              <a
                href="https://github.com/AzharyAI/azhary-ai-market"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
          Built with Next.js · Azhary AI Market
        </footer>
      </body>
    </html>
  );
}
