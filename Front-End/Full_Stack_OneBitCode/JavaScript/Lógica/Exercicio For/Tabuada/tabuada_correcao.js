let number = parseFloat(prompt(
  "Digite um numero que vc gostaria que eu exibisse sua tabuada de 1 ate 20: "))
let result = []
let x = 1

for(; x<= 20; x++){
  result += "O numero " + number + " multiplicado por " + x +" e igual a " + (number * x) + "\n"
  
}

alert("Resultado da tabuada de " + number + ":\n\n" + result)

/* LINHA 7
A VARIAVEL result ESTA SENDO ATRIBUIDA UMA OPERACAO +=
A CADA VOLTA OS RESULTADOS ANTERIORES FICAM ARMAZENADOS E UM NOVO RESULTADO 
E CONCATENADO E ARMAZENADO = SEMELHANTE A UM VETOR*/