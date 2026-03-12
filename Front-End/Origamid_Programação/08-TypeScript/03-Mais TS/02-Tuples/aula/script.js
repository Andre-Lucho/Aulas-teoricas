"use strict";
// 1
const produto = ['Doom', 3500];
// tipo de produto === (string | number)[]
// produto[0]. --> TS não autocompleta com os métodos e prop. de String e Number, pois não sabe qual o tipo do 1 elemento, já que pode ser string | number === tenho que fazer o type guard:
if (typeof produto[0] === 'string') {
    // produto[0]. --> já tenho os métodos de string
    // produto[0].toLowerCase()
}
// 2 - Tuples
const produto1 = ['Doom', 200];
// tipo de produto1 === string em produto1[0] && number em produto1[1]\
produto1[0].toLocaleLowerCase();
produto1[1].toFixed();
/* 3.

REACT(comum) - Desestruturação de Arrays:
----------------------------------------- */
const [nome, preco] = produto1;
nome.toLocaleLowerCase();
preco.toFixed();
// já estão definidos os tipos fixos de 'nome' === string e 'preco' === number por causa do Tuples
/*

4.

as const
----------

*/
function getText(selector) {
    const elem = document.querySelector(selector);
    return elem ? [elem, elem.innerText] : null;
}
const button = getText('button');
// button é de tipo (string | HTMLElement)[] | null
// if (button && typeof button[0] === 'string') button[0].toLowerCase(); --> tenho que usar o type Guard
/*

a) Posso usar Tuple no retorno da função:
-----------------------------------------
*/
function getText1(selector) {
    const elem = document.querySelector(selector);
    return elem ? [elem, elem.innerText] : null;
}
const button1 = getText1('button');
// button1 é de tipo [HTMLElement, string] | null
if (button1)
    button1[1].toLowerCase(); // --> já tenho os métodos de string
/*
b)  usando as const:
--------------------

*/
function getText2(selector) {
    const elem = document.querySelector(selector);
    return elem ? [elem, elem.innerText] : null;
}
const button2 = getText2('button');
// button2 é de tipo readonly [HTMLElement, string] | null
// if (button2) {
//   button2[0] = 'teste'; // --> erro, pois é readonly
//   button2[1].toLowerCase();
// }
// console.log(button);
