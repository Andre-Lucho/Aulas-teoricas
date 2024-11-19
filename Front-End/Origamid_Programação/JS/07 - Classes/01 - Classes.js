// /*

// Constructor Function
// -----------------------------------

// São Funções responsáveis pela criação de objetos.
// O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes. */

// function Button(text, background) {
//   this.texto = text;
//   this.panoDeFundo = background;
//   // propriedades de Button
// }
// Button.prototype.element = function () {
//   // métodos de Button que ficam no prototype
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.texto;
//   buttonElement.style.background = this.panoDeFundo;
//   return buttonElement;
// };

// const blueButton = new Button('Comprar', 'blue');

// // console.log(blueButton.element());

// /*

// Class
// -----------------------------------

// O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras.
// Agora podemos utilizar a palavra chave 'class'.
// É considerada 'syntactical sugar' , pois, por baixo dos panos, continua utilizado o sistema de protótipos de uma função construtora para criar a classe. */
// // Na verdade é a mesma coisa, porém com uma sintaxe diferente

// class Button1 {
//   constructor(text, background, type) {
//     // constructor == onde passo os argumentos (como na função construtora)
//     this.texto = text;
//     this.panoDeFundo = background;
//     this.type = type;
//   }

//   criarElemento() {
//     // = Button.prototype.elemento = function(){ } --> Métdos da Class
//     // const elementType = this._elementType;
//     const buttonElement = document.createElement(this.type);
//     buttonElement.innerText = this.texto;
//     buttonElement.style.background = this.panoDeFundo;
//     // console.log(buttonElement);
//     return buttonElement;
//   }

//   append(target) {
//     const position = document.querySelector(target);
//     position.appendChild(this.criarElemento());
//     // this.criarElemento() --> está fazendo ref ao RETORNO de .criarElemento() === buttonElement --> ver adiante
//     // como trazer um argumento do outro método para esse método?
//     // quero poder escolher o tipo de elemento que farei o append na pág(arg de criarElemento())
//     return position;
//   }

//   // set element(type) {
//   //   this._elementType = type;
//   // }
// }

// const blueButton1 = new Button1('Comprar', 'white', 'button');
// console.log(blueButton1.criarElemento());
// console.log(blueButton1.append('div'));

// // blueButton1.element = "button";
// /*

// Class vs Constructor Function
// -----------------------------------

// Class
// ---------

// class Button {
//   constructor(propriedade) {
//     this.propriedade = propriedade;
//   }
//   metodo1() {}
//   metodo2() {}
// }

// Constructor Function
// ----------------------------

// function Button(propriedade) {
//   this.propriedade = propriedade;
// }
// Button.prototype.metodo1 = function () {};
// Button.prototype.metodo2 = function () {};

// */

// /*

// Constructor
// -----------------------------------

// O método constructor(args) {} é um método especial de uma classe.
// Nele você irá definir todas as propriedades do objeto que será criado.
// Os argumentos passados em new, vão direto para o constructor.

// Ele é um MÉTODO que define as propriedades do Objeto que está sendo criado
// (argumentos da 'antiga' Função construtora)
// */

// // class Button2 {
// //   constructor(text, background, color) {
// //     this.text = text;
// //     this.background = background;
// //     this.color = color;
// //   }
// // }
// // const blueButton2 = new Button2("Clique", "blue", "white");
// // Button {text: 'Clique', background: 'blue', color: 'white'}

// // console.log(blueButton2);

// /*
// Constructor Return
// -----------------------------------

// Por padrão, a classe retorna 'this'. Ou seja, THIS faz referência ao objeto criado com o new Class.
// Podemos modificar isso alterando o return do constructor, o problema é que PERDERÁ toda a referência do objeto --> NÃO conseguirei invocar suas prop e métodos.
// */

// // class Button {
// //   constructor(text) {
// //   this.text = text;
// //   return this // padrão de retorno de uma Class
// //   return this.element(); // não fazer
// //   }
// //   element() {
// //   document.createElement("button").innerText = this.text;
// //     }
// // }
// // const btn = new Button("Clique");
// // // <button>Clique</button>

// /*
// This
// -----------------------------------

// Assim como em uma função construtora, this faz referência ao objeto criado com new.
// Você pode acessar as propriedades e métodos da classe utilizando o this. */

// // class Button3 {
// //   constructor(text) {
// //     this.text = text;
// //     // console.log(this);
// //     // this está acessível em toda a classe
// //   }
// //   element() {
// //     const buttonElement = document.createElement("button");
// //     buttonElement.innerText = this.text;
// //     // console.log(this);
// //     // this está acessível em toda a classe

