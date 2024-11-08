// Document Object Model (DOM)

// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window); // --> window é o objeto global do browser --> possui diferentes métodos e propriedades
// por ser global, não há necessidade de apontá-la no código

window.innerHeight; // --> retorna a altura do browser
window.alert(); //
window.prompt(); //

const wind = window.innerWidth;

console.log(wind);

// window.document... refere-se ao documento presene no browser - código html, xml...

// html --> <head> e <body>--> <h1>, <sections>--> <inputs>, <Ps>, <buttons>...
// O DOM segue uma Estrutura de árvore (ver Img anexa), onde seus NÓS são objetos dos objetos antecessores

// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

// exs:

const titulo = document.querySelector("h1"); //--> esta apontando para o tag h1
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

// titulo.addEventListener("click", callback);
// ativa a função callback ao click no título

// EXERCICIOS

// Retorne o url da página atual utilizando o objeto window
const url = window.document.URL;
console.log(url);

// ou

const url2 = window.location.href;
console.log(url2);

// Selecione o primeiro elemento da página que possua a classe ativo

const ativoClass = document.querySelector(".ativo ");
// seleciona o primeiro elemento

const ativoClass2 = document.querySelectorAll(".ativo ");

for (let i = 0; i < ativoClass2.length; i++) {
  if (ativoClass2[i] == 0) {
    console.log("Essa é a primeira classe selecionada");
  }
}

// --> VERIFICAR ACIMA

// Retorne a linguagem do navegador
const lang = window.navigator.language;
console.log(lang);

// posso verificar a linguagem do brower do usuário e fazer alterações na linguagem do site que é exibido

// Retorne a largura da janela

console.log(window.innerWidth);

/*
-----------------------------------
-----------------------------------

Outras Propriedades que retornam uma String
----------------------------------------------

.outerHTML; // todo o html do elemento --> pai
.innerHTML; // html interno --> filho
.innerText; // texto, sem tags
.textContent;
.innerText = '<p>Texto</p>'; // a tag vai como texto
.innerHTML = '<p>Texto</p>'; // a tag é renderizada --> insiro uma nova tag filha


-----------------------------------
-----------------------------------


// .Element --> A interface Element é a classe base mais geral da qual todos os objetos em um Document herda.

// .HTMLElement -->
// A interface HTMLElement (en-US) é a interface base para elementos HTML;
// ela representa qualquer elemento HTML. Alguns elementos implementam diretamente esta interface, enquanto outros a implementam através de uma interface que a herda -- Também herda propriedades de seu pai, Element.


-----------------------------------
-----------------------------------


*) $ no Inspecionar do Navegador - Elementos
-----------------------------------------

--> aponta (faz referência) para a seleção atual que desejo === a um SELETOR DOM

*Dessa forma, posso passar as propriedades ou métodos que desejo diretamente no console do navegador, sem a necessidade de apontar para o elemento

$0 --> elemento atual
$1 --> elemento que selecionei anteriormente
$2 --> elem q selecionei antes do anterior ...


*/
