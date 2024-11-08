// Sintaxe

// ex.:

imagens.forEach(function(img, index, array){
  // console.log(img, index, array)
})

// Com ARROW FUNCTION:
// tira o function e add =>

imagens.forEach((img, index, array) => {
    // console.log(img, index, array)
})

// Com apenas 1 argumento:

imagens.forEach(img => {
  // console.log(img)
})

// Sem argumentos:

// deixar os ()
imagens.forEach(() => {
  // console.log()
})

// Com apenas 1 linha de execução no CallBack:
// retira os colchetes {} e omite o return

imagens.forEach(img => console.log())

