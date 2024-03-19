import { Product } from "./product.model";

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
} // En el momento de creación no se necesita el objeto category pero sí el id, entonces creamos este nuevo objeto a partir de Product y lo extendemos con un campo más:

type example = Pick<Product, 'color' | 'description'>
