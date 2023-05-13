export type ProductTitle = string;

export type Product = {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
}

export const ingredients: Record<Ingredient, string> = {
  "chocolate": "Chocolate",
  "peanuts": "Peanut Butter",
  "cocoa": "Cocoa Powder",
  "marshmallow": "Marshmallow",
  "cherry": "Cherry",
}

export function sumTotalPrice (products: Product[]): PriceCents {
  return products.reduce((total, {price}) => total + price, 0 )
}