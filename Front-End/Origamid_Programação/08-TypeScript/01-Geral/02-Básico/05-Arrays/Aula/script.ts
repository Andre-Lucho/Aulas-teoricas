const numeros: number[] = [10, 30, 40, 5, 3, 30];
const valores: (string | number)[] = [10, 'Taxas', 40, 'Produto', 3, 30];

function maiorQue10(data: number[]): number[] {
  return data.filter((n) => n > 10);
}

function filtrarValores(data: (string | number)[]): (string | number)[] {
  return data.filter((item) => typeof item === 'number');
}

//Sintaxe Alternativa
function maiorQue20(data: Array<number>): number[] {
  return data.filter((n) => n > 20);
}

function filtrarStrings(data: Array<string | number>): Array<string | number> {
  return data.filter((item) => typeof item === 'string');
}

console.log(maiorQue10(numeros));
console.log(maiorQue20(numeros));
console.log(filtrarValores(valores));
console.log(filtrarStrings(valores));

const dados: (string | number)[][] = [
  ['senhor dos aneis', 80],
  ['a guerra dos tronos', 120],
];
