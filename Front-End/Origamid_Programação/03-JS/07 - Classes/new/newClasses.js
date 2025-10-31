// Método clássico

function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.backgroundColor = this.background;

  return buttonElement;
};

const newButton = new Button('Abrir', 'black');

// console.log(newButton.element());

/* Class (ES6)
------------------
------------------ */

class Button1 {
  constructor(text, background, color, tag) {
    this.text = text;
    this.background = background;
    this.color = color;
    this.tag = tag;
    return this;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.backgroundColor = this.background;
    buttonElement.style.color = this.color;
    // console.log(this);

    return buttonElement;
  }
  append() {
    const targetElement = document.querySelector(this.tag);
    targetElement.appendChild(this.element());
    return targetElement;
  }

  static createButton(text, background, color, tag = 'body') {
    /* o parâmetro 'text' faz referência apenas text do argum de creatButton().
    observar que não tenho 'this', pois NÃO estou acessando NADA dentro da classe!! */
    return new Button1(text, background, color, tag).append();
  }
}

// const newButton1 = new Button1('Comprar', 'blue', 'white');
// // console.log(newButton1.text);
// // console.log(newButton1.element());
// newButton1.append('body');

const staticButton = Button1.createButton('Clicar', 'yellow', 'black ');
console.log(staticButton);

//
//
class Button7 {
  constructor(target, text, background) {
    this.text = text;
    this.background = background;
    this.target = target;
    // console.log(target);
    // console.log(text);
    // console.log(background);
  }
  element() {
    const elementButton2 = document.createElement('button');
    elementButton2.innerText = this.text;
    elementButton2.style.background = this.background;
    const targetElement = document.querySelector(this.target);
    console.log(targetElement);
    targetElement.appendChild(elementButton2);

    return elementButton2;
  }
  static createBlue(target, text, background = 'blue') {
    return new Button7(target, text, background).element();
  }
  static createGreen(target, text, background = 'green') {
    return new Button7(target, text, background).element();
  }
}

const blueButton7 = Button7.createBlue('body', 'Comprar');
const blueButton9 = Button7.createGreen('body', 'Comprar');
