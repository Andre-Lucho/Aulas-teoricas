const traveler = prompt("Qual é o seu nome: ")
let trip = prompt("Você já viajou para fora da sua cidade natal? s(sim) ou n(não)?")

let cities = ""
let city_numbers = 0

while (trip === "s") {
  let city = prompt("Qual é o nome da cidade que você visitou? Digite o nome da cidade: ")
  cities += " - " + city + "\n"
  city_numbers++
  trip = prompt("Você já viajou para alguma outra cidade além dessa? s(sim) ou n(não)?")
    
}

alert(traveler + "\nviajou por " + city_numbers + " cidades. \nSao elas : " + "\n" + cities
  )

/* LINHA 9
A ATRIBUICAO +- FAZ COM QUE OS PROXIMOS VALORES DA VARIAVEL cities SEJAM ARMAZENADOS NELA
POIS ELES SAO SOMADOS AOS VALORES ANTERIORES - E SEMELHANTE A UM VETOR
DEPOIS E SO INVOCA-LA NO ALERT*/

/* LINHA 10
A ATRIBUICAO ++ FUNCIONA COMO UM CONTROLE DO NUMERO DE VOLTAS, POIS ELE INICA EM 
0 E A ELE E ATRIBUIDO +1 A CADA VOLTA CONCLUIDA */