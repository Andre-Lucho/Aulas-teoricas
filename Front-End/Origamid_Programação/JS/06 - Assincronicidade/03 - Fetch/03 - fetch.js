/*

Fetch API -
-----------------------------------
API(Interface de Aplicação que se pode interagir através de comandos ou códigos)
Fetch API - se encontra integrada ao browser

O fetch faz uma requisição HTTP/HTTPS (como se estivesse acessando um site).
Como é uma requisição http, devemos fazê-la através de um servidor!
Se você iniciar um site local diretamente pelo index.html, sem um servidor local,
o fetch não irá funcionar.

Fecth é um tipo de Promise  --> então, retorna a resolução de uma Promise.
** Então, podemos utilizar o método .then() para interagirmos com a resposta de fetch() --> não sabemos em qt tempo fecth irá resolver seus arquivos(está no servidor)

* O resultado da Promise Fetch é um OBJETO tipo 'Response' */

const doc = fetch('./dados/doc.txt');
console.log(doc); // Fecth é uma Promise --> PormiseResult= Response
// // doc.txt será carregado (de forma assíncrona) enquanto o restante do script é executado

doc.then((response) => console.log(response));
// response é um OBJETO--> Possui métodos e propriedades --> aqui, RESPONSE NÃO É + uma Promisse!!

/*

Response
-----------------------------------
O objeto Response, possui um corpo (body) com o conteúdo da resposta.
Esse corpo pode ser transformado utilizando métodos do protótipo do OBJETO Response.
Estes RETORNAM outras promises.

Podemos, então, utilizar o 'THEN' para interagirmos com a resposta, que é um Objeto do tipo Response */

// const doc2 = doc
//   .then((response) => {
//     return response.text(); // valor do método 'text()' --> é o texto em doc.txt --> o resultado aqui é uma Promisse; então, posso usar .then() novamente
//   })
//   .then((body) => console.log(body));

// forma resumida:
// const doc2 = doc.then((response) =>
//   response.text().then((body) => console.log(body))
// );

/*
Body
-----------------------------------
Propriedade do Objeto Response utilizada como Argumento de um próximo 'then' 
Serve para se podermos 'trabalhar' com o retorno da 'then' anterior--> 

*Fiz a requisição assíncrona fetch - transformei em texto - e, com o body, estou recebendo esse texto e acessando o seu contéudo! */

const doc3 = doc.then((response) =>
  response.text().then((body) => {
    const div = document.querySelector('.conteudo');
    div.innerText = body;
    // faço o que quiser com os nós do DOM
  }),
);

/* 
OBS IMPORTANTE --> 
Os métodos e propriedades Response só pode ser utilizadas 1x!!
Vamos seu status na propriedade de Response == bodyUsed - true | false */

/*

json() - (JavaScript Object Notation)
-----------------------------------

Um tipo de formato de dados muito utilizado com JavaScript é o JSON , pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto JS.
.json() transforma um corpo json ==> em um objeto JavaScript. */

const cep = fetch('https://viacep.com.br/ws/90470450/json/'); //retorno em json

cep.then((r) =>
  r
    .json() // aqui, transformando em objeto JS
    .then((body) => {
      console.log(body); // cep é um objeto JS com as info do 'viacep'
      const conteudo = document.querySelector('.cep');
      conteudo.innerHTML = `<br>${body.cep}</br> ${body.logradouro} - ${body.bairro} - ${body.uf}</br> ${body.localidade}`;
    }),
);

/*

text()
-----------------------------------

Podemos utilizar o .text() para diferentes formatos como:
txt, json, html, css, js e mais. */

const style = fetch('./style.css')
  .then((r) => r.text())
  .then((body) => {
    // console.log(body);
    const classLocal = document.querySelector('.style');
    const cssCode = document.createElement('style');
    // console.log(cssCode);
    classLocal.innerText = body;
    // append o texto de style.css no html
    cssCode.innerText = body;
    document.body.appendChild(cssCode);
    // append o estilo CSS ao documento
  });

/*

HTML e .text()
-----------------------------------

Podemos pegar um arquivo inteiro em HTML EXTERNO, transformar o corpo em texto e inserir em uma div com o innerHTML no meu projeto (no meu arquivo index.html)
A partir dai, podemos manipular esses dados como um DOM qualquer. */

