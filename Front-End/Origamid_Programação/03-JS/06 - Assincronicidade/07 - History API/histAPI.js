/*

History
-----------------------------------

É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history . 
O objeto history possui diferentes métodos e propriedades. */

// console.log(window.history);

// console.log(window.history);
// window.history.back(); // vai para a anterior
// window.history.forward(); // vai para a próxima

/*

pushState()
-----------------------------------

A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item.*/

/* window.history.pushState(obj, title, url)

Em obj podemos enviar um objeto com dados mas o seu uso é restrito (em torno de 600kb de dados); por isso geralmente utilizamos null. 
O title ainda é ignorado por alguns browsers, também utilizamos null nele. 
O url que é parte importante. */

// window.history.pushState(null, null, "sobre.html");

// muda o final da url para /teste.html -- sem alterar a página
// Porém, qd damos um 'refresh' na janela, o brower tenta acessar .../teste.html

/*

popstate
-----------------------------------

O evento popstate pode ser adicionado ao objeto window.
Seu comportamento é observar o avanço ou retorno de páginas no histórico do browser( geralmente qd usuário clica nas setas) 

Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo. */

// window.addEventListener("popstate", () => {
//   console.log("testando");
//   // fetchPage(window.location.pathname);
// });

/*

Fetch e History
-----------------------------------

Ao puxarmos dados via fetch api, o url da página continua o mesmo. 
Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma. */

// async function fetchPage(url) {
//   const pageReponse = await fetch(url);
//   const pageText = await pageReponse.text();
//   window.history.pushState(null, null, url);
// }

/*
Exemplo de como alterar o contéudo de um site por outro (local ou externo), utilizando o histórico do Browser(history API) SEM haver CARREGAMENTO da página (navegação + fluida ): 
*/

const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href); //function - tem como (arg) a url do evento onde estou clicando
  window.history.pushState(null, null, event.target.href);
  // só será executado apos a função async! --> alterando para o endereço correto ser exibido
}

async function fetchPage(url) {
  document.querySelector(".content").innerHTML = "Carregando...";
  // Para conexões + lentas, esse texto (ou um icone de loading) pode aparecer para dizer ao usuário que o site está carregando "Carregando..." aparece e já é substituido pelo fetch abaixo
  // --> o texto
  const pageRespText = await (await fetch(url)).text();
  // console.log(pageRespText);
  replaceContent(pageRespText); // argumento aqui é a pagina html em texto (link) em que estou clicando
}

function replaceContent(pageText) {
  const newHtml = document.createElement("div");
  newHtml.innerHTML = pageText;
  // console.log(newHtml);
  const oldContent = document.querySelector(".content");
  // console.log(oldContent);
  const newContent = newHtml.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML;
  // trocando o conteúdo do '.content' antigo pelo novo que está na 'div'

  document.title = newHtml.querySelector("title").innerText;
  // alterando o title do <head> --> aba
}

window.addEventListener("popstate", () => {
  // console.log(window.location);
  fetchPage(window.location.href);
  // console.log("action");
});
// acima: fazendo com q o evento 'popstate' observe a ação nos botões 'avançar' e  'retroceder' do browser e ATIVE a função fetchPage( pois a função handleClick está somente sobre os links!!)

links.forEach((link) => link.addEventListener("click", handleClick));
