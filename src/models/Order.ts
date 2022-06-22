import { ProductMini } from "./Product";

export interface Order {
  userId: string;
  products: ProductMini[];
  amount: number;
  address: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
