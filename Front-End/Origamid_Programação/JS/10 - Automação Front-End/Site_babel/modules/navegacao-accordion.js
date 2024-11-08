/*
-----------------------------------
10 - Tipo de Navegação Accordion
----------------------------------- 
Nos Faqs ==> some/ aparecem as respostas

*/

export default function initAccordionList() {
  const actived = "actived";
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  // console.log(accordionList);

  if (accordionList.length) {
    // Verifica se eu tenho uma lista de elementos

    accordionList[0].classList.add(actived);
    accordionList[0].nextElementSibling.classList.add(actived);
    // a 1°Faq dt e dd ficam ativas ao carregar a página por padrão

    function activeAccordion() {
      this.classList.toggle(actived);
      this.nextElementSibling.classList.toggle(actived);
      // add class activeClass no dt e dt que estou clicando
      // toggle --> se está ativo === tira; se não === add
    }

    accordionList.forEach((item) =>
      item.addEventListener("click", activeAccordion)
    );
  }
}
