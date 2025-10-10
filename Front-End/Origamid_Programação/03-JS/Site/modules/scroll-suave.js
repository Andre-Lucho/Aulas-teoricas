/*
-----------------------------------
11 - Scroll Suave Link Interno 
----------------------------------- 
Scroll suave nas opções do section 'Nav' com o seu conteúdo correspondente
*/

export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll(
    "[data-menu='smooth'] a[href^='#']"
  );

  // preciso linkar os links internos com os id's das sections
  // href=# --> id correspondente
  //
  function scrollToSection(e) {
    e.preventDefault();
    // evitar o comport padrão === 'pulo' p/ a seção
    const linkHref = this.getAttribute("href"); // ex. #animais == seletor CSS
    // console.log(linkHref);
    // pegando o atributo href correspondente a cada click (href = '#linkcorrespondente'  === id correspondente)

    const section = document.querySelector(linkHref);
    // console.log(section);
    // apontando p o id da seção que eu clicar e onde ele deve scrollar!

    /*

    FORMA 01 => MÉTODO  --> Element.scrollIntoView()
    passa um objeto como parametro
    ----------------------------------- */
    section.scrollIntoView({
      behavior: "smooth",
    });

    /*

    FORMA 02 => MÉTODO --> window.scrollTo()
    ----------------------------------- */

    // const scroll = section.offsetTop;
    // console.log(scroll);
    // pegando a distâncio do link até o topo da section clicada

    // window.scrollTo({
    //   top: scroll,
    //   // scrolando até a distância da section selecionada
    //   behavior: "smooth",
    //   // suave
    // });
  }

  internalLinks.forEach((link) =>
    link.addEventListener("click", scrollToSection)
  );
}
