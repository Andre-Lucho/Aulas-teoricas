let pileCards = []
let newPileCards = []
let system = startSystem()

function menu() {
  let option = prompt(
    "\nBem Vindo ao Baralho de Cartas!\n" +
    "\nEscolha uma das opcoes abaixo: " +
    "\n01 - Adicionar uma carta ao baralho" +
    "\n02 - Mostrar baralho" +
    "\n03 - Puxar uma carta do baralho" +
    "\n04 - Excluir uma carta do baralho" +
    "\n05 - Excluir todo o baralho" +
    "\n06 - Reorganizar o baralho" +
    "\n07 - Sair")
  
  return option
}

function addCards() {
  let newCard = prompt(
    "Digite o nome da carta a ser adicionada ao baralho:")
    
    pileCards.push(newCard) 
    alert(pileCards)

    let confirmation = confirm(
    "Gostaria de adicionar mais 1 carta ao baralho?")

    if(confirmation){
      addCards()}
}

function showPileCards() {
  alert("O Baralho tem as seguintes cartas:\n" + pileCards)
  let confirmation = confirm("Gostaria de exibir novamente?")
  
  if(confirmation){
    pacientsLine()}
}

function pullCard() {
  alert("O Baralho tem as seguintes cartas:\n" + pileCards)
  let card = confirm("Gostaria de retirar 1 carta ao baralho?")
  if (card) {
    let pull = pileCards.pop()
    alert("A carta retirada foi:\n " + pull)
  }

  let confirmation = confirm(
    "Gostaria de retirar mais 1 carta ao baralho?")

    if(confirmation){
      pullCard() }
}

function delCard() {
  
  alert("O Baralho tem as seguintes cartas:\n" + pileCards)
  let card = ""
  let deletedCard = false
  let index = ""
  
  do{
    deletedCard = confirm(
      "Gostaria de excluir alguma carta do baralho?")
    
    if(deletedCard){
      card = prompt("Digite a carta a ser exlucida: ")
      if(card){
      index = pileCards.indexOf(card)
        if(index !==-1) {
          pileCards.splice(index, 1)
        }else {
        alert("Carta não encontrada! Digite o nome novamente...")
        }
      }
    }
  } while(deletedCard)
  
  alert("O Baralho tem as seguintes cartas:\n" + pileCards +
  "\nA última carta a ser excluída foi: " + card)
}

function delFullPile() {
  
  alert("O Baralho tem as seguintes cartas:\n" + pileCards)
  let card = ""
  let pile = []
  
  let deletedCards = confirm(
    "Gostaria de excluir TODO o baralho de Cartas?\n")
          
  if(deletedCards){
    card = confirm(
    "Se você confirmar, TODO o baralho será EXCLUÍDO!")
    if(card){
      pileCards = pile
      alert("Todo o baralho foi excluído")
    } else {
      alert("O baralho não foi excluído\n" +
      "Esse é o baralho atual: " + pileCards)
    }
  }
  
  return pileCards
}

function cardsRearrangement() {
  alert("O Baralho tem as seguintes cartas:\n" + pileCards)
  let card = ""
  let position = ""
  let index = 0
  let newindex = 0
  let newrearrange = false
  newPileCards = [...pileCards]
  
  do{
    newrearrange = confirm(
      "Gostaria de reorganizar o baralho de cartas?")
    
    if(newrearrange){
      card = prompt("Digite o nome da carta a ser rearranjada:")
      position = prompt("Gostaria de mover a carta para frente ou para trás?\n" +
      "Se quiser mover para frente, digite f; se, para trás, digite t")
      newindex = prompt("Quantas posições deseja mover a carta?\n" +
      "Digite um número inteiro correspondente\n" + pileCards)

      switch (position) {
        case "f":
          index = pileCards.indexOf(card)
          if(index !== -1) {
            newPileCards.splice(index, 1)
            newPileCards.splice((index + newindex), 0, card)
          }
            break;
        case "t":
          index = pileCards.indexOf(card)
          if(index !== -1) {
            newPileCards.splice(index, 1)
            newPileCards.splice((index - newindex), 0, card)
          }  
          break;
        default:
          alert("Opcao Inválida. Escolha novamente: ")
          break;
      }  
    }
    pileCards = newPileCards
  
  } while(newrearrange)
  
  alert("Esse é o baralho atual:\n" + pileCards +
  "\nA carta alterada foi: " + card)
  
  return pileCards
}

function startSystem() {
  let choise = ""
  let result = "" 
  do {
    choise = menu()
    
    switch (choise) {
      case "1":
        result = addCards()
        break;
      case "2":
        result = showPileCards()
        break;
      case "3":
        result = pullCard()
        break;
      case "4":
        result = delCard()
      break;
      case "5":
        result = delFullPile()
        break;
      case "6":
        result = cardsRearrangement()
        break;
      case "7":
        alert("Encerrando o sitema...")
        break;
      default:
        alert("Opcao Inválida. Escolha novamente: ")
        break;
    }
  } while (choise !== "6");
  
}

