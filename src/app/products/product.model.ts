import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L ' | 'XL';

export interface Product {
  id: userId,
  title: string,
  createdAt: Date,
  stock: number,
  category: Category,
  size?: Sizes,
};
