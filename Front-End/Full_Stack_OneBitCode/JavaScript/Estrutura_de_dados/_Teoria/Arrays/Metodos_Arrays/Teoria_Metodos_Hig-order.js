//  METODOS EM ARRAYS = HIGH-ORDERS FUNCTIONS

// // METODO FOREACH // //

// 1. SEM A UTILIZACAO DO METODO

// function exibirElem (elem, ind, array){
//   console.log({
//     item:elem,
//     prateleira:ind, 
//     totalItens:array
//     }
//   )
// }

// // const lista = ["elem1", "elem2", "elem3", "elem4"]

// for (let i = 0; i < lista.length; i++){
//   exibirElem(lista[i], i, lista);

// }

// lista.forEach(exibirElem)

// 2. COM A UTILIZACAO DO FOREACH

const lista = ["Bola", "Mesa", "Flor", "Vaso"]

let a = lista.forEach(function(elem, i, lista){
  console.log(
    {item: elem,
      prateleira: i + 1, 
      totalItens: lista
    }
  )
  })
console.log(a)

// // METODO MAP // //
// MAP: permite obter um novo array a partir de um array existenste

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// 1. SEM A UTILIZACAO DO METODO

// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   nomes.push(personagem.nome)
// }

// 2. COM A UTILIZACAO DO MAP

const classes = personagens.map(function(classe){
  return classe.classe
})

console.log(classes)


// // METODO FILTER // //

// FILTER: permite obter um novo array contendo apenas elementos específicos de um array existente

// 1. SEM A UTILIZACAO DO METODO

// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   if (personagem.raca === "Orc") {
//     orcs.push(personagem)
//   }
// }

// 2. COM A UTILIZACAO DO FILTER

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})



// // METODO REDUCE // //


// REDUCE: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final


// SEM A UTILIZACAO DO METODO

// let nivelTotal = 0
// for (let i = 0; i < personagens.length; i++) {
//   nivelTotal += personagens[i].nivel
// }


// COM A UTILIZACAO DO REDUCE

// const nivelTotal = personagens.reduce(function (acumulador, personagem) {
//   return acumulador + personagem.nivel
// }, 0)



// OUTRAS UTILIZACOES DO METODO REDUCE = REORGANIZACAO DO ARRAY-MAE EM OUTROS ARRAYS "FILTRADOS" 


const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})




// // METODO SORT // //
// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos


personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})


