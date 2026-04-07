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
function retorna(a) {
    return a;
}
console.log(retorna('andre').toUpperCase());
console.log(retorna(200).toFixed());
/*

Exemplo 02
--------------
-------------- */
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const frutas = [
    'Banana',
    'Pêra',
    'Uva',
    'Laranja',
    'Limão',
    'Mamão',
    'Melão',
    'Morango',
];
// a Função é do tipo Lista; recebe uma 'Lista'de array e retorna um array
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(numeros));
console.log(firstFive(frutas));
const a = firstFive(frutas);
const b = a.map((fruta) => {
    return fruta.toLowerCase();
});
console.log(b);
/*
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
------------------ */
function notNull(a) {
    if (a !== null)
        return a;
    else
        return null;
}
notNull('andré')?.toLowerCase();
notNull(200)?.toFixed;
function tipoDado(dado) {
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
------------*/
// 1)
const link = document.querySelector('a'); // 1. HTMLAnchorElement ou null
function extractText(elem) {
    return {
        texto: elem.innerText, //(propriedade de 'HTMLElement')
        elem,
    };
}
if (link) {
    // console.log(extractText(link).elem.href); // 'link' perde a referência de herança:
    //erro: a função espera - elem === HTMLElement | link === HTMLAnchorElement --> tipos diferentes
}
/*

2) Generics
-------------- */
function extractText1(elem) {
    return {
        texto: elem.innerText,
        // erro: agora, ele está esperando por um HTMLAnchorElement --> innerText é propriedade de HTMLElement
        elem,
    };
}
if (link) {
    console.log(extractText1(link).elem.href);
}
/*

3) Genérica + Extends
------------------------*/
function extractText2(elem) {
    return {
        texto: elem.innerText,
        // com o extends, indicamos que o tipo genérico deve herdar de uma interface HTMLElement
        elem,
    };
}
if (link) {
    console.log(extractText2(link).elem.href);
    //não dá erro, pois está herdando as referências; não estou restringindo como acima (2)
}
/*

Funcionamento JQuery
------------------------ */
function $(selector) {
    return document.querySelector(selector);
}
const link1 = $('a')?.href;
// link1 é do tipo Element ou null
// $<HTMLAnchorElement> --> estou passando expecífico que o tipo de link1 é HTMLAnchorElement... dai, funciona
/*

Métodos
---------

*/
const url1 = 'https://api.origamid.dev/json/notebook.json';
// 1
async function getData(url) {
    const response = await fetch(url); // Retorna Promise<any>
    return await response.json();
}
async function handleData() {
    // const notebook = await getData(url1); // TS não executa e não sabe os dados que retornam de uma API --> conts notebook == 'any'
    const notebook = await getData(url1); // Posso tipar com a interface Notebook
    console.log(notebook);
}
/*
//2
Tranformando getData1 em um genérico para poder receber qualquer tipo de dado da API*/
async function getData1(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData1() {
    const notebook = await getData1(url1);
    console.log(notebook);
}
// passando a tipagem na constante
// ou
const handleData2 = async () => {
    const notebook = await getData1(url1);
    console.log(notebook); // 1. inicialmente retorna any -- não sabemos o que retorna da api
};
// 2. passando o tipo de genérico que a função recebe
handleData1();
