/*

Object
-----------------------------------

Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.*/

const carro = {
  marca: "Ford",
  ano: 2018,
};
const pessoa = new Object({
  nome: "André",
  idade: 28,
});

/*

Métodos de Object
-----------------------------------

Object.create(obj, defineProperties) -->
Retorna um novo objeto que terá como PROTÓTIPO (herdará métodos e propriedades) o objeto do primeiro argumento. */

const carro2 = {
  marca: "XX",
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this; // está retornando o próprio objeto
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return `${this.marca} buzinou`;
  },
};
const honda = Object.create(carro2); // herdou métodos e propriedades de carros2 no seu PROTÓTIPO
// console.log(honda);

honda.marca = "Honda";
// console.log(honda.acelerar()); // esta pegando o marca: 'Honda'

//2
// console.log(honda.init("Clio").acelerar());
// o método .init está atribuindo um NOVO THIS ao objeto! Esse, se sobressai aos demais

//3
const mustang = Object.create(carro2).init("Mustang").acelerar();
// console.log(mustang);

const aa = Object.create(carro2);
// console.log(aa); --> não modifica o Objeto-Pai

/* IMPORTANTE!!
---------------
Agora, temos +1 forma de criar Objetos a partir de um protótipo, além da forma pela Função Construtora!! */

/*

Object.assign()
-----------------------------------

Object.assign(alvo, obj1, obj2) adiciona ao 'alvo' as propriedades e métodos enumeráveis dos demais objetos. O assign IRÁ MODIFICAR o objeto 'alvo' ==> ADD DIRETAMENTE no objeto 'alvo' os métodos e propriedades do Object-'Pai'

-->  Cria um 'protótipo do Objeto-Pai', mas add diretamente ao novo Objeto 'alvo' seus métodos e propriedades.
--> Substitui os valores do Objeto- Pai ao novo Obj criado!

*/

const funcaoAutomovel = {
  init2(tipo, marca) {
    this.tipo = tipo;
    this.marca = marca;
    return this;
  },
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return `A(0) ${this.tipo} da marca ${this.marca} buzinou`;
  },
};

const motos = {
  rodas: 2,
  capacete: true,
};

const carros3 = {
  rodas: 4,
  mala: true,
};

Object.assign(motos, funcaoAutomovel); //posso passar + de 1 'Objetos-Pai' p ele herdar
// console.log(motos);

// Object.assign(carros3, funcaoAutomovel);
// console.log(carros3);

// console.log(motos.init2("moto", "Kawashaki").buzinar());

/*

Object.defineProperties()
-----------------------------------

Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. 
A diferença aqui é a POSSIBILIDADE de serem DEFINIDAS PREVIAMENTE as características dessas propriedades. 
POR PADRÃO, as características são false */

const moto2 = {};

Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, // permite ou impede deletar; permite ou impede a mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: false,
    writable: true, // permite ou impede mudança de valor
  },
});

moto2.rodas = 4; // false
delete moto2.rodas; //false

moto2.capacete = false; //true
delete moto2.capacete; //false

// console.log(moto2); // {rodas: 2, capacete: false}

// Existe também o Object.defineProperty, para uma propriedade única.

/*

Get e Set
-----------------------------------

É possível definirmos diferentes comportamentos para get e set de uma propriedade. 
Lembrando que ao acionarmos uma propriedade obj.propriedade , a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada. */

const moto3 = {};

Object.defineProperties(moto3, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = `A Velocidade é igual a ${valor * 2}`;
    },
  },
});

// moto3.velocidade = 200;
// console.log(moto3.velocidade); // A Velocidade é igual a 400

/*

Object.getOwnPropertyDescriptors(obj)
--------------------------------------

Lista todos os métodos e propriedades de um objeto, com as suas devidas congurações. */

// 1) Objetos que estamos criando

// console.log(Object.getOwnPropertyDescriptors(moto2));

// console.log(Object.getOwnPropertyDescriptors(moto3));

// 2) Para Objetos e suas Funções construtoras

Object.getOwnPropertyDescriptors(Array); // Lista com métodos e propriedades de Array
// console.log(Object.getOwnPropertyDescriptors(Array.prototype)); // Lista com métodos e propriedades do protótipo de Array
// console.log(Object.getOwnPropertyDescriptor(window, "innerHeight")); // Puxa de uma única propriedade

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  "innerHeight"
);

// innerHeightConfig.get = ..... posso setar assim

/*

Object.keys(obj), Object.values(obj) Object.entries(obj)
--------------------------------------------------------- 

Object.keys(obj); // retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.

Object.values(obj); // retorna uma array com os valores do objeto.

Object.entries(obj); // retorna uma array com array's contendo a chave e o valor. */

Object.keys(Array);
// [] vazia, pois não possui propriedades ENUMERÁVEIS!:
// --> não há interesse em mostrar todos os métodos e propriedades contido na FC Array, mas somente os itens contidos em uma array que criamos!

