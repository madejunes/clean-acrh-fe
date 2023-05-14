import { Product } from "../../domain/product";
import { useStore } from "../../services/store" 
import { Cookie } from "../Cookie/Cookie";

export function Front () {
  const {cookies} = useStore(); // static dari services/fakeData.ts. kalo ngambil dari API endpoint mungkin perlu port - adapter juga
  return (
    <main>
      <h1>Cookies Shop</h1>
      
      <ul>
        {
          cookies.map((cookie: Product) => (
            <li key={cookie.id}>
              <Cookie cookie={cookie} />
            </li>
          ))
        }
      </ul>
    </main>
  )
}