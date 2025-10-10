// Manipulação das classes via JS DOM --> .classList
// Retorna um Array-Like com a classe do elemento

/* Propriedades e métodos ClassList
-----------------------------------

1) .className = retorna nome classe (string) => 
posso add tb =>
.className += ' amarelo' => add a string amarelo ao nome da classe existente

2) .classList = lista de classes --> retorna todas as classes do elem HTML selecionado

3) .classList.add('nomeDaClasse', 'outroNome') => add uma nova ou + classes

.classList = " " --> substitui todas as classes pela nova

4) .classList.remove('') => remove

5) .classList.toggle('') => caso não exista a classe= add ; se já existe = remove a existente

6) .classList.contais('') => verifaca se existe = true or false => pode usar if/else

7) .classList.replace('x' , 'y') => substitui a classe x pela classe y

*/

const menu = document.querySelector(".menu");
// console.log(menu.classList);

// console.log(menu.classList[1]);

// menu.classList.add("maisUmaClasse");
// console.log(menu);

// const changeClass = menu.classList.toggle("ativo");
// console.log(menu);

/* 
-----------------------------
----------------------------- 
*/

// Manipulação de Atributos via JS DOM --> .attributes => Read Only

// Retorna um Object-Like com todos os atributos contidos naquele elemento

/* Propriedades e métodos attibutes
-----------------------------

.attributes --> retorna todos os atributos do elemento HTML

retornando atributos especificos:

1) .attributes.class

2) .attributes.id

3) .attributes.[2] => por posicao no código

4).attibutes['data-...'] => atributos data => dentro de strings, pois não é um método e sim, uma prop de objeto  



Métodos getAttribute e setAttribute
-----------------------------------


A) .getAttribute('nomeDoAtributo') => pega o valor do atributo

B) .setAttribute('') => cria e/ou modifica o valor do atributo

OBS --> posso passar como atributo QQUER STRING = CUIDAR

c) .removeAttribute('') => remove o atributo

d) .hasAttribute('') => retorna true or false
OBS: não faz comparação -- use getAtrtibute
.hasAttribute() => retorna se tem o true or false
*/

// console.log(menu.attributes);

// console.log(menu.attributes.id.nodeValue);

const descrip = document.querySelector(".animalsDescription");

descrip.getAttribute("class");
// console.log(descrip);

descrip.setAttribute("data-texto", "aaa");
// console.log(descrip);

const possuiID = descrip.hasAttribute("id");
// console.log(descrip);

//
// -----------------------------------
// -----------------------------------

//EXERCICIOS
// -----------------------------------

//Adicione a classe 'ativo' a todos os itens do menu

const menu2 = document.querySelectorAll(".menu a");
// console.log(menu2);

menu2.forEach((item) => item.classList.add("ativo"));

console.log(menu2);

// ou

// menu2.forEach((li) => li.setAttribute("class", "ativo"));

// console.log(menu2);

//Remove a classe 'ativo' de todos os itens do menu e mantenha apenas no primeiro item

// menu2.forEach((li, i) => {
// if (i > 0) {
//   li.removeAttribute("class", "ativo");
// }
// });
// console.log(menu2);

//Remove a classe 'ativo' de todos os itens do menu e mantenha apenas no último item

menu2.forEach((li, i) => {
  if (!(i === menu2.length - 1)) {
    li.removeAttribute("class", "ativo");
  }
});

console.log(menu2);

//Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img");
// console.log(imgs);

// imgs.forEach((img, i) => {
//   if (img.hasAttribute("alt")) {
//     console.log(img, i);
//   }
// });

// ou

imgs.forEach((img, i) => {
  const possui = img.hasAttribute("alt");
  console.log(possui, i);
});

// --> retorna true or false

//Modifique o href do link externo no menu

menu2.forEach((item) => {
  if (item.getAttribute("href") == "http://pt.wikipedia.org") {
    item.setAttribute("href", "http://www.google.com");
  }
});
console.log(menu2);

// ou

// const link = document.querySelector("a[href^='http']");
// console.log(link);

// link.setAttribute("href", "http://www.origamid.com.br");

// console.log(link);
