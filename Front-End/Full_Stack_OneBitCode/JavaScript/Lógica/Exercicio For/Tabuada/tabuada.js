let number = parseFloat(prompt(
  "Digite um numero que vc gostaria que eu exibisse sua tabuada de 1 ate 20: "))
let result = 0
let x = 0
let y = []

for(; x<= 20; x++){
  result = number * x
  y[x]= result 
  
}

alert("O numero " + number + " multiplicado por" + x +" e igual a " + y[*])

