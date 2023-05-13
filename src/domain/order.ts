import { Product, sumTotalPrice } from "./product";
import { User } from "./user";

export type OrderStatus = "new" | "delivery" | "completed";

export type Order = {
  user: UniqueId;
  products: Product[];
  created: DateTimeString;
  status: OrderStatus;
  totalPrice: PriceCents;
}

export function createOrder (user: User, products: Product[]): Order {
  return {
    user: user.id,
    products,
    created: currentDateTime(),
    status: 'new',
    totalPrice: sumTotalPrice(products),
  }
}

export function currentDateTime () : DateTimeString {
  return new Date().toISOString()
}
