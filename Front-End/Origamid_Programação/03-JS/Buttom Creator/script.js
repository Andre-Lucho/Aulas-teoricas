const controls = document.querySelector("#controls");
const cssCode = document.querySelector(".css");
const btn = document.querySelector(".btn");

function handleChange(event) {
  // console.log(event);
  const name = event.target.name;
  const value = event.target.value;
  // console.log(name, value);
  handleStyle[name](value); // ativando um método de objeto == ver abaixo:
  saveLocalStorage(name, value);
  showCssCode();
}

controls.addEventListener("change", handleChange);

/*
handleStyle.height(2); 
assim, estaria ativando o método .height e passando um argumento = 2
---> mesma forma escrita dentro de 'handleChange'
lembrando que objeto[algo] == objeto.algo, porém [] é de forma dinâmica (em tempo de execução) */

const handleStyle = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
};

function showCssCode() {
  const text = cssCode.innerText;
  // console.log(text);
  // cssCode.innerHTML = text + " " + btn.style.cssText;
  // melhorando:
  cssCode.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

function saveLocalStorage(name, value) {
  // localStorage --> objeto window
  localStorage[name] = value;
}

function setValues() {
  const propriedadesCSS = Object.keys(localStorage);
  // pegando todas as keys(chaves, propriedades) do objeto 'localStorage'
  // console.log(propriedadesCSS);

  propriedadesCSS.forEach((elementoForm) => {
    // console.log(controls.elements[propertie]);
    // array com os elementos do Form 'controls' == inputs e select
    handleStyle[elementoForm](localStorage[elementoForm]);
    // ativando o método 'handleStyle' na posição de elementoForm(em cada um dos elementos de Form) com o argumentos que estão no localStorage(para cada elemento do form)
    controls.elements[elementoForm].value = localStorage[elementoForm];
    // o valor que corresponde a posição 'elementoForm' recebem os valores de localStorage(para cada elemento do form).
  });
  showCssCode();
}

setValues();
