const withoutEnd = (): never => {
  while (true) {
    console.log('loop infinito')
  }
}

const fail = (message: string): never => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Esto es un string!'
  } else if (Array.isArray(input)) {
    return 'Esto es un array'
  }
  return fail('No hubo match')
}

console.log(example('Hola'))
console.log(example([1, 2, 3, 4]))
console.log(1202) // se detiene
console.log(example('Nunca vamos a ver este console.log'))

// npx ts-node src/04-never.ts
