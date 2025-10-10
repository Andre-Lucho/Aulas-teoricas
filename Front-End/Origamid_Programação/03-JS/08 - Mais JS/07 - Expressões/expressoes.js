/*

Expressões são linhas de código após um sinal de " = " que retonam true e podem ser colocadas dentro de variáveis */

const grupoA = 100;
const grupoB = 300;
const numeros = [2, 3, 4, 5, 6];

if (grupoA > grupoB) console.log('true'); // Não é uma expressão!

// igual acima, porém como Expressão:
// a)
const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';
console.log(vencedor);

// b)
const areaQuadrado = (l) => l * l; //função Arrow function ou também funções Callback

// c)
const a = numeros.filter((numero) => numero > 4);

// d)
const grupoAvenceu = grupoA > 50 && 'Grupo A Vencedor'; // verifica se: true e true ---> retorna segundo item da expressão

console.log(grupoAvenceu);
