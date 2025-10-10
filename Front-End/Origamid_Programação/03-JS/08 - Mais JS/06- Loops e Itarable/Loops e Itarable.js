/*

Iterable
-----------------------------------------------------
São objetos que possuem o método '[Symbol.iterator]', geralmente no protótipo.
É dentro dele que a função que lida com a iteração será definida. 
Ex: Array, String, NodeList e boa parte das Array-Like e outros. */

const frutas = ["Banana", "Morango", "Uva"];
// console.log(frutas);
const frase = "Isso é JavaScript";

// fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
//   console.log(headers)
// );

// Response.headers - desestruturação

/* Obs:
O método '[Symbol.iterator]' vai definir como será essa iteração --> 
Array== a cada posição ocupada no Array; 
String --> a cada caractere digitado...
/*

for...of
-----------------------------------------------------

É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. 
Além deste loop podemos também utilizar o Spread Operator nos mesmos. */

for (const algo of frutas) {
  // const algo --> eu defino o nome === ((element)) --> argumento de uma CallBack!
  // of frutas --> iterando sobre o Objeto frutas (objeto frutas é uma Array)
  // console.log(algo);
}
for (const char of frase) {
  // console.log(char);
}

/*

Spread e for...of
-----------------------------------------------------

Com o for loop podemos manipular cada um dos elementos do objeto iterável. */

const buttons = document.querySelectorAll("button");
for (const btn of buttons) {
  btn.style.background = "red";
  btn.style.color = "black";
}
// console.log(...buttons);
// iterando no console cada um dos botões (elem= 'buttons'), através do spread
//  diferente do console.log(buttons) === NodeList

/*

Apenas Iteráveis
-----------------------------------------------------

O for...of não irá funcionar em um objeto comum que não seja iterável. */

const carro = {
  marca: "Honda",
  ano: 2018,
};
// // Erro, não é Iterável
// for (const propriedade of carro) {
//   console.log(propriedade);
// }
// prototype de carro não tem o método '[Symbol.iterator]'

/*

for...in --> iteração sobre Objetos enumeráveis
-----------------------------------------------------

For..in permite a iteração entre as chaves ou propriedades (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um Objeto, retornando elas. */

const carro1 = {
  marca: "Honda",
  ano: 2018,
};

/* formas de invocar os valores das prorpiedades de um objeto:
// carro1.marca;
// carro1[marca];
*/

/*
Object.defineProperties(carro1, {
  rodas: {
    value: 4,
    enumerable: true,
  },
});

** propriedade de enumeração de um Objeto --> ver Objetos

*/

for (const key in carro1) {
  // console.log(key);
  // console.log(carro1[key]);
  // console.log(key, carro1[key]);
}

/*

Arrays e for...in
-----------------------------------------------------

Uma Array é um objeto, porém a propriedades(key) de cada valor é igual ao seu index. 
Com for...in, estamos acessando esse propriedade = index da Array;
Para acessar o valor, aponto o loop para cada [index] de frutas2.
*/

const frutas2 = ["Banana", "Morango", "Uva"];
for (const index in frutas2) {
  // console.log(index); // 0, 1, 2
}
for (const index in frutas2) {
  // console.log(frutas2[index]); // Banana, Morango , Uva
}

/*

Chave e Valor
-----------------------------------------------------

Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis. */

const btn = document.querySelector(".button");

const btnStyles = getComputedStyle(btn);

for (const style in btnStyles) {
  // console.log(`${style}: ${btnStyles[style]}`); //ou:
  // console.log(style + " :" + btnStyles[style]);
}

/* Mesmo aula destructuring:
--------------------------------------
**aqui, estou apenas desestruturando; acima, estou iterando e organizando os itens do Objeto 'getComputedStyle'

const btn = document.querySelectorAll(".button");

function handleClick({ target }) {
  const btnStyles = getComputedStyle(target);
  // console.log(btnStyles);
  const { backgroundColor, color, margin } = btnStyles;
  console.log(backgroundColor, color, margin);
}

btn.forEach((element) => {
  element.addEventListener("click", handleClick);
}); */

/*
Do / While
-----------------------------------------------------

Outro tipo de loop é o Do / While. Não é muito utilizado.

let i = 0;
do {
// console.log(i++)
} while (i <= 5);

/*

/*
Exercícios
-----------------------------------------------------

1) Crie 4 li's na página utilizando o for...of e adicione uma classe a cada li */

const lis = document.querySelectorAll("li");
// console.log(li);

for (const item of lis) {
  item.classList.add("active");
}

// Utilize o for...in para listar todos as propriedades e valores do objeto window

const win = window;
console.log(win);

for (const prop in win) {
  // console.log(prop);
  console.log(`${prop}: ${win[prop]}`);
}
