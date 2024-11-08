let fila = []
let option = ""

do{
  let pacients = ""
  for(let i = 0; i< fila.length; i++) {
    pacients += (i +1) + "॰ -" + fila[i] + "\n"
  }

  option = prompt(
    "Fila de Chamada de Pacientes\n" +
    "Pacientes:\n" + pacients +
    "\nEscolha uma das seguintes opções e digite o n escolhido:\n1. Novo Paciente\n2. Paciente em consulta\n3. Sair"
  )
  
  switch(option){
    case "1":
    fila.push(prompt("Escreva o nome do novo paciente a ser atendido: "))
    break
    case "2":
    let next_pacient = fila.shift()
      if (!next_pacient) {
        alert("Não há pacientes na fila!")
      } else {
          alert(next_pacient + " voce sera o proximo a ser atendido.")
        }
    break
    // AQUI ESTAMOS DECLARANDO OUTRA VARIAVEL PARA DARMOS O ALERT E MOSTRAR NA TELA (ALERT)
    // (E NAO NO CONSOLE) O ELEMENTO QUE FOI RETIRADO DA LISTA
    case "3":
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
//     "Fila de Chamada de Pacientes\n\n" +
//     "Nome do Paciente:\n"+ pacient_number + " ॰ - " + pacient_name)
//    pacient_number++
//  }
