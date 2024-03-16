// Michi => [M,i,c,h,i] / string => string[]
// [M,i,c,h,i] => Michi / string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const arrayRes = parseStr('Michi');
if (Array.isArray(arrayRes)) {
  arrayRes.join('');
}
console.log('arrayRes', 'Michi =>', arrayRes);

const stringRes = parseStr(['M', 'i', 'c', 'h', 'i']);
if (typeof stringRes === 'string') {
  stringRes.split('');
}
console.log('stringRes', "['M','i','c','h','i'] =>", stringRes);
