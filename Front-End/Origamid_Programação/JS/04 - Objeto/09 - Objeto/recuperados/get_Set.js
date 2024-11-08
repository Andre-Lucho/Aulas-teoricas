/*
Get e Set (Objetos)
-----------------------------------

Podemos definir comportamentos diferentes de get e set para um método. 

IMPORTANTE:
-----------
Os métodos GET e SET são acessados como se fossem propriedades!! */

const button = {
  get elemento() {
    return this._element; //tb posso setar || (ou) → se this_element == undefined, o metodo get recebe o valor setado em (ou) ||.
  },
  set elemento(tipo) {
    this._element = document.createElement(tipo);
  },
};
button.element = "button"; // set
// console.log(button.element); // get (<button></button>);

/*

Valor estático
-----------------------------------

Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.

const matematica = {
get PI() {
return 3.14;
}
}
matematica.PI; // get (3.14)
matematica.PI = 20; // nada acontece 

'Get'serve APENAS para recuperar o valores setado com 'set' */

/*

Set
-----------------------------------

Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto. */

const frutas = {
  lista: [],
  set add(fruta) {
    this.lista.push(fruta);
  },
};

frutas.add = "Banana";
frutas.add = "Morango";
frutas.lista; // ['Banana', Morango];

/*

Class
-----------------------------------

Assim como em um objeto, as classes podem ter métodos de GET e SET também,
POIS CLASSES RETORNAM OBJETOS (funções construtoras)! */

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
}
const blueButton = new Button("Comprar", "blue");
// console.log(blueButton.element); // retorna o elemento

// OBS → Como setamos o método GET para essa classe, a mesma fica inacessível para modificações em seu método 'element()'!

/*

Set e Class
-----------------------------------

Com o set podemos modificar apenas parte do elemento de get. 
É comum definirmos variáveis privadas , utilizando o underscore _privada. */

class Button2 {
  constructor(text) {
    this.text = text;
  }
  get element() {
    const elementType = this._elementType || "button";
    const buttonElement = document.createElement(elementType);
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
    // Como estou setando um this aqui, ele fica acessível na Objeto(Classe) Button2
  }
}

const blueButton2 = new Button2("Comprar");
blueButton.element; // retorna o elemento
