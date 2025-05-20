/* 
Função padrão 
--------------------------------------------------------
------------------------------------------------------*/

function retornaParOuImpar(valor) {
  let resultado;
  valor = 22; // **
  valor % 2 == 0 ? (resultado = 'Par') : (resultado = 'Impar');
  return resultado;
}

let resultado = 23;
// as variáveis 'resultado' estão escopos diferentes!

// console.log(retornaParouImpar(resultado));

/* 
** 
O argumento 'resultado' é recebido pela função ele se chama parâmetro:
Qd ele não sofre alteração dentro da função, chamamos isso de passagem por valor
Qd ele muda de valor dentro da função, chamamos passagem por referência */

/* 
Função do tipo Procedimento 
------------------------------------------------------
------------------------------------------------------
roda e cumpri a sua utilidade dentro da função, limitando sua utilização (já que não tem 'return'): */

function retornaParOuImpar2(valor) {
  let resultado;
  valor = 25; // **
  valor % 2 == 0 ? (resultado = 'Par') : (resultado = 'Impar');
  // console.log(resultado); // Ímpar
}

let resultado2 = 22;

// console.log(retornaParouImpar2(resultado2)); // Undefined -- NÃO tenho um Return

/* 
Exercício 01
--------------------------------------------------------
Fazer um função que retorna um Array ordenado */

const array = [6, 3, 9, 8, 27, 15, 73, 91, 48, 54];
const array2 = ['daniel', 'andre', 'carla'];
// sort não funciona com strings

const ordenandoArrays = (array) => array.sort((a, b) => a - b);

// ou

function ordenandoArrays2(array) {
  return array.sort((a, b) => b - a);
}

// console.log(ordenandoArrays(array));
// console.log(ordenandoArrays2(array2));

/*

Parâmetro default: 
------------------------------------------------------
*/

function teste(nome = 'daniel') {
  // console.log(nome);
}
// aqui, o parâmentro nome está recebendo um default string 'daniel', caso nenhum argumento seja passado

// teste();

/* 

Função Anônima ou Arrow Function
--------------------------------------------------------
--------------------------------------------------------
Geralmente usada quando temos uma função por parâmetro --> chamada de Callback function */

let exibeNome = function (nome) {
  // console.log(nome);
};

// let exibeNome1 = (nome) => console.log(nome);

/*
Exemplo 4
-------------------------------------------------------- */

// let sucesso = (mensagem) => console.log(mensagem);
// let error = (mensagem) => console.log(mensagem);

function requisicao(sucesso, error) {
  if (true) {
    sucesso('Sucesso');
  } else {
    error('Deu ruim');
  }
}
// requisicao(sucesso, error);

/* Importante
--------------------------------------------------------
Callbacks não devem ser ativadas qd passadas como argumentos, 
pois serão executadas antes de servirem como parâmetros de outras funções */

/* mesma coisa:
--------------------------------------------------------*/

// requisicao(
// (mensagem) => console.log(mensagem),
// (mensagem) => console.log(mensagem),
// );

/*

Exercício 02
--------------------------------------------------------
A) Criar uma função que some os elementos de um Array e retorne esse valor */

// Com for:
// ------------------------------------------------------

function somaFor(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}
// console.log(somaFor(array));

// a)
function soma1(array) {
  return array.reduce((acc, numero) => acc + numero);
}
// console.log(soma1(array));

// b) mesmo acima
let soma2 = (array) => array.reduce((acc, numero) => acc + numero);
// console.log(soma2(array));

/* Exercício 03
------------------------------------------------------

Retornar um maior número de uma array :
------------------------------------------------------ */

// 1)
function maiorFor(array) {
  let elemMaior = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > elemMaior) {
      elemMaior = array[i];
    }
  }
  return elemMaior;
}
// console.log(maiorFor(array));

// ou
function maior1For(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      elemMaior = array[i];
    }
  }
  return elemMaior;
}
// console.log(maior1For(array));

const maior1 = array.reduce((maior, atual) => {
  return atual > maior ? atual : maior;
}); // Inicializamos com o primeiro elemento do array
// console.log(maior1);

const maior2 = array.sort((a, b) => b - a); // Ordena em ordem decrescente
const maiorElemento = maior2[0];
// console.log(maiorElemento); // Saída: 20

const maior3 = Math.max(...array);
// console.log(maior3);

