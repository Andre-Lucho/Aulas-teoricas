/*
Number
É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos. */

const ano = 2018;
const preco = new Number(99);

/*

A) Number.isNaN() e Number.isInteger();
.isNaN() é um método de Number, ou seja, não faz parte do protótipo. 
.isInteger() verica se é uma integral --> número inteiro || float --> número com vírgula

NaN === not a number
*/

Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false
Number.isInteger(20); // true
Number.isInteger(23.6); // false

/*

B) Number.parseFloat() e Number.parseInt()
.parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. 
.parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.
Float possui decimal, Integer não. */

parseFloat("99.50"); // Mesma função sem o Number
Number("99.50"); // 99.5
Number.parseFloat("99.50"); // 99.5

Number.parseFloat("100 Reais"); // 100
Number.parseFloat("R$ 100"); // NaN
parseInt("99.50", 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt("100 Reais", 10); // 100

//OBS.
// com espaço na frente do número --> retona;
// com outros chart na frente--> NÃO retorna

// com outros chart após o número--> retona

/*

Métodos do Prototype de Number
-----------------------------

C) n.toFixed(decimais)
Arredonda o número com base no total de casas decimais do argumento. 
** Retorna uma String. 
*/
const preco2 = 2.99;
// console.log(preco2.toFixed()); // 3
const carro = 1000.455;
carro.toFixed(2); // 1000.46
const preco3 = 1499.49;
preco3.toFixed(); // 1499

const valor = 100.6;

// console.log(valor.toFixed() + 33);
// retona string e esta concatenando

// console.log(+valor.toFixed() + 33);
// agora, consegue somar

/*

D) n.toString(radix)
Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal. */

const outroPreco = 2.99;
outroPreco.toString(10); // '2.99'

/*

E) n.toLocaleString(lang, options);
Formata o número de acordo com a língua e opções passadas. */

const outroPreco2 = 59.49;
outroPreco2.toLocaleString("en-US", { style: "currency", currency: "USD" }); // $59.49
preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // R$ 59,49

/*

Math
É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

OBS --> Construtor --> então, devemos passar o Math e não há herança, pois não estou construindo um objeto derivado de Math!
*/

/*

A) Math.abs(), Math.ceil(), Math.oor() e Math.round()
.abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. 
.ceil() ('teto') --> arredonda para cima, retornando sempre uma integral e 
.floor() ('chão') -->  arredonda para baixo. 
.round() arredonda para o número integral mais próximo.*/

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

/*

B) Math.max(), Math.min() e Math.random();
.max() retorna o maior número de uma lista de argumentos, 
.min() o menor número e 
.random() um número aleatório entre 0 e 0,999999...

OBS.---> Math.random --> permite criar variaveis com aleatoriedade --> Ex. jogos

*/

Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2
Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500
// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;

/*

Exercícios 
----------
*/

// 1) Retorne um número aleatório entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));

/*

2) Retorne o maior número da lista abaixo*/

const numeros = "4, 5, 20, 8, 9";

let newArray = numeros.split(", ");
console.log(newArray);

console.log(Math.max(...newArray));

// COMO FAZER COM LOOP?????

const newArray2 = numeros.split(", ");
console.log(newArray2);

let maiorNumero = -Infinity;

newArray2.forEach((item) => {
  const numeroAtual = parseFloat(item);
  console.log(numeroAtual);
  if (numeroAtual > maiorNumero) {
    maiorNumero = numeroAtual;
  }
});

console.log(maiorNumero);

// ou com .map

const arrayDeNumeros = numeros.split(", ").map(Number); // posso passar parseFloat
const maiorNumero2 = Math.max(...arrayDeNumeros);
console.log(maiorNumero2);

/*

3) Crie uma função para limpar os preços e retornar os números com centavos arredondados; depois retorne a soma total */

const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230 ", "r$ 200"];

function limpaPrecos(valor) {
  let preco = 0;
  valor = +valor.toLowerCase().replace("r$", "").replace(",", ".").trim();
  preco = Math.round(valor);
  // preco = +valor.toFixed();
  console.log(preco);
  return preco;
}

let soma = 0;
listaPrecos.forEach((item) => {
  soma += limpaPrecos(item);
});

console.log(soma);
console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

// limpaPrecos(listaPrecos[1]);
