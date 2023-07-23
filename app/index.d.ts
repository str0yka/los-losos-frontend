export type CategoryItem = {
  title: string;
  products: Product[];
};

export interface Product {
  id: number;
  title: string;
  img: string;
  foods: string;
  price: number;
  weight: number;
  categoryId: number;
}

export type ProductInCart = {
  count: number;
  product: Product;
};

export type CartInteractionResponse = {
  isAuthorize: boolean;
  token: null | string;
} & ProductInCart;

export interface User {
  id: number;
  phone: string;
  addres: string;
  password: null;
  role: "user" | "admin";
  cartId: number;
}

export type Promocode = {
  id: number;
  code: string;
  type: "fix" | "percentage";
  value: number;
  name: string | null;
  text: string | null;
};
