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
    case "mm":
      alert("O valor de " + size + " m convertido para milímetros (mm) é igual a " + size * Math.pow(10,3) + "mm")
      break
      case "cm": 
      alert("O valor de" + size + " m convertido para centímetro (cm) é igual a " +  size * Math.pow(10,2) + "cm")
      break
    case "dm": 
      alert("O valor de" + size + " m convertido para decímetro (dm)  é igual a " +  size * Math.pow(10,1) + "dm")
      break
    case "dam":
      alert("O valor de" + size + " m convertido para decâmetro (dam) é igual a " +  size * Math.pow(10,-1) + "dam")
      break
    case "hm": 
      alert("O valor de" + size + " m convertido para hectômetro (hm) é igual a " +  size * Math.pow(10,-2) + "hm")
      break
    case "km": 
      alert("O valor de" + size + " m convertido para quilômetro (km) é igual a " +  size * Math.pow(10,-3) + "km")
      break
    default: alert("Opção inválida! Escolha outra medida")
  }