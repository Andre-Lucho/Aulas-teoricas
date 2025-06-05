// Pedir os LinkedIn --> Diraci e Trindtech

/* 
Vetores Unidimensional ==> Arrays
--------------------------------------------------------
Arrays são objetos  */

let listaFrutas = Array();

listaFrutas[0] = 25;
listaFrutas[1] = 'banana';
listaFrutas[2] = 'maca';
listaFrutas['doce'] = 'uva'; // 'doce' não está na posição 2 --> está na posição 'doce'
listaFrutas['doce'] = ('uva', 'pera'); //erro == ver Vetores multidimensionais

// forma direta de declaração de Arrays:
const listaFrutas2 = [2, 3, 'andre', {}];
// console.log(listaFrutas2);

// Percorrendo o array através do For:
for (let i = 0; i < listaFrutas.length; i++) {
  // console.log(listaFrutas[i]);
}

// console.table(listaFrutas); // outra forma de visualizar o console

/* 
Métodos com Arrays
Obs.:  Métodos de Arrays são métodos de Objetos JavaScript que simulam de forma genérica o comportamento de algoritmos que fazem a mesma coisa de forma mais específica, porém com uma estrutura mais limpa!
A performance dos métodos e inferior que programar seu comportamento em algoritmos com laços de repetição e condicionais ( estruturas nativas da linguagem)
------------------------------ --------------------------

A) Adicionar elemento 
--------------------------------------------------------
*/

// 1. Push -- > add ao final da lista
listaFrutas.push('mamao');
// console.log(listaFrutas);

// 2. Unshift --> add elemento ao inicio da lista
listaFrutas.unshift(33);
// console.log(listaFrutas);

/* B) Retirar elemento
-------------------------------------------------------- */

// 1. Pop --> retira do final da lista
listaFrutas.pop();
// console.log(listaFrutas);

// 2. Shift --> retira do início da lista
listaFrutas.shift();
// console.log(listaFrutas);

// *** Revisar Métodos em Arrays

/* 
Crie um array chamado 'numeros' contendo 10 com valores numéricos à sua escolha.
----------------------------------------------------------------------------------------------------------------

Use métodos de array para calcular e imprima no console cada resultado:

1) A soma de todos os elementos.
2) A média dos elementos.
3) Gere um novo array chamado pares que contenha apenas os números pares de numeros. 
4) Ordene o array números em ordem crescente - arquivo bubbleSort.js

*/

const numeros = [6, 3, 9, 8, 27, 15, 73, 91, 48, 54];

// 1) const somaReduce = numeros.reduce((acc, numero) => acc + numero, 0);
// 3)const pares = numeros.filter((num) => num % 2 == 0);
// 4) const ordem = numeros.sort((a, b) => a - b);
let somaFor = 0;
let pares2 = [];
let ordem2 = [];

// 1 e 2 com 'For'
for (let i = 0; i < numeros.length; i++) {
  somaFor += numeros[i];
  if (numeros[i] % 2 == 0) {
    pares2.push(numeros[i]);
  }
}

// 3) const media = somaReduce / numeros.length;
// 4) Com for --> arquivo arquivo bubbleSort.js

// console.log(numeros);
// console.log(somaReduce); // soma dos elementos com Reduce:
// console.log(somaFor); // soma dos elementos com For
// console.log(media); //media
// console.log(pares);
// console.log(pares2);
// console.log(ordem);

const ordemInversa = numeros.sort((a, b) => b - a);
// console.log(ordemInversa)
// ordenação invertida --> do maior para o menor
