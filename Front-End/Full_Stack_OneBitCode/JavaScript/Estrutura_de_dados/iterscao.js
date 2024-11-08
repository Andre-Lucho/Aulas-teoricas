// ITERACAO

// 1
const myObj = {
  name:"John",
  age:30,
  cars:[
    {car:"Ford"},
    {car:"BMW"},
    {car:"Fiat"}
  ]
  }



// let models = Object.values(myObj)
// console.log(models) // Transformando o Obj em Array

// let b = models.forEach(function(elem, i){
//   console.log(
//     {elemento: elem,
//     posicao: i+1 
//     })
// })

// e os Elems de CARS?? 

const cars1 = myObj.map(modelos =>{
  return Object.values(modelos.cars)
  })


console.log(cars1)

// ainda náo transformou cada posicao de cars em arrays






//2


const myObj1 = {
  name: "John",
  age: 30,
  cars: [
    {car:"Ford", models:["Fiesta", "Focus", "Mustang"]}, 
    {car:"BMW", models:["320", "X3", "X5"]}, 
    {car:"Fiat", models:["500", "Panda"]} 
   //i0// {car:"Ford", models:["Fiesta", "Focus", "Mustang"]}, //j0, j1, j2//
   //i1// {car:"BMW", models:["320", "X3", "X5"]}, //j0, j1, j2//
   //i2// {car:"Fiat", models:["500", "Panda"]} //j0, j1// 
  ]
}

// let cars2 = ""

// for(let i in myObj1.cars){
//   cars2 += myObj1.cars[i].car + ": "
//   for (let j in myObj1.cars[i].models)
//     cars2 += "|" + myObj1.cars[i].models[j] + "| "
// }
// console.log(cars2)

// e com METODOS DE ARRAYS ???







// 3


const livros = [
  { nome: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    nota_imdb: 8.8,
    personagens: [
        "Frodo Bolseiro",
        "Gandalf",
        "Aragorn",
        "Legolas",
        "Gollum"]
  },
  { nome: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    nota_imdb: 7.6,
    personagens: [
        "Harry Potter",
        "Hermione Granger",
        "Ron Weasley",
        "Alvo Dumbledore"]
  },
  { nome: "O Poderoso Chefão",
    autor: "Mario Puzo",
    nota_imdb: 9.2,
    personagens: [
        "Vito Corleone",
        "Michael Corleone",
        "Sonny Corleone",
        "Tom Hagen"]
  },
  { nome: "O Código Da Vinci",
    autor: "Dan Brown",
    nota_imdb: 6.6,
    personagens: [
        "Robert Langdon",
        "Sophie Neveu",
        "Silas",
        "Jacques Saunière"]
  },
  { nome: "A Saga Crepúsculo: Crepúsculo",
    autor: "Stephenie Meyer",
    nota_imdb: 5.2,
    personagens: [
        "Edward Cullen",
        "Bella Swan",
        "Jacob Black",
        "Alice Cullen"]
  }
];

// Como add elementos nas: entre posicoes das chaves; 
// entre posicoes do array dentro da chaves (posicao 4)


