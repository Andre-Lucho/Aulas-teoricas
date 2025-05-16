/* 
Vetores Multidimensional == Matrizes
--------------------------------------------------- */

// Arrays dentro de Arrays
// Objetos dentro de Arrays

// Vetores dentro de vetores:

// Exemplo 1

let matriz = [];
let somaP = 0;
let somaS = 0;

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = 10;
    if (i == j) {
      somaP += matriz[i][j];
    } else if (j == 3 - 1 - i) {
      somaS += matriz[i][j];
    }
  }
}
// console.log(somaS); ver o erro!!

// Exemplo 2

let mercado = [];
mercado['fruteira'] = ['maça', 'banana', 'pera'];
mercado['acougue'] = ['picanha', 'file de frango', 'alcatra'];

// console.log(matriz); // [[10.10.10], [10, 10, 10], [10,10,10]]
// console.table(matriz);
// console.log(mercado);// [fruteira: [ 'maça', 'banana', 'pera' ],acougue: [ 'picanha', 'file de frango', 'alcatra' ]]

// Calcular a diagonal da matriz do Exemplo 1:

const diagonalPrincipal = [];
const diagonalSecundaria = [];
let somaP2 = 0;
let somaS2 = 0;
const n = matriz.length;

for (let i = 0; i < n; i++) {
  diagonalPrincipal.push(matriz[i][i]);
  somaP2 += matriz[i][i];
}

for (let i = 0; i < n; i++) {
  diagonalSecundaria.push(matriz[i][n - 1 - i]);
  somaS2 += matriz[i][n - 1 - i];
}

// console.log(somaP2);
// console.log(somaS2);

// console.log(diagonalPrincipal, somaP2);
// console.log(diagonalSecundaria, somaS2);

let listaCoisas = [];
listaCoisas['hardware'] = 'Placa de vídeo';
listaCoisas['hardware'][1] = 'CPU';

/* 
Erro!!: 
---------

'hardware' da Array 'listaCoisas' é apenas o index de alguma Array que ainda não foi definida! 
Estou definindo o index, mas não que 'Placa de vídeo' está dentro de uma outra Array!! */

let listaCoisas1 = Array();
listaCoisas1['hardware'] = [];
listaCoisas1['hardware'][0] = 'Placa de vídeo';
listaCoisas1['hardware'][1] = 'smartwatch';

// ou ainda (==):
// ------------------

let listaCoisas2 = Array();
listaCoisas2['hardware'] = ['Placa de vídeo'];
listaCoisas2['hardware'][1] = 'smartwatch';
listaCoisas2['Games'] = ['GTA VI'];
listaCoisas2['Games'][1] = 'Red Dead';

console.log(listaCoisas2);
