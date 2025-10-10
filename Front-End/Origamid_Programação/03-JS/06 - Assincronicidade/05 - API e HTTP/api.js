/*

API
-----------------------------------

Application --> Interação através de comandos
-----------

Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos. 
Ao digitar uma URL, estamos utilizando a API do browser para se comunicar com a API do servidor.

Programming
-----------

Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos. 
O resultado esperado é geralmente o mesmo.

Interface --> métodos
-----------

A interface são os comandos criados para permitir a interação com a aplicação. 
Ex: 'VIOLAO'.toLowerCase() é um método que faz parte da interface do objeto String. 
A interação com a interface retorna um efeito / resposta. */

/*
Exemplos de API's
-----------------------------------

GitHub
-----------

https://api.github.com/users/origamid --> obtemos uma resposta (arquivo JSON) através da requisição feita nessa API(url)
https://api.github.com/users/origamid/followers

Array / Element
-----------

[].map(); // [] --> API tipo Array
[].fillter();
Element.classList; // Element --> API tipo Objeto
Element.attributes;


https://www.metaweather.com/api/location/455825/ - tempo


** !!
https://github.com/toddmotto/public-apis  -- Lista de API`s publicas */

/*

HTTP
-----------------------------------

Hypertext Transfer Protocol é o protocolo utilizando para enviarmos/recebermos arquivos e dados na Web.*/

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((r) => r.json())
  .then((pokemon) => {
    // console.log(pokemon);
  });

/*

url e method
-----------------------------------

Uma requisição HTTP é feita através de uma URL. 
O método padrão (Fetch) é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.*/

const url = "https://jsonplaceholder.typicode.com/posts/ ";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"aula": "JavaScipt Assíncrono"}',
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
  });
// id pré-configurado na API vai até 100; acima, temos o 101

/* OBS:
----------
// O 2° argumento de fetch é um objeto ---- acima, estou declarando esse objeto fora da fetch == (organização) */

/*

method
-----------------------------------

GET
-----------
Puxa informação, utilizado para pegar posts, usuários e etc.

POST
-----------
Utilizado para criar posts, usuários e etc.

PUT
-----------
Geralmente utilizado para ATUALIZAR informações existentes.

DELETE
-----------
Deleta uma informação.

HEAD
-----------
Puxa apenas os headers */

/*

GET
-----------------------------------

GET irá puxar as informações da URL. Não é necessário informar
que o método é GET, pois este é o padrão. */

// fetch(url, {
//   method: "GET",
// })
//   .then((r) => r.json())
//   .then((r) => console.log(r));

/*

POST
-----------------------------------

POST irá criar uma nova postagem, utilizando o tipo de conteúdo
especificado no headers e utilizando o conteúdo do body. */

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: '{"titulo": "JavaScript"}',
// }).then((r) => r.json());
// // .then((r) => console.log(r));

/*

PUT
-----------------------------------

PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body. */

// fetch(url, {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: '{"titulo": "JavaScript"}',
// }).then((r) => r.json());
// .then((r) => console.log(r));

/*

HEAD
-----------------------------------

HEAD puxa apenas os headers. É uma requisição MAIS LEVE, pois não puxa o body. */

fetch(url, {
  method: "HEAD",
}).then((response) => {
  // response.headers.forEach(console.log);
  // console.log(response.headers.get("Content-Type"));
});
/*


/*

Headers
-----------------------------------
Forma de o Servidor mandar informação para o Browser e vice-versa.

Cache-Control
-----------
Tempo que o arquivo deve ficar em cache em segundos. Ex: public, max-age=3600

Content-Type
-----------
Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo de arquivo
principalmente em métodos POST e PUT.

Lista de Headers
-----------
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers */

/*

/*

CORS
-----------------------------------

Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferente origens.

É definido no servidor local se é permitido ou não o acesso dos recursos através de scripts por outros sites. 
Utilizamos o Access-ControlAllow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. 
É possível passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor.
Ele serve para dar certa proteção ao browser, mas não é inviolável.
Pode ser 'quebrada' através de um proxy, ou plugins intalados ou no browser ou no servidor.

Abaixo, segue exemplos:
1. de tentativa negada pelo CORS do browers e
2. através de um proxy
*/

/* 1 */
// const urlGoogle = fetch("http://www.google.com");

// urlGoogle.then((r) => r.text()).then((data) => console.log(data));

//Access to fetch at 'https://www.google.com/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// Política CORS do Chrome! === Segurança para o PC local

/* 2  */
const div = document.createElement("div");
fetch("https://corsanywhere.herokuapp.com/https://www.google.com/")
  .then((r) => r.text())
  .then((r) => {
    div.innerHTML = r;
    console.log(div);
  });

// Fonte do proxy acima:
// https://github.com/Rob--W/cors-anywhere
