import outsideClick from "./outsideClick.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const events = ["touchstart", "click"];
  // evento tipo 'click' demora 300ms nos mobiles

  dropdownMenus.forEach((menu) => {
    events.forEach(
      (userEvent) => menu.addEventListener(userEvent, handleClick)

      // userEvent --> relacionado aos eventos de touch e click
    );
  });

  // utilizei 2 eventos para o mesmo forEach em dropdownMenus
  // touchstart é para mobile

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("actived");
    // this --> menu = para cada submenu (handleclick é uma funçao callback de menu.addEventListener(userEvent, handleClick))

    // função ativada --> quero q funcione com esses parâmentros abaixo:

    outsideClick(this, events, () => {
      this.classList.remove("actived");
      /* this => html --> document.documentElement --> qd clico FORA do MENU
        console.log('ativou');
        toda vez que o handleClick for ativado, outsideClick(função) será ativado
        arquivo --> outsideClick.js*/
    });
  }
}
