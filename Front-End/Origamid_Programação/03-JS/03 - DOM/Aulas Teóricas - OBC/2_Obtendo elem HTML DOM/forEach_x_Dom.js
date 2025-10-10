// Pegando uma lista de Itens do DOM - Loop

// ForEach

// ex.

// NodeList
const imagens = document.querySelectorAll('img')
// console.log(imagens.length)

imagens.forEach(function(img, index, array){
  // console.log(img, index, array)
})

// Com Arrow Function:
// imagens.forEach((img, index, array) => {
    // console.log(img, index, array)
// })



// HTMLCollection

const htmlLike = document.getElementsByClassName('mainCardImg')
// console.log(htmlLike)

const newArray = Array.from(htmlLike)
// console.log(newArray)

// newArray tem todos os metodos de 1 array

newArray.forEach(item => {
  console.log(item)
})
