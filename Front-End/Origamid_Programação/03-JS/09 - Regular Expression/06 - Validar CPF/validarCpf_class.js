export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  formatar(cpf) {
    const cpfFormatado = this.limpar(cpf);
    return this.construir(cpfFormatado);
  }

  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[.-\s]?){3}\d{2}/g);

    return matchCpf && matchCpf[0] === cpf;
    // Verificação: temos um IF oculto --> se o matchCpf for true --> tiver 9 dígitos, seguidos de 2 digitos == true e vai para a segunda verificação
    //2 verificacao --> match retorna uma array-- se essa array formatada for igual a fornecida( ou seja, se o usuário digitou corretamente a qt de digitos e não digitos a mais de 11) == t rue
  }

  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      // se o valor digitado for validado, tenho true
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.add("valido");
      cpfElement.classList.remove("erro");
      cpfElement.nextElementSibling.classList.remove("ativar");
    } else {
      cpfElement.classList.add("erro");
      cpfElement.classList.remove("valido");
      cpfElement.nextElementSibling.classList.add("ativar");
    }
  }

  adicionarEvento() {
    this.element.addEventListener("change", () => {
      this.validarNaMudanca(this.element);
    });
    // se utilizar aqui uma função anônina simples( function(){}), o callback dessa função estará fazerndo referência ao input apontado pelo querySelector e não ao This == class ValidarCPF!! (ver o que a construção da classe está recebendo como argumento em 'new'!)
    // Devo usar Arrow function, pois não consigo fazer nenhuma referência a class ValidarCpf!
  }

  adicionarErroSpan() {
    const erroElement = document.createElement("span");
    erroElement.classList.add("erro-cpf");
    erroElement.innerText = "CPF Inválido";
    // console.log(this.element.parentElement);
    this.element.parentElement.insertBefore(
      erroElement,
      this.element.nextElementSibling
    );
  }

  /* insertBefore(o que será inserido; local)
  //podemos fazer de outras formas tb -- como apontar p o elemento via querySelector :
  const label = document.querySelector(".a");
  console.log(label.previousElementSibling.appendChild(erroElement));
  span aparece no console mas não no document??  
  via script para não precisar criar uma tag <span> que podera não ser utilizada qd reaproveitarmos a Classe ValidarCpf */

  init() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this; //devo sempre retornar a prórpia classe para que adicionarEvento() e demais métodos possam receber seus argumentos(que são provenientes da classe!)
  }
}

/*
Obs. Pq mudo os nomes dos argumentos recebidos pelos método??
acredito que apenas p sinalizar diferentes etapas dentro da classe --- pois, na realidade, essa classe recebe o mesmo 'input' com id="cpf" da página!! */
