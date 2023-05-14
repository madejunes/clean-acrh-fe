import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";
import { User } from "../domain/user";

// Note that the port interfaces are in the _application_ layer,
// but their implementation is in the _adapter layer_.
import { usePayment } from "../services/paymentAdapter";
import { useNotifier } from "../services/notificationAdapter";
import { useCartStorage, useOrdersStorage } from "../services/storageAdapter";

export function useOrderProducts() {

  // semacam dependency injection, inject dari layer service/adpter ke sini (application layer)
  const payment = usePayment();
  const notifiter = useNotifier();
  const orderStorage = useOrdersStorage();
  const cartStorage = useCartStorage();
  
  async function orderProducts (user: User, cart: Cart) {
    // di sini validasi data sebelum create order, kalo ada

    const order = createOrder(user, cart.products)

    // try to pay, ini ceritanya call third party payment service, tapi interface/adapter
    const paid = await payment.tryPay(order.totalPrice)
    // notify if payment failed
    if (!paid) return notifiter.notify('Something went wrong, payment not succes')

    // save order to storage, dalam contoh di sini disimpen ke store (react context aja), bisa juga di sini melakukan save ke server
    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);

    cartStorage.emptyCart();
    // clear cart
  }

  return { orderProducts };
}