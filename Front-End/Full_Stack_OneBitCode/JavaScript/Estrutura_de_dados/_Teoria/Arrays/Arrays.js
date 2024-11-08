// 1. 
// PREENCHENDO UM ARRAY

// A) LITERAL 

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
// console.log(arr)


// B) RECEBENDO VALORES

const array = []
array[0] = "1"
array[1] = "2"
array[2] = "3"
array[3] = "4"

// console.log(array)
// semelhante em OBJETOS


// 2.
// CONVERTENDO UM ARRAY EM STRING
// toString()

let c = arr.toString()
// console.log(c)


// 3.
// ACESSANDO O ÚLTIMO ELEM DE UM ARRAY

let array1 = arr[arr.length - 1]
// console.log(array1)


// 4.  
// ADD ELEMS AO ARRAY COM .LENGTH
//  similar ao push()

const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
// fruits.length sinaliza 1 posicao a + que o index


// 5. Const
// const é um pouco enganosa. NÃO define um Array constante. 
// Ele define uma referência constante para um Array. 
// Por causa disso, ainda podemos alterar os elementos de um Array constante.










