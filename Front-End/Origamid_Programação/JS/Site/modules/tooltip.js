/* 
Tooltip é um informação extra que o usuário pode obter ao passar o mouse por cima de algo.
**Para browsers Desktop --> em função dos eventos de mouse e não de touch

 */

export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]"); // #1
  // console.log(tooltips);
  //All == para quando eu tiver +1 tooltip no documento

  /*

    Callback function onMouseOver (qd passa o mouse por cima do mapa)  (#3):
  */

  function onMouseOver(event) {
    const tooltipBox = tooltipBoxCreate(this); //#4
    //console.log(this); // this == element == <div> dentro da sessão 'Contato', onde tenho o 'aria-label', onde o mouse está passando, conforme o evento01 (#2)!
    tooltipBox.style.top = event.pageY + "px";
    tooltipBox.style.left = event.pageX + "px";
    // console.log(tooltips);
    /* adicionando style direto via DOM como propriedades de tooltipBox:
    pegando os valores de onde o mouse passa em cima do mapa (em relação à página) e setando + 'px',  pois ele retorna apenas o numero inteiro */

    /*

    Atribuindo propriedades ao objeto 'onMouseLeave' == para que fique acessível FORA da função 'onMouseOver':
    */

    onMouseLeave.tooltipBox = tooltipBox; //#6
    // o objeto onMouseLeave está recebendo na prorpiedade 'tooltipBox' o valor tooltipBox acima (ao acionar a função 'onMouseOver')
    onMouseLeave.element = this; //#7
    // o objeto onMouseLeave está recebendo na prorpiedade 'element' o this dessa função.

    /* 

    Evento 02 - saída do mouse (#5):
    */

    this.addEventListener("mouseleave", onMouseLeave);
    /* Novo Evento: passando um objeto como callback*** (ver Objetos Callback)
    necessita do método handleEvent() */

    /*
 
    Atribuindo propriedades ao objeto 'onMouseMove == para que fique acessível FORA da função 'onMouseOver':
    */

    onMouseMove.tooltipBox = tooltipBox; //#9

    /*

    Evento 03 - movimentação do mouse (#8):
    */

    this.addEventListener("mousemove", onMouseMove);
  }

  /*

    Evento 01 (#2):
  */

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
    // console.log(item); <div> dentro da sessão contato, onde tenho o 'aria-label', pois é o único [data-tooltip] que tenho no momento
  });

  /*

  Criação do ToolTip (#4):
 */

  function tooltipBoxCreate(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const text = element.getAttribute("aria-label");
    // element == elemento no qual eu estou passando o mouse --> é invocada no 'Callback function onMouseOver' == aqui, a <div> dentro da sessão contato, onde tenho o 'aria-label'
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox); // append ao final do document
    // console.log(tooltipBox);
    return tooltipBox;
  }

  /*

  Objetos Callback (#6):
  poderia ser uma função dentro da function principal 'onMouseOver'; porém, com o método 'handleEvent()', posso passar como Callback de um evento, um Objeto --> assim fica + organizado o código
  */

  const onMouseLeave = {
    // tooltipBox: "" está recebendo da funct 'onMouseOver'
    // element: "", está recebendo da funct 'onMouseOver'
    // acima: são opcionais, pois as propriedades já foram atribuídas nas ln 29 e 31.

    handleEvent() {
      this.tooltipBox.remove();
      // console.log(this);
      /*this está fazendo referência ao 'tooltipBox' do obj 'onMouseLeave', pois handleEvent é um método de 'onMouseLeave' ; tooltipBox está disponível aqui, mas é originário de 'onMouseOver' ln 29
      ; remove(): que por sua vez, método de  linkado a func 'onMouseOver' == ou seja, está removendo o Evento #1 */

      // console.log(this.element); // this.element está fazendo referência a 'element' === 'this' da <div> dentro da sessão 'Contato' --> função original == item

      // para remover os eventos que ficam armazenados no brower a todo passar de mouse, utilizo eventos do tipo 'removeEventListener' abaixo:
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
      // um vez que ele é ativado, é também removido
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      // console.log(this); //toolipBox
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
    // atualizando o posicionamento do mouse dentro do map.
    // + 20 --> p não ficar bem abaixo do mouse e dar conflito, como se o evento de 'leave' já aconteceu
  };
}
