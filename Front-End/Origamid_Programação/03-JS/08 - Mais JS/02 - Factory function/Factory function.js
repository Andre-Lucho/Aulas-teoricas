"use strict";

/*

Factory Function
-----------------------------------
São funções que retornam um objeto (como em: Constructor Function e Classes)
sem a necessidade de utilizarmos a palavra chave new. 
Possuem basicamente a mesma função que Constructor functions / Classes. 

OBS:
----
Todos seus métodos e propriedades fazem parte diretamente do objeto e não mais de seu Prototype! 
  == Ganho de performance
*/

function createButton(text) {
  const obj = {
    text: text,
  };
  return obj;
}

// createButton("oi"); //{text: 'oi'}

/* mesmo acima (Factory function):
--------------------------------------------------------- */

function createButton1(text) {
  // letra minuscula
  return {
    text,
  };
}

// const btn1 = createButton1("oi");
// // console.log(btn1); //{text: 'oi'}

// btn1.text; // 'oi'

// Ex.2

// function createButton2(text) {
//   function element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = text;
//     return buttonElement;
//   }
//   return {
//     text,
//     element, // retona como um método descrito acima
//   };
// }
// const btn2 = createButton2("Comprar");

// const btnLogin = createButton2("Login");
// const btnSair = createButton2("Sair");

// Ex.3
// abaixo, passando o método direto no return:

function createButton3(text) {
  return {
    element: () => {
      // retona como um método descrito acima
      const buttonElement = document.createElement("button");
      buttonElement.innerText = text;
      const body = document.querySelector("h1");
      body.appendChild(buttonElement);
      console.log(buttonElement);
    },
    text,
  };
}

// const btn3 = createButton3("Comprar");
// // console.log(btn3);
// console.log(btn3.text);
// btn3.element();

/*

Métodos / Variáveis privadas
-----------------------------------

Uma das vantagens em relação a Classes é a possibilidade de criarmos métodos /variáveis privadas
(que NÃO retornam com o objeto no 'return', APENAS aqueles que DECLARAMOS EXPLICITAMENTE nele ). */

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} andou`;
  }

  return {
    nome,
    sobrenome,
    andar,
    nadar,
    // nomeCompleto, // NÃO estará acessivel
  };
}

// const designer = criarPessoa("André", "Rafael");
// console.log(designer);
// console.log(designer.nadar());
// console.log(designer.nomeCompleto); //undefined

/*

Ice Factory
----------------------------------

Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). 
*/

function criarPessoa2(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }

  return Object.freeze({
    nome,
    sobrenome,
    nomeCompleto,
    andar,
  });
}

// const designer1 = criarPessoa2("André", "Rafael");
// console.log(designer1.nome);
// console.log(designer1.nomeCompleto);
// designer1.nome = "Douglas"; // Erro ==> Não houve alteração

/* ("use strict"):
quando usado no topo do código e tentarmos fazer alguma alteração em funções tipo Ice Factory, 
o console retorna uma mensagem de erro  */

/*

Constructor Function / Factory Function
----------------------------------------------

Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new.
Também é possível fazer isso com uma Constructor Function. */

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) {
    // ou (!new.target)
    // verificando se no Prototype de 'this' têm os protótipos e métodos de Pessoa( se se refere a Função Construtora Pessoa )
    // This == NÃO (!) é instância de Pessoa === Não é, pois não tenho a palavra 'new' --> está fazendo referência ao escopo + externo (Obj window) --> está OK
    return new Pessoa(nome);
    // satisfaz a condição e retorna Pessoa com new --> ou seja, atribui Pessoa como função Construtora e ativa a função Construtora agora atribuida devidamente com 'new' == o codigo funciona
  }
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

// const designer2 = Pessoa("André");
// console.log(designer2.nome); // André
// console.log(designer2.andar()); // André andou

/*

Factory Functions Na Prática:
-----------------------------------------------
Como uma Biblioteca JQuey funciona (utilizando Factory Functions)
*/

function $$(selectedElements) {
  //   // $$ == nome da função (JQuery)

  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => (element.style.display = "none"));
    return this;
    // retorna toda a function-pai novamente == para ela poder ser ativada novamente e poder encadear novos métodos e propriedades; caso contrário, após ativar algum dos métodos da funçao-pai, o código daria undefined e pararia(já satisfez a sua execução!!)
    // return $$(selectedElements); // Posso retornar dessa mesma forma também, pois 'this' se refere a própria Factory function  [ $$(selectedElements) ]
  }

  function show() {
    elements.forEach((element) => (element.style.display = "initial"));
    return this; //$$(selectedElements);
  }

  // colocar eventos:
  function on(userEvent, callback) {
    elements.forEach((element) =>
      element.addEventListener(userEvent, callback)
    );
    return this; //$$(selectedElements);
  }

  function addClass(className) {
    elements.forEach((element) => element.classList.add(className));
    return this; //$$(selectedElements);
  }

  function removeClass(className) {
    elements.forEach((element) => element.classList.remove(className));
    return this; //$$(selectedElements);
  }

  function toggleClass(className) {
    elements.forEach((element) => element.classList.toggle(className));
    return this; //$$(selectedElements);
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
    toggleClass,
  };
}

function handleClick(event) {
  console.log(this);
  btns.toggleClass("active");
}

const btns = $$(".button");

// btns.hide(); //esconde os elementos selecionados
// btns.show();
// console.log(btns.hide().show());

// const a = btns.elements;
// console.log(a);

btns.on("click", handleClick);

//Como fazer para handleClick fazer uma verificação se a classe está ativa ou não e, assim, add ou remover classe?
// == toggle ok
