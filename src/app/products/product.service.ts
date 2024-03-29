import faker from '@faker-js/faker';
import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  // Generar lo que en automático debería generar mi método addProduct, esto normalmente lo hace una base de datos
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (
  // id: Product['id'] para obtener el tipado de Product en el parámetro 'id'
  id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  }
  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.isNew = 'true',
  // dto.tags?.push();
  // dto.tags = [];
  return products;
}
