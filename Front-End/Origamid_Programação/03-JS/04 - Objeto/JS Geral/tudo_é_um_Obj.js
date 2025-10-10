//
// Strings, Numbers, Booleans, funcões e + possuem propriedades e métodos --> são objetos

//Strings

let nome = "Andre";

nome.length; // -->5 ... propriedade
nome.charAt(6); // --> 'e' .... método
nome.replace("e", "ei"); // --> 'Andrei'

// Numbers

var altura = 1.8;
altura.toString(); //--> '1.8'
altura.toFixed(); // --> '2'

//  Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos.

// Functions

function areaQuadrado(lado) {
  // return lado * lado;
}

areaQuadrado.toString();
// "function areaQuadrado(lado) {
//     return lado * lado;
// }"

areaQuadrado.length; // 1 --> possui 1 argumento na função

// Elementos do DOM

// html --> <a class="btn">Clique</a>

/*

var btn = document.querySelector(".btn");
btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});

*/

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

// EXERCICIOS

// nomeie 3 propriedades ou métodos de strings
/*

nome.indexOf();
nome.toUpperCase();
nome.length;
nome.concat();
nome.slice();
nome.toString();

*/

// nomeie 5 propriedades ou métodos de elementos do DOM

const domElem = document.querySelector(".tagA");
/*

domElem.addEventListener();
domElem.createElement();
domElem.append;
domElem.contains;
domElem.id;
domElem.setAttribute();
domElem.getAttribute();
domElem.innerHtml
domElem.innertext
*/

console.log(domElem);

// busque na web um objeto (método) capaz de interagir com o clipboard,

// api Clipboard JS
