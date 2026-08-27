import { getProduct } from "@/lib/products";

export type CartItem = {
  productId: string;
  qty: number;
};

export type Order = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  city: string;
  address: string;
  payment: "cod";
  items: CartItem[];
  total: number;
  status: "جديد" | "مؤكد" | "مشحون" | "مكتمل";
};

const CART_KEY = "azhary-cart";
const ORDERS_KEY = "azhary-orders";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getCart(): CartItem[] {
  return readJson<CartItem[]>(CART_KEY, []);
}

export function saveCart(items: CartItem[]) {
  writeJson(CART_KEY, items);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

export function getOrders(): Order[] {
  return readJson<Order[]>(ORDERS_KEY, []);
}

export function saveOrders(orders: Order[]) {
  writeJson(ORDERS_KEY, orders);
}
