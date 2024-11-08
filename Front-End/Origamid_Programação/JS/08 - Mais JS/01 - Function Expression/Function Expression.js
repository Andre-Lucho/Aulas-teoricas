/*

Function Declaration
-----------------------------------

São duas as formas mais comuns de declararmos uma função. 
A que utilizamos até o momento é chamado de Function Declaration. */

function somar(a, b) {
  return a + b;
}

// console.log(somar(4, 2)); //6

/*

Function Expression
-----------------------------------

É criada a partir da declaração de uma VARIÁVEL, na qual assinalamos uma função. 
Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada. 
É a forma MAIS COMUM de declaração
*/

const somar1 = function (a, b) {
  return a + b;
};

// console.log(somar1(4, 2)); // 6

/*

Hoisting
-----------------------------------

Function Declarations são completamente definidas e executadas no momento do hoisting; 
Já Function Expressions APENAS serão definidas no momento da execução. 

**
Function declaration --> a função em si vai para a memory (temporary dead zone já declarada e então já está disponível na Call Stack)
Function expressions --> a variável vai p a Dead Zone, então a function ainda não está disponível, pois seu valor ainda não foi atribuído

Por isso, a ordem da declaração de uma Function Expressions possui importância. */

somar(4, 2); // 6
// dividir(4, 2); // Erro: Cannot access 'dividir' before initialization
function somar(a, b) {
  return a + b;
}
const dividir = function (a, b) {
  return a / b;
};

/*

Arrow Function
-----------------------------------

Podemos criar utilizando arrow functions. */

const somar2 = (a, b) => a + b;
// console.log(somar2(4, 2)); // 6
const quadrado = (a) => a * a;
quadrado(4); // 16

// OBS: uma linha no returno, dispensa RETURN

/*

Estrutura / Preferência
-----------------------------------

Geralmente o uso entre Declaration/ Expression é uma questão de preferência.
Function Expression força a criação da mesma ANTES de sua ativação, o que pode contribuir para um código mais estruturado.

** Usamos Function Declaration quando necessito ativa-lá anteriormente no código
Ex. exports dos algoritmos(modules) para o funcionamento do script

Cuidar o Objeto window (escopo mais externo de todos)
-----------------------
** Qd declaro um Func Declaration em um código com script direto (sem modules), a function irá p o escopo do window  --> a FUNÇÃO será um método do Objeto window
(VAZA O ESCOPO de bloco, como se fosse criada utilizando var).

Então, devo cuidar com o métodos já existentes em window, para não declarar com o mesmo nome e sobreescrever esses já existentes no padrão do Objeto window!!! */

function somar(a, b) {
  return a + b;
}
const dividir2 = (a, b) => a / b;
somar(4, 2);
dividir2(4, 2);

/*

IIFE - Immediately Invoked Function Expression --> Isolamento de Escopo (legado)
-----------------------------------

Antes da introdução de MODULES e da implementação do escopo de bloco, 
a forma mais comum utilizada para ISOLARMOS O ESCOPO de um código JavaScript era através das chamadas IIFE's. */

// Ex. 1

var instrumento = "Violão";

(function () {
  // console.log(instrumento); // Violão
})();

// código isolado do escopo global, mas continua tendo acesso ao escopo externo

//() == ativação da função

// o que está dentro dos ( )'s chama-se Espression e está em escopo isolado do que está por fora

// console.log(instrumento); // Violão --> resultado da var instrumento de fora

//
//
// Ex. 2

var instrumento = "Violão";

(function () {
  var instrumento = "Guitarra";
  // console.log(instrumento); // Guitarra
})();

// console.log(instrumento); // Violão

// Sem um isolamento de bloco, a var = 'instrumento' poderia ser atribuído 'Guitarra', e não 'Violão'.

/*

IIFE - Arrow Function
-----------------------------------

Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.

const instrumento = 'Violão';
(() => {
const instrumento = 'Guitarra';
console.log(instrumento); // Guitarra
})();
console.log(instrumento); // Violão
*/

/*

Exercícios
----------------------------------- */

// Remova o erro

// priceNumber("R$ 99,99");

const priceNumber = (num) => +num.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo de qualquer código JS.

// var nome = 'andre'
// window.nome = 'andre' // vazou escopo global

(function () {
  var nome = "andre";
})();

// window.nome = 'undefined' // Não vazou escopo global == ok

// Como podemos utilizar a função abaixo.

const active = (callback) => callback();

/* 
A função tem nome Active;
'callback 1' é um PARÂMETRO do tipo função
'callback 2' é o retorno da Função Active() --> retorna sua prórpia ativação

mesmo abaixo:
----------------------

function active (callback) {
  return callback();
} 

*/

active(function () {
  console.log("teste de active");
});
