/*  Dimensões e Distâncias 
--------------------------

Heigh e Width
-------------

São propriedades e métodos do objetos Element e HTMLElement - maioria Read Only

const classe = document.querySelector('algumaClasse')

A) Height
----------

classe.clientHeight => retorna height + padding
classe.offsetHeight => height + padding + border
classe.scrollHeight => height total (somando com o scroll)


B) Width
----------

classe.clientWidth => "
classe.offsetWidth =>"
classe.scrollWidth =>"

C)
-----------------------------------

classe.offsetTop => distância entre topo elemento e topo página

classe.offsetLeft => distância entre elemento e a borda esquerda da página

D) 
----------------------------------

getBoundingClientRect() (método)

retorna um objeto com diversos valores de suas dimensões

Const rect = classe.getBoundingClientRect();

console.log(rect) ---> traz lista de dimensões

* p/ dimensões específicas: 

rect.height => somente o height do Elemento
rect.width => "
rect.top => "

console.log(rect.height)

E) Propriedades de Window (navegador)
-------------------------------------


window.innerHeight => heigth da janela
window.innerWidth => width da janela

window.scrollX => distancia total scroll vertical
window.scrollY => distancia total scroll horizontal


E.1) matchMedia() 

É um media-querie = CSS para verificar a largura do Navegador
prop = matches => RETORNA true or false

*/

const h2 = document.querySelector("h2");
// console.log(h2);

// console.log(h2.clientHeight);
// console.log(h2.scrollHeight);
// console.log(h2.offsetTop);

const rect = h2.getBoundingClientRect();
// console.log(rect.top);

if (rect.top > 0) {
  // console.log("ultrapassou do elemento selecionado");
  // forma de animar a pagina via Scroll!!
}

const win = window;
// console.log(win.innerWidth);

//  Lembrar: POSSO PASSAR DIRETO AS PROPRIEDADES DO WINDOW SEM FAZER REFERENCIA A ELE (WINDOW)
// console.log(innerHeight);

// console.log(scrollX);
// console.log(scrollY);

//

const screen = /*window.*/ matchMedia("(max-width: 750px)");

if (screen.matches) {
  // console.log("Tela menor que 750px de largura");
} else {
  // console.log("Tela maior que 750px de largura");
}

// EXERCÍCIOS
// -------------

// A) Verifique a distancia da 1° imagem em relação ao topo da página

const primeiraImg = document.querySelector("img");
// console.log(primeiraImg);

const distTop = primeiraImg.getBoundingClientRect();
console.log(distTop.top);

// --------------------------

// B) Retorne a soma da largura de todas as imagens

const todasImg = document.querySelectorAll("img");
console.log(todasImg);

function somarImagens() {
  let contador = 0;
  todasImg.forEach((item, i) => {
    // const larguraImg = item.offsetWidth;
    // contador += larguraImg;
    contador += item.offsetWidth;
    console.log(contador, i);
  });

  console.log(contador);
}

window.onload = function () {
  somarImagens();
};

// ou

// window.onload = () => somarImagens();

// O script pode ser carregado(load) antes da renderização de todas as imagem --> assim, o loop pode deixar de somar alguma largura, retornando um resultado incorreto
// a propriedade acima (window.onload) só carregará a funcão 'somarImagens' após o carregamento total da página

// --------------------------

// C) Verifique se os links (internos e externos) da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
console.log(links);

links.forEach((item) => {
  if (item.clientHeight >= 48 && item.clientWidth >= 48) {
    console.log("o link possui acessibilidade conforme a Google");
  } else {
    console.log("o link NAO possui boa acessibilidade conforme a Google");
  }
});

// D) Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const tela = window.matchMedia("(max-width: 720px)").matches;
if (tela) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}

console.log(menu);
