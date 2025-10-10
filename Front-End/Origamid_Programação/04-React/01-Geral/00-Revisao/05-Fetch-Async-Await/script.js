/* Fetch
-------------------------------------------------------
Envia requisições assíncronas para o servidor. 
Serve para acessarmos/escrevermos dados em apis externas. */

const corpoHtml = document.querySelector('.json');

const req = fetch('https://ranekapi.origamid.dev/json/api/produto')
  // assincrona --> retorna uma Promise
  .then((response) => response.json())
  // função callback apos receber toda a resposta do fetch = tranf. Json em texto
  // também assincrona e retorna outra Promise
  .then((jsonBody) => {
    corpoHtml.innerHTML = jsonBody[6].nome;
    console.log(jsonBody);
  });

const data = {
  id: 'andre2',
  nome: 'André',
  email: 'algo2@algo.com',
  senha: '123456',
  cep: '90900000',
  rua: 'Somewhere',
  numero: '123 ',
  bairro: 'Somewhere',
  cidade: 'Porto',
  estado: 'RS',
};

fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST', // envia dados
  headers: {
    'Content-Type': 'application/json',
  }, //cabeçario
  body: JSON.stringify(data),
  // tipo de dado à enviar == string
});

/* 

Async-Await
-------------------------------------------------------
Fetch retorna uma promisse. 
É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código. 

Serve para Métodos de Objetos também*/

async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

// 1.
const req2 = fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
console.log(req2);

// aqui, estou solicitando o console antes de obter a resposta assincrona de 'fetchProdutos()'

// 2.
const req3 = await fetchProdutos(
  'https://ranekapi.origamid.dev/json/api/produto',
);
console.log(req3);

// agora, o console.log aguarda de forma assíncrona a resposta de 'fetchProdutos()'

/*
2.1
req2.then((jsonBody) => {
  console.log(jsonBody);
});

mesma forma que acima, porém com o .then().

*/