// //     return buttonElement;
// //   }
// //   appendElementTo(target) {
// //     const targetElement = document.querySelector(target);
// //     targetElement.appendChild(this.element());
// //     // usando 'this' aqui e acessando o retorno de 'element()'
// //     // console.log(this);
// //     // this está acessível em toda a classe
// //   }
// // }
// // const blueButton3 = new Button3("Clique");
// // blueButton3.appendElementTo("body");

/* IMPORTANTE
-----------------------------------
Obs:

Quando temos uma CALLBACK  dentro de um método em Classes, o THIS pasará a fazer referência ao método ligado a ela e NÃO MAIS ao constructor dela!!: */
class Classe1 {
  constructor(tag) {
    this.tag = document.querySelector(tag);
    // console.log(this); // this = Classe1 ==> a própria classe
  }

  metodo01() {
    console.log(this);
  }
  addEvent() {
    this.tag.addEventListener('click', function () {
      console.log(this); // this = this.tag  ==>a tag ligada ao EventListener
    });
  }
}

const novaClasse = new Classe1('.classe');
// novaClasse.metodo01(); // this = Classe1 ==> a própria classe
// novaClasse.addEvent();

// /*
// Propriedades
// -----------------------------------

// Podemos passar qualquer valor dentro de uma propriedade. */

// const blueButton2 = {
//   type: 'button',
//   backgroundColor: 'blue',
//   color: 'white',
//   text: 'Botão de Clique',
//   borderRadius: '4px',
// };

// const redDiv = {
//   type: 'div',
//   backgroundColor: 'red',
//   color: 'white',
//   text: 'Uma Div Aqui',
//   borderRadius: '4px',
// };

// class Button4 {
//   constructor(opções) {
//     this.options = opções;
//   }
//   criarElemento() {
//     const buttonElement = document.createElement(this.options.type);
//     buttonElement.innerText = this.options.text;
//     buttonElement.style.background = this.options.backgroundColor;
//     return buttonElement;
//   }
//   append(target) {
//     const position = document.querySelector(target);
//     position.appendChild(this.criarElemento());
//     // quero poder escolher o tipo de elemento que farei o append na pág(arg de criarElemento())
//     return position;
//   }
// }

// const novoButton4 = new Button4(blueButton2);
// const novoButton5 = new Button4(redDiv);

// // posso passar o objeto como propriedade aqui ou dentro da classe
// // console.log(novoButton4.append("div"));

// // console.log(novoButton5.append("div"));

// /*

// Static vs Prototype
// -----------------------------------

// Por padrão, todos os métodos criados dentro da classe irão para o protótipo da mesma.
// Porém podemos criar métodos diretamente na classe utilizando a palavra chave 'static'.
// Assim como [].map() é um método de uma array e Array.from() é um método do construtor Array,
// 'static' cria métodos dentro da Função construtora(Classe) e não mais no protótipo */

// class Button5 {
//   constructor(text) {
//     this.text = text;
//   }
//   static createButton(text, target, background) {
//     const elementButton = document.createElement('button');
//     const targetElement = document.querySelector(target);
//     elementButton.innerText = text;
//     elementButton.style.background = background;

//     targetElement.appendChild(elementButton);
//     /* o parâmetro 'text' faz referência apenas text do argum de creatButton().
//     observar que não tenho 'this', pois NÃO estou acessando NADA dentro da classe!! */
//     return elementButton;
//   }
// }

// // const blueObject = new Button5("testando");
// // console.log(blueObject);
// // console.log(blueButtonStatic);
// // createButton não tem, em seu protótipo, o método createButton()!!;

// /*
// OBSERVAÇÃO
// -------------
// Não estamos acessando o objeto Button (não temos a palavra new!!)
// ** Estou apenas AGRUPANDO a função createButton() com a classe Button --- Como se eu tivesse uma função 'createButton' fora da classe - createButton() também está relacionada com a criação de botões /*

// /*

// Static
// -----------------------------------

// Você pode utilizar um método static para retornar a própria classe com propriedades já pré-definidas. */

// class Button6 {
//   constructor(target, text, background) {
//     this.text = text;
//     this.background = background;
//     this.target = target;
//     console.log(target);
//     console.log(text);
//     console.log(background);
//   }
//   element() {
//     const elementButton2 = document.createElement('button');
//     elementButton2.innerText = this.text;
//     elementButton2.style.background = this.background;
//     const targetElement = document.querySelector(this.target);
//     console.log(targetElement);
//     targetElement.appendChild(elementButton2);

//     return elementButton2;
//   }
//   static createBlue(target, text, background) {
//     return new Button6(target, text, background).element();
//   }
// }

// const blueButton6 = Button6.createBlue('body', 'Comprar', 'yellow');

// // invocando o método ligado a função construtora (diretamente - static) 'Button6.createBlue' que, por sua vez, retona a criação da Classe Button6 e invoca o método .element().
