let line = []
let option = ""

do{
  let cards = ""
  for(let i = 0; i < line.length; i++) {
    cards += (i +1) + "॰ -" + cards[i] + "\n"
  }

  option = prompt(
    "Pilha de Cartas\n" +
    "Cartas no Baralho:\n" + cards +
    "\nEscolha uma das seguintes opções e digite o n escolhido:\n1. Adicionar uma Carta\n2. Puxar uma Carta\n3. Sair"
  )
  
  switch(option){
    case("1"):
    line.unshift(prompt("Escreva o nome da carta que goatria de adicionar: "))
    break
    case("2"):
    let pull_card = line.shift()
      if (!pull_card) {
        alert("Não há cartas no baralho!")
      } else {
          alert(pull_card + " carta retirada do baralho.")
        }
    break
    // AQUI ESTAMOS DECLARANDO OUTRA VARIAVEL PARA DARMOS O ALERT E MOSTRAR NA TELA (ALERT)
    // (E NAO NO CONSOLE) O ELEMENTO QUE FOI RETIRADO DA LISTA
    case("3"):
    alert("O sistema está sendo encerrado... ")
    break
    default:
      alert("Opcao invalida")
  }
} while (option !== "3")



// O TIPO DE VARIAVEL UTILIZADA COM SWITCH DEVE SER SEMPRE STRING???

// TENTEI COM Number ou parsefloat E NAO FUNCIONOU!!!


// for(; pacient !== null || pacient !== 5; ){
//    alert( 
//     "line de Chamada de Pacientes\n\n" +
//     "Nome do Paciente:\n"+ pacient_number + " ॰ - " + pacient_name)
//    pacient_number++
//  }
