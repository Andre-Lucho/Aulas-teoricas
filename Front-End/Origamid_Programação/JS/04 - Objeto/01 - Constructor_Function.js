/* Constructor Functions - Aula 01
---------------------------------- */

const carro = {
  marca: "Marca",
  preco: 0,
};

const honda = carro;

honda.marca = "Honda";
honda.preco = 80000;

const clio = carro;

clio.marca = "clio";
clio.preco = 50000;

// console.log(carro);
// console.log(honda);
// console.log(clio);

/* O Objeto acabou adquirindo os valores da última entrada com a variável = clio!!

// IMPORTANTE:
// Queremos que carro seja um Objeto padrão, que sirva como modelo p os demais, sem perder sua função de modelo!! 
// => Constructor Functions

// Constructor Functions --> por padrão, iniciam por letra Maiúscula

// Funções Construtoras são responsáveis por construir (e retornar) NOVOS OBJETOS sempre que chamamos a mesma. Elas não perdem sua 'identidade', ou seja, seu algoritmo inicial; 
// => Agora, seus novos Objetos é que HERDAM suas propriedades e métodos

*/

function Carro() {
  console.log(this);
  // Faz referencia a próprio function Construtora Carro --> this = objeto Carro
  // Objeto de window ?? ---> ver no console do Browser
  this.marca = "Marca";
}

const honda3 = new Carro();
//  ==> Agora, 'honda' é um objeto da Função Construtora Carro().
//  --> 'new' transforma honda em objeto de Carro()
// *** --> honda é uma INTÂNCIA de 'Carro'

honda3.marca = "Honda";
honda3.preco = 80000;
// honda.metodo = function () {
//   console.log("Olá");
// };

console.log(honda3.preco);

const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 70000;
// //  ==> Agora, 'fiat' é um objeto da Função Construtora Carro().

/* 

new Keyword
-------------------------
-------------------------

const honda = new Carro();

1. Cria um NOVO OBJETO --> 
Com base na função (construtora) que passarmos a frente dela.

honda = {};

2. Define o protótipo --> 
Herda os métodos e propriedades de Carro().

** honda.prototype = Carro.prototype;

3. Aponta a variável 'this' para o objeto --> 
this. de Carro() agora aponta para 'honda'

this = honda;

4. Executa a função, substituindo 'this' pelo objeto
honda.marca = "Marca";
honda.preco = 80000;

** Executa a função 'Carro'(), com os valores do Objeto 'honda'
this.marca = 'Marca' --> agora é = honda.marca = 'Honda'

5. Retorna o novo OBJETO
return honda = {
    marca: 'Honda';
    preco: 80000;
};

Constructor Function é uma funcao que retorna um Objeto.
Conforme vamos atribuindo novos objetos a Função construtora, mais objetos vão sendo retornados, sempre herdando os métodos e propriedades da 'FUNÇÃO PAI' (função Construtora)

IMPORTANTE!!
------------
------------

Carro.marca => undefined PQ???
.marca agora é uma propriedade da INSTÂNCIA ('honda') de 'Carro' e não de 'Carro' diretamente!!
Instância de 'Carro' aqui é o objeto (honda e fiat) da Função Construtora, quando add new Pessoa

***
==> Para termos acesso as propriedades e métodos de 'Carro', teremos que criar um objeto (uma Instância) de 'Carro', através da keyword NEW

*/

/*
2)

Qd eu crio um novo objeto de Carro() (através de 'new'), ao invés de eu atribuir a cada propriedade do novo objeto separadamente ==> posso passar ARGUMENTOS a FUNÇÃO CONSTRUTORA Carros()

Ex.*/

