// let array = ["aaa", "bbb", "ccc", "ddd"]
// alert(array)
// let nameToDel = prompt("Digite o nome do paciente a ser exlucido: ")

// index = array.indexOf(nameToDel)
// array.splice(index, 1)

// alert(array)
// alert(nameToDel)


// let fila = ["Paciente1", "Paciente2", "Paciente3", "Paciente4"]; // Exemplo de fila de pacientes

// let elemento = prompt("Digite o elemento a ser verificado e inserido no novo array: ");

// let indice = fila.indexOf(elemento);

// if (indice !== -1) {
//   let novoArray = [...fila]; // Cria uma cópia da fila original
//   novoArray.splice(indice, 1); // Remove o elemento da fila original
//   novoArray.splice(indice + 1, 0, elemento); // Insere o elemento no novo array, na posição à frente do seu índice original
//   console.log("Novo array com o elemento inserido:", novoArray);
// } else {
//   console.log("O elemento não está presente na fila.");
// }



// No caso do código que você compartilhou, a linha 21 usa o método `splice()` para adicionar o nome do paciente (`name`) na posição imediatamente após a posição do paciente atual (`index`). O segundo parâmetro do método `splice()` é 0, indicando que nenhum elemento antigo deve ser removido. Portanto, o método `splice()` simplesmente insere o novo elemento (`name`) na posição especificada sem remover nenhum elemento antigo.

// Espero ter ajudado! Deixe-me saber se você tiver mais alguma dúvida.

// Origem: conversa com o Bing, 30/10/2023
// (1) Array.prototype.splice() - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice.
// (2) Array.prototype.splice() - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice.
// (3) JavaScript Array splice vs slice - Stack Overflow. https://stackoverflow.com/questions/37601282/javascript-array-splice-vs-slice.
// (4) Splice em JavaScript – como usar o método de array .splice() em JS. https://www.freecodecamp.org/portuguese/news/splice-em-javascript-como-usar-o-metodo-de-array-splice-em-js/.


// let array = ["aaa", "bbb", "ccc", "ddd"]

// let a = array.pop()

// console.log(array)

