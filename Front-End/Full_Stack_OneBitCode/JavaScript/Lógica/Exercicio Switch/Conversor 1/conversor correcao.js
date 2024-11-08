const size = parseFloat(prompt("Insira uma medida em metros: "))

let measure = prompt(
  "Escolha para qual medida voce gostaria de fazer a conversão?\n " +
  "\n1. Para milímetros (mm), Digite mm " +
  "\n2. Para centímetro (cm), Digite cm " +
  "\n3. Para decímetro (dm), Digite dm " +
  "\n4. Para decâmetro (dam), Digite dam " +
  "\n5. Para hectômetro (hm), Digite hm " +
  "\n6. Para quilômetro (km), Digite km "
  )

switch(measure) {
  case "1": 
    alert("O valor de "+ size + " m convertido para milímetros (mm) é igual a " + size * Math.pow(10,3) + "mm")
    break
  case "2": 
    alert("O valor de "+ size + " m convertido para centímetro (cm) é igual a " +  size * Math.pow(10,2) + "cm")
    break
  case "3": 
    alert("O valor de "+ size + " m convertido para decímetro (dm)  é igual a " +  size * Math.pow(10,1) + "dm")
    break
  case "4": 
    alert("O valor de "+ size + " m convertido para decâmetro (dam) é igual a " +  size * Math.pow(10,-1) + "dam")
    break
  case "5": 
    alert("O valor de "+ size + " m convertido para hectômetro (hm) é igual a " +  size * Math.pow(10,-2) + "hm")
    break
  case "6": 
    alert("O valor de "+ size + " m convertido para quilômetro (km) é igual a " +  size * Math.pow(10,-3) + "km")
    break
  default: alert("Opção inválida! Escolha outra medida")
}