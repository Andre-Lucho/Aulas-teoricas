class SmoothScroll {
  constructor(links, menu) {
    this.linkElements = document.querySelectorAll(links);
    this.menuElement = document.querySelector(menu);

    // Bind linka o this relacionado a classe SmoothScroll,
    // permanentemente ao handleClick
    this.handleClick = this.handleClick.bind(this);
    this.addClickEvent();
  }
  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: 'smooth',
    });
  }
  addClickEvent() {
    this.linkElements.forEach((link) =>
      link.addEventListener('click', this.handleClick),
    );
  }
}

class ActiveSmoothScroll extends SmoothScroll {
  constructor(links, menu, sections) {
    // O super vai ativar o construtor da classe-pai
    super(links, menu);
    this.sectionElements = document.querySelectorAll(sections);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScroll();
    this.activeNavScroll();
  }
  handleScroll() {
    this.sectionElements.forEach((section, i) => {
      if (window.scrollY > section.offsetTop - window.innerHeight * 0.5) {
        this.linkElements[i].classList.add('active'); // add active apenas no index (i) === ao link relativo ao passar o scrol
      } else {
        this.linkElements[i].classList.remove('active');
      }
    });
  }
  activeNavScroll() {
    window.addEventListener('scroll', this.handleScroll);
  }
}

const scroll = new ActiveSmoothScroll("a[href^='#']", '.menu', 'section');

/* 
    offsetTop = distância da section até o topo
    innerHeight = altura interna total da janela do browser
    clientHeight = altura do item (section)
    
    scrollY = qt de scroll no eixo Y já teve a página

    section.offsetTop - (window.innerHeight - section.clientHeight) / 2 = centralizando na janela o movimento do scroll 
    */
