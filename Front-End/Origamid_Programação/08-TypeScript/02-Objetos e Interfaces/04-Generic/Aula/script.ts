/* 
Exemplo 01
------------------
------------------

Sem Generics
---------------

1. Devo declarar todos os tipos possíveis de parâmetros que ela pode receber 

function retorno(a: string | number) {
  return a;
}

console.log(retorno('oi'));
console.log(retorno(20));

2. Como tenho + de um tipo, devo verificar que tipo é esse, antes de poder aplicar metodos e propriedades
const b = retorno('oi');
if (typeof b === 'string') {
  const c = b.toUpperCase;
}
if (typeof b === 'number') {
  const d = b.toFixed;
}

Com Generics 
---------------
Mostando a função que o tipo é genérico:
receberá o tipo indicado no argumento e retornará aquele tipo

function retorno2<variavelA>(a: variavelA): variavelA {
  return a;
}

console.log(retorno2<string>('oi'));
// Me mostra que retorno de 'retorno' será uma string

console.log(retorno2(200));
// Me mostra que retorno de 'retorno' será uma number

console.log(retorno2(true));
// Me mostra que retorno de 'retorno' será uma boolean



/*

Exemplo 02
--------------
--------------

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão', 'Mamão', 'Melão'];

// a Função é do tipo Lista; recebe uma 'Lista'de array e retorna um array

function firstFive<Lista>(lista: Lista[]): Lista[] {
  return lista.slice(0, 5);
}

console.log(firstFive(numeros));
const a = firstFive(frutas);

const b = a.map((fruta) => {
  return fruta.toLowerCase();
});

console.log(b);


// forma de escrita + comum:
-------------------------------

function firstFive<T>(lista: T[]) T[]** {
  return lista.slice(0, 5);
}

** não preciso explicitar o tipo de retorno, pois só tenho o retorno de 'lista'; logo será uma array

*/

/*

Exemplo 3 
------------------
------------------ 

function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}

notNull('andré')?.toLocaleLowerCase();
notNull(200)?.toFixed; */

/*

Exemplo 4 
------------------
------------------ 

function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado('teste').tipo;
// retorna strings com os tipos de dados que ela pode receber
// pois typeof retorna uma string dos vários tipos primitivos


*/

/* 


Extends
------------
------------

// 1)

function extractText(elem: HTMLElement) {
  return { 
  texto: elem.innerText, (propriedade de 'HTMLElement') 
  tipo: elem 
  };
}

const link = document.querySelector('a'); // 1. HTMLAnchorElement ou null

if (link) {
  console.log(extractText(link)tipo.href); //perde a referência de herança:
  
  erro: elem === HTMLElement | .tipo === HTMLAnchorElement --> tipos diferentes
} */

/*

2) Genérica 
-------------- */

// function extractText<T>(elem: T) {
//   return {
//     texto: elem.innerText,
//     // erro: agora, ele está esperando por um HTMLAnchorElement --> innerText é propriedade de HTMLElement
//     tipo: elem,
//   };
// }

// const link = document.querySelector('a'); //HTMLAnchorElement ou null

// if (link) {
//   console.log(extractText(link).tipo.href);
// }

/* 

3) Genérica + Extends 
------------------------*/

// function extractText<T extends HTMLElement>(elem: T) {
//   return {
//     texto: elem.innerText,
//     // com o extends, indicamos que o tipo genérico deve herdar de uma interface HTMLElement
//     tipo: elem,
//   };
// }

// const link = document.querySelector('a'); //HTMLAnchorElement ou null

// if (link) {
//   console.log(extractText(link).tipo.href);
//   //não dá erro, pois está herdando as referências; não estou restringindo como acima (2)
// }

/* 

Métodos
---------

*/

const url = 'https://api.origamid.dev/json/notebook.json';

interface Notebook {
  nome: string;
  preco: number;
  descricao: string;
}

const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json(); // Retorna Promise<any>
};

const handleData = async () => {
  // const notebook: Notebook = await getData(url);

  // ou

  const notebook = await getData<Notebook>(url);
  console.log(notebook.nome); // retorna any -- não sabemos o que retorna da api
};

handleData();
