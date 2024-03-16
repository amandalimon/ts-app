export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return { id, stock, isNew }
}

const product1 = createProduct(1, false);
console.log(product1);
// { id: 1, stock: 10, isNew: false }
