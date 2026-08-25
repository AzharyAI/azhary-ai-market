import { NextResponse } from "next/server";
import { searchProducts } from "@/lib/products";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? undefined;
  const category = searchParams.get("category") ?? undefined;

  const results = searchProducts({ q, category });

  return NextResponse.json({
    count: results.length,
    query: { q: q ?? "", category: category ?? "All" },
    results,
  });
}
