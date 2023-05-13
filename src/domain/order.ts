import { Product } from "./product";

export type OrderStatus = "new" | "delivery" | "completed";

export type Order = {
  user: UniqueId;
  products: Product[];
  created: DateTimeString;
  status: OrderStatus;
  totalPrice: PriceCents;
}