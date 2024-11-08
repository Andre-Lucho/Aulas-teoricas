/*

Function
------------------------------------ 

Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos. */

function areaQuadrado(lado) {
  return lado * lado;
}
const areaQuadrado1 = new Function("lado", "return lado * lado");

// function é objeto da FC Window

/*
Propriedades
------------------------------------ 

Function.length retorna o total de argumentos da função.
Function.name retorna uma string com o nome da função. */

function somar(n1, n2) {
  return n1 + n2;
}
somar.length; // 2
// e não somar(x) --> está retornando o resultado da função
somar.name; // 'somar' --> retona string

// console.log(somar.name.toUpperCase());

/*

Métodos
------------------------------------ 

A) function.call()
------------------------------------ 

function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

IMPORTANTE
-----------
Qd criamos uma nova função (novo objeto de Window), THIS faz referência a Window.
Qd utilizamos o método .call --> MUDAMOS a referência do this, passando a APONTÁ-LO para os PARÂMETROS de .call

*/

const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  // console.log(this.marca + " " + this.ano); // undefined undefined
}
descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

// 1)

// window.marca = "Clio";
// window.ano = 2015;

// function newCar() {
//   console.log(this); // aponta p/ Window
//   console.log(this.marca + " " + this.ano); // valores de window(prototype de Window)
//   // Clio 2015;
//   this.marca = "Sandeiro";
//   this.ano = 2000;
//   console.log(this.marca + " " + this.ano); // valores apontando p o objeto criado
//   // Sandeiro 2000
// }

// newCar(); //

// 2)

window.marca = "Clio";
window.ano = 2015;

function newCar(valor) {
  console.log(this); // aponta p/ newCarro.call
  // { marca: "Honda", ano: 1999 } //carro1
  // { marca: "Suzuki", ano: 2050 } //carro3
  console.log(this.marca + " " + this.ano); // Honda 1999; // Suzuki 2050
  this.marca = "Sandeiro";
  this.ano = 2000;
  // console.log(this.marca + " " + this.ano); // valores apontando dentro de newCar
  // Sandeiro 2000
  console.log(valor); //20000
  this.valor = 10000;
  console.log(this.valor); //10000
}

const carro1 = { marca: "Honda", ano: 1999 };
const carro3 = { marca: "Suzuki", ano: 2050 };

newCar.call(carro3, 20000);
/* { marca: "Suzuki", ano: 2050 } ==> novo this ao qual newCarro está fazendo referência --> objeto carro3
último parâmetro  === 20000 --> argumento recebido na função newCar */

/*

This
------------------------------------ 

O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). 
Podemos trocar a referência do método ao this, utilizando o call(). */

const carros = ["Ford", "Fiat", "VW"];

carros.forEach((item) => {
  // console.log(item);
}); // Log de cada Carro === "Ford", "Fiat", "VW"

carros.forEach.call(carros, (item) => {
  // console.log(item);
}); // Log de cada Carro ===" Ford", "Fiat", "VW"

const frutas = ["Banana", "Pêra", "Uva"];

carros.forEach.call(frutas, (item) => {
  // console.log(item);
}); // Log de cada Fruta === "Banana", "Pêra", "Uva"

// ==> o argumento na frente da callback é o This
// Uma array também é um objeto

/*

Exemplo Real
------------------------------------ 

O objeto atribuído a lista será o substituído pelo primeiro argumento de call() */

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   // console.log(this);
//   this.element.classList.add(classe);
// };

// const newObjeto01 = new Dom("ul"); // --> crio um objeto de Dom e passo 'ul'

// console.log(newObjeto01); // THIS ==> element: ul

// Dom.prototype.ativo(); // --> estou invocando a função sem passar pelo novo objeto criado com o new Dom
// ENTÃO, aqui, eu NÃO tenho + .element('ul')
// Dá Erro!
//  O que tenho q fazer??

//Dom.prototype.ativo.call(um novo objeto no lugar do new Dom!!) **

/* 
** FORMA CORRETA:
------------------- */

// const Objeto02 = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(Objeto02, "porpeta");

// AGORA, o console.log de THIS ==> element: li

/*
FORMA NÃO USADA (ABAIXO) --> para DEMOSTRAÇÃO, passando por new Dom:

newObjeto01.ativo("teste");
newObjeto01.ativo.call(newObjeto02, "abcd");
*/

/*

O Objeto deve ser parecido
------------------------------------ 

O novo valor de This deve ser semelhante a estrutura do valor do This original do método. 
Caso contrário, o método não conseguirá interagir de forma correta com o novo This. 

OBS: mesma estrutura, onde irá interagir
*/

// mesmo acima:

// const li = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(li, "ativar");
// console.log(li);

/*

Array's e Call
------------------------------------ 

É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like). */

