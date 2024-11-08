/*
async / await --> ES8
-----------------------------------
A palavra chave 'async' indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. 
O await irá indicar a Promise que devemos esperar --> deverá ir SOMENTE nas linhas de código que retornam Promises == ESPERE ESSA PROMISE INDICADA OCORRER

OBS.:
-----------------------------------
1)Serve p/ qd temos mtos dados em um servidor... então, a função assíncrona espera carregar todos esses dados, para depois continuar a executar

2) MESMA Função de .then()
*/

async function puxarDados() {
  const dadosResponse = fetch("./dados.json");

  const dadosResponse1 = await fetch("./dados.json");
  // A Callstack Para(break) nesse ponto, aguardando a função fetch ser totalmente resolvida,RETORNANDO SEU RESULTADO!! ==> RESPONSE
  // Isso pq n sei o tamanho e tempo de retorno do arquivo fetch solicitado p poder trabalhar com o body do response!!

  // o restante do algoritmo CONTINUA a ser executado!

  // console.log(dadosResponse); // retorna a promessa
  // console.log(dadosResponse1); // retorna a resposta da promessa (response = já resolvida!)

  const dadosJSON = await dadosResponse1.json();
  // console.log(dadosJSON); // == resultado de response.json()

  //   //A função continua a ser executada abaixo:
  // document.body.innerText = dadosJSON[0].aula;

  dadosJSON.forEach((aula) => {
    document.body.innerText = aula.aula;
  });
}
// puxarDados();

/* 
IMPORTANTE!!
----------------
Ver o por quê do erro e resolução do Exercício 1 na pasta 03 - Fetch/Exercícios/01 */

/*

then / async
-----------------------------------

A diferença é uma sintaxe mais limpa. 
Mesma função abaixo, com as 2 escritas diferentes */

// function iniciarFetch() {
//   fetch("./dados.json")
//     .then((dadosResponse) => dadosResponse.json())
//     .then((dadosJSON) => {
//       console.log(dadosJSON);
//       document.body.innerText = dadosJSON[0].aula;
//     });
// }

// iniciarFetch();

// async function iniciarAsync() {
//   const dadosResponse = await fetch("./dados.json");
//   const dadosJSON = await dadosResponse.json();
//   console.log(dadosJSON);
//   document.body.innerText = dadosJSON[1].aula;
// }

// iniciarAsync();

/*
Try / Catch
-----------------------------------

Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função. 
** Interessante é que o script não trava, se houver qquer erro em try(), pois ele executa o catch()
*/

// async function puxarDados2() {
//   try {
//     const dadosResponse = await fetch("./dados.json");
//     const dadosJSON = await dadosResponse.json();
//     const p = document.querySelector("p");
//     p.innerText = dadosJSON[1].aula;

//     // p2.innerText = dadosJSON[1].aula; // algum erro aqui
//   } catch (algumErro) {
//     //devo passar algum argumento
//     console.log(algumErro);
//     console.log("Error");
//   }
// }

// puxarDados2();

/*

Iniciar Fetch ao Mesmo Tempo
-----------------------------------
Não precisamos esperar um fetch para começarmos outro.
Porém, precisamos esperar a resposta resolvida do fetch para transformarmos a response em json. 

Lembrar que uma solicitação Fetch pode demorar mto tempo, ao contrário da execução de um método, com os dados já disponíbeis localmente -- ex: .json();
*/

async function iniciarAsync() {
  const dadosPromise = fetch("./dados.json");
  const clientesPromise = fetch("./clientes.json");
  // ele espera o que está dentro da expressão () ocorrer primeiro

  // const dadosResponse = await dadosPromise;
  // const clientesResponse = await clientesPromise;

  // const dadosJSON = await dadosResponse.json();
  // const clientesJSON = await clientesResponse.json();

  // console.log(dadosJSON);
  // console.log(clientesJSON);

  // ou, simplesmente  (forma simplificada, sem necessidade de +1 constante):

  const dadosJSON1 = await (await dadosPromise).json();
  const clientesJSON1 = await (await clientesPromise).json();

  // console.log(dadosJSON1);
  // console.log(clientesJSON1);
}

iniciarAsync();

/*
  OBSERVAÇÃO:
  --------------
  Desloquei os await's dos fetch --> significa que os fetch's são iniciados ao mesmo tempo;
  nas próximas linhas, obteremos as respostas do fetch que for resolvido + rápido!! 
  */

/*

Promise
-----------------------------------

O resultado da expressão à frente de await tem que ser uma promise.
E o retorno do await será sempre o resultado desta promise. */

// async function asyncSemPromise() {
//   await setTimeout(() => console.log("Depois de 1s"), 1000);
//   console.log("acabou"); // Console..log não irá esperar 1000ms --> resultado imediato
// }

// asyncSemPromise();

async function iniciarAsync2() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
  console.log("agora com o await funcionando");
}

iniciarAsync2();
