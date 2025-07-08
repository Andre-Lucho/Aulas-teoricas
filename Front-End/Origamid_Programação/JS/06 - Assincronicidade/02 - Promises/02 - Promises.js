/*

new Promise()
-----------------------------------

Promise é uma função construtora de promessas. (função construtura de uma Callback function)
Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

--> resolve e reject são 2 argumentos tipo 'Funções executáveis' 
//Como qquer argumento, resolve e reject podem ser qquer nome

*/

const promessa = new Promise(function (resolve, reject) {
  // resolve();  // Promise {<resolved>: undefined} --> pois nao passei nenhum argumento
  // reject(Error("1 erro ocorreu")); // Promise {<rejected>: Error 1 erro ocorreu at http://...}
  /* Posso passar o metodo Error() que o JS entende como erro */
});

// console.log(promessa);

/* 

Com condição (If)
-----------------------------------*/

const promessa1 = new Promise((resolve, reject) => {
  let condição = true;
  if (condição) {
    resolve('Promessa resolvida');
  } else {
    reject(Error('outro erro ocorreu'));
  }
});

// console.log(promessa1);

/*

resolve()
---------------------

// Podemos passar um argumento na função resolve() , este será enviado junto com a resolução da Promise. */
// const promessa01 = new Promise(function (resolve, reject) {
//   let condicao = true;
//   if (condicao) {
//     resolve("Estou pronto!");
//   } else {
//     reject();
//   }
// });
// console.log(promessa01); // Promise {<resolved>: "Estou pronto!"}

/*

reject()
---------------------

Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um Error(), informando que a promise foi rejeitada. */

// // const promessa02 = new Promise(function (resolve, reject) {
// //   let condicao = false;
// //   if (condicao) {
// //     resolve("Estou pronto!");
// //   } else {
// //     reject(Error("Um erro ocorreu."));
// //   }
// // });
// // console.log(promessa02); // Promise {<rejected>: Error:...}

// // ou (Arrow function)

// const promessa02 = new Promise((resolve, reject) => {
//   let condicao = false;
//   if (condicao) {
//     resolve("Estou pronto!");
//   } else {
//     reject(Error("Um erro ocorreu."));
//   }
// });
// console.log(promessa02); // Promise {<rejected>: Error:...}

/*

then()
---------------------

O poder das Promises está no método then() do seu protótipo.
O Callback deste método SÓ SERA  ATIVADO QD a promise for RESOLVIDA, ou seja:
1° --> resolve a Promise-pai;
2° --> resolve o método then() --> por isso a palavra then...sacou?


O 1° argumento do callback de 'then()' será o valor passado na função 'resolve'.


** similar a um observer (porém com tempo) --> fica observando e só é executado após a conclusão da Promise */

const promessa03 = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

// promessa03.then((resolucaoResolve) => console.log(resolucaoResolve)); // 'Estou pronto!'
// *** => o argumento 'resolucaoResolve' é o Resultado de 'resolve' da const promessa03

/*

Assíncrono
-----------------------------------

As Promises só FAZEM SENTIDO quando o código executado dentro da mesma é um código ASSÍNCRONO.
O poder está na execução de código assíncrono que executará o resolve() ao final dele. */

const promessa04 = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'André', idade: 43 });
    }, 2000);
  } else {
    reject(Error('Um erro ocorreu na Promise.'));
  }
});

// promessa04.then((resolucaoResolve) => console.log(resolucaoResolve)); // { nome: "André", idade: 43 }

/*

then().then()
-----------------------------------
O método then() retorna outra Promise.
Podemos colocar then() após then() e fazer um ENCADEAMENTO de promises.
O valor do primeiro argumento de cada then, será o valor do retorno anterior. */

const promessa05 = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'André', idade: 42 });
    }, 2000);
  } else {
    reject(Error('Um erro ocorreu na Promise.'));
  }
});

