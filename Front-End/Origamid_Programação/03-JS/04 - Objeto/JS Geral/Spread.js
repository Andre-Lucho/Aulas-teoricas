/* 
Operador Spread

O operador spread ... permite que você EXPANDA ELEMENTOS DE UM ITERÁVEL (como um array) em lugares ONDE MÚLTIPLOS ELEM são esperados. 
Ele é frequentemente usado em algoritmos para simplificar a manipulação de dados e tornar o código mais legível e conciso.

Aqui estão algumas das suas aplicações:

/* 

1) Arrays
-------------------  

a)Concatenação de Arrays: Você pode usar o operador spread para concatenar arrays facilmente. */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatenado = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// b) Cópia de Arrays: Você pode criar uma cópia de um array sem alterar o original.

let original = [1, 2, 3];
let copia = [...original]; // [1, 2, 3]

// c) Operações em Arrays: Por exemplo, encontrar o maior número em um array com a função Math.max.

const numeros = [1, 2, 3];
const maximo = Math.max(...numeros); // 3

// d) Construção de Arrays Dinâmicos: Adicionar elementos a um array de forma condicional.

const recursosBase = ["HTML", "CSS"];
const recursosAvancados = ["JavaScript", "React"];
const recursosTotais = [
  ...recursosBase,
  ...(usuarioAvancado ? recursosAvancados : []),
];

/* 

2) Objetos
------------------- 

O operador spread também pode ser usado para copiar ou combinar propriedades de objetos. */

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// a) Clonagem de Objetos: Quando você quer criar uma cópia de um objeto sem alterar o original.

const objetoOriginal = { nome: "Copilot", tipo: "Assistente Virtual" };
const objetoClonado = { ...objetoOriginal };

// b) Combinação de Objetos: Útil para combinar propriedades de múltiplos objetos em um único objeto.

const defaults = { cor: "azul", tamanho: "M" };
const opcoes = { cor: "vermelho" };
const configFinal = { ...defaults, ...opcoes }; // { cor: 'vermelho', tamanho: 'M' }

// 5)Em Literais de Objeto para Adicionar Propriedades Dinamicamente:

let chaveDinamica = "cor";
let valorDinamico = "azul";
let objetoDinamico = {
  [chaveDinamica]: valorDinamico,
  ...{ tamanho: "médio" },
}; // { cor: 'azul', tamanho: 'médio' }

/*

3) Funções
------------------ 

a) Passagem de Argumentos: O operador spread pode ser usado para passar os elementos de um array como argumentos para uma função. */

function soma(x, y, z) {
  return x + y + z;
}
let numeros2 = [1, 2, 3];
soma(...numeros2); // 6

// b) Parâmetros de Função Dinâmicos: Quando você não sabe quantos argumentos uma função pode receber.

function logTodosOsArgumentos(...args) {
  console.log(args);
  logTodosOsArgumentos("Copilot", "é", "incrível"); // ['Copilot', 'é', 'incrível']
}

/* 
4) React
------------------- 
Trabalhando com Componentes React: Em React, o operador spread é frequentemente usado para passar props.*/

const MinhaComponente = (props) => {
  return <div {...props}>Olá, mundo!</div>;
};
