/* 
Observador(Observer) = MutationObserver
---------------------------------------

==> Função Construtora
necessita de 1 argumento --> Callback

Sempre que em algum elemento DOM tivermos uma mutação (alteração), ou seja, 1 dos seus atributos tiver sido alterado, um EVENTO atrelado esse observador ocorrerá */

/* função CallBack do Observer 
  -----------------------------------  */

function handleMutation(mutation) {
  console.log(mutation);
  console.log(mutation[0].target);
  /* [MutationRecord]--> semelhante event --> 
  é um array-like contento todos os eventos onde o Observer observou que ocorreu uma mutação
  retona um objeto tipo Array-Like [MutationRecord] com várias propriedades e métodos.
  
  mutation em seu Prototype tem propriedades e métodos de Array
  */

  if (mutation[0].target.classList.contains("actived")) {
    numbersAnimation();
    const a = observer.disconnect();
  }
}

const observerTarget = document.querySelector(".numbers");
// apontando p onde meu observador deve observar Node do DOM

const observer = new MutationObserver(handleMutation);

// observer.observe(observerTarget, { attributes: true });
// ou

const config = {
  attributes: true,
};
observer.observe(observerTarget, config);

// o observador está ativo, apontando para a classe '.numbers'; e tem como configuração observar se haverá alguma alteração nos atributos {attributes: true} desse nó do DOM

/* 

a Mutação ocorre de acordo com o scrool da página add() ou remove() da classe 'activedClass':

arq animacao-scroll.js ---> initScrollAnimt() --> scrollAnimt() --> 

if (isSectionVisible) { 
section.classList.add(activedClass);
} else {
section.classList.remove(activedClass); } 

*/
