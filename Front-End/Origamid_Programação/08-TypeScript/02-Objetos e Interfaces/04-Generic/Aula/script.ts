// // Extends
// // 1) Sem genérico

// const link = document.querySelector('a'); // 1. HTMLAnchorElement ou null

// function extractText(elem: HTMLElement) {
//   return {
//     texto: elem.innerText,
//     tipo: elem,
//   };
// }

// if (link) {
//   console.log(extractText(link).tipo.href); //'link' perde a referência de herança:

//   // erro: a função espera HTMLElement, mas recebe 'link' que é do tipo HTMLAnchorElement --> tipos diferentes
// }

// //2) com Genérico
// // ------------

// const link1 = document.querySelector('a'); //HTMLAnchorElement ou null

// function extractText1<T>(elem: T) {
//   return {
//     texto: elem.innerText,
//     // erro: agora, ele está esperando por um HTMLAnchorElement --> innerText é propriedade de HTMLElement
//     tipo: elem,
//   };
// }

// if (link1) {
//   console.log(extractText1(link1).tipo.href);
// }

// // 3) Genérico + Extends
// // ------------------------

// const link2 = document.querySelector('a'); //HTMLAnchorElement ou null

// function extractText2<T extends HTMLElement>(elem: T) {
//   return {
//     texto: elem.innerText, // com o extends, indicamos que o tipo genérico deve herdar de uma interface HTMLElement
//     tipo: elem,
//   };
// }

// if (link2) {
//   console.log(extractText2(link2).tipo.href);
//   //não dá erro, pois está herdando as referências; não estou restringindo como acima (2)
// }

// // 4 - JQuery

// function $1<Tipo extends Element>(selector: string): Tipo | null {
//   return document.querySelector(selector);
// }

// const link3 = $1<HTMLAnchorElement>('a')?.href;

/* 

Métodos
---------

*/

// const url = 'https://api.origamid.dev/json/notebook.json';

// interface Notebook {
//   nome: string;
//   preco: number;
//   descricao: string;
// }

// const getData = async <T>(url: string): Promise<T> => {
//   const response = await fetch(url);
//   return await response.json(); // Retorna Promise<any>
// };

// const handleData = async () => {
//   // const notebook: Notebook = await getData(url);

//   // ou

//   const notebook = await getData<Notebook>(url);
//   console.log(notebook.nome); // retorna any -- não sabemos o que retorna da api
// };

// handleData();

// const url1 = 'https://api.origamid.dev/json/notebook.json';

// interface Notebook {
//   nome: string;
//   preco: number;
//   descricao: string;
//   garantia: string;
//   seguroAcidentes: boolean;
// }

// // const getData1 = async (url: string) => {
// //   const response = await fetch(url);
// //   return await response.json();
// // };

// const getData1 = async <T>(url: string): Promise<T> => {
//   const response = await fetch(url);
//   return await response.json(); // Retorna Promise<any> --> não sabemos o que retorna da API = any
// };

// // Tranformando getData1 em um genérico para poder receber qualquer tipo de dado da API

// // const handleData1 = async () => {
// //   const notebook: Notebook = await getData1(url1);
// //   console.log(notebook);
// // };

// // passando a tipagem na constante

// // ou

// const handleData1 = async () => {
//   const notebook = await getData1<Notebook>(url1);
//   console.log(notebook); // 1. inicialmente retorna any -- não sabemos o que retorna da api
// };
// // 2. passando o tipo de genérico que a função recebe

// handleData1();
