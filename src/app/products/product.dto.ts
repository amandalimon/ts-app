import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
} // En el momento de creación no se necesita el objeto category pero sí el id, entonces creamos este nuevo objeto a partir de Product y lo extendemos con un campo más:

type example1 = Pick<Product, 'color' | 'description'>

export interface UpdateProductDto extends Partial<CreateProductDto> { }

type example2 = Required<Product>

// Permitir campos opcionales que sean sólo de lectura, pero omite tags
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  // Al haber omitido tags no se le aplican los efectos de Readonly y Partial, por lo que vuelvo a agregarlo para decirle que será un array de sólo lectura
  readonly tags: ReadonlyArray<string>;
  // readonly evita que se pueda reasignar y ReadonlyArray evita que pueda se pueda modificar
}
