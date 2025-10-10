export default function outsideClick(element, events, callback) {
  // parâmetro callback = função
  const html = document.documentElement;
  const dataOutside = "data-outside";

  if (!element.hasAttribute(dataOutside)) {
    events.forEach((userEvents) => {
      setTimeout(() => html.addEventListener(userEvents, handleOutsideClick));
      // colocando html.addEventListener em setTimeout --> fica na espera e não será acionado ao mesmo tempo com a função Outsideclick do dropdown-menu.js e do menu-mobile.js --> é acionado APÓS o bubble
      // events --> cada evento DOM = click, touchstart
    });
    // html --> FASE Bubble
    element.setAttribute(dataOutside, "");
  }
  /* Verificando se já foi add ao element (a tag <li> do menu) o data-outside;
  se não, ele adiciona o evento de click ao html
  Tudo isso para add APENAS 1 EVENTO de Click ao HTML --> não acumular eventos quando clico
  
  */

  // função declarada;

  function handleOutsideClick(event) {
    // função aqui dentro--> pois quero q ela seje ativada somente qd ativarmos outsideClick()
    if (!element.contains(event.target)) {
      /* *Verificando se estou clicando fora do conjunto Menu + Sub-menu */
      callback();
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, handleOutsideClick);
      });
      element.removeAttribute(dataOutside);
      /* callback aqui é uma função que funciona como parâmetro da função outsideClick
      qd a função outsideClick é executada pela 1° vez(em handleClick - arq dropdown-menu), ao receber o parâmetro na FASE BUBBLE, ele executará callback (this.classList.remove("actived")); */
    }
  }
}
