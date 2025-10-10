/* PROTOTYPE - Aula 01
---------------------------------- 

Qd criamos uma Função(Construtora ou não), a propriedade PROTOTYPE é criada automaticamente como um objeto, que retona propriedades e métodos da função criada

** Está ligada sempre a Função 'Pai'(Construtora ou não)
*/

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => nome + " Andou por Pessoa";
}

console.log(Pessoa.prototype); // retorna o objeto
// console.log(typeof Pessoa.prototype); // 'object'

const andre = new Pessoa("Andre", 42);
// andre é um objeto da Função Construtora 'Pessoa'

// OBS:
// --------

// console.log(andre.prototype); // undefined --> PQ?

// Prototype é um OBJETO DIRETO de um Função mas não um objeto de andre
// lembrando: andre também é um objeto de 'Pessoa'

// Prototype --> por ser um objeto de Pessoa, tb tem todos os seus métodos e propriedades

// console.log(Pessoa.prototype);

/* 

Função.prototype
------------------- 
É possível ADD propriedades e métodos ao OBJETO PROTOTYPE 

EM OBJETOS:
--------------

Const objeto01 {
  nome:noime
  idade:idade
}

objeto01.funcao = function{
  const a = 'a'
  return a
}

Podemos fazer o mesmo com o objeto Prototype:
*/

Pessoa.prototype.andar = function () {
  return this.nome + " Andou";
};

Pessoa.prototype.montar = function () {
  return this.nome + " Montou";
};

console.log(Pessoa);
console.log(Pessoa.prototype);

/*
Acesso ao Protótipo 
-------------------

O Objeto criado utilizando o Construtor (andre, andre2) também possui acesso aos métodos e propriedades do PROTOTYPE de sua funcão construtora (Pessoa.prototype).
Lembrando, prototype é uma propriedade da Função Pessoa, apenas 
*/

const andre2 = new Pessoa("Andre Lucho", 42);

// console.log(andre2); //--> dentro de [[prototype]] eu tenho andar()
// console.log(andre2.andar()); //--> dentro de Pessoa eu tenho o método = andar()
console.log(andre2.montar()); //--> dentro de [Pessoa[prototype]] eu tenho o método = montar()

// console.log(Pessoa.prototype.andar()); // TypeError
// console.log(Pessoa.prototype.montar()); // TypeError
// aqui Pessoa ainda n recebeu ('André Lucho', 42), pois é argumento do novo objeto 'andre2'

/*
IMPORTANTE
----------

1)
Assim como NEW cria um objeto novo, a partir de FC 'PAI', que entra com os seus argumentos e pode apenas acessar as propriedades THIS. DENTRO da FC 'Pai'....

Prototype cria um objeto novo na FC 'PAI', onde estarão acessíveis as instancias novas NEW, 
porém SOMENTE 1 vez (e conforme a ordem da escrita no código), pois prototype não é foi declarado 'nativamente' no FC 'Pai'--- foi INSTANCIADO após a criação de Pessoa

Ainda sim, conseguimos acessar o prototype, porém a PRIORIDADE SÃO os métodos e propriedades da FC PAI, DEPOIS (em ordem) 
àqueles instanciadas em PROTOTYPE

2)
***
Prototype funciona como fosse a INSTÂNCIA DA INSTÂNCIA de 'Pessoa' para 'andre' e 'andre2'   
Ex. abaixo: 
*/

// console.log(andre.andar()); // linha 9 não comentada --> Andre Andou por Pessoa
// console.log(andre.andar()); // linha 9 comentada --> Andre Andou ---> pegou o método de Prototype
//

/*

__proto__ (08:39) 
------------------
------------------ 

O NOVO OBJETO (andre) também cria o seu próprio PROTÓTIPO: __proto__ 
__proto_ acessa --INDIRETAMENTE--  os métodos e propriedades do prototype de Pessoa --> através da propriedade __proto__. 
--> É papel da engine (Browser) fazer essa busca; NÂO devemos falar com __proto__ diretamente.

** Como ao criar uma função (Pessoa), Prototype é criado, ao criar NEW (novo objeto = andre), 
um novo Prototype é criado (__proto__)

Acessam o mesmo método mas __proto__ não terá acesso ao  = this.nome */

// console.log(andre.__proto__.andar()); // undefined Andou

/*

Herança de Protótipo
----------------------
----------------------

O objeto ('andre') possui acesso aos métodos e propriedades do PROTOTYPE da FUNÇÃO CONSTRUTORA ('Pessoa') responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são HERDADOS do protótipo de Object.

IMPORTANTE:
==> new Object('andre') herdou o protótipo de 'Pessoa' e tb herdou o protótipo de 'Object'


** Object ==> Construtor 'Pai' geral da Linguagem 
NÃO ESQUECER --> Construtor é uma função



CAMINHO de CRIAÇÃO dos PROTÓTIPOS
---------------------------------

OBJECT --> prototype --#--> Funcao / Funcao Construtora / String / Number / Objetos .... --#--> prototype --#--> Objetos New ...
---> = criam/ herdam (# em diante)

Objetos herdando propriedades e métodos de 'Objetos' através de prototypes ===> TODO é UM OBJETO em JS !!!

*/

