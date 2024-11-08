let wallet = parseFloat(prompt(
  "Carteira" +
  "\nQual é a quantidade em R$ inicial disponivel na carteira? Digite: "))

alert("a quantidade inicial é de R$ " + wallet)

let money = 0
let bugdet = wallet
let transactions = []

do {
  transactions = parseFloat(prompt(
    "Carteira" +
    "\nGostaria de adicionar ou retirar mais fundos da Carteira? " +
    "\n01- Adicionar Fundos" + "\n02- Retirar Fundos" + "\n03- Sair" 
    ))
  
  switch(transactions != null){
    case (transactions == 1):
      money = parseFloat(prompt("Qual a quantia que gostaria de adicionar em sua carteirta? Digite: "))
      bugdet += money
      alert("O fundo atual é de R$ " + bugdet)
      break
    case (transactions == 2):
      money = parseFloat(prompt("Qual a quantia que gostaria de retirar de sua carteirta? Digite: "))
      bugdet -= money
      alert("O fundo atual é de R$ " + bugdet)
      break
  }
} while (transactions != 3 ){

}
    
alert("O fundo atual é de R$ " + bugdet +
"\nO sistema está sendo encerrado... " )