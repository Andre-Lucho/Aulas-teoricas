/* Efeitos no Dom
-----------------------------------
-----------------------------------

1) DataSet
-----------------------------------

*) HTMLElement

Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement*/

const h1 = document.querySelector("h1");
// console.log(h1);
// console.log(Object.prototype.toString.call(h1));

// console.log(HTMLHeadingElement.prototype);

/* h1 está herdando todos os métodos e propriedades do HTMLHeadingElement.prototype
Caminho --> HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object 
*/

/*

Dataset
-----------------------------------
-----------------------------------

Dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. 

*** A utilização do dataset agiliza e organiza a interação JS-DOM

*/

// console.log(h1.dataset); // DOMStringMap {}

/* Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data- .

<div data-cor="azul" data-width="500">Uma Div</div>
<span data-anime="left" data-tempo="2000">Um Span</span> */

let div = document.querySelector("div");

// selecionando por atributo:
// -----------------------------------

div = document.querySelector("[data-cor]");
div = document.querySelector('[data-cor="azul"]');

// Ambos os valores selecionam a mesma div acima.

/*
OBS => Lembrando que a propriedade dataset no código HTML é um atributo do HTML;
deve ser selecionado como um atributo === fazemos com as classes no CSS */

// console.log(div.dataset); // DOMStringMap {cor: "azul", width: "500"}

// console.log(div.dataset.cor); // 'azul'
// div.dataset.width; // '500'
// div.dataset.tempo = 1000;
// console.log(div.dataset); // DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

/*

Data Atributes
-----------------------------------

Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

<div data-anima="left" data-tempo="1000">Div 1</div>
<div data-anima="right" data-tempo="2000">Div 2</div> */

const divs = document.querySelectorAll("[data-anima]");
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// adiciona em cada div uma classe com o mesmo nome que o valor de data

/*

Data vs Class
-----------------------------------

A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. 
Além de deixar a estrutura da tag mais organizada.

<div data-anima="left" data-tempo="1000">Div 1</div>
<div class="anima-left tempo-1000">Div 2</div> */

/*

Nomenclatura
-----------------------------------

Por padrão, o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. 
Então, qualquer traço será removido e a letra seguinte transformada em maiúscula.

<div data-anima-scroll="left">Div 1</div> */

const div2 = document.querySelector("[data-anima-scroll]");

// console.log(div2.dataset); // {animaScroll: 'left'}
// div2.dataset.animaScroll; // left
// div2.dataset.tempoTotal = 1000; // Na div vira data-tempo-total="1000"
// delete div.dataset.animaScroll; // remove o atributo

/*

Exercícios
----------------------------------- */

// 1. Adicione um atributo data-anime="show-down" e data-anime="show-right" a todos as section's com descricão dos animais.

const sections = Array.from(
  document.querySelectorAll(".animalsDescription section")
);
console.log(sections);

sections.forEach((item, i) => {
  const place = sections.length - i;
  place % 2 == 0
    ? (item.dataset.anime = "show-right")
    : (item.dataset.anime = "show-down");
});

// 2. Utilizando estes atributos, adicione a classe show-down ou show-right a sua respectiva section assim que a mesma aparecer na tela (animacao tab).
// Ver no arq JS: 08 - aulas_animacoes ; linhas 42-43

// 3. No CSS faça com que show-down anime de cima para baixo e show-right continue com a mesma animação da esquerda para a direita.
// Ver no arq CSS: style - linhas navegação por tabs e @Keyframes que formam modificadas

// 4. Substitua todas as classes js- por data atributes.
