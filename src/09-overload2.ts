// Michi => [M,i,c,h,i] / string => string[]
// [M,i,c,h,i] => Michi / string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;
// 'unknown' /any siempre dejarlo al final en las sobrecargas de funciones


// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }


export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number')
    return true; // bolean
}

const arrayRes = parseStr('Michi');
// con sobrecarga de funciones automáticamente sabe que es un string:
// if (Array.isArray(arrayRes)) {
arrayRes.join('');
console.log('arrayRes', arrayRes);

const stringRes = parseStr(['M', 'i', 'c', 'h', 'i']);
// if (typeof stringRes === 'string') {
stringRes.split('');
console.log('stringRes', stringRes);

const booleanRes = parseStr(12);
console.log(booleanRes) // recibe un número, retorna un boolean


// No caer en sobrecargas innecesarias!

/* WRONG */
interface Example1 {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}

/* OK */
interface Example1 {
  diff(one: string, two?: string, three?: boolean): number;
}

/* WRONG */
interface Example2 {
  algo(): number;
  algo(b: number): Example2;
  algo(b: string): Example2;
}

/* OK */
interface Example2 {
  algo(): number;
  algo(b: number | string): Example2;
}
