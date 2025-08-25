/*
-----------------------------------
09 - Navegação por TABS
----------------------------------- 
Relaciona uma lista de ítens 01(ítens navegáveis == imagens) com outra lista de ítens 02 (geralmente, conteúdo)

Essa relação se dá 1/1 --> cada imagem está relacionada ao seu conteúdo, em uma sequência correlacionada de arrays

*/

export default function initTabNavegation() {
  const actived = 'actived';

  const sections = Array.from(
    document.querySelectorAll('.animalsDescription section'),
  );
  // console.log(sections);

  sections.forEach((item, i) => {
    const place = sections.length - i;
    // console.log(place);
    place % 2 == 0
      ? (item.dataset.anime = 'show-right')
      : (item.dataset.anime = 'show-down');
  });
  // Estou add os dataset--> show-right e show-down as sections de .animalsDescription, de acordo com a posição da section --> par ou ímpar ao entrar no site

  const tabMenu = document.querySelectorAll("[data-tab='menu'] li"); //imagens
  // console.log(tabMenu);

  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  // console.log(tabContent);

  // Array - Like;

  /*
  Verificação 
  --------------- 
  
  Para que não ocorra erros se o script estiver ativo em outra página do mesmo site */

  if (tabMenu.length === tabContent.length) {
    /* OBS.: Cada index do addEventListener deve corresponder ao index do tabContent -->
    Eles devem estar escritos em ordem que correspondam um ao outro no codigo HTML --> para manter a mesma correspondência!! */

    tabContent[0].classList.add(actived);
    // manter class='ativo' na posicao [0] ao iniciar o site via JS DOM --> ao iniciar o site, ja renderiza a primeira description da section[0]

    /* Função Principal:
    -----------------------------------
    
    Add a classe 'ativo' na section específica(relacionada a imagem cliclável) e 
    também remover das demais sections a mesma classe 'ativo' */

    function activeTab(index) {
      tabContent.forEach((section) => section.classList.remove(actived));
      // remove todos as section com a classe 'actived' --> vai deixar apenas aquela onde cliquei ativa

      // console.log(tabContent[index].dataset.anime);
      const position = tabContent[index].dataset.anime;
      // console.log(position);

      tabContent[index].classList.add(actived, position);
      // recebe 2 classes == active + o dataset correspondente a section (de acordo com 'sections' acima)
    }

    /* Adicionar o Evento de click
    ----------------------------------- 
    levando o index do click a function activeTab: */

    tabMenu.forEach((img, index) => {
      img.addEventListener('click', () => activeTab(index));
      // add um evento a cada img
    });
  }

  /* VERIFICAÇÕES
  
  1) Estou fazendo essa verificação aqui com IF; caso false --> estou em outra pagina e todo o cadigo nao funciona
  
  2) Caso o JS esteja desabilitado no Browser -->
  O estilo '.js-tabContent section' estará habilitados com === display: none --> não teremos texto!!
    Devo colocar uma classe em <html> e editar as com '.js-tabContent no CSS'
  */
}
