export default function initModal() {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (openButton && closeButton && containerModal) {
    /* verificando se existe um modal na página --> se as 'var' que apontam p o modal existem

  IMPORTANTE--> caso contrário, iriamos ter conflito com o JS (retorna 'undefined' e não renderiza a página) */

    // function modalOpen(e) {
    //   e.preventDefault();
    //   containerModal.classList.add("ativo");
    // }

    // function modalclose(e) {
    //e.preventDefault();
    //   containerModal.classList.remove("ativo");
    // }

    // substituindo as 2 primeiras pela toggle abaixo:

    function modalToggle(e) {
      e.preventDefault(); //para não seguir o link p fora da página
      containerModal.classList.toggle("ativo");
    }

    //função para o modal 'fechar' ao clicar fora da sua janela
    function modalClickOff(e) {
      // console.log(this);

      /* modalclose(e);
      assim, estará removendo a classe 'ativo' em qquer lugar onde eu clicar --> lembrar que o modal (na classe ativo) cobre toda a janela do site
      
      console.log(e.target);
      o target deve ser apenas a Section === THIS; não as demais tags do modal */

      if (e.target === this) modalToggle(e);
      // this aponta para a tag 'section' --> a página inteira (o modal foi definido p ocupar a tela inteira qd ativo)
      // então, se eu estiver clicando fora da tag 'Div', que corresponde ao modal propriamente dito, a func 'modalToggle()' será ativada
    }

    openButton.addEventListener("click", modalToggle);
    closeButton.addEventListener("click", modalToggle);
    containerModal.addEventListener("click", modalClickOff);
  }
}