const retornoPromessa05 = promessa05
  .then((response) => 'teste') // substitui o {...} por 'teste'; como só tenho 1 retorno, posso ignorar a palavra 'return'
  .then((response) => response);

// console.log(retornoPromessa05); // Promise... em PromiseResult, temos = 'teste'

const retornoFinal01 = promessa05
  .then((response) => {
    r.profissao = 'Programador';
    // console.log(r); // { nome: "André", idade: 42,  profissao: "Programador"} por causa do console.log
    return r;
  })
  .then((response) => {
    r.profissao02 = 'Designer Digital';
    // return console.log(r); //  { nome: "André", idade: 42,  profissao: "Programador", profissao02 = "Designer Digital"}
    return response;
  });

// console.log(retornoFinal01); //Promise ... em PromiseResult, temos o objeto = { nome: "André", idade: 42,  profissao: "Programador", profissao02 = "Designer Digital"}

/*

catch()
-------------------

O método catch() , do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.
O 1° argumento do callback será o valor passado na função 'reject'.
Também pode ser encadeada com + .catch()'s

** OBS --> a mensagem de erro do console deixa de existir e passa a ser executado o argumento de CATCH!!
*/

const promessa06 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'André', idade: 42 });
    }, 1000);
  } else {
    reject('Um erro ocorreu na Promise.');
  }
});

const retornoPromessa06 = promessa06
  .then((r) => 'teste')
  .then((r) => r)
  // .catch((rejeitada) => console.log(rejeitada)) // "Um erro ocorreu na Promise."
  .catch((rejeitada) => rejeitada);

// console.log(retornoPromessa06); //Promise ... em PromiseResult, temos "Um erro ocorreu na Promise."

/*

then(resolve, reject) === then().catch()
-----------------------------------

Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método 'then', como segundo argumento. */

const promessa07 = new Promise((resolve, reject) => {
  let condicao = true;
  let condicao1 = false;
  if (condicao) {
    resolve('Estou pronto!');
  } else {
    reject('Um erro ocorreu.');
  }
});
// promessa07.then(
//   (resolucao) => console.log(resolucao),
//   (reject) => console.log(reject)
// );
// escrita resumida

const retornoPromessa07 = promessa07.then(
  (r) => {
    console.log(r);
  },
  (reject) => {
    console.log(reject);
  },
);

// escrita completa

console.log(retornoPromessa07);

/*

finally()
-----------------------------------

finally() executará a função anônima assim que a promessa acabar.
A diferença do finally é que o callback dela SEMPRE será executado, independente do resultado (resolvida ou rejeitada) */

promessa07.finally(() => {
  // NÃO RECEBE ARGUMENTO
  // console.log("Acabou"); // 'Acabou'
}); //é uma função que será executada sempre ao final da Promise

/*

  Promise.all()
  -----------------------------------
  Retornará uma nova promise:
  1. Assim que TODAS as promises dentro dela forem resolvidas;
  2. OU, pelo menos, uma for rejeitada. 
  A reposta é uma array com as respostas de cada promise.*/

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);
console.log(tudoCarregado); // retorna a Promisse com 2 PromissesResults

tudoCarregado.then((respostas) => {
  console.log(respostas); // retorna uma Array com ambas respostas
});

/* 
IMPORTANTE:  Promise.all([]) + .then() -->
-----------------------------------------------
AQUI, posso TRABALHAR com a ARRAY com forEach ou QUALQUER MÉTODO OU PROPRIEDADES de Arrays!! */

/*

Promise.race()
-----------------------------------

Similar ao .all(), porém retornará nova promise:
1. Assim que a PRIMEIRA 'promise' for resolvida ou rejeitada.
Trará a resposta da primeira resolvida. */

const login01 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados01 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const carregouPrimeiro = Promise.race([login01, dados01]);
carregouPrimeiro.then((resposta) => {
  // console.log(resposta); // Login Efetuado
});
