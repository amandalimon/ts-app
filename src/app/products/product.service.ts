import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = '3893'
  // data.createdAt = new Date(),
  products.push(data);
}
