import { Product, ingredients } from "../../domain/product"
// import { hasAllergy, hasPreference } from "../../domain/user"
// import { useUserStorage } from "../../services/storageAdapter"

type ToppingsProps = {
  cookie: Product
}
export function Toppings({cookie}: ToppingsProps) {
  // const {user} = useUserStorage()

  return (
    <div>
    <p>Toppings: [
      {
        cookie.toppings.map((topping, index) => (
          <span key={index}>
            {ingredients[topping]}{index === cookie.toppings.length-1 ? '' : ', '}
            {/* {!!user && hasPreference(user, topping) && <>👍</>}{" "}
            {!!user && hasAllergy(user, topping) && <>⚠️</>} */}
          </span>
        ))
      }
    ]</p>
    </div>
  )
}