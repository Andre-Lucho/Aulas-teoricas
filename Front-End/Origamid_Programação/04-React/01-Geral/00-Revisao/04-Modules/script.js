/* Modules
-------------------------------------------------------
Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização 
e compartilhamento de código comum.

Só funciona em servidor, seja local ou online. Não irá funcionar se você abrir o html direto:
<script type="module" src="./script.js"></script> */

/*
no arquivo --> quadrado.js:

export function areaQuadrado(numero) {
  return numero * numero;
}

export function perimetroQuadrado(numero) {
  return 4 * numero;
} 

*/
import { areaQuadrado, perimetroQuadrado } from './quadrado.js';
import teste from './numeroAleatorio.js'; // qualquer nome ou o mesmo da função default
import Circulo from './circulo.js';

console.log(areaQuadrado(2)); //4
console.log(perimetroQuadrado(2)); //8

console.log(teste());

console.log(Circulo.area(2));
console.log(Circulo.circunferencia(3));
console.log(Circulo.aleatorio());

// --------------------------------------------------------

// 2.2.2) Shallow clone
// --------------------------------------------------------
