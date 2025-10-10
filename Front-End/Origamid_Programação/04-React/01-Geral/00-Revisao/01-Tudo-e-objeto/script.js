// Objeto Literal
const menu = {
  class: '.principal',
  active() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
    menuElement.classList.add('active');
  },
};

console.log(menu.class); //".principal";
menu.active(); // adicionar active ao menu
console.log(menu.hasOwnProperty('class')); // método herdado

const a = ['10', '20', '30'];
console.log(a.map(Number)); // [10, 20, 30];
// 'JavaScript'.toUpperCase(); // JAVASCRIPT

// const body = document.querySelector('body');
// body.classList.add('js'); // adiciona JS ao Body
