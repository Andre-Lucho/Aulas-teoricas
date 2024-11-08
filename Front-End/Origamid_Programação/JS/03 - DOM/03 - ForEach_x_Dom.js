// Pegando uma lista de Itens do DOM - Loop

// ForEach

// ex.

// NodeList
const imagens = document.querySelectorAll("img");
// console.log(imagens);

imagens.forEach(function (item, index, array) {
  // console.log(item); // loop item atual (img)
  // console.log(index); // posição
  // console.log(array); // todo o array a qual item faz parte
});

// OBS.
//  não há necessidade de passar argumentos para o ForEach --> funciona da mesma forma

// Com Arrow Function:
// imagens.forEach((img, index, array) => {
// console.log(img, index, array)
// })

//

// HTMLCollection
// --------------

const titulos = document.getElementsByClassName("title");
// console.log(titulos);

// Transfomando HTMLCollection para Array PURO

const newArray = Array.from(titulos);
// console.log(newArray);

// newArray tem todos os metodos de 1 array

// newArray.forEach((item, i) => {
//   console.log(item, i);
// });

//
// EXERCICIOS

// Mostre no console cada parágrafo do site

const p_s = document.querySelectorAll("p");
p_s.forEach((p, i) => console.log(p, i));

// Mostre o texto dos parágrafos no console

const ps2 = document.querySelectorAll("p");
ps2.forEach((p) => console.log(p.innerText));
// ou
// ps2.forEach((p) => console.log(p.textContent));

//  p (item) = objeto = elemento do Dom --> possui metodos e propriedades

// Como corrigir os erros abaixo:

// const imgs = document.querySelectorAll('img');
// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

const imgs = document.querySelectorAll("img");
imgs.forEach((item, index) => {
  // console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  // console.log(i++);
});

imgs.forEach(() => i++);
