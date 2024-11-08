//  MÉTODOS = FOREACH, FILTER, MAP, SORT, REDUCE...

// METODOS HIGH-ORDER
// EXECUTAM A MESMA FUNCAO X VEZES, NA MESMA PROPORCAO COM A QT DE ELEMENTOS DO ARRAY
// = PARA CADA ELEM, ELE EXECUTA DE NOVO A  MESMA FUNCAO

// ARRAY 1
// const lista = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// ARRAY 2
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// ARRAY 3
const livros = [
  {
    nome: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    nota_imdb: 8.8,
    personagens: ["Frodo Bolseiro", "Gandalf", "Aragorn", "Legolas", "Gollum"],
  },
  {
    nome: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    nota_imdb: 7.6,
    personagens: [
      "Harry Potter",
      "Hermione Granger",
      "Ron Weasley",
      "Alvo Dumbledore",
    ],
  },
  {
    nome: "O Poderoso Chefão",
    autor: "Mario Puzo",
    nota_imdb: 9.2,
    personagens: [
      "Vito Corleone",
      "Michael Corleone",
      "Sonny Corleone",
      "Tom Hagen",
    ],
  },
  {
    nome: "O Código Da Vinci",
    autor: "Dan Brown",
    nota_imdb: 6.6,
    personagens: [
      "Robert Langdon",
      "Sophie Neveu",
      "Silas",
      "Jacques Saunière",
    ],
  },
];

// ARRAY 4
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { car: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { car: "BMW", models: ["320", "X3", "X5"] },
    { car: "Fiat", models: ["500", "Panda"] },
    //i0// {car:"Ford", models:["Fiesta", "Focus", "Mustang"]}, //j0, j1, j2//
    //i1// {car:"BMW", models:["320", "X3", "X5"]}, //j0, j1, j2//
    //i2// {car:"Fiat", models:["500", "Panda"]} //j0, j1//
  ],
};

// FOR EACH
// **SOMENTE ITERA E EXIBE CADA ELEM ARRAY

// EXIBE:
// 1 - CADA ELE Q DESEJO
// 2 - INDEX
// 3 - TODO O ARRAY (opcional)
// em formato de OBJETO

// array1
// const ab = lista.forEach(function(elem, i, lista){
//     console.log(
//       { //posicao: i + 1,
//         personagem: elem
//         // totalItens: lista })
//     })

// array2
// const b = personagens.forEach(function(personagem, i){
//   console.log(
//     { personagem,
//       localizacao: i + 1 })
//   })

// array3
// const c = livros.forEach(function(livro, i){
//   console.log(
//     { Livro: i + 1,
//       livro: livro })
// })

// *****

// array4
// *** como iterar sobre esse novo array models??
// *** SEM FOR...IN ??

// let models = Object.values(myObj)
// console.log(models) // Transformando o Obj em Array

// let d = models.forEach(function(elem, i){
//   console.log(
//     { elemento: elem,
//       posicao: i+1})
// })

// ******

// DEMAIS METODOS (GERAL):
// MAP, FILTER, EVERY

// CRIAM um NOVO ARRAY a partir de um array existenste
// ALTERA O ARRAY ORIGINAL
// DEVO USAR RETURN
// ** POSSO DAR OUTRAS CONDIÇÕES EXTRAS NO RETURN
// EXIBE:
// 1 - CADA ELEM Q DESEJO
// 2 - INDEX (opcional)
// 3 - TODO O ARRAY (opcional)

// METODO MAP //
// POSSO USAR P FILTRAR POR CHAVES

// array1

// const newList = lista.map(function(nome){
//   return nome
// }

// OU

// const newList = lista.map(function(nome, i){
//   return "posicao: " + (i +1) + "- " + nome
// })
// console.log(newList)

// array2
// const newList1 = livros.map(function(autor, i){
//   return "autor: " + (i +1) + "- " + autor.autor
// })
// console.log(newList1)

// A)
// No exemplo abaixo, map esta sendo usando para iterar, porem retornando
// a QUANT DE POSICOES desse Array de objetos
// e armazenando no novo array "list"

// const list = [];

// const resul = livros.map(function(item) {
//   return list.push(item);
// });
// console.log(resul);

// B)
// Retornando apenas O ARRAY dentro da chave PERSONAGENS

// const personagem = livros.map(function (item){
//   return item.personagens.map(function(personagem){
//     return personagem
//   })
// })

// ou (Com Arrow Function)

// const personagem = livros.map(item => {
//   return item.personagens.map(personagem => {
//     return personagem
//   })
// })

// console.log(personagem);

// C)
// no exemplo abaixo, estou retornando todo o array, mas agora,
// todos os objetos sao transformados em Arrays;;
// tambem posso retrornar somente a propriedade que quero

const listados = livros.map((item) => {
  return [item.nome, item.autor, item.nota_imdb, item.personagens];
});

console.log(listados);

// METODO FLATMAP //

// PRIMEIRO, MAPEIA TODOS OS ELEMS ARRAY
// ENTAO, CRIA UM NOVO ARRAY achatando o array.

// const newList2 = livros.flatMap(function(autor, i){
//   return "autor: " + (i +1) + "- " + autor.autor
// })
// console.log(newList2)

// FILTER //

// NO RETORNO, VERIFICA SE UMA CONDICAO = TRUE OR FALSE
// RETORNA APENAS O QUE ATENDEM
// POSSO USAR P FILTRAR VALORES

// const classe = personagens.filter(function(Guerreiro){
//   return Guerreiro.classe === "Guerreiro"
// })
// console.log(classe)

// B) *** ??? ***
// retornar apenas os personagem de "O Poderoso Chefão":

// A função passada como argumento para o find deve retornar um booleano,
// o qual ao ser true vai determinar qual elemento será retornado pelo find.
//  o return do callback do find tem que ser um boolean.

const personagensLivros2 = livros.find((livro) => {
  // ate aqui, retorna o objeto na posicao nome = "O Poderoso Chefão"
  return livro.nome === "O Poderoso Chefão";

  // aqui, ele seta na posicao acima e retorna (.personagens)
}).personagens;

console.log(personagensLivros2);

// EVERY //
// NO RETORNO, VERIFICA CONDICOES = TRUE OR FALSE
// TODOS OS ELEMS DEVEM ATENDER A CONDICAO, SENAO RETORNA FALSE
// POSSO USAR P FILTRAR VALORES

// SORT //
// ALTERA O ARRAY ORIGINAL
// ordena os elementos de um array a partir de comparações entre duplas de elementos

// personagens.sort(function(personagemA, personagemB){
//   return personagemA.nivel - personagemB.nivel
// })
// console.log(personagens)

// personagens.sort(function(personagemA, personagemB){
//   return personagemB.nivel - personagemA.nivel
// })
// console.log(personagens)

// MANTENDO O ARRAY-MAE
//UTILIZO O SLICE() = COPIA O MAE E APLICA O SORT NO NOVO ARRAY

// const personagensOrdenados = personagens.slice().sort(function(a, b){
//   return b.nivel - a.nivel
// })
// console.log(personagens)
// console.log(personagensOrdenados)
