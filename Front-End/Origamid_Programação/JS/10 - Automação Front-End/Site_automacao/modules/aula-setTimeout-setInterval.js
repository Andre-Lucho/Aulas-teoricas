export default function aula() {
  /*
setTimeout()
-----------------------------------

setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo . 
Não existe garantia de que o código será executado exatamente após o tempo, pois o
callback entra na fila e espera pela Call Stack estar vazia.

arg1, arg2 = argumentos da Callback

Métodos assíncronos entram numa Callback Queue(fila) e só são executados após todos os demais métodos da Call Stack serem executados primeiramente.

*/

  // console.log("Testando a Call Stack");

  function espera(texto) {
    console.log(texto);
  }

  // setTimeout(espera, 1500, "Depois de 1500ms");

  /*
Imediato

Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. 
Podemos passar uma função anônima/arrow function  diretamente com argumento. */

  // setTimeout(() => {
  //   console.log("Após 0ms");
  // });

  /*

Exemplos de setTimeOut
-----------------------------------
-----------------------------------

Loops e setTimeout
-----------------------------------

Um loop é executado rapidamente, em milissegundos. 

Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. 
Um evento de setTimeout não espera o tempo do anterior acabar para iniciar. 
Apenas, o loop entrará na Callback Queue(fila) e, após a execução da Call Stack, TODO O LOOP SERÁ EXECUTADO DE UM SÓ VEZ*/

  // for (let i = 0; i < 20; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 300);
}

// Nesse script, temos apenas 1 console.log e demais setTimeOuts. Esses serão executados conforme seu tempo de espera!
// todos os SetTimeout`s terão o mesmo tempo == 300ms! executados ao mesmo tempo!!

// Aqui, 300 é menor que 1000 e 2000
/*

  Corrigindo o Loop
-----------------

Agora, ele está multiplicando o tempo por i. 
Assim, o primeiro aparecerá em 0ms, o segundo em 300ms, o terceiro em 600ms e assim em diante. */

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i);
// }

// Aqui, até 900ms é menor que os demais (posição 4)!!

/*

This e Window
--------------

setTimeout é um método do objeto Window. 
O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window.

// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);
// function handleClick(event) {
//   window.setTimeout(function () {
//     this.classList.add("active");
//   }, 1000);
// }

// Erro --> THIS aqui faz referência a 'window'. window.classList não existe!
Consertamos isso utilizando uma Arrow Function na CallBack do setTimeout

*/

/*

Arrow Function
--------------
Quando utilizamos uma Arrow Function como callback, o contexto de THIS passa a ser do local onde o setTimeout foi iniciado. */

const btn2 = document.querySelector("button");

// btn2.addEventListener("click", handleClick2);

// this agora é btn2:

// function handleClick2(event) {
//   setTimeout(() => {
//     this.classList.add("testando_active");
//   }, 1000);
// }

/*
setInterval
-----------------------------------

setInterval(callback, tempo, arg1, arg2, ...) , irá ativar o callback TODA VEZ que a quantidade de tempo passar. 
Como se fosse um setTimeOut em loop de tantos segundos

OBS.:
É Como no exemplo do 'corrigindo o loop', qd os setTimeouts era todos executados ao mesmo tempo(colocados na Callback Queue), porém, como o tempo era multiplicado, o efeito (console.log) só era visto em intervalos diferentes

*/

function loop(texto) {
  console.log(texto);
}
// setInterval(loop, 1000, "Passou 1s");
// // loop a cada segundo

// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

// OBS2.:
// Como é um loop, ele precisa de uma finalização, senão irá ser executado indefinidamente!

/*

clearInterval
-------------
clearInterval(var) , podemos parar um intervalo com o clearInterval. 
Para isso precisamos atribuir o setInterval a uma variável. */

// const contarAte10 = setInterval(callback, 1000);
// let i2 = 0;
// function callback() {
//   console.log(i2++);
//   if (i2 > 10) {
//     clearInterval(contarAte10);
//   }
// }

/*

Exercícios
1) Mude a cor da tela para azul e depois para vermelho a cada 2s. */

// const screencolor = document.querySelector("body");
// console.log(screencolor);

// setInterval(() => {
//   screencolor.classList.toggle("actived");
// }, 2000);

// ou

// setInterval(() => {
//   document.body.classList.toggle("actived");
// }, 2000);

/* 
2) Crie um cronômetro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar). */

/*
const iniciar = document.querySelector(".init");
const pausar = document.querySelector(".pause");
const tempo = document.querySelector(".time");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

let i = 0;
let timer = "";

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerHTML = i++ + " segundos";
  }, 1000);
  // clicar +1x addciona + funções setInterval( e o cronômetro corre mais rápido)
  iniciar.setAttribute("disabled", "");
  // desativa o btn
}
function pausarTempo() {
  clearInterval(timer);
  // pausa apenas o último setInterval, caso pressione o btn +1x
  iniciar.removeAttribute("disabled");
  // agora, permite que eu tenha apenas 1 função setInterval ativa!!
}
function resetarTempo() {
  tempo.innerHTML = 0 + " segundos";
  i = 0;
}

*/
