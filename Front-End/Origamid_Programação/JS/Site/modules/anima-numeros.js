export default function initNumbersAnim() {
  function numbersAnimation() {
    const numbers = document.querySelectorAll("[data-number]");
    // console.log(numbers);

    numbers.forEach((number) => {
      const innerNumber = +number.innerText; //pegando o numero (string) e transf em 'number'
      const incremento = Math.floor(innerNumber / 100);

      let start = 0;
      const timer = setInterval(() => {
        /* start++  aqui, somaria de 1 em 1 unidade = mto lento*/
        // start = start + incremento; ou
        start += incremento;
        /* para ACELERAR a contagem e deixar o crescimento dos números + harmonico entre eles */
        number.innerText = start;
        if (start > innerNumber) {
          number.innerText = innerNumber;
          /* pois, o arredondamento acaba gerando numeros com virgulas que, quando do .floor = aumentam  p/ + o numero final (número arredondado fica > que o da tag) */
          clearInterval(timer);
        }
      }, 15);
      /* posso colocar aqui = 15 * Math.random() => a cada refresh do site, terei a velocidade de crescimento dos números de forma aleatória
      console.log(innerNumber); */
    });
  }

  /* Sempre que em algum elemento DOM tivermos uma mutação, ou seja, 1 dos seus atributos tiver sido alterado, um EVENTO atrelado esse observador ocorrerá
  
  Observador(Observer) = new MutationObserver == função Construtora necessita de 1 argumento --> Callback */

  /* função CallBack do Observer 
  -----------------------------------  */

  function handleMutation(mutation) {
    // console.log(mutation);
    // console.log(mutation[0].target);
    /* [MutationRecord]--> semelhante event -->
    é um array-like contento todos os eventos onde o Observer observou que ocorreu uma mutação
    retona um objeto tipo Array-Like [MutationRecord] com várias propriedades e métodos.

    mutation em seu Prototype tem propriedades e métodos de Array
    */

    if (mutation[0].target.classList.contains("actived")) {
      numbersAnimation();
      // essa função será ativada!!

      const a = observer.disconnect();
      // observer deixa de ser ativo!
    }
    // else if (mutation[0].target.classList.contains("not_actived")) {
    //   start = 0;
    // }
  }

  const observerTarget = document.querySelector(".numbers");
  // apontando p onde meu observador deve observar no DOM

  const observer = new MutationObserver(handleMutation);
  // // console.log(observer);

  // // observer.observe(observerTarget, { attributes: true });
  // // ou

  const config = {
    attributes: true,
  };

  observer.observe(observerTarget, config);
  /* o observador está ativo, apontando para a classe '.numbers'; está observando se haverá alguma alteração nos atributos desse nó do DOM */

  /* a Mutação ocorre de acordo com o SCROLL da página add() ou remove() da classe da vairável = 'activedClass':

// arq animacao-scroll.js ---> initScrollAnimt() --> scrollAnimt() --> :

if (isSectionVisible) { 
  section.classList.add(activedClass);
} else {
  section.classList.remove(activedClass); } 


  fizemos essa alteração abaixo--> para quer a mutação NÃO acuse mudança de atributo tanto qd class=actived estiver ativa ou qd estiver inativa

if (isSectionVisible) {
  section.classList.add(actived);
} else if (section.classList.contains(actived)) {
  section.classList.remove(actived);
}


  */
}
