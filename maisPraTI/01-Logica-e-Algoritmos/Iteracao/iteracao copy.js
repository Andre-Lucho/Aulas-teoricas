
// Exibir um objeto JavaScript produzirá [object Object].
// Algumas soluções comuns para exibir objetos JavaScript são:

// A) Exibindo as propriedades do objeto em um loop:

//  FOR...IN
// CONSIDERA-SE CADA PROP DO OBJETO COMO SENDO UM INDICE TIPO ARRAY

// 1.
//Iterando valores dentro do obj

const myObj = {
  name:"John",
  age:30,
  car: "Celta" 
}

let c = ""
for(let i in myObj){
  c += myObj[i] + " "
}

// console.log(c)


// 2.
//Iterando os carros dentro do obj da prop cars 
//= tenho 1 obj apenas como valor de cars

const newObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

let carros = ""

for(let i in newObj.cars){
  carros += newObj.cars[i] + " "
}

// console.log(carros)


// 3.
//Agora, a prop cars é um array, onde cada elem e um obj 
//= tenho 3 objetos como valores dentro de 1 array (valor)= cars

const myObj1 = {
  name:"John",
  age:30,
  cars: [
    {car:"Ford"},
    {car:"BMW"},
    {car:"Fiat"}
  ]
}

let cars = ""

for(let i in myObj1.cars){
  cars += myObj1.cars[i].car + " "
}

// console.log(cars)


//4.

const myObj2 = {
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

let cars2 = ""

for(let i in myObj2.cars){
  cars2 += myObj2.cars[i].car + ": "
  for (let j in myObj2.cars[i].models)
    cars2 += "|" + myObj2.cars[i].models[j] + "| "
}

console.log(cars2)




// B) Exibindo o objeto usando JSON.stringify()
//RETORNA TIPO JSON

let string = JSON.stringify(myObj2)

console.log(string)

