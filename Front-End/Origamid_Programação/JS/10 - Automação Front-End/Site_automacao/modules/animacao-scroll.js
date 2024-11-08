/*
-----------------------------------
12 - Animação ao Scroll 
----------------------------------- 
Render da página enquanto ativamos o scroll do mouse(ao descer/subir a página) 

*/

export default function initScrollAnimt() {
  const actived = "actived";

  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.5;
    // console.log(halfWindow);

    function scrollAnimt() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        // console.log(sectionTop);
        // pega a distância que a tag com a classe "[data-anime='scroll]"está do topo do site
        const isSectionVisible = sectionTop - halfWindow < 0; //true or false
        // console.log(isSectionVisible);

        // Fazer verificação ao scrollar:
        if (isSectionVisible) {
          section.classList.add(actived);
        } else if (section.classList.contains(actived)) {
          section.classList.remove(actived);
        }
        // scrolar p baixo, passando o elemento com a class "[data-anime='scroll]"
      });
    }

    scrollAnimt();
    // para que a 1° section já esteje renderizada ao entra no site...senao, so iria renderizar ao mexer no scroll

    window.addEventListener("scroll", scrollAnimt);
  }
}
