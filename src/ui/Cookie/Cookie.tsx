import { Product } from "../../domain/product"
import { Toppings } from "./Toopings"
// import { useCartStorage, useUserStorage } from "../../services/storageAdapter"

type CookieProps = {
  cookie: Product
}

export function Cookie ({cookie}: CookieProps) {
  // const {user} = useUserStorage();
  // const {cart} = useCartStorage();
  // const {addToCart} = 

  return (
    <div className="">
      <span className="">🍪</span>
      <span className="">{cookie.title}</span>
      <Toppings cookie={cookie} />
      
    </div>
  )
}