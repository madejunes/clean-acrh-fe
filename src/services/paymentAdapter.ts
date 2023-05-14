import { PaymentService } from "../application/ports";
import { fakeApi } from "./api";

// ini implementasi dari PaymentService yg di-define di ports, implementasinya pake react hook
export function usePayment (): PaymentService {
  return {
    tryPay(_amount: PriceCents) {
      return fakeApi(true);
    },
  };
}