Array.prototype.mostreThis = function () {
  // console.log(this);
};
const frutas2 = ["Uva", "Maçã", "Banana"];
frutas2.mostreThis(); // ['Uva', 'Maçã', 'Banana'] // NÃO é boa prática modificar FC Nativas (ex.Arrays)
Array.prototype.pop.call(frutas2); // Remove Banana
frutas2.pop(); // Mesma coisa que a função acima

/*

Array-like
------------------------------------ 

Objeto Array-like têm essa estrutura:

const arrayLike = {
  0: 'item1',
  1: 'item2',
  2: 'item3',
  lenght: 3
} 


HTMLCollection, NodeList e demais objetos do Dom, SÃO PARECIDOS com uma Array. 
Por isso, conseguimos utilizar os mesmos com os métodos de Array --> na substituição do this em .call. */

const li2 = document.querySelectorAll("li");
const filtro = Array.prototype.filter.call(li2, (item) => {
  //console.log(item); retorna os li's
  //return true --> retorna uma Array com as Li's

  return item.classList.contains("ativo");
});
// console.log(filtro); // Retorna os itens que possuem ativo

/*

B) function.apply()
------------------------------------ 

O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados
através de uma array. */

const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);
// Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar

/*

Apply vs Call
------------------------------------ 

A única diferença é a array como segundo argumento. */
// const li2 = document.querySelectorAll("li");

// function itemPossuiAtivo(item) {
//   return item.classList.contains("ativo");
// }

// const filtro1 = Array.prototype.filter.call(li2, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(li2, [itemPossuiAtivo]);

/*

C) function.bind()
------------------------------------ 
Diferente de call e apply, bind(this, arg1, arg2, ...) NÃO IRÁ EXECUTAR A FUNÇÃO, mas sim retornar a mesma com o novo contexto de this. */

const li3 = document.querySelectorAll("li");
const filtrarLi = Array.prototype.filter.bind(li3, (item) =>
  item.classList.contains("ativo")
);
// console.log(filtrarLi());

// OBSERVAR o detalhe de filtrarLi sendo ativado como função '()'!!

/*

Argumentos e Bind
------------------------------------ 

Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma. */

const carro2 = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

carro2.acelerar(100, 20);
// Ford acelerou 100 em 20
const honda = {
  marca: "Honda",
};

const acelerarHonda = carro2.acelerar.bind(honda);
// console.log(acelerarHonda(100, 10));
// Honda acelerou 200 em 10

// Também posso manter argumentos fixos no .bind:

const acelerarHonda2 = carro2.acelerar.bind(honda, 2000);
// console.log(acelerarHonda2(30));

/*

Argumentos Comuns
------------------------------------ 
Podemos passar argumentos padrões para uma função e retornar uma nova função. */

function imc(altura, peso) {
  return peso / (altura * altura);
}
const imc180 = imc.bind(null, 1.8);
imc(1.8, 70); // 21.6
imc180(70); // 21.6

/*
Exercícios
------------------------------------ 

<section>
  <p>Lobo-cinzento (nome científico:Canis lupus) é uma espécie
de mamífero canídeo do gênero Canis. É um sobrevivente da Era
do Gelo, originário do Pleistoceno Superior, cerca de 300 mil
anos atrás. É o maior membro remanescente selvagem da família
canidae.</p>
  <p>Os lobos-cinzentos são tipicamente predadores ápice nos
ecossistemas que ocupam. Embora não sejam tão adaptáveis à
presença humana como geralmente ocorre com as demais.</p>
  <p>O peso e tamanho dos lobos variam muito em todo o mundo,
tendendo a aumentar proporcionalmente com a latitude.</p>
  <p>Os lobos são capazes de percorrer longas distâncias com
uma velocidade média de 10 quilômetros por hora e são
conhecidos por.</p>
</section>
Arquivo HTML

1. Retorne a soma total de caracteres dos parágrafos acima utilizando reduce */

// const paragrafs2 = document.querySelector("section").innerText.length;
// console.log(paragrafs2);
// aqui está ok, porém pega os demais carac --> < >, p ...

const paragrafs = document.querySelectorAll("p");
console.log(paragrafs);

const caractTotais = Array.prototype.reduce.call(
  paragrafs,
  (acc, item, i) => {
    // console.log(item.innerText.length);
    return acc + item.innerText.length;
  },
  0
);

console.log(caractTotais);
/*
2. Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo. */

function createElement(tag, classe, text) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  text ? (element.innerText = text) : null;
  return element;
}

console.log(createElement("div", "teste", "aaaaaaa"));

// function newHTMLElements (tag, classe, conteudo) {

// }

/*
3. Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico */

const h1 = {
  element: document.createElement("h1"),
};

const h1Title = createElement.bind(null, "h1", "titulo");

const htmlCourse = h1Title("Curso de HTML");
const jsCourse = h1Title("Curso de JS");

console.log(htmlCourse);
console.log(jsCourse);