// console.log(Object.prototype);
// andre.toString();
// andre.isPrototypeOf();
// andre.valueOf();

// console.log(Object); // Object() ==> Construtor (Função) 'Pai' geral da Linguagem ==> native code

/*
Herança de document
-------------------
-------------------

Object --> EventTarget --> Node --> Document --> HTMLDocument --> document


---------------------------------- 
---------------------------------- 


PROTOTYPE - Aula 02
---------------------------------- 
---------------------------------- 


1) Construtores Nativos
-----------------------
-----------------------

Objetos, Funções, Números, Strings, NodeList, HtmlCollection e outros tipos de dados são criados utilizando Construtores. 
Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
 */

const pais = "Brasil";
const cidade = new String("Rio");

// pais.charAt(0); // B --> pais. está retornando métodos e propriedades
// cidade.toUpperCase(); //

/* 
String, Number, Function, Object ==> São Funções Construtoras
'cidade' está instanciando uma Função Construtura 'String' --> que tb tem uma série de métodos e propriedades através do seu prototype
O prototipo 'Pai' de String é Object 
Object ==> Construtor 'Pai' geral da Linguagem */

// console.log(String.prototype);

/*

2) É possível acessar a função do protótipo
------------------------------------------- 
------------------------------------------- 

É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array. */

const lista = document.querySelectorAll("li");
// o método .querySelector vem do protótipo de NodeList
const listaArray1 = Array.prototype.slice.call(lista); // ==  o método Array.from()
// / Transforma em uma array

//
// Esse metodo Array.prototype VEM DO PROTÓTIPO de Array --.call --> slice --> prototype ---> nessa ordem, para chegar no construtor Array

const listaArray2 = Array.from(lista);
// Esse metodo Array.from VEM DIRETAMENTE DO ARRAY!

// console.log(listaArray1);
// console.log(listaArray2);

[1, 2, 3].from; // undefined --> pq??? Se esse [] vem direto do Construtor Array ??
//
// APENAS os métodos dos PROTOTIPOS são herdados!!
// .from é do Pai --> Construtor

/*

3) Métodos do Objeto x Protótipo
--------------------------------
--------------------------------

Nos Objetos nativos, existem métodos linkados diretamente ao Objeto, enquanto outros estão linkados aos protótipos (ACIMA):

1) const listaArray1 = Array.prototype.slice.call(lista); --> Vem do prototype de Array == 'andre'
2) const listaArray2 = Array.from(lista); ---> vem de Array == 'Pessoa'

Object.getOwnPropertyNames() --> Retorna uma lista com os métodos / propriedades

OBS.: 'dado'.constructor.name --> retorna o nome do construtor;

*/

// console.log(Object.getOwnPropertyNames(Array));
// console.log(Object.getOwnPropertyNames(Array.prototype));

// console.log(pais.constructor.name);
// console.log(andre.constructor.name); // Pessoa()

// console.log(Object.getOwnPropertyNames(andre)); // nome, idade, andar --> nao tenho montar() ==> é do protótipo
// console.log(Object.getOwnPropertyNames(andre.__proto__)); // constructor, andar e montar --> herdou o prototype de Pessoa
// console.log(Object.getOwnPropertyNames(Pessoa.prototype)); // constructor, andar e montar

/*

4) Entenda o Que está Sendo Retornado
-------------------------------------
-------------------------------------

Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse */

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

/*Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean --> Resultado da função
Carro.marca.charAt // Function --> Resultado da função
Carro.marca.charAt(0) // String --> Resultado da função

** Verifique o nome do construtor --> constructor.name

*/

// console.log(Carro.constructor.name); // object
// console.log(Carro.marca.constructor.name); // String
// console.log(Carro.preco.constructor.name); // Number
// console.log(Carro.acelerar.constructor.name); // Function
// console.log(Carro.acelerar().constructor.name); // Boolean

// console.log(Carro.preco.constructor.name.constructor.name); // String --> 'Number' é uma string

// EXERCICIOS

// 1) Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// 2) Crie um método no protótipo que retorne o nome completo da pessoa

Pessoas.prototype.returnFullName = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const newName = new Pessoas("Andre", "Lucho", 42);

console.log(newName.returnFullName());

// 3) Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
// ou
// console.log(NodeList.prototype);

console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
// ou
// console.log(HTMLCollection.prototype);
//

console.log(Object.getOwnPropertyNames(Document.prototype));
// console.log(Document.prototype);
//241 metodos ou propriedades de interação com o DOM

// 4) Liste os construtores dos dados abaixo

const li = document.querySelector("li");

console.log(li.constructor.name); // HTMLLIElement;
// HTMLLIElement-- > HTMLElement-- > Element ---> Node --> EventTarget --> Object
//  estamos falando com o Elemento li

console.log(li.click.constructor.name); // Function;
console.log(li.innerText.constructor.name); // String;
console.log(li.value.constructor.name); // Number;
console.log(li.hidden.constructor.name); // Boolean;
console.log(li.offsetLeft.constructor.name); // Number;
// console.log(li.click().constructor.name); //  undefined;

// 5) Qual o construtor do dado abaixo:
li.hidden.constructor.name; // "Boolean" ===> String

const teste = li.hidden.constructor.name;
const teste2 = teste.constructor.name;

console.log(teste2); // String
