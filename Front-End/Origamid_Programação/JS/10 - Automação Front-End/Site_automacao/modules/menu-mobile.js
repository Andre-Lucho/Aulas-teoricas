import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["touchstart", "click"];

  if (menuBtn) {
    function openMenu(event) {
      menuBtn.classList.add("actived");
      menuList.classList.add("actived");
      outsideClick(menuList, events, () => {
        menuBtn.classList.remove("actived");
        menuList.classList.remove("actived");
        /* 
      o callback está sendo executado ao mesmo tempo que os classList.add
      então, ele add e remove
      pois o menuList está no 'lado de fora' e atende a condição presente na função outsideClick (handleOutsideClick)
      
      ** IMPORTANTE:
        é necessário a adição de um setTimeOut na 'função-Pai' outsideClick, pois o elemento 'menuList' já se encontra do lado de fora no código html, 
        diferentemente da estrutura html da função 'handleClick' em dropdown-menu.js, o que já faz atender a condição (if) da função callback de 'handleOutsideClick' em outsideClick.js.

      Também poderia utlizar aqui o 'this'no lugar de menuList. Assim, evitaria a condição (if)em 'handleOutsideClick' em outsideClick.js
      */
      });
    }

    events.forEach((userEvent) =>
      menuBtn.addEventListener(userEvent, openMenu)
    );
  }
}
