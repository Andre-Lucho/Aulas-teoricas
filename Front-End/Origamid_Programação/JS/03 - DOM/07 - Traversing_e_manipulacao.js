/* 
Traversing
-----------------------------------

Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai --> NIVEL ACIMA = HIERARQUIA HTML
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima ---> de MESMO NIVEL = HIERARQUIA HTML
lista.nextElementSibling; // elemento abaixo ---> ""

** lista.children; // *** HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

*/

parent.insertBefore();
const teste = document.querySelector('.animalsListImg');
// console.log(teste.nextElementSibling);

const a = teste.parentElement;
// console.log(a.nextElementSibling);
//-----------------------------------

// console.log(teste.children.length);

// console.log(teste.children[teste.children.length - 1]);
// console.log(--teste.children.length);
// console.log(teste.children.length - 1);

// console.log(teste.querySelectorAll("li"));
// console.log(teste.querySelector("li:last-child"));

/*
Element vs Node
---------------
Elements representam um elemento html, ou seja, uma TAG. 

Node representa um nó -->  pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

const lista = document.querySelector('.classe');

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima
lista.nextSibling; // node abaixo

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

Geralmente estamos atrás de um elemento, não de qualquer node em si.

*/

// console.log(teste.firstChild);
// console.log(teste.childNodes);

// Manipulando Elementos
// -----------------------

// É possivel mover/aplicar/substituir e remover elementos no DOM com os métodos de NODE

const animalsListImg = document.querySelector('.animalsListImg');
const contact = document.querySelector('.contact');
const map = contact.querySelector('.map');
// console.log(map);

const title = contact.querySelector('.title');
// const title = contact.querySelector("h1");
// const title = document.querySelector(".contact h1");

// console.log(animalsListImg);
// console.log(contact);
// console.log(title);

//
// A) .appendChild() --> MOVER ou ADD Elems
// ----------
// contact.appendChild(animalsListImg);

// move animalsList para o final de contact
// contact é o pai de animalsListImg

// B) .insertBefore()
// ----------
// contact.insertBefore(animalsListImg, map);

// insere a animalsList antes de map
//
// contact é o pai de animalsListImg
// animalsListImg = quero mover
// map é o pai de animalsListImg

// OBS --> aqui, map(.map) é filho DIRETO de contact
// OBSERVAR A HIERARQUIA DIRETA!!

// C) .replaceChild()
// ----------
// contact.replaceChild(title, animalsListImg);

// substitui title por animalsList
//
// D) .removeChild()
// ----------
// contact.removeChild(title);

// remove title de contact

// Novos Elementos -->
// ----------------
//
// .createElement('tag desejada')

// const novaTag = document.createElement("h1");
// novaTag.textContent = "Primeira tag h1 criada";
// novaTag.setAttribute("class", "title");
// estou add novos valores as propriedades do OBJETO criado novaTag

// console.log(novaTag);

// contact.appendChild(novaTag);
// e add como filho, na ÚLTIMA POSIÇÃO do Node

// OBS--> .appendChild sem createElement --> MOVE a tag do elemento de posição no documento

// contact.insertBefore(novaTag, map);
// inserido antes de map

// Clonar Elementos
// ----------------

// Todo elemento selecionado é único.
// Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
// OBS --> (true) = sinaliza para incluir os filhos, atributos, texto
// (false) --> somenta a tag pai é clonada

const titulo = document.querySelector('.grid-section h1');
console.log(titulo);
// const titulo2 = document.querySelector("h1");
// const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const faq = document.querySelector('.faq');

// const cloneTitulo = titulo.cloneNode(false);
// const cloneTitulo02 = titulo.cloneNode(true);

// console.log(cloneTitulo);
// console.log(cloneTitulo02);

// contato.appendChild(cloneTitulo);
// contato.appendChild(cloneTitulo02);

// EXERCICIOS

// Duplique o menu e adicione ele em copyright

const menu = document.querySelector('.menu');
const footer = document.querySelector('.copyright');
const footer_P = document.querySelector('.copyright p');

const menuClone = menu.cloneNode(true);

footer.insertBefore(menuClone, footer_P);

// Selecione o primeiro DT da dl de Faq

const firtsDt = document.querySelector('.faqList dt');
console.log(firtsDt);

// Selecione o DD REFERENTE ao primeiro DT

const firtsDd = firtsDt.nextElementSibling;
console.log(firtsDd);

// Substitua o conteúdo html de .faq pelo de .animais

// replace

const faq2 = document.querySelector('.faq');
const animalsGrid = document.querySelector('.animalsImg');
console.log(faq2);
console.log(animalsGrid);
// faq2.replace("animalsGrid", "faqHTML");

faq2.innerHTML = animalsGrid.innerHTML;
