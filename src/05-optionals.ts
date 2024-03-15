export const createProduct = (
  id: string | number,
  // parámetros opcionales se enlistan al final
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10, // valor por defecto
    isNew: isNew ?? true, // valor por defecto
  }
}

const product1 = createProduct(1, false, 12);
console.log(product1);
// { id: 1, stock: 12, isNew: false }

const product2 = createProduct(2, true);
console.log(product2);
// cuando no asignamos un valor por defecto, p.ej: stock:
// { id: 2, stock: undefined, isNew: true }

const product3 = createProduct(3);
console.log(product3);
// { id: 3, stock: 10, isNew: true }

const product4 = createProduct('Producto 4', false)
console.log(product4);
// { id: 'Producto 4', stock: 10, isNew: false }
