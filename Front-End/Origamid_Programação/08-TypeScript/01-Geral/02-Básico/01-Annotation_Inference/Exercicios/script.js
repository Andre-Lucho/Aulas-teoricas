"use strict";
/*

01) Conserte a função com TypeScript
function normalizarTexto(texto) {
  return texto.trims().toLowercase();
} */
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
// console.log(normalizarTexto(' Alguma coisa '));
/*

02) Conserte as funções com TypeScript:

const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalMudou);

*/
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(total));
}
function calcularGanho(value) {
    const valor = Number(value);
    const p = document.querySelector('p');
    if (p)
        p.innerText = `ganho total: ${valor + 100 - valor * 0.2}`;
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem('total', input.value);
        calcularGanho(value);
    }
}
if (input)
    input.addEventListener('keyup', totalMudou);
