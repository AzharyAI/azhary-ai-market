"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct } from "@/lib/products";
import {
  cartCount,
  cartTotal,
  getCart,
  getOrders,
  saveCart,
  saveOrders,
  type CartItem,
  type Order,
} from "@/lib/storage";

type CartContextValue = {
  items: CartItem[];
  orders: Order[];
  count: number;
  total: number;
  ready: boolean;
  add: (productId: string, qty?: number) => string | null;
  setQty: (productId: string, qty: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  placeOrder: (input: Omit<Order, "id" | "createdAt" | "items" | "total" | "status">) => Order;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(getCart());
    setOrders(getOrders());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveCart(items);
  }, [items, ready]);

  useEffect(() => {
    if (ready) saveOrders(orders);
  }, [orders, ready]);

  const add = useCallback((productId: string, qty = 1) => {
    const product = getProduct(productId);
    if (!product) return "المنتج غير موجود";

    let error: string | null = null;
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      const nextQty = (existing?.qty ?? 0) + qty;
      if (nextQty > product.stock) {
        error = "الكمية المطلوبة أكبر من المخزون";
        return current;
      }
      if (existing) {
        return current.map((item) =>
          item.productId === productId ? { ...item, qty: nextQty } : item,
        );
      }
      return [...current, { productId, qty }];
    });
    return error;
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    const product = getProduct(productId);
    if (!product) return;
    setItems((current) => {
      if (qty <= 0) return current.filter((item) => item.productId !== productId);
      return current.map((item) =>
        item.productId === productId
          ? { ...item, qty: Math.min(qty, product.stock) }
          : item,
      );
    });
  }, []);

  const remove = useCallback((productId: string) => {
    setItems((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const placeOrder = useCallback(
    (input: Omit<Order, "id" | "createdAt" | "items" | "total" | "status">) => {
      const order: Order = {
        ...input,
        id: `AZ-${Date.now().toString().slice(-8)}`,
        createdAt: new Date().toISOString(),
        items,
        total: cartTotal(items),
        status: "جديد",
      };
      setOrders((current) => [order, ...current]);
      setItems([]);
      return order;
    },
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      orders,
      count: cartCount(items),
      total: cartTotal(items),
      ready,
      add,
      setQty,
      remove,
      clear,
      placeOrder,
    }),
    [items, orders, ready, add, setQty, remove, clear, placeOrder],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
