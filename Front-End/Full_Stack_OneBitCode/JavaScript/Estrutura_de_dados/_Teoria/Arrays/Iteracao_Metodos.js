//1.
//  ITERAÇÃO

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// FOR para percorrer cada elemento do array

let elemento = ""

for (let i = 0; i < arr.length; i++) {
  elemento += "|" + arr[i] + "| "
}
// console.log(elemento)

// FOR...OF para percorrer cada elemento do array
// IGUAL EXEMPLO ACIMA

let a = ""
for(let i of arr){
  a += "|" + i + "| "
}
// console.log(a)

const myObj1 = {
  name:"John",
  age:30,
  cars: [
    {car:"Ford"},
    {car:"BMW"},
    {car:"Fiat"}
  ]
}

let models = Object.values(myObj1)
// console.log(models) // Transformando o Obj em Array

// como iterar sobre esse novo array models??

// let b = models.forEach(function(elem, i){
//   console.log(
//     {
//       elemento: elem,
//       posicao: i+1
//     }
//   )
// })

// e os Elems de CARS?? devo fazer outro index: j ??
