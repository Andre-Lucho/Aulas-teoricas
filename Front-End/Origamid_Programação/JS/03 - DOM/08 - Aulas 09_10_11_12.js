/*
-----------------------------------
09 - Navegação por TABS
----------------------------------- 
*/

const activedClass = "actived";

function TabNavegation() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");

  const tabContent = document.querySelectorAll(".js_tabContent section");
  // Array - Like;

  if (tabMenu.length === tabContent.length) {
    // OBS.: Cada index do addEventListener deve copr responder ao index do tabContent -->
    // Eles devem estar escritos em ordem que correspondam um ao outro no codigo HTML -->

    tabContent[0].classList.add(activedClass);
    // manter class='ativo' na posicao [0] ao iniciar o site via JS DOM --> ao iniciar o site, ja renderiza a primeira description da section[0]

    function activeTab(index) {
      tabContent.forEach((section) => section.classList.remove(activedClass));
      tabContent[index].classList.add(activedClass);
    }

    tabMenu.forEach((img, index) => {
      img.addEventListener("click", () =>
        // PQ NAO PASSAR A FUNCAO JA COM ARG INDEX? ESTAREI ATIVANDO ELA NO CALLBACK --> ERRO
        activeTab(index)
      );
    });
  }

  /* VERIFICAÇÕES
  
  1) Estou fazendo essa verificação aqui com IF; caso false --> estou em outra pagina e todo o cadigo nao funciona
  
  2) Caso o JS esteja desabilitado no Browser -->
  O estilo '.js-tabContent section' estará habilitados = display: block == náo teremos texto!!
  
  Devo colocar uma classe em <html> e editar as c/ '.js-tabContent'
  */
}

/*
-----------------------------------
10 - Tipo de Navegação Accordion
----------------------------------- 
*/

function AccordionList() {
  const accordionList = document.querySelectorAll(".js_Accordion dt");

  if (accordionList.length) {
    // Verifica se eu tenho uma lista de elementos

    accordionList[0].classList.add(activedClass);
    accordionList[0].nextElementSibling.classList.add(activedClass);

    function activeAccordion() {
      this.classList.toggle(activedClass);
      this.nextElementSibling.classList.toggle(activedClass);
    }

    accordionList.forEach((item) =>
      item.addEventListener("click", activeAccordion)
    );
  }
}

/*
-----------------------------------
11 - Scroll Suave Link Interno 
----------------------------------- 
*/

function smoothScroll() {
  const internalLinks = document.querySelectorAll(".js_menu a[href^='#']");

  // preciso linkar os links internos com os id's das sections
  // href=# --> id correspondente
  //
  function scrollToScetion(e) {
    e.preventDefault();
    const linkHref = this.getAttribute("href");
    // href=# === id correspondente

    const section = document.querySelector(linkHref);
    // apontando p o id da seção que eu clicar

    /*
    FORMA 01 => MÉTODO  --> Element.scrollIntoView()
    passa um objeto como parametro
    ----------------------------------- */
    section.scrollIntoView({ behavior: "smooth" });

    /*
    FORMA 02 => MÉTODO --> window.scrollTo()
    ----------------------------------- */

    // const scroll = section.offsetTop;
    // pegando a distâncio do link até o topo da section clicada

    // window.scrollTo({
    //   top: scroll,
    //   // scrolando ate a distancia da section selecionada
    //   behavior: "smooth",
    //   // suave
    // });
  }

  internalLinks.forEach((link) =>
    link.addEventListener("click", scrollToScetion)
  );
}

/*
-----------------------------------
12 - Animação ao Scroll 
----------------------------------- 
*/

function initScrollAnimt() {
  const sections = document.querySelectorAll(".js_Scroll");
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;
    // console.log(halfWindow);

    function scrollAnimt() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        // console.log(sectionTop);
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add(activedClass);
        } else {
          section.classList.remove(activedClass);
        }
        // scrolar p baixo, passando o elemento com a class '.js_Scroll'
      });
    }

    scrollAnimt();
    // para que a 1° section já esteje renderizada ao entra no site...senao, so iria renderizar ao mexer no scroll

    addEventListener("scroll", scrollAnimt);
  }
}

TabNavegation();
AccordionList();
smoothScroll();
initScrollAnimt();
