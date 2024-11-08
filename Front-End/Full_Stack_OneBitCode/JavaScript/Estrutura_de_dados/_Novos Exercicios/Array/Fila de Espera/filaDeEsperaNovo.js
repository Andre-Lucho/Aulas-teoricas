let line = []
let system = playSystem()

// function receberPrompt (texto) {
//   let opcao = prompt(texto)
//   return opcao
// }

// function darAlert (texto) {
//   let opcao = alert(texto)
//   return opcao
// }


function menu() {
  option = prompt(
    "\nBem Vindo ao Sitema para Gerenciamento da Fila de Espera! " +
    "\n\nEscolha uma das opcoes abaixo: " +
    "\n\n01 - Cadastrar Novo Paciente em espera " +
    "\n02 - Listar Pacientes em espera " +
    "\n03 - Excluir um Paciente da fila " +
    "\n04 - Passar um Paciente em espera para frente na fila " +
    "\n05 - Passar um Paciente em espera para tras na fila " +    
    "\n06 - Sair")

  return option

  // NÃO ESTÁ RETORNANDO a var opcao
  // deve ser armazenada fora da função = o resultado da função exibirMenu = exibirMenu()
}

//PQ esta executando a funcao, se ela so esta sendo recebida na variavel opcaoFora ?? 

// let opcaoFora = exibirMenu() //= opcao //


function newPacients() {
  let newPacient = prompt(
    "\nCadastro de Novo Paciente\n" +
    "Digite o nome do próximo paciente em espera: ")
    
    line.push(newPacient) 
    alert(line)
 
    let confirmation = confirm(
    "Gostaria de adicionar mais 1 paciente a fila de espera?")

    if(confirmation){
      newPacients() }

      //não está necessitando do RETURN...pq??    
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
  // qd for true = vai entre no laço DO
  let index = ""
  
  do{
    delPacient = confirm(
      "Gostaria de excluir algum paciente da fila de espera?")
    
    if(delPacient){
      name = prompt("Digite o nome do paciente a ser exlucido: ")
      if(name){
      index = line.indexOf(name)
        if(index !==-1) {
            // novaFila = fila.splice(index, 1)
            // modifica o Array
            line.splice(index, 1)
        }else {
        alert("Paciente nao encontrado! Digite o nome novamente")
        }
      }
    }
  } while(delPacient)
  
  alert("A Fila de espera conta com os seguintes pacientes:\n" + line +
  "\nO último paciente excluído foi o(a) Sr.(a): " + name)

  return line

    //não está necessitando do RETURN...pq?? 
}

function pacientfowards() {
  alert("Fila de Pacientes atual:\n " + line)
  let name = ""
  let pacientfoward = false
  let index = ""
  let newLine = [...line];
  //operador spread
  
  do{
    pacientfoward = confirm(
      "Gostaria de passar um paciente para frente na fila de espera?")
    
    if(pacientfoward){
      name = prompt("Digite o nome do paciente: ")
      if(name){
      index = line.indexOf(name)
        if(index !== -1) {
          newLine.splice(index, 1)
          //deletando o index em sua posição
          // o array aqui perde 1 posição e se move "para tras" formando o nome array com o name deletado  
          newLine.splice(index + 1, 0, name)
          // com o index já deletado, indica ao splice que uma posição a frente, nada será deletado, 
          // e será inserido o name
          // obs: náo esqucer que o name esta armazenado em uma variavel

        }else {
        alert("Paciente nao encontrado! Digite o nome novamente")
        }
      }
    }
  } while(pacientfoward)
  
  alert("A nova Fila de espera é a seguinte:\n" + newLine +
  "\nO último paciente alterado foi o(a) Sr.(a): " + name)

  // return newLine
}


function pacientbackwards() {
  alert("Fila de Pacientes atual:\n " + line)
  let name = ""
  let pacientbackward = false
  let index = ""
  let newLine = [...line];
  //operador spread
  
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
          // com o index deletado, indica ao splice que uma posição para trás, nada será deletado, 
          // e será inserido o name

        }else {
        alert("Paciente nao encontrado! Digite o nome novamente")
        }
      }
    }
  } while(pacientbackward)
  
  alert("A nova Fila de espera é a seguinte:\n" + newLine +
  "\nO último paciente alterado foi o(a) Sr.(a): " + name)

  return newLine
}


function playSystem() {
  let choise = "" 
  
  do {
    choise = menu()
    result = ""

    switch (choise) {
      case "1":
        result = newPacients()
        break;
      case "2":
        result = pacientsLine()
        break;
      case "3":
        result = delPacients()
      break;
      case "4":
        result = pacientfowards()
        break;
      case "5":
        result = pacientbackwards()
        break;
      case "6":
        alert("Encerrando o sitema...")
        break;
      default:
        alert("Opcao Invalida. Escolha novamente: ")
        break;
    }
  } while (choise !== "6");
  
}


