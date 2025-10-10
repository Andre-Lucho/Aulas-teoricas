/*
Classes
--------------------------------------------------------
Serve p dividirmos o código em pequenas partes ou funções (através de propriedades e métodos) que em seu conjunto realizam ações específicas
*/

// constructor --> componente principal - é ativado qd declaramos a classe
// this --> faz referência a prórpia classe (ou objeto)

class SmoothScroll {
  constructor(links) {
    this.linkElemets = document.querySelectorAll(links);
    this.addClickEvent(); // já está sendo ativado no momento da declaração da classe
  }
  handleClick(e) {
    // console.log(this);
    e.preventDefault(); //previnir a ação do scrolar-padrão do navegador('rápido/seco')
    const href = e.currentTarget.getAttribute('href'); // pegando a referência 'href' de cada botão clicado
    const section = document.querySelector(href); // selecionando as seções(tags) relacionadas a cada botão
    // console.log(section.offsetTop); // definindo a distância da tag ('const section') até o topo da página
    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      // a distância da section até o topo - (total da janela do navegador - o tamanho do elemento 'section') == o que sobre da parte de baixo entre o elemento e o elemento de baixo /2
      behavior: 'smooth',
    });
  }
  addClickEvent() {
    this.linkElemets.forEach((link) => {
      // console.log(this);
      link.addEventListener('click', this.handleClick);
    });
  }
}

class ActiveSmothScroll extends SmoothScroll {
  constructor(links, section) {
    super(links);
    this.sectionElements = document.querySelectorAll(section);
    this.handleScroll = this.handleScroll.bind(this); // this.handleScroll fixa o this da classe e não do seu escopo
    this.linkElemets[0].classList.add('active'); // opção 2: ativar 1x a função this.handleScroll()
    this.activeNavScroll();
  }

  handleScroll() {
    // console.log(this);
    this.sectionElements.forEach((section, i) => {
      if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.4) {
        // window.pageYOffset --> qt já temos scrolada a página
        this.linkElemets[i].classList.add('active');
      } else {
        this.linkElemets[i].classList.remove('active');
      }
    });
  }

  activeNavScroll() {
    window.addEventListener('scroll', this.handleScroll);
  }
}

/* a. estende a classe (recebe todos os seus métodos e propriedades), adicionando novas funcionalidades
(para caso queira reaproveitar a classe em outra parte do projeto)
b. super() --> chama o constructor da classe-pai --> 
preciso passar os argumentos da classe-pai dentro dele e, no constructor da classe estendida, passar todos!

*/

const scroll = new ActiveSmothScroll('a[href^="#"]', 'section');
// passando como arg --> tags a que contém o atributo href e inicia(^) por '#' --> pegando somente os links internos da Nav e não todos os 'a's
