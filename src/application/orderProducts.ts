import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";
import { User } from "../domain/user";
import { CartStorageService, NotificationService, OrderStorageService, PaymentService } from "./ports";

const payment: PaymentService = {}
const notifiter: NotificationService = {}
const orderStorage: OrderStorageService = {}
const cartStorage: CartStorageService = {}

async function orderProducts (user: User, cart: Cart) {
  const order = createOrder(user, cart.products)

  // try to pay
  const paid = await payment.tryPay(order.totalPrice)
  // notify if payment failed
  if (!paid) return notifiter.notify('Something went wrong')

  // save order to storage
  const { orders } = orderStorage;
  orderStorage.updateOrders([...orders, order]);

  // clear cart
  cartStorage.emptyCart();
}
