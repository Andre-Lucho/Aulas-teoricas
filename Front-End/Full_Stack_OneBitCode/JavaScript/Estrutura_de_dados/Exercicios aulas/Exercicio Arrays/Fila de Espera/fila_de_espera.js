let pacient_name = []
let pacient_number = 1

do{
  let option = parseFloat(prompt(
  "Menu Interativo" +
    "\nEscolha uma das seguintes opções e digite o n escolhido: " +
    "\nOpção 1 - Novo Paciente " + "\nOpção 2 - Paciente em consulta" + "\nOpção 3 - Sair"
  ))

    switch(option !== null ){
      case(option == 1):
      pacient_name.unsifth(prompt("Escreva o nome do proximo paciente a ser atendido: "))
      break
      case(option == 2):
      pacient_name = prompt("Escreva o nome do paciente atendido: ")
      pacient_name.pop()
      break
    }
    alert( 
      "Fila de Chamada de Pacientes\n\n" +
      "Nome do Paciente:\n"+ pacient_number + " ॰ - " + pacient_name)
    pacient_number++
    
} while (option <= 3){

alert("O sistema está sendo encerrado... ")

}

// for(; pacient !== null || pacient !== 5; ){
//    alert( 
//     "Fila de Chamada de Pacientes\n\n" +
//     "Nome do Paciente:\n"+ pacient_number + " ॰ - " + pacient_name)
//    pacient_number++
//  }




