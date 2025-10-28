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

// Class (ES6)

class Button1 {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
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
  append(tag) {
    const targetElement = document.querySelector(tag);
    targetElement.appendChild(this.element());
    return targetElement;
  }

  static createButton(text, target, background) {
    const elementButton = document.createElement('button');
    const targetElement = document.querySelector(target);
    elementButton.innerText = text;
    elementButton.style.background = background;

    targetElement.appendChild(elementButton);
    /* o parâmetro 'text' faz referência apenas text do argum de creatButton().
    observar que não tenho 'this', pois NÃO estou acessando NADA dentro da classe!! */
    return elementButton;
  }
}

const newButton1 = new Button1('Comprar', 'blue', 'white');
// console.log(newButton1.text);
// console.log(newButton1.element());
newButton1.append('body');

const staticButton = Button1.createButton('Clicar', 'body', 'red');
console.log(staticButton);
