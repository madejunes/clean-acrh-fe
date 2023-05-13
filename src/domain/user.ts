export type UserName = string;

export type User = {
  id: UniqueId;
  email: Email;
  name: UserName;
  preferences: Ingredient[];
  allergies: Ingredient[];
}