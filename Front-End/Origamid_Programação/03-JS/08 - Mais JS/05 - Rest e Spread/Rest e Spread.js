/*

Parâmetros
------------------------------------------------------

Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. 
Por isso é, importante nos prepararmos para caso estes argumentos não sejam declarados. */

function perimetroForma(lado, totalLados) {
  return lado * totalLados;
}
perimetroForma(10, 4); // 40
perimetroForma(10); // NaN

/*

Parâmetro Padrão (Default) ES5
------------------------------------------------------

Antes do ES6 a forma de definirmos um valor padrão para um parâmetro, era através de uma expressão. */

function perimetroForma1(lado, totalLados) {
  totalLados = totalLados || 2; // || = ou --> se não for definido, será igual à 2
  return lado * totalLados;
}
perimetroForma1(10, 3); // 30
perimetroForma1(10); // 20

/*

Parâmetro Padrão (Default) ES6+
------------------------------------------------------

Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução. */

function perimetroForma2(lado, totalLados = 4) {
  return lado * totalLados;
}
perimetroForma2(10, 5); // 50
perimetroForma2(10); // 40

/* Lembrando == Podemos passar qualquer valor nos argumentos, definindo-os como padrão
ex. Objeto, Callback... */

/*

Arguments --> retorna um Objeto tipo Array-like
------------------------------------------------------

A palavra chave 'arguments' é um objeto Array-like criado dentro da função. 
Esse objeto contém os valores dos argumentos. 

OBS: arguments NÃO retorna o valor padrão definido no argumento!!
*/

function perimetroForma3(lado, totalLados = 2) {
  // console.log(arguments);
  const arrgArray = Array.from(arguments); // Array real dos argumentos passados

  arrgArray.forEach((value) => {
    console.log(value);
  });

  return lado * totalLados;
}
// console.log(perimetroForma3(10, 5)); // 20

/*
Parâmetro Rest ("resto")--> retorna um Array
------------------------------------------------------


É possível declararmos uma parâmetro utilizando '...' na frente do mesmo. 
Assim, todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro. 
Os argumentos retornados através do Rest são uma ARRAY REAL, com todos as propriedades e métodos de um Array!
*/

function ganhador(...arg) {
  // console.log(arg);
  const retorno = arg.map((elem) => elem);
  return `${retorno[0]}, ${retorno[1]} e ${retorno[2]} ganharam`;
}

console.log(ganhador('Pedro', 'Marta', 'Maria'));

/*

Único Rest
------------------------------------------------------

Só é possível ter um único parâmetro Rest e ELE DEVE SER O ÚLTIMO! 
Os demais que são setados na frente, são argumentos normais, FORA DO REST*/

function anunciar(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    // console.log(ganhador + " ganhou um " + premio);
  });
}
anunciar('Carro', 'Pedro', 'Marta', 'Maria');

// premio = Carro
// ...ganhadores = ["Pedro", "Marta", "Maria"]

/*

Rest vs Arguments
------------------------------------------------------

Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. 
Sendo Rest = uma Array real 
e arguments = um objeto Array-like, com todos os argumentos passados, incluíndo aqueles fora do Rest!!!*/

function anunciarGanhadores(premio, ...ganhadores) {
  // console.log(arguments);
  // console.log(ganhadores);
}

anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

// o prêmio será sempre o mesmo
// os ganhadores, posso continuar passando...

/*

Operador Spread("espalhar")
------------------------------------------------------

Assim como o Rest, o operador Spread também utiliza os '...' para ser ativado.
O spread irá distribuir um ITEM ITERÁVEL, um por um --> faz referência a uma variável contendo uma Array.
Rest faz referência aos parâmetros passados (ou a se passar ) que serão argumentos da função 

OBS: Não utilizamos o Spread como parâmetro. */

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];
const comidas = [...frutas, 'Pizza', ...legumes];
// console.log(comidas);

/* O que é diferente de:
--------------------------------- */

const comidas2 = [[frutas, legumes]]; // Array frutas na posição 0 + Array legumes na posição 1 --> Arrays dentro de outra Array
// console.log(comidas2);

// Abaixo, temos uma concatenação de Arrays utilizando o Spread:

