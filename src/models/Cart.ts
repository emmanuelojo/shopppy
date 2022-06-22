import { ProductMini } from "./Product";

export interface Cart {
  userId: string;
  products: ProductMini[];
  createdAt: Date;
  updatedAt: Date;
}
