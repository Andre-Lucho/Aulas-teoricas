//ESCOLHA DE UNIDADE
let unidade = prompt(
  "CALCULADORA DE MEDIDAS"+
  "\nPor favor, escolha a MEDIDA a ser convertida:" +
  "\nDigite UMA das opções abaixo e aperte ENTER:\n" +
  "\nMOEDA - Centavos para Reais" +
  "\nMEDIDA - Centímetros para metros" +
  "\nVOLUME - Mililitros para Litros" +
  "\nMASSA - Gramas para Quilos"
)
//ESCOLHA DE CONVERSAO
let conv = prompt(
  "Escolha se a conversão sera de uma unidade MENOR para uma maior " +
  "\ne Digite c + ENTER\n" +
  "\nOU Escolha se a conversão sera de uma unidade MAIOR para uma menor" +
  "\ne Digite d + ENTER"
)
//ESCOLHA DE valor
let valor = parseFloat(prompt(
  "Digite o VALOR a ser CONVERTIDO e pressione ENTER"
))
// CALCULOS
let conversao = []

switch (unidade != null){
  case (unidade == "moeda" || unidade == "medida"):
    if (conv == "c"){
      conversao = (valor / 100)
      alert("O valor " + unidade + " convertido equivale a: " + conversao)
      alert("Obrigado por usar!")
    } else if (conv == "d"){
        conversao = (valor * 100)
        alert("O valor " + unidade + " convertido equivale a: " + conversao)
        alert("Obrigado por usar!")
    }
    break
  case (unidade == "volume" || unidade == "massa"):
    if (conv == "c"){
      conversao = (valor / 1000)
      alert("O valor " + unidade + " convertido equivale a: " + conversao)
      alert("Obrigado por usar!")
    } else if (conv == "d"){
        conversao = (valor * 1000)
        alert("O valor " + unidade + " convertido equivale a: " + conversao)
        alert("Obrigado por usar!")
    }
    break
  default: alert("Entrada Inválida!! Obrigado por usar!")
}


// PQ nao consegui usar 3 proposicoes para a mesma condicao??