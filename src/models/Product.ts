export interface Product {
  _id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  size?: string;
  colour?: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  inStock?: boolean;
}

export interface ProductMini {
  productId: Product["_id"];
  quantity: number;
}
