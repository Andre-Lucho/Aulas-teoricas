"use strict";
/*Métodos
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
