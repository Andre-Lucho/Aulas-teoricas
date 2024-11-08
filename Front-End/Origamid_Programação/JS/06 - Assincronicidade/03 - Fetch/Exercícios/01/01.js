/*
Exercícios
-----------------

Utilizando a API https://viacep.com.br/ws/${CEP}/json/, crie um formulário onde o usuário pode digitar o cep, e o endereço completo é retornado ao clicar em buscar */

const button = document.querySelector(".button");
const div = document.querySelector(".adress-return");

function getCep() {
  const cep = document.querySelector(".cep");
  const userCep = cep.value;
  sendCep(userCep);
}

// function sendCep(userCep) {
//   const viaCepSent = fetch(`https://viacep.com.br/ws/${userCep}/json/`);
//   const cepObject = {};
//   viaCepSent.then((r) => {
//     // console.log(r)
//     r.json().then((body) => {
//       // console.log(body));
//       cepObject.rua = body.logradouro;
//       cepObject.bairro = body.bairro;
//       cepObject.cidade = body.localidade;
//     });
//   });
//   const cepText = JSON.stringify(cepObject);
//   console.log(cepText);
//   return cepText;
// }

button.addEventListener("click", getCep);

// // Corrigida:

function sendCep(userCep) {
  const viaCepSent = fetch(`https://viacep.com.br/ws/${userCep}/json/`);
  viaCepSent.then((r) => {
    // console.log(r)
    r.json().then((body) => {
      const cepObject = {}; // declarando o obj aqui*
      console.log(body);
      cepObject.rua = body.logradouro;
      cepObject.bairro = body.bairro;
      cepObject.cidade = body.localidade;
      const cepText = JSON.stringify(cepObject);
      console.log(cepText);
      div.innerText = cepText; // 3 ults linhas aqui*
    });
  });
}

// Outra tentativa de retornar cepObject:

// function sendCep(userCep) {
//   const viaCepSent = fetch(`https://viacep.com.br/ws/${userCep}/json/`);
//   viaCepSent.then((r) => {
//     // console.log(r)
//     r.json().then((body) => {
//       const cepObject = {};
//       console.log(body);
//       cepObject.rua = body.logradouro;
//       cepObject.bairro = body.bairro;
//       cepObject.cidade = body.localidade;
//       return cepObject;
//     });
//     return cepObject;
//   });
//   const cepText = JSON.stringify(cepObject);
//   console.log(cepText);
//   div.innerText = cepText;
// }

/* 

O problema com o código fornecido está na natureza assíncrona da função fetch() quando ela espera ser síncrona. A função then() é usada para lidar com promessas, que são uma forma de lidar com operações assíncronas em JavaScript. 
No entanto, a função then() é chamada após a conclusão da execução da função
Call Stack == 
const cepText = JSON.stringify(cepObject);
//   console.log(cepText);
//   div.innerText = cepText;

Task Queue == o restante que é resolvido por fetch()!!


, portanto, o cepObject não é retornado da função sendCep().

Para resolver esse problema, você pode usar a sintaxe async/await junto com o objeto Promise, o que torna o código assíncrono mais fácil de escrever e raciocinar. 
Aqui está o código revisado com as alterações sugeridas: */

// const button = document.querySelector(".button");
// const div = document.querySelector(".adress-return");

// async function handleCep() {
//   const cep = document.querySelector(".cep");
//   const userCep = cep.value;

//   try {
//     const response = await fetch(`https://viacep.com.br/ws/${userCep}/json/`);
//     const body = await response.json();
//     const cepObject = {
//       rua: body.logradouro,
//       bairro: body.bairro,
//       cidade: body.localidade,
//     };
//     const cepText = JSON.stringify(cepObject);
//     div.innerText = cepText;
//     return cepObject;
//   } catch (error) {
//     console.error("Error fetching CEP: ", error);
//   }
// }

// button.addEventListener("click", handleCep);

/* 
A palavra-chave async antes da função getCep() a define como uma função assíncrona, e a palavra-chave await é usada antes da função fetch() para pausar a execução da função até que a resposta seja recebida. Ao retornar await fetch(...), o controle retorna ao código de chamada e aguarda a resolução da promessa, garantindo que o cepObject esteja acessível no escopo pai quando a função for chamada.
*/
