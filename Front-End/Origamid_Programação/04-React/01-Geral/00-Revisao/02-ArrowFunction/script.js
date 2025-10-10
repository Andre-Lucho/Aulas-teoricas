// 1)
const upperName = function (name) {
  return name.toUpperCase();
};
upperName('André'); // ANDRÉ

const lowerName = (name) => name.toLowerCase();
lowerName('Rafael'); // rafael

/* Apenas 1 linha dentro da funcão --> 
não necessita das chaves, nem do return da function */

const countLetters = (word) => word.length;
console.log(countLetters('Rafael')); // 6

/* --------------------------------------------------------------------------------------------------------------*/

// 2) A principal diferença é o contexto do 'this'. A arrow function NÃO cria o próprio this:

// class Menu {
//   constructor(menu) {
//     this.menuElement = document.querySelector(menu);
//   }
//   addActiveEvent() {
//     this.menuElement.addEventListener('click', function (event) {
//       event.target.classList.toggle('active');
//     });
//   }
// }

/*

Então se: 
2.1) 
*/

// class Menu {
//   constructor(menu) {
//     this.menuElement = document.querySelector(menu);
//     this.activeClass = 'active';
//   }
//   addActiveEvent() {
//     this.menuElement.addEventListener('click', function (event) {
//       console.log(this); **
//       event.target.classList.toggle(this.activeClass); // NÃO irei conseguir acessar as propriedades e métodos do CONSTRUCTOR!
//     });
//   }
// }

// ** A funcão de Callback do addEventListener está setando o 'this' para quem está ativando ela --> this.menuElement

//
// 2.2) Forma Correta é utilizar o Arrow para PODER ACESSAR o constructor

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = 'active';
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', (event) => {
      console.log(this); //**
      event.target.classList.toggle(this.activeClass);
    });
  }
}

//   A funcão de Callback do addEventListener agora está fazendo referência ao 'this' da Classe 'Menu', em seu constructor!

const menu = new Menu('.principal');
menu.addActiveEvent();