/*
Aula 10 -08/05

Funções Nativas JS
------------------------------------------------------
------------------------------------------------------ */

let nome = 'Julio César';

/* 

Propriedades e Métodos do Objeto String:
------------------------------------------------------ 
------------------------------------------------------ */

// console.log(nome.length);
// console.log(nome.charAt(10)); // retorna o caractere de acordo com a posição
// console.log(nome.indexOf('C')); // retorna o indece do caractere
// console.log(nome.replace('Julio', 'André'));
// console.log(nome.substring(6, 5)); // era p retornar César ?
// console.log(nome.toUpperCase(10));
// console.log(nome.toLowerCase(10));
// console.log(nome.includes('a')); // está incluido? true or false

// console.log('  Lucho    '.trim().length);

// A) Façam um função que inverta a posição dos caracteres de uma string
// ------------------------------------------------------------------------------------------------------

/* 

Com FOR
------------------------------------------------------ */

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// console.log(reverseString('Andre Lucho'));

/* 

Com Métodos de Array
------------------------------------------------------*/

function inverterString(str) {
  return str.split('').reverse().join('');
  // ou
  // return [...str].reverse().join(''); // com operador spread
}

// console.log(inverterString('Andre Lucho'));

/*split() --> itera e separa os caracteres em caracteres individuais e coloca dentro de um array
reverse() -->  inverte os caracteres dessa array
join() --> junta os caracteres */

/* B) Encontrar o número de vogais em uma string
-------------------------------------------------------------------
-------------------------------------------------------------------*/

/*
1 - retornando as vogais presentes
------------------------------------------------------ */

function vogaisSerch(str) {
  let vogais = 'aeiouAEIOU';
  let encontradas = '';
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      encontradas += str[i];
    }
  }
  return encontradas;
}
// console.log(vogaisSerch('Andre Lucho'));

/* 
2 - retornando apenas a quantidades de vogais presentes 
----------------------------------------------------------------------------------*/

function vogaisSerch1(str) {
  let vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
// console.log(vogaisSerch1('Andre Lucho'));

// .match()

/*

Métodos com Number
------------------------------------------------------
------------------------------------------------------*/

// console.log(Math.ceil(100.2)); // arredonda para cima
// console.log(Math.floor(100.2)); // arredonda para baixo
// console.log(Math.round(100.2)); // inteiro + próximo

// console.log(Math.sqrt(81)); // raiz quadrada
// console.log(Math.cbrt(81)); // raiz cúbica
// console.log(Math.pow(9, 2)); // potencia

// console.log(Math.abs(-100.87)); // numero absoluto

// console.log(Math.random() * 100); // numero aleatório entre 0 e 1

// let numero = Math.random() * 10;
// if (numero > 1 && numero <= 5) {
//   console.log(numero);
// }

/* 
Gerar um número aleatório entre 2 valores 
---------------------------------------------------------
*/

function randowBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // (max +1)
}

// console.log(randowBetween(1, 3));

// *** ver o porque dessa lógica!!

/*

Trabalhando com Datas
------------------------------------------------------
------------------------------------------------------ */

let date = new Date(); // instanciando novo Objeto Date

// console.log(date); // data completa
// console.log(date.getDate()); // dia atual
// console.log(date.getMonth() + 1); // Mês atual ( começa em 0)
// console.log(date.getFullYear()); // ano atual
// console.log(date.toString()); // data completa --> fora console do navegador

let date1 = new Date(2015, 7, 7); // ano, mes (lembrar que começa em 0), dia
let date2 = new Date(2025, 7, 7);

console.log(date1.getTime()); // retorna a data desde 01/01/1970 em milissegundos (padrão)
console.log(date2.getTime());

let miliEntreAsDatas = Math.abs(date1.getTime() - date2.getTime());
console.log(miliEntreAsDatas);
let miliEmDias = 24 * 60 * 60 * 1000; // milissegundos em dias

console.log(
  `A diferença entre as datas é de: ${miliEntreAsDatas / miliEmDias} dias`,
);

/* 
Formatar uma data
-------------------------- */

let date3 = new Date(); // data atual
console.log(date3);

function formatDate(date) {
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear().toString().padStart(2, '0');

  return `${day}/${month}/${year}`;
}

console.log(formatDate(date3));

// video = 1h10min