function Carro2(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda2 = new Carro2("Honda2", 150000);
const fiat2 = new Carro2("Fiat2", 120000);

/*

this. Keyword
-----------------
-----------------*/

// O 'this' faz referência ao próprio objeto construído com a Constructor Function.

function Carro3(marca, precoInicial) {
  const taxa = 2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const siena = new Carro3("Siena", 2000);
// OBS --> o objeto 'siena' só tem acesso as variaveis 'this' da função construtora
// Variáveis dentro do Constructor estão "protegidas".

// Ex.
console.log(siena);
//

/* 
Constructor Functions - Aula 02
---------------------------------- */
/*

// 1)
const Dom = {
  selector: "li",
  // element: function(){}; igual abaixo
  element() {
    console.log(this.selector);
    const newClass = document.querySelector(this.selector);
    const newClassAdd = newClass.classList.add("ativo");
    return newClassAdd;
  },
  ativar() {},
};

// Dom.element();

*/

/*
// mesmo acima

const Dom = {
  selector: "li",
  // element: function(){}; igual abaixo
  element() {
    console.log(this.selector);
    const newClass = document.querySelector(this.selector);
    return newClass
    return document.querySelector(this.selector);
  },
  ativar() {
    this.element().classList.add("ativo");
    const newClassAdd = newClass.classList.add("ativo");
    return newClassAdd (p aparecer console- nao necessito);
  },
};

no exemplo acima, tenho que estar alterando as propriedades do objeto 'Dom' sempre que desejo selecionar um elemento DOM diferente
*/

// mesmo exemplo com um Função Construtora:

function Dom(selector) {
  // this.selector = selector;
  this.element = () => {
    // console.log(this.selector);
    // const newClass = document.querySelector(this.selector);
    // return newClass
    return document.querySelector(selector);
  };
  this.ativar = function (className, className2) {
    this.element().classList.add(className, className2);
    // const newClassAdd = newClass.classList.add("ativo");
    // return newClassAdd (p aparecer console- nao necessito);
  };
}

const li = new Dom("li");
// console.log(li);
// li.ativar();
// console.log(li.ativar("a", "b"));

const ul = new Dom("ul");
// console.log(ul.element());
// ul.ativar("ativo");

const lastLi = new Dom("li:last-child");
// lastLi.ativar("ativo", "abc");

// EXERCICIOS

// 1) Transforme o objeto abaixo em uma Constructor Function

// const pessoa = {
//   nome: "Nome pessoa",
//   idade: 0,
//   andar() {
//     console.log(this.nome + " andou");
//   },
// };

function Pessoa(nomePessoa, idade) {
  const pessoa = nomePessoa + "," + " que tem " + idade + " anos" + ",";
  this.nome = nomePessoa;
  this.idade = idade;
  this.andar = (km) => console.log(pessoa + " andou " + km + "km");
  // posso passar direto os argumentos no método também
}

let newname;
let newage;

function getName() {
  newname = prompt("Digite seu nome abaixo: ");
  newage = prompt("Agora, digite sua idade:");

  return newage, newname;
}

// getName();

const a = newname;
const b = newage;

let novaPessoa = new Pessoa(a, b);
// novaPessoa.andar();

// 2) Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos

let joao = new Pessoa("Joao", 20);
// joao.andar(10);
let maria = new Pessoa("Maria", 25);
// maria.andar(8);
let bruno = new Pessoa("bruno", 15);
// bruno.andar(6);

// 3) Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
// elements --> retorna NodeList com os elementos selecionados
// addClass(classe), add a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom2(selector) {
  const elements = document.querySelectorAll(selector);
  this.elementsList = elements;
  // console.log(elements);

  this.addClass = function (classe) {
    elements.forEach((li) => {
      li.classList.add(classe);
    });
  };

  this.removeClass = function (classe) {
    elements.forEach((li) => {
      li.classList.remove(classe);
    });
  };
}

const newCF = new Dom2("li");
const ul2 = new Dom2("ul");

console.log(newCF.elementsList);
console.log(ul2.elementsList);

// newCF.addClass("abc");
// // newCF.removeClass("abc");

// ul2.addClass("abcde");
