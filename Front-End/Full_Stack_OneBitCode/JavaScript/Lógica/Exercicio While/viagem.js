const traveler = prompt("Qual é o seu nome: ")
let trip = prompt("Você já viajou para fora da sua cidade natal? s(sim) ou n(não)?")

if (trip=== "s"){
  trip = 1
} else {
    trip = 0
  }

let city = []

while (trip >= 1) {
  city = prompt("Qual é o nome da cidade que você visitou? Digite o nome da cidade: ")  
  trip = prompt("Você já viajou para alguma outra cidade além dessa? s(sim) ou n(não)?")
    if (trip === "s"){
      trip = (10-1)
    } else{
        trip = 0
      }
}

alert(traveler + " viajou pelas seguintes cidade: " + city)