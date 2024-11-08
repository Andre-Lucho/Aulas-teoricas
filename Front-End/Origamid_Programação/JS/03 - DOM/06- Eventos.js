// Eventos JS DOM //
/* (1)
--------------------------

A) .addEventListener =>
Add uma função tipo callback ao elemento, que será ativada assim que
certo evento ocorrer naquele elemento

Sintaxe:
elemento.addEventListener('evento', callback*, **{
algoritmo
})

* => como função anônima, arrow funct ou função declarada separadamente***
*** => declarada separadamente => Boa prática

** argumento opcional

*/

// --------------------------

// B) Event

// 1° parametro da função callback --> qquer palavra ou letra => e mais comum
// event RETORNA um OBJETO DO EVENTO que está ocorrendo com diversas propriedades e métodos

// ex.
const imagem01 = document.querySelector(".img01");
// console.log(imagem01);

function callback(event) {
  console.log(event);
}

// imagem01.addEventListener("click", callback);

/* B.1) Algumas propriedades do event


a) event.currentTarget;  => aponta para esse próprio seletor --> this
ex. Lista de imagens

b) event.target; => aponta para esse próprio seletor  --> + especifico
ex. uma das imagens clicada

c) event.type;  => qual o tipo de evento

*/

const animaisImg = document.querySelector(".animalsDescription");

function callbackLista(event) {
  console.log(event.currentTarget, event.target, event.type);
}

// animaisImg.addEventListener("click", callbackLista);

/* --------------------------

B.2) Método event.preventDefault()

Previne o comportamento padrão do evento no browser;
ou seja, o evento irá acontecer; porém seu comportamento padrão, não!

*/

// ex:
const linkExterno = document.querySelector('a[href^="http"');
// console.log(linkExterno);

function link(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
  // o evento esta apontando p o link da página externa, porém não está me direcionando p lá
}

// linkExterno.addEventListener("click", link);

// --------------------------

// C) This (em eventos)
// A palavra this é uma palavra reservada do JS que pode fazer referência a diferentes objetos dependendo do contexto.
// Em eventos, this faz referência ao elemento em que o addEventListener foi adicionado

const faq = document.querySelector(".faq");

function faqList(event) {
  console.log(this);
  // this = event.currentTarget

  console.log(this.getAttribute("id"));
  this.classList.add("outraClasse");
  console.log(faq);
}

// faq.addEventListener("click", faqList);

/*
para pegar todos src's:

const img2 = document.querySelectorAll('.gridImg')

img2.forEach(src => {
  const a = src.getAttribute('src')
  console.log(a)
});

OBS = aqui, NAO estamos fazerndo referencia a um evento!!

-----------------------------------------------------*/

// D) Eventos do addEventListener
// ---------------------------------

// D.1) Eventos elemento HTML
// ----------------------------

// Lista dos eventos pode ser vista no , target, iniciando em on

const h1 = document.querySelector(".img01");
// console.log(h1);

function evento(event) {
  console.log(event.type, event);
}

// h1.addEventListener("mousemove", evento);

// D.2) Eventos window
// --------------------

// window.addEventListener("scroll", evento);
// window.addEventListener("resize", evento);

// referencia MDN --> https://developer.mozilla.org/en-US/docs/Web/Events

// D.3) Eventos Keyboard
// ----------------------

// window.addEventListener('keydown', keyEvent); //=> qd pressionar uma tecla do teclado

function keyEvent(event) {
  console.log(event.key);

  if (event.key == "b") {
    document.body.classList.toggle("background01");
  }
}

// window.addEventListener("keydown", keyEvent);

// -------------------------------------------
// -------------------------------------------

// E) ForEach em Eventos
// ----------------------

//o Método '.addEventListener' é add a apenas 1 elemento; para add em vários elems (lista de imagens ou outros elementos HTML) é necessario iterar sobre eles(loop) => forEach

// para pegar todos src's das imagens class="gridImg":

const imgs = document.querySelectorAll(".gridImg");

function getSrcImgs(event) {
  const a = event.currentTarget.getAttribute("src");
  // console.log(a);
}

imgs.forEach((img) => {
  // console.log(img);
  // img.addEventListener("click", getSrcImgs);
});

// -------------------------------------------
// -------------------------------------------

// EXERCICIOS

// 1) Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');
// console.log(links);

function handleLink(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove("ativo");
  });
  this.classList.add("ativo");
  // apontando para o evento do click === a tag <a> específica --> so coloca a classe nela!
}

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// 2) Selecione todos os elementos do site começando a partir do body; ao clique mostre exatamente quais elementos estão sendo clicados

const site = document.querySelectorAll("body *");
// console.log(site);

function elemsAoClick(e) {
  console.log(this);
}

site.forEach((elem) => {
  elem.addEventListener("click", elemsAoClick);
});

// 3) Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, utilizando o método remove()

site.forEach((elem) => {
  elem.addEventListener("click", elemRemovido);
});

function elemRemovido(e) {
  this.remove();
}

// 4) Se o usuário clicar na tecla (t), aumente todo o texto do site

addEventListener("keydown", keyEvent);

function keyEvent(e) {
  if (e.key === "t") {
    document.documentElement.classList.toggle("textoAumentado");
    // documentElement --> tag <html>
  }
}
