import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "سوق أزهري الذكي",
  description:
    "سوق عربي بمساعد ذكي: تصفح المنتجات، اسأل بالعربية، وأتمّ طلباً تجريبياً من الجوال.",
  applicationName: "سوق أزهري الذكي",
  appleWebApp: {
    capable: true,
    title: "سوق أزهري",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0F5C4C",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
