let number = parseFloat(prompt("Digite um numero para verificar se ele e um numero PRIMO: "))


let tries = 0

for(let div = 1; div <= number; div++){
  if((number % div) == 0) {
    tries++
  }
}

if(tries > 2){
  alert("O numero " + number + " NAO e um numero primo")
} else {
  alert("O numero " + number + " E um numero PRIMO")
  } 

//while(div <= number){
//   if ((number % div) == 0){
//     div++
//   }
//   tries++  
// }

// PQ NAO FUNCIONA COM WHILE??




// ver se o resto da DIVISAO FOR 0 - ELE DA DIVISAO EXATA 
// ELE SO PODE DAR DIVISAO 2X COM RESTO O- POR 1 E POR ELE MESMO