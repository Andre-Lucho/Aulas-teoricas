let line = []
let newLine = []
let system = starSystem()

function menu() {
  option = prompt(
    "\nBem Vindo ao Sitema para Gerenciamento da Fila de Espera! " +
    "\n\nEscolha uma das opcoes abaixo: " +
    "\n\n01 - Cadastrar Novo Paciente em espera " +
    "\n02 - Chamar Próximo Paciente para atendimento " +
    "\n03 - Listar Pacientes em espera " +
    "\n04 - Excluir um Paciente da fila " +
    "\n05 - Passar um Paciente em espera para frente na fila " +
    "\n06 - Passar um Paciente em espera para tras na fila " +    
    "\n07 - Sair")

  return option
}

function newPacients() {
  let newPacient = prompt(
    "\nCadastro de Novo Paciente\n" +
    "Digite o nome do próximo paciente em espera: ")
    
    line.unshift(newPacient) 
    alert(line)

    let confirmation = confirm(
    "Gostaria de adicionar mais 1 paciente a fila de espera?")

    if(confirmation){
      newPacients() 
    }
}

function nextPacient() {
  let next = confirm(
    "Gostaria de chamar o próximo paciente em espera para atendimento?")
  if (next) {
    let nextInLine = line.pop()
    alert("O próximo paciente a ser atendido será:\n " + nextInLine)
  }

  let confirmation = confirm(
    "Gostaria de chamar mais 1 paciente em espera para atendimento?")

    if(confirmation){
      nextPacient() 
    }
}

function pacientsLine() {
  alert("A Fila de espera conta com os seguintes pacientes:\n " + line)
  let confirmation = confirm("Gostaria de exibir novamente?")
  
  if(confirmation){
    pacientsLine()}
}

function delPacients() {
  
  alert("Fila de Pacientes atual:\n " + line)
  let name = ""
  let delPacient = false
  let index = ""
  
  do{
    delPacient = confirm(
      "Gostaria de excluir algum paciente da fila de espera?")
    
    if(delPacient){
      name = prompt("Digite o nome do paciente a ser exlucido: ")
      if(name){
      index = line.indexOf(name)
        if(index !==-1) {
          line.splice(index, 1)
        }else {
        alert("Paciente nao encontrado! Digite o nome novamente")
        }
      }
    }
  } while(delPacient)
  
  alert("A Fila de espera conta com os seguintes pacientes:\n" + line +
  "\nO último paciente excluído foi o(a) Sr.(a): " + name)
}

function pacientfowards() {
  alert("Fila de Pacientes atual:\n " + line)
  let name = ""
  let pacientfoward = false
  let index = ""
  newLine = [...line]
  
  do{
    pacientfoward = confirm(
      "Gostaria de passar um paciente para frente na fila de espera?")
    
    if(pacientfoward){
      name = prompt("Digite o nome do paciente: ")
      if(name){
      index = line.indexOf(name)
        if(index !== -1) {
          newLine.splice(index, 1)
          newLine.splice(index + 1, 0, name)
        }else {
        alert("Paciente nao encontrado! Digite o nome novamente")
        }
      }
    }
  } while(pacientfoward)
  
  alert("A nova Fila de espera é a seguinte:\n" + newLine +
  "\nO último paciente alterado foi o(a) Sr.(a): " + name)

  line = newLine
  return line
}

function pacientbackwards() {
  alert("Fila de Pacientes atual:\n " + line)
  let name = ""
  let pacientbackward = false
  let index = ""
  newLine = [...line]
  
  do{
    pacientbackward = confirm(
      "Gostaria de passar um paciente para trás na fila de espera?")
    
    if(pacientbackward){
      name = prompt("Digite o nome do paciente: ")
      if(name){
      index = line.indexOf(name)
        if(index !== -1) {
          newLine.splice(index, 1)
          //deletando o index em sua posição
          newLine.splice(index - 1, 0, name)
        }else {
        alert("Paciente nao encontrado! Digite o nome novamente")
        }
      }
    }
  } while(pacientbackward)
  
  alert("A nova Fila de espera é a seguinte:\n" + newLine +
  "\nO último paciente alterado foi o(a) Sr.(a): " + name)

  line = newLine
  return line
}

function starSystem() {
  let choise = ""
  let result = "" 
  
  do {
    choise = menu()
    
    switch (choise) {
      case "1":
        result = newPacients()
        break;
      case "2":
        result = nextPacient()
        break;
      case "3":
        result = pacientsLine()
      break;
      case "4":
        result = delPacients()
        break;
      case "5":
        result = pacientfowards()
        break;
      case "6":
        result = pacientbackwards()
        break;
      case "7":
        alert("Encerrando o sitema...")
        break;
      default:
        alert("Opcao Inválida. Escolha novamente: ")
        break;
    }
  } while (choise !== "7");
}