const frutas1 = ['Banana', 'Uva', 'Morango'];
const comidas1 = ['Pizza', 'Batata'];

comidas1.push(...frutas1);
// console.log(comidas1);

/*

Spread + Argument (Rest)
------------------------------------------------------

O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array. */

const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5); // 33
const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);
// console.log(numeroMaximoSpread);

function anunciar2(premio, ...ganhadores) {
  // ...ganhadores = Rest --> está recebendo a Array com cada um dos nomes do Spread

  ganhadores.forEach((ganhador) => {
    console.log(ganhador + ' ganhou um ' + premio);
  });
}
// com Spread:

const ganhadores = ['Pedro', 'Marta', 'Maria'];

anunciar2('Carro', ...ganhadores);
// ...ganhadores = Spread --> está distribuindo os nomes

/*

OBS:
--------
1. 
Se utilizar (sem Spred) e (sem Rest) --> a função receberá a Array inteira e o argumento simples 'ganhadores' será a Array  ["Pedro", "Marta", "Maria"], que , então será distribuida pelo forEach --> resultado igual com Rest e Spread */

const nomes = ['Pedro', 'Marta', 'Maria'];

function anunciar3(premio, ganhadores) {
  // ganhadores.forEach((nome) => console.log(nome + " ganhou um " + premio));
}
anunciar3('Carro', nomes);

/*
2.
se deixar o Rest apenas como parâmetro (sem Spread), a função receberá como argumento um único elemento como argumento na posição 0 (ou seja, a Array inteira na posição 0) --> teremos: // Pedro, Marta, Maria ganhou um Carro */

const nomes2 = ['Pedro', 'Marta', 'Maria'];

function anunciar4(premio, ...ganhadores) {
  // ganhadores.forEach((nome) => console.log(nome + " ganhou um " + premio));
}

anunciar4('Carro', nomes2);

/*
3. 
se deixar o Spread apenas como parâmetro (sem Rest), a função receberá como argumento um único elemento de cada vez (SPREAD DISTRIBUI OS ITENS, UM A UM), e não poderá fazer a iteração, dando Erro!!
Como só tenho 'ganhadores' (sem '...' ), isso significa também que a função está esperando 1 único argumento! */

const nomes3 = ['Pedro', 'Marta', 'Maria'];

function anunciar5(premio, ganhadores) {
  // ganhadores.forEach((nome) => console.log(nome + " ganhou um " + premio));
}
anunciar5('Carro', ...nomes3);

/*
Transformar em Array
------------------------------------------------------

É possível transformar itens iteráveis em uma array real com o spread. */

const btns = document.querySelectorAll('button');
const btnsArray = [...btns]; // ou const btnsArray = Array.from(btns)
// console.log(btnsArray);

// ainda:
// const btns = [...document.querySelectorAll('button')];

[...btns].map((tag) => console.log(tag));

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
// console.log(fraseArray);

/*
Clonando um objeto com Spread
------------------------------------------------------

É possível clonar um objeto-pai com o spread, mantendo o original inalterável. */

const carro = {
  marca: 'Fiat',
  modelo: 'Punto',
  ano: 2000,
  portas: 5,
};

const cloneCarro = { ...carro, turbo: true };

console.log(cloneCarro);

// Diferente de:
const cloneCarro2 = carro; //qquer alteração em carro ou cloneCarro2 afetará um e outro!!

/*

Exercícios
------------------------------------------------------

1 Reescreva a função utilizando valores iniciais de parâmetros com ES6 */

// function createButton(background, color) {
//   background = background || "blue";
//   if (color === undefined) {
//     color = "red";
// tambem:
// color = color || 'red';

//   }
//   const buttonElement = document.createElement("button");
//   buttonElement.style.background = background;
//   return buttonElement;
// }
// const redButton = createButton();

function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;

  return buttonElement;
}

const redButton = createButton('white');
// console.log(redButton);

// Utilize o método push para inserir as frutas ao final de comidas.

const frutas2 = ['Banana', 'Uva', 'Morango'];
const comidas3 = ['Pizza', 'Batata'];

comidas1.push(...frutas2);
// console.log(comidas1);
