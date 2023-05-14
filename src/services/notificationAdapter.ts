import { NotificationService } from "../application/ports";

// ini implementasi dari NotificationService yg di-define di ports di application layer, implementasinya pake react hook
export function useNotifier (): NotificationService {
  return {
    notify: (message: string) => window.alert(message) // nah ini contoh implementasi bisa pake window.alert, bisa juga ganti ke yg lain
  };
}