const div = document.createElement('div');

const sobre = fetch('./dados/sobre.html')
  .then((r) => r.text())
  .then((body) => {
    // console.log(body);
    div.innerHTML = body;
    // console.log(div); // div recebeu o próprio HTML
    const titulo = div.querySelector('h1'); // como div é o nosso document, então selecionamos a h1 desse document em div
    // console.log(titulo);
    const p = div.querySelector('p');
    // console.log(p);
    document.body.appendChild(titulo);
    document.body.appendChild(p);
  });

/*

.blob()
-----------------------------------

Um blob é um tipo de objeto utilizado para representação de dados de um arquivo.
O blob pode ser utilizado para transformarmos requisições de imagens por exemplo.
O blob gera um URL único. */

// Fazendo uma requisição de uma imagem via Fecth (através do método Blob)

const imagem = fetch('./dados/imagem04.jpg');
imagem
  .then((r) => r.blob())
  .then((body) => {
    // console.log(body);
    const blobUrl = URL.createObjectURL(body);
    // createObjectURL --> Método de URL == cria uma Url única para a imagem o corpo(body) contido na imagem do fetch
    // console.log(blobUrl);
    const img = document.querySelector('.img');
    img.alt = 'img04';
    img.src = blobUrl;
    // console.log(img);
  });

/*

.clone()
--------------------------

Ao utilizarmos os métodos acima, text, json e blob, a resposta (corpo) é modificada.
Uma vez modificada, não posso passar outro método novamente em response(já que ele JÁ foi modificado)
Por isso, existe o método clone, caso você necessite transformar uma resposta em DIFERENTES VALORES --> OU SEJA, utilizar o response + DE UMA VEZ! */

// forma resumida:
// const doc2 = doc.then((response) =>
//   response.text().then((body) => console.log(body))
// );

const viacep = fetch('https://viacep.com.br/ws/90470450/json/');
//   .then((r) => r.text())
//   .then((body) => {
//     console.log(body); // bodyUsed: true --> já tranformei a info do corpo(body) de viacep em text
//   });

// // ex2.: (mudança da posição das '{}' ):
const viacep2 = fetch('https://viacep.com.br/ws/01001000/json/');

viacep2.then((r) => {
  const r2 = r.clone();
  r.json().then((json) => {
    //aqui, utilizando diretamente o response - json em OBJ
    // console.log(json);
  });
  //
  r2.text().then((text) => {
    // aqui, utilizando o CLONE de response - monstrando o texto JSON retornado de viacep2
    // console.log(text);
  });
});

/*IMPORTANTE:
---------------------
Ver SEMPRE onde estão as chaves que fecham o método!!
Lembrar que .then() retorna um OBJETO Tipo Response da Promise, então deve estar ENCADEADO!! */

/*

.headers (Construtor)
-----------------------------------

É uma propriedade que possui os CABEÇALHOS da requisição fetch.
É um tipo de dado iterável (através de seu protótipo);
então, podemos utilizar o forEach para vermos cada um deles. */

// viacep.then((r) => {
//   r.headers.forEach(console.log);
//   // ver abaixo essa forma de iteração ArrayforEach():
// });

// const array = ["item01", "item02"];

// // array.forEach((item) => console.log(item));
// // Outra Forma:
// // array.forEach(console.log);

/*

.status, .ok , .url
-----------------------------------
# r.status -->Retorna o status da requisição.
Se foi 404, 200, 202 e mais.

# r.ok --> retorna um valor booleano sendo:
true para uma requisição de sucesso e false para uma sem sucesso. */

// viacep.then((r) => {
//   // console.log(r.status, r.ok, r.url);
//   if (r.status === 404) {
//     console.log("Página não encontrada");
//   }
// });

/*

.url e .type
-----------------------------------
# .url --> retorna o url de onde estou fazendo a requisição fetch
# .type --> retorna o tipo da reposta.*/

// viacep.then((r) => {
//   console.log(r.type, r.url);
// });

/*
types:
----------
basic: feito na mesma origem (Servidor local)
cors: feito em url body pode estar disponível = (Em um Servidor Externo e Permitida)
error: erro de conexão
opaque: no-cors, não permite acesso de outros sites = (Em um Servidor Externo e Não-Permitida) */
