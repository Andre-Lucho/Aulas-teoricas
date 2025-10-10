// 1) Destructuring
// --------------------------------------------------------

// function handleMove(event) {
//   const { clientX, clientY } = event;
//   console.log(clientX, clientY);
// }

// function handleMove({ clientX, clientY }) {
//   const a = clientX;
//   console.log(a);
// console.log(clientX, clientY);
// }

// document.documentElement.addEventListener('mousemove', handleMove);

const frutas = ['Banana', 'Uva', 'Maçã', 'Pera', 'Laranja'];

const fruta00 = frutas[0];
// console.log(fruta00); // Banana

// ou

const [fruta0, fruta1, fruta2] = frutas;
// console.log(fruta2); // Maçã

// ---------------------------------------------------------
// ---------------------------------------------------------

// 2) Rest e Spread

// 2.1) Rest (...)--> pegando o restante
// --------------------------------------------------------

function mostrarLista(cliente, ...telefones) {
  console.log(cliente); // string
  console.log(telefones); // Array, com os elementos que eu passar como argumento
}

// mostrarLista('André', 51999174390, 11999174390, 'eu');

// 2.2) Spread --> espalhando (iteração)
// --------------------------------------------------------

const numeros = [1, 22, 13, 4, 54];

// console.log(Math.max(...numeros)); // 54
// Esta espalhando os elementos que tenho dentro da array 'numeros'

const lista = document.querySelectorAll('li');
// console.log(lista); // Nodelist

// lista.forEach((item) => console.log(item));

// --------------------------------------------------------
// Tranformando NodeList em Array
// --------------------------------------------------------

// a)
const lista1 = Array.from(lista);
// console.log(lista1);

// b)
const lista2 = [...lista].map((item) => item);
// console.log(lista2);
// espalhando const 'lista' e tranformando ela em array, sem perder a Nodelist

// console.log(lista); // Nodelist

// 2.2.1) Clonando Objetos
// --------------------------------------------------------

const carro = {
  cor: 'Azul',
  portas: '4',
  ano: 2020,
};

const cloneCarro = { ...carro, marca: 'clio' };
// console.log(cloneCarro); // clone do Objeto carro, com sua alteração
// console.log(carro); // objeto carro original

// Diferente de
const cloneCarro2 = carro; // toda a alteração em cloneCarro2 ou carro afatará um e o outro!

// 2.2.2) Shallow clone
// --------------------------------------------------------

class Transporte {
  constructor() {
    this.terrestre = true;
  }
  funcionar() {
    console.log('Está funcionando');
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const carro2 = new Carro('Azul', 4);
console.log(carro2);

// Aqui, tenho como protótipo a class Transporte, COM acesso às suas propriedades e métodos

const carro3 = { ...carro2 };
console.log(carro3);

// Aqui, tenho como protótipo o Objeto da geral da linguaguem, SEM acesso às suas propriedades e métodos da class 'Transporte'
