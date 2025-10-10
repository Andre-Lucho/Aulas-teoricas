// SEMPRE DECLARAR AS VARIÁVEIS COMO: LET OU CONST

"use strict"; //--> evita erros de escopo como abaixo

// 1.
// name = "Andre"; // --> variavel de escopo global; porem, gera erro

// console.log(name);

/**/

// 2. Escopo de Função
// variaveis declaradas dentro de uma função só estarão disponíveis dentro da mesma

// 2.1. Escopo global --> erro
function mostrarCarro() {
  carro = "Fusca"; //--> variável de escopo global
  console.log(carro);
}
//  não deveria ser variável, tampouco estar disponível fora da função

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// “use strict” impede isso.

/**/

// 3. Escopo de Bloco

{
  //  --> Isso é um bloco (codigo entre 2 chaves {})
}

// Variáveis let e const respeitam o escopo de bloco; VAR, NÃO respeita!

if (true) {
  var carro = "Clio";
  console.log(carro);
}
console.log(carro); // Carro

if (true) {
  let carro = "Celta";
  console.log(carro);
}
console.log(carro);

/**/

// 4. For Loop
//  Ao utilizar VAR dentro de um for loop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

/**/

// 5.
const numero = 50;
for (let numero = 0; numero < 10; numero++) {
  console.log(`Número ${i}`);
}
// --> a variavel numero esta sendo declarada novamente;
// ** porem, esta dentro de um bloco=> JS desconsidera a existencia da variavel let numero qd sai do bloco

const total = 10 * numero; // --> numero aqui = 50
console.log(total);

/**/

// OBS.
// Objetos criados com CONST podem ter suas propriedades modificadas externamente
