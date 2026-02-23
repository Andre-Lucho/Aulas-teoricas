"use strict";
/*
Exemplo 01
------------------
------------------

Sem Generics
---------------

1. Devo declarar todos os tipos possíveis de parâmetros que ela pode receber

function retorno(a: string | number) {
  return a;
}

console.log(retorno('oi'));
console.log(retorno(20));

2. Como tenho + de um tipo, devo verificar que tipo é esse, antes de poder aplicar métodos e propriedades

const b = retorno('oi');
if (typeof b === 'string') {
  const c = b.toUpperCase;
}
if (typeof b === 'number') {
  const d = b.toFixed;
}

Com Generics
---------------
Mostando a função que o tipo é genérico:
receberá o tipo indicado no parâmetro e retornará aquele tipo

function retorno2<variavelA>(a: variavelA): variavelA {
  return a;
}

console.log(retorno2<string>('oi'));
// Me mostra que retorno de 'retorno' será uma string -- posso ou não indicar aqui o tipo de parâmetro retornado

console.log(retorno2(200));
// Me mostra que retorno de 'retorno' será uma number

console.log(retorno2(true));
// Me mostra que retorno de 'retorno' será uma boolean

*/
/*

Exemplo 02
--------------
--------------

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão', 'Mamão', 'Melão'];

// a Função é do tipo Lista; recebe uma 'Lista'de array e retorna um array

function firstFive<Lista>(lista: Lista[]): Lista[] {
  return lista.slice(0, 5);
}

console.log(firstFive(numeros));
const a = firstFive(frutas);

const b = a.map((fruta) => {
  return fruta.toLowerCase();
});

console.log(b);


// forma de escrita + comum:
-------------------------------

function firstFive<T>(lista: T[]) T[]** {
  return lista.slice(0, 5);
}

* T = Tipo

** não preciso explicitar o tipo de retorno, pois só tenho o retorno de 'lista'; logo será uma array

*/
/*

Exemplo 3
------------------
------------------

function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}

notNull('andré')?.toLowerCase();
notNull(200)?.toFixed; */
/*

Exemplo 4
------------------
------------------

function tipoDado<T>(dado: T): { dado: T; tipo: string } {
  const resultado = {
    dado: dado,
    tipo: typeof dado,
  };

  return resultado;
}

console.log(tipoDado('teste').tipo);
console.log(tipoDado(200).tipo);

// retorna strings com os tipos de dados que ela pode receber
// pois typeof retorna uma string dos vários tipos primitivos

/*


Extends
------------
------------

// 1)

function extractText(elem: HTMLElement) {
  return {
  texto: elem.innerText, (propriedade de 'HTMLElement')
  tipo: elem
  };
}

const link = document.querySelector('a'); // 1. HTMLAnchorElement ou null

if (link) {
  console.log(extractText(link)tipo.href); //perde a referência de herança:
  
  erro: elem === HTMLElement | .tipo === HTMLAnchorElement --> tipos diferentes
} */
/*

2) Genérica
-------------- */
// function extractText<T>(elem: T) {
//   return {
//     texto: elem.innerText,
//     // erro: agora, ele está esperando por um HTMLAnchorElement --> innerText é propriedade de HTMLElement
//     tipo: elem,
//   };
// }
// const link = document.querySelector('a'); //HTMLAnchorElement ou null
// if (link) {
//   console.log(extractText(link).tipo.href);
// }
/*

3) Genérica + Extends
------------------------*/
// function extractText<T extends HTMLElement>(elem: T) {
//   return {
//     texto: elem.innerText,
//     // com o extends, indicamos que o tipo genérico deve herdar de uma interface HTMLElement
//     tipo: elem,
//   };
// }
// const link = document.querySelector('a'); //HTMLAnchorElement ou null
// if (link) {
//   console.log(extractText(link).tipo.href);
//   //não dá erro, pois está herdando as referências; não estou restringindo como acima (2)
// }
// Funcionamento JQuery
function $(selector) {
    return document.querySelector(selector);
}
const link4 = $('a')?.href; // link3 é do tipo Element ou null
// $<HTMLAnchorElement> --> estou passando expecífico que o tipo de link4 é HTMLAnchorElement... dai, funciona
/*

Métodos
---------

*/
const url1 = 'https://api.origamid.dev/json/notebook.json';
// const getData1 = async (url: string) => {
//   const response = await fetch(url);
//   return await response.json();
// };
const getData1 = async (url) => {
    const response = await fetch(url);
    return await response.json(); // Retorna Promise<any> --> não sabemos o que retorna da API = any
};
// Tranformando getData1 em um genérico para poder receber qualquer tipo de dado da API
// const handleData1 = async () => {
//   const notebook: Notebook = await getData1(url1);
//   console.log(notebook);
// };
// passando a tipagem na constante
// ou
const handleData1 = async () => {
    const notebook = await getData1(url1);
    console.log(notebook); // 1. inicialmente retorna any -- não sabemos o que retorna da api
};
// 2. passando o tipo de genérico que a função recebe
handleData1();
