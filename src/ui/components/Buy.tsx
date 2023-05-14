import { useState } from "react";
import { useOrderProducts } from "../../application/orderProducts";
import { useCartStorage, useUserStorage } from "../../services/storageAdapter";
import { UserName } from "../../domain/user";

export function Buy() {
  // get access to the use case in the components
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  const [name, setName] = useState<UserName>(user.name ?? '');
  const [email, setEmail] = useState<Email>(user.email ?? '')
  const [addres, setAddres] = useState('')
  const [loading, setLoading] = useState(false)

  if(!user || !cart.products.length) return null;

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault()

    // call use case function
    await orderProducts(user!, cart);
    setLoading(false);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <form className="" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} autoFocus />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Address</span>
          <textarea name="address" value={addres} onChange={(e) => setAddres(e.target.value)}></textarea>
        </label> 

        <button type="submit" disabled={loading}>
          {loading ? "creating order" : "checkout"}
        </button>
      </form>
    </section>
  )
}
