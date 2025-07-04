/*
Loops
--------------------------------------------------------
While, Do/While, For
-------------------------------------------------------- 
OBSs:

1.Só testam condições verdadeiras!
2. Não declarar variáveis dentro do escopo de loops --> aloca + 1 espaço na memória toda a vez que o loop a executado novamente 

*/

const prompt = require('prompt-sync')({ sigint: true });

/* While
--------------------------------------------------------

Estrutura:
---------------------

while (true) {
  // enquanto a condição é verdadeira, o código é executado
}

Uso: Qd não sabemos qtos numeros de repetições iremos obter */

/* 

Exemplo 1 :  (contagem progressiva)
-------------------------------------------------------*/

// let contador = 0;

// while (contador < 10) {
//   console.log(contador);
//   contador += 1;
// }

/* 
Exemplo 1.2 :  (contagem regressiva)
-------------------------------------------------------*/

// let contador = 10;

// while (numero >= 0) {
//   console.log(numero);
//   numero--;
// }

/* 

Exemplo 2: (tabuada)
  -------------------------------------------------------- */
// let numero = Number(prompt('Digite um número para cálculo da tabuada'));
// let multiplicador = 1;
// let resultado = 0;

// while (multiplicador <= 10) {
//   resultado = numero * multiplicador;
//   multiplicador++;
//   console.log(resultado);
// }

/* 

Exemplo 3: (tabuada (outra forma))
-------------------------------------------------------- */

// let numero = Number(prompt('Digite um número para cálculo da tabuada'));
// let multiplicador = 1;

// while (multiplicador <= 10) {
//   console.log(`${numero} * ${multiplicador} = ${numero * multiplicador}`);
//   multiplicador++;
// }

/* 

For
-------------------------------------------------------- 
Estrutura : for(inicialização | condição | incremento) 

** Uso: Qd sabemos qtos numeros de repetições queremos */

// let numero = Number(prompt('Digite um numero'));

// for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
//   console.log(`${numero} * ${multiplicador} = ${numero * multiplicador}`);
// }

/* 

Exercício
1) Fazer a média aritmética de números inseridos até que o usuário digite 0 */

/* 1 tentativa:
--------------------------------------------------------

let resultado;

do {
  let numero1 = Number(prompt('Digite o primeiro numero'));
  let numero2 = Number(prompt('Digite o segundo numero'));

  resultado = (numero1 + numero2) / 2;
  console.log(resultado);
  numero1 = 0 || 1
  numero2 = 0 || 1 
} while (numero1 != 0 || numero2 != 0);

Errado:
a) se eu atribuo 0 as variáveis numero0 e numero1, elas não serão !=0 no While --> só executo o código 1x para o 'do'!
b) se eu atribuo 1 as variáveis numero0 e numero1, elas serão SEMPRE !=0 qd da verificação no While --> loop infinito

*/

/* Certo:
--------------------------------------------------------*/

let numero;
let soma = 0;
let contador = 0;
// ou -1

do {
  numero = Number(prompt('Digite o primeiro numero'));
  soma += numero;

  /* ou, qd for 0 --> não add ao contador
    if (numero !== 0) {
      contador++;
    } */

  contador++;
} while (numero != 0);

let mediaFinal = soma / (contador - 1); // ou acima
console.log(`A média final é: ${mediaFinal}`);

/* 

com While
-------------------------------------------------------- */

// let resposta = null; // se for 0, não entra no laço
// let soma = 0;
// let contador = -1;
// // ou 0 e let mediaFinal = soma / (contador -1);

// while (resposta != 0) {
//   resposta = Number(prompt('Digite o primeiro numero'));
//   soma += resposta;
//   contador++;
// }

// let mediaFinal = soma / contador;
// console.log(`A média final é: ${mediaFinal}`);
