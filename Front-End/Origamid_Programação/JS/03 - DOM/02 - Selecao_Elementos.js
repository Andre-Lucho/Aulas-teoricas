/*
OBTENDO ELEMENTOS HTML DOM
----------------------------


OBTER VÁRIOS ELEMENTOS (HTMLCollection) = Array-Like
-----------------------------

=> Lista de Elementos dinâmicos - altera automaticamente todos os elementos
qd as propriedades CSS são alteradas ou,
qd novas elementos são criados via JS DOM e append no HTML

A partir de um nome de TAG
-----------------------------

const liElements = document.getElementsByTagName("li");
console.log(liElements)

-----------------------------

A partir de uma CLASSE
-----------------------

const contactInputs = document.getElementsByClassName("contact-input");
console.log(contactInputs)


**tambem posso selecionar +1 classe => deixando um espaco entre o nome das 2 classes dentro do ()
-->de que a tag tenho dentro dela as 2 ou + classes

retorna como um ARRAY:
ex.: console.log(liElements[3]) = apenas na posicao 3
ex.: console.log(liElements.lenght) = tamanho do "array"

-----------------------------
-----------------------------


OBTER VÁRIOS ELEMENTOS (NodeList) = Array-Like
-----------------------------

=> Lista de Elementos estáticos
não altera dinamicamente qd, por exemplo, as propriedades CSS são alteradas
porem, possue mais métodos que o HTMLCollection

-----------------------------

A partir do atributo NAME

const contact2 = document.getElementsByName("contact2");
console.log(contact2)

-----------------------------

A partir de uma QUERY = querySelectorAll
SELETOR UNIVERSAL --> Retorna TODOS os Elem da seleção 

const contacts = document.querySelectorAll("#contact-list > li > input").value;
// elemento label = dentro do li, dentro do ID = contact-list

console.log(contacts);

ex.: console.log(contacts[3]) = apenas na posicao 3
= console.log(document.querySelectorAll('img[src^="img/imagem"]')
seleciona todos os atributos img que comecem exatamente(^) pela src= magem...

-----------------------------
-----------------------------


OBTER UM ÚNICO ELEMENTO
-----------------------------

A partir do seu ID
const contactList = document.getElementById("contact1").value; id do elemento HTML(=valor)
console.log(contactList)

-----------------------------

Através de uma QUERY

SELETOR UNIVERSAL --> Serve p id's,tags, classes... --> é referenciado como no CSS
O comportamento é igual ao do querySelectorAll(),
porém retorna o PRIMEIRO ELEMENTO que combinar com o seu SELETOR CSS

const firstContact = document.querySelector("#contact-list").textContent;
console.log(firstContact)
.textContent = texto da tag <label>

outros exemplos (servem tambem para .querySelectorAll):

= document.querySelector('.animais_lista li:last-child')
seleciona o ultimo li(last-child) dentro da classe animais_lista

= document.querySelector('[href^="https:]')
seleciona o primeiro atributo href que comecem exatamente(^) com https:..

ainda:
buscar dentro de firstContact
const navItem =  firstContact.querySelector('li')
seleciona a primeira li dentro de onde esta apontando a variavel firstContact


-----------------------------
-----------------------------

Diferenças entre HTMLCollection e NodeList
-----------------------------

NodeList => número de métodos e propriedades é + completa:
--> Estático


NodeList.length
NodeList.item()
NodeList.entries()
NodeList.forEach()
NodeList.keys()
NodeList.values()
https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList

HTMLCollection => número de métodos e propriedades é limitado:
--> Dinâmico

HTMLCollection.length
HTMLCollection.item()
HTMLCollection.namedItem()
https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection


-----------------------------


Transformando os Arrays-Like em  Array "puro"
(Posso ter todas os metodos do NodeList no HTMLColection):

const abc = Array.from(NomeDaVariavel)

*/

const animals = document.getElementById("animals");

// console.log(animals);
// console.log(animais.innerText);

const gridSection = document.getElementsByClassName("grid-section");

// console.log(gridSection);
// console.log(gridSection.length);
// console.log(gridSection[1]);

const primeiraLi = document.querySelector("li");

// console.log(primeiraLi);

const linkInternos = document.querySelector("[href^='#']");

// console.log(linkInternos.href);

const animaisImg = document.querySelectorAll(".animalsImg img");

// console.log(animaisImg);

const contact = document.querySelector(".contact");
const title_00 = document.querySelector(".contact h1");

const title_01 = contact.querySelector(".title");
const title_02 = contact.querySelector("h1");

// mesma selecao acima

// Diferenças entre HTMLCollection e NODEList

/*
const primeiraUl = document.querySelector("ul");

const gridSectionHTML = document.getElementsByClassName("grid-section");

const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function (item) {
  console.log(item);
});

*/

// -----------------------------
// -----------------------------

// EXERCICIOS
// ----------

// 1) Retorne no console todas as imagens do site

const todasIMG = document.querySelectorAll("img");

console.log(todasIMG);

// 2) Retorne no console apenas as imagens que começaram com a palavra 'imagem'

const palavraIMG = document.querySelectorAll('img[src^="img/imagem"]');

console.log(palavraIMG);

// 2.1) Retorne no console apenas as imagens que começaram com a classe 'grid'

const classeIMG = document.querySelectorAll('img[class^="grid"]');

console.log(classeIMG);

// 3) Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]');

console.log(linkInterno);

// 4) Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector(".animalsDescription h2");

console.log(primeiroH2);

// ou

const animais = document.querySelector(".animalsDescription");

const h2 = animais.querySelector("h2");

console.log(h2);

// 5) Selecione o último p do site

const todosP = document.querySelectorAll("p");

console.log(todosP[todosP.length - 1]);
// ou

console.log(todosP[--todosP.length]);