const carro4 = {
  marca: "Ford",
  ano: 2018,
};
Object.keys(carro4); // ['marca', 'ano']
Object.values(carro4); // ['Ford', 2018]
Object.entries(carro4); // [['marca', 'Ford'], ['ano', 2018]]

/*

Object.getOwnPropertyNames(obj)
-----------------------------------

Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo), sendo elas enumeráveis ou NÃO!! */

// console.log(Object.getOwnPropertyNames(Array)); // ['length', 'name', 'prototype', 'isArray', 'from', 'of']

// console.log(Object.getOwnPropertyNames(Array.prototype)); // [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const car = {
  marca: "Ford",
  ano: 2018,
};
Object.getOwnPropertyNames(car); // ['marca', 'ano']

/*

Object.getPrototypeOf() e Object.is()
-------------------------------------- 

Object.getPrototypeOf(); // retorna o protótipo do objeto.

Object.is(obj1, obj2); //verica se os objetos são iguais e retorna true ou false.*/

const frutas3 = ["Banana", "Pêra"];
Object.getPrototypeOf(frutas3); // FC Array ---> retorna seu protótipo
Object.getPrototypeOf(""); //  FC String --> retorna seu protótipo
const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];
Object.is(frutas1, frutas2);
// false --> NÃO está comparando os ítens das 2 arrays, mas, sim, se são o mesmo Objeto array!
// São 2 objetos diferentes = frutas1 e frutas2

const novaFrutas = frutas1;
// console.log(Object.is(frutas1, novaFrutas)); // true
// novaFrutas está apontando para frutas1

/*

Object.freeze(), Object.seal(), Object.preventExtensions()
----------------------------------------------------------- 

Object.freeze(); --> impede qualquer alteração nas propriedades.
Object.seal(); --> previne a adição de novas propriedades e impede que as atuais sejam deletadas. Mas permite a alteração
Object.preventExtensions(); --> previne a adição de novas propriedades. Mas permite que sejam deletadas */

const car2 = {
  marca: "Ford",
  ano: 2018,
};
Object.freeze(car2);
Object.seal(car2);
Object.preventExtensions(car2);

Object.isFrozen(car2); // true
Object.isSealed(car2); // true
Object.isExtensible(car2); // false , pois ADD o método preventExtensions

/*

Propriedades e Métodos do Protótipo
-----------------------------------
-----------------------------------

Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. 


{}.constructor
----------------------------------- 

retorna a função construtora do objeto. */

const frutas4 = ["Banana", "Uva"];
frutas4.constructor; // Array
const frase = "Isso é uma String";
frase.constructor; // String

/*

{}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
-----------------------------------------------------------

Verica se possui a propriedade, e retorna true. A propriedade deve ser direta do objeto e não do protótipo. 
O {}.propertyIsEnumerable() verica se a propriedade é enumerável.*/

const frutas5 = ["Banana", "Uva"];
// console.log(frutas5.hasOwnProperty("map")); // false --> foi criada com ela? Não
// console.log(Object.getOwnPropertyNames(frutas5)); //Só tem .lenght
// .map está no prototype de frutas5 --> pertence ao objeto Array.prototype

Array.hasOwnProperty("map"); // false
Array.prototype.hasOwnProperty("map"); // true --> Aqui sim, pois é um método que é herdado no protótipo dos novos Arrays criados

Array.prototype.propertyIsEnumerable("map"); // false
window.propertyIsEnumerable("innerHeight"); // true

/*

{}.isPrototypeOf(valor)
-----------------------------------

Verica se é o protótipo do valor passado. */

const frutas = ["Banana", "Uva"];
Array.prototype.isPrototypeOf(frutas); // true

/*

{}.toString()
-----------------------------------

Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. 
Por isso, é comum utilizarmos a função direto do Object.prototype.toString.call(valor). */

const frutas6 = ["Banana", "Uva"];
frutas6.toString(); // 'Banana,Uva'
typeof frutas6; // object
// console.log(Object.prototype.toString.call(frutas6)); // [object Array]

const frase2 = "Uma String";
frase2.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]

const carro5 = { marca: "Ford" };
carro5.toString(); // [object Object]
typeof carro5; // object
Object.prototype.toString.call(carro5); // [object Object]

const li = document.querySelectorAll("li");
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]

/*

Exercícios 
---------------*/

// Crie uma função que verifique corretamente o tipo de dado

function tipoDeDado(valor) {
  return Object.prototype.toString.call(valor);
}

// console.log(tipoDeDado([]));

// Crie um objeto quadrado com a propriedade lados e torne ela imutável

// const quadrado = {
//   lados: 2,
// };

// Object.freeze(quadrado);
// quadrado.lados = 4;
// // console.log(quadrado);

// ou

const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
    configurable: false,
  },
});

// Previna qualquer mudança no objeto abaixo

const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

configuracao.width = 1000;
delete configuracao.height;
// console.log(configuracao);

// Liste o nome de todas as propriedades do protótipo de String e Array

const arrayProt = Object.getOwnPropertyNames(Array.prototype);
const stringProt = Object.getOwnPropertyNames(String.prototype);

// console.log(arrayProt);
// console.log(stringProt);
