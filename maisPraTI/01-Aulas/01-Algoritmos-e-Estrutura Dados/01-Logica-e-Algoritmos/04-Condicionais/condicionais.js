const prompt = require('prompt-sync')({ sigint: true });
/*
Switch
-----------------------------------
Usado quando tenho opções bem definidas e não complexas (mtas opções para serem atualizadas)
e para deixar o código mais limpo

OBSs:
--------------------------------------------------------
a) Não definir para o 'case' + 1 possibilidade
b) Qd o 'case' tiver uma condição mto complexa, preferir utilizar o 'if/else'

c) String vazia, número 0 e NaN são considerados "falsy" em JavaScript


Exercícios
--------------------------------------------------------

*** Ver explicação switch*/

// 1) Verificar se um número é positivo, negativo ou zero

// let numero = Number(
//   prompt('Verificação de numeral! Digite o número a ser verificado: '),
// );

// if (Number.isNaN(numero)) {
//   console.log(
//     'Você digitou outro caractere a não ser um numeral! Digite novamente ',
//   );
// } else {
//   if (numero > 0) {
//     console.log('Você digitou um número positivo (maior do que 0)');
//   } else if (numero < 0) {
//     console.log('Você digitou um número negativo (menor do que 0)');
//   } else if (numero === 0) {
//     console.log('O número digitado é igual a 0');
//   } else {
//     console.log('Caso inesperado');
//   }
// }

/* 
Primeira tentariva errada:

switch (numero) {
    case numero >= 0:
      true
        ? console.log('Você digitou um número positivo (maior do que 0)')
        : (numero = undefined);
      break;
    case numero == 0:
      console.log('O número digitado é igual a 0');
      break;
    case numero < 0:
      console.log('Você digitou um número negativo (menor do que 0)');
      break;
    default:
      console.log(
        'Você digitou outro caractere a não ser um numeral! Digite novamente ',
      );
  }

/*
uso correto com Switch:
--------------------------------------------------------

let numero = Number(
  prompt('Verificação de numeral! Digite o número a ser verificado: '),
);

// Verifica se a entrada é inválida primeiro
if (isNaN(numero)) {
  console.log(
    'Entrada inválida! Você digitou algo que não é um numeral. Digite novamente.'
  );
} else {
  // Usa switch(true) para avaliar as condições nos cases
  switch (true) {
    case numero > 0: // Este case é executado se (numero > 0) for true
      console.log('Você digitou um número positivo (maior do que 0)');
      break; // Importante sair após encontrar a condição verdadeira
    case numero < 0: // Este case é executado se (numero < 0) for true
      console.log('Você digitou um número negativo (menor do que 0)');
      break; // Importante sair
    case numero === 0: // Este case é executado se (numero === 0) for true
      console.log('O número digitado é igual a 0');
      break;
    // O default aqui seria redundante se a verificação isNaN já foi feita,
    // pois um número válido sempre será >, < ou === 0.
    // Mas pode ser útil para capturar casos inesperados se a lógica for mais complexa.
    // default:
    //   console.log("Caso inesperado.");
  }
}
*/

// 2) Verificar se o ano é bissexto:

/*Feitas as correções de calendário, definiu-se a nova regra para o cálculo dos anos bissextos:

De 4 em 4 anos é ano bissexto.
De 100 em 100 anos não é ano bissexto, a menos que também seja divisível por 400 */

// let ano = Number(
//   prompt('Verificação de anos bissextos! Digite o ano a ser verificado: '),
// );

// if (ano % 100 == 0 && ano % 400 == 0) {
//   console.log('O ano digitado foi ou será um ano bissexto!');
// } else if (ano % 4 == 0) {
//   console.log('O ano digitado foi ou será um ano bissexto!');
// } else {
//   console.log('O ano digitado não foi ou nem será um ano bissexto!');
// }

// 3) Definir faixas etárias para: crianças, adolescentes e adultos; com switch, apresentar na tela se a pessoa informou sua idade e ela está em qual das faixas etárias

// crianças = 2 - 11 anos
// adolescente = 12 - 17 anos
// adulto - 18 - 64 anos
// idoso = acima de 65

let idade = Number(prompt('Verificação de faixa etária! Digite sua idade: '));

if (Number.isNaN(idade)) {
  console.log(
    'Você digitou outro caractere a não ser um numeral! Digite novamente ',
  );
} else {
  switch (true) {
    case idade > 1 && idade <= 11:
      console.log('Sua idade se enquadra na faixa etária de Crianças');
      break;
    case idade > 11 && idade <= 17:
      console.log('Sua idade se enquadra na faixa etária de Adolescentes');
      break;
    case idade > 17 && idade <= 64:
      console.log('Sua idade se enquadra na faixa etária de Adultos');
      break;
    case idade > 64:
      console.log('Sua idade se enquadra na faixa etária de Idosos');
      break;
    default:
      console.log(
        'Sua idade não se enquadra em nenhuma das faixa etária definidas',
      );
  }
}

// /* Exercicio 2:  verificar se um numero é positivo, negativo ou zero */

// const prompt = require('prompt-sync')();
// let numero = Number(prompt("Digite o primeiro número: "));
// if (isNaN(numero)){
//     console.log('O valor digitado não é um número!')
// } else if (numero > 0) {
//     console.log(${numero} é um numero positivo!)
// } else if (numero < 0) {
//     console.log(${numero} é um numero negativo!)
// } else {
//     console.log('O numero digitado é ZERO!')
// }

// /* Exercicio 3:  verificar se o ano é bissexto */
// /* Divisivel por 4, mas não divisivel por 100 ou divisivel por 400 */

// const prompt = require('prompt-sync')();
// let ano = Number(prompt("Digite o ano desejado: "));
// if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
//     console.log(${ano} é um ano bissexto.)
// } else {
//     console.log(${ano} não é um ano bissexto.)
// }

// /*  Exercicio 4:  defina faixas etárias para crianças, adolescentes, adultos e idosos e com switch apresentem na tela se a pessoa que informou a idade está em qual faixa etária. */

// const prompt = require('prompt-sync')();
// let idade = Number(prompt("Quantos anos você tem: "));
// if (isNaN(idade) || idade < 0) {
//     console.log('Insira uma idade válida')
// } else {
//     switch(true) {
//         case (idade >= 0 && idade <= 12):
//             console.log('Faixa Etaria: Infantil')
//             break;
//         case (idade >= 13 && idade <= 17):
//             console.log('Faixa Etaria: Adolescente')
//             break;
//         case (idade >= 18 && idade <= 59):
//             console.log('Faixa Etaria: Adulto')
//             break;
//         case (idade >= 60):
//             console.log('Faixa Etaria: Idoso')
//             break;
//         default:
//             console.log('Idade não existe!')

//     }
// }

/*
Canais YouTube
----------------------------
Boson treinamentos - Shell Script - @bosontreinamentos
Guanabara
De aluno para aluno
----------------------------
*/
