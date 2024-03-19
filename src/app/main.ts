import { addProduct } from "./products/product.service";

addProduct({
  id: '1',
  title: 'Product 1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 100,
  category: {
    id: '12',
    name: 'electronics',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
