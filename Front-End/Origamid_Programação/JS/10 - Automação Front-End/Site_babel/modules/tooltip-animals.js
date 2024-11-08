export default function initTooltipAnimals() {
  const tooltipAnimals = document.querySelectorAll(
    "[data-tooltip-animals] li img"
  );
  // Não pode apontar para "li", pois o aria-label está em 'img'!!

  function onMouseOver(event) {
    const tooltipBox = tooltipBoxCreate(this);
    // console.log(this); // this faz relação ao evento do onMouseOver -- apontado em  'tooltipAnimals'
    // tooltipBox aqui está recebendo o retorno da função 'tooltipBoxCreate'
    tooltipBox.style.top = event.pageY + "px";
    tooltipBox.style.left = event.pageX + "px";
    // console.log(tooltipBox);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this; // == lista de img's

    // evento #2
    this.addEventListener("mouseleave", onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;

    // // evento #3
    this.addEventListener("mousemove", onMouseMove);
  }

  // evento #1
  tooltipAnimals.forEach((img) => {
    img.addEventListener("mouseover", onMouseOver);
  });

  function tooltipBoxCreate(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tootipAnimals");
    const text = element.getAttribute("aria-label");
    // console.log(text);
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
    // estou retornando cada nova 'div' criada aqui (com todos os seus elementos)
  }

  const onMouseLeave = {
    // tooltipBox: tooltipBox,
    // element: this,
    handleEvent() {
      this.tooltipBox.remove(); //estou removendo dinamicamente o tooltipBox == div criada
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    // tooltipBox: tooltipBox,
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 18 + "px";
    },
  };
}
