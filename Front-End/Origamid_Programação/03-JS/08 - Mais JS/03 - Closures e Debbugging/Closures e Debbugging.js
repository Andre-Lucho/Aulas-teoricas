/*

Escopo
-----------------------------------
Quando criamos uma função, a mesma possui acesso à todas as variáveis criadas em seu escopo e também ao escopo pai. 
A mesma coisa acontece para funções dentro de funções. 
Sempre a prórpria e os escopos acima!! Inclusive window
*/
let item1 = 1;

function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    // console.log(item1);
    //     console.log(item2);
    // console.log(item3);
  }
  // funcao2();
}
// funcao1();

// console.log(item1);
// console.log(item2);
// // console.log(item3);
// funcao1, possui acesso à item1 e item2
// funcao2, possui acesso à item1, item2 e item3

/*
=> Como a funçao2 tem acesso as variáveis item 2 e item1??

Clojures('fechamentos')
-----------------------------------

*para funções dentro de funções

A funcao2 possui 4 escopos:
O primeiro escopo é o Local, com acesso ao item3;
O segundo escopo dá acesso ao item2, esse escopo é chamado de Clojure (funcao1) (escopo de função dentro de função);
O terceiro escopo é o Script com acesso ao item1 e;
O quarto escopo é o Global/Window.

let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
}
  funcao2();
}

/*

Debugging
-----------------------------------

É possível "debugarmos" um código JavaScript utilizando ferramentas do browser 
ou através do próprio Visual Studio Code.
Se o código possuir qualquer Web API, o processo deve ser feito no Browser. 

Plugins podem interferir no debug dentro do browser. 
  ** desabilitar os plugins ou entrar em 'modo incógnito' no Chrome
*/

/* debugger;
adicione a palavra debugger na linha onde deseja inicar o debug
ou direto no DevTools / Fontes --> arquivo que quero debugar */

// let item1 = 1;
// function funcao1() {
//  let item2 = 2;
//  function funcao2() {
//    let item3 = 3;
//    console.log(item1);
//    console.log(item2);
//    console.log(item3);
//  }
// funcao2();
// }

/*

Caso Clássico
-----------------------------------

Um dos casos mais clássicos para a demonstração de Clojures é através da criação de uma função de incremento. 
É como se a função incrementar carregasse uma mochila chamada contagem, onde uma referência para as suas variáveis estão contidas na mesma. */

function contagem() {
  let total = 0;
  return function incrementar() {
    total++;
    console.log(total);
  };
}

// contagem(); // pq não ativa a função contagem()? --> ela está sendo ativada; porém, ela apenas retorna a função incrementar inteira, sem ativá-la

console.log(contagem()); //-->
/*
function incrementar() {
    total++;
    console.log(total);
  };
  */

const ativarIncrementar = contagem();
ativarIncrementar(); // 1 --> estou ativando a função de retorno incrementar() e no seu escopo tenho a variável total com o seu valor (anterior ao somatório) sempre atualizado.
ativarIncrementar(); // 2
ativarIncrementar(); // 3 ...

/* ou o mesmo abaixo :

function contagem() {
  let total = 0;
  function incrementar() {
    total++;
    console.log(total);
  }
  incrementar();
  incrementar(); ...
}

contagem();
*/

/*

Clojures na Real
-----------------------------------

Todas as funções internas da Factory Function possuem uma closure de $$ . 
As mesmas contém uma referência à variável elements declarada dentro do escopo da função. */

// function $$(selectedElements) {
// const elements = document.querySelectorAll(selectedElements);
// function hide() { ... }
// function show() { ... }
// function on() { ... }
// function addClass() { ... }
// function removeClass() { ... }
// return { hide, show, on, addClass, removeClass }
// }
