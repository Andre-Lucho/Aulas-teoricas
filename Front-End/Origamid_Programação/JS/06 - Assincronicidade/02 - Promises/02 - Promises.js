/*

new Promise()
-----------------------------------

Promise é uma função construtora de promessas.
Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

--> resolve e reject são 2 argumentosda callback de New Promise()
Como qquer argumento, resolve e reject podem ser qquer nome

*/

const promessa = new Promise(function (resolve, reject) {
  // resolve('Estou pronto!'); // Promise {<resolved>: undefined} --> pois nao passei nenhum argumento
  // reject(Error); // Promise {<rejected>: Error 1 erro ocorreu at http://...}
  /* Posso passar o metodo Error() que o JS entende como erro */
});
// error() método que retorna o erro
// Error('string') método que retorna uma string que defino para um erro

// console.log(promessa);

/* 

Com condição (If)
-----------------------------------*/

const promessa1 = new Promise((resolve, reject) => {
  let condicaoTrue = true;
  let condicaoFalse = false;
  if (condicaoFalse) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

// console.log(promessa1);

/*

resolve()
---------------------
Podemos passar um argumento na método .resolve() , este será enviado junto com a resolução da Promise. */

// condicaoTrue
// console.log(promessa1); // Promise {<resolved>: "Estou pronto!"}

/*

reject()
---------------------

Quando a condição de resolução da promise não é atingida, ativamos a método .reject() para rejeitar a mesma. Podemos indicar no console um Error(), informando que a promise foi rejeitada. */

// condicaoFalse
// console.log(promessa1); // Promise {<rejected>: Error:...}

/*

then()
---------------------

O poder das Promises está no método then() do seu protótipo.
O Callback deste método SÓ SERA  ATIVADO QD a promise for RESOLVIDA, ou seja:
1° --> resolve a Promise-pai;
2° --> resolve o método then() --> por isso a palavra then...sacou?


O 1° argumento do callback de 'then()' será o valor passado na função 'resolve'.

** similar a um observer (porém com tempo) --> fica observando e só é executado após a conclusão da Promise */

const promessa02 = new Promise((resolve, reject) => {
  let condicao = true;
  condicao
    ? resolve({
        nome: 'André',
        idade: 44,
      })
    : reject(Error('Um erro ocorreu'));
});

// promessa02.then((resolucao) => console.log(resolucao)); // 'Promessa resolvida'
// *** => o argumento 'resolucao' é o Resultado de 'resolve' da const promessa03

/*

Assíncrono
-----------------------------------

As Promises só FAZEM SENTIDO quando o código executado dentro da mesma é um código ASSÍNCRONO.
O poder está na execução de código assíncrono que executará o resolve() ao final dele. */

const promessa03 = new Promise((resolve, reject) => {
  let condicao = true;
  let condicaoFalsa = false;
  if (condicaoFalsa) {
    setTimeout(() => {
      resolve({ nome: 'André', idade: 43 });
    }, 2000);
  } else {
    reject(Error('Um erro ocorreu na Promise.'));
  }
});

// promessa03.then((resolucaoResolve) => console.log(resolucaoResolve)); // { nome: "André", idade: 43 } == após 2000ms

/*

then().then()
-----------------------------------
O método then() retorna outra Promise.
Podemos colocar then() após then() e fazer um ENCADEAMENTO de promises.
O valor do primeiro argumento de cada then, será o valor do retorno anterior. */

const retorno = promessa03.then((response) => {
  // console.log(response); //  { nome: 'André', idade: 42 }
  response.profissao = 'Programador';
  return response;
});
// .then((response) => console.log(response)); // { nome: "André", idade: 42,  profissao: "Programador"}
//como só tenho 1 retorno, posso ignorar a palavra 'return'

//   .then((response) => {
//     response.profissao02 = 'Designer Digital';
//     // return console.log(r); //  { nome: "André", idade: 42,  profissao: "Programador", profissao02 = "Designer Digital"}
//     return response;
//   });

/*

catch()
-------------------

O método catch() , do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada(reject()).
O 1° argumento do callback será o valor passado na função 'reject'.
Também pode ser encadeada com + .catch()'s

** OBS --> a mensagem de erro do console deixa de existir e passa a ser executado o argumento de CATCH!!
*/

// const retorno2 = promessa03
// .then((r) => 'teste').then((r) => r);
// .catch((rejeitada) => rejeitada) // //Promise ... em PromiseResult, temos "Um erro ocorreu na Promise.
// .catch((rejeitada) => console.log(rejeitada));

// console.log(retornoPromessa06);

/*

then(resolve, reject) === then().catch()
-----------------------------------

Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método 'then', como segundo argumento. */

const retorno3 = promessa03
  .then
  // (resolucao) => console.log(resolucao),
  // (reject) => console.log(reject),
  ();

/*

finally()
-----------------------------------

finally() executará a função anônima assim que a promessa acabar.
A diferença do finally é que o callback dela SEMPRE será executado, independente do resultado (resolvida ou rejeitada) */

retorno3.finally(() => {
  // NÃO RECEBE ARGUMENTO
  // console.log('Acabou'); // 'Acabou'
}); //é um método que será executada sempre ao final da Promise

// Obs. --> semelhande ao 'default' do switch/case

/*

Métodos do Objeto Promise
------------------------------------------

  Promise.all() 
  -----------------------------------------
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
// console.log(tudoCarregado); // retorna a Promisse e no seu PromiseResult tenho um Array contendo os dados dos 2 resolve()

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
  console.log(resposta); // Login Efetuado
});
