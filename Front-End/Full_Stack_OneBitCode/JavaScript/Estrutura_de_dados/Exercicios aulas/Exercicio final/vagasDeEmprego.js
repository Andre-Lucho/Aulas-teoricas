let vagas = []

function criarNovaVaga () {
  do {
    exibirTexto("Para criar uma nova vaga de emprego, voce deve inserir as seguintes informações: " +
  "\nNome para a vaga" +
  "\nDescrição para a nova vaga" + 
  "\nData limite para a inscrição para a vaga")
  
  let nomeVaga = receberopcao("Digite um nome para a nova vaga: ")
  let descricaoVaga = receberopcao("Digite uma descrição a nova vaga: ")
  let dataLimite = receberopcao("Digite uma data limite para o encerramento da inscrição (dd/mm/aa): ")
  let confrimacao = ""
    confrimacao = confirm(
    "Confirme os dados digitados:\n " + 
    "\nNome para a vaga:" + nomeVaga + 
    "\nDescrição para a nova vaga: " + descricaoVaga + 
    "\nData limite para a inscrição para a vaga: " + dataLimite
    )
        
    
    if (confrimacao) {
      let novaVaga = { nomeVaga, 
        descricaoVaga, 
        dataLimite, 
        candidatos: [] }
      for (let i = 0; i < dadosVaga.length; i++){
        dadosVaga.concat(dadosVaga[i])
    }
  }

  } while (confrimacao == false)
  
  const outraVaga = receberopcao("Gostaria de cadastrar uma nova vaga? Digite: s(Sim) ou n(Não)" )
  
  if (outraVaga == "s") {
    criarNovaVaga()
  }
}


function exibirTexto(texto) {
  alert(texto)
}


function receberopcao (texto) {
  let opcao = prompt(texto)
  return opcao
}

function menuPrincipal() {
  let escolha = ""
  do {
    receberopcao(
    "Bem vindo ao Sistema de Vagas OneBitEmpregos" +
    "\nDigite a opcao desejada: " +
    "\n1.Listar vagas disponíveis" +
    "\n2.Criar um nova vaga" +
    "\n3.Visualizar uma vaga" +
    "\n4.Inscrever um candidato em uma vaga" +
    "\n5.Excluir uma vaga" +
    "\n6.Sair" 
    )
    escolha = opcao
        
    switch (escolha) {
      case "1":
        listarVagas()
        break;
      case "2":
        criarNovaVaga()
        break;
      case "3":
        exibirVaga()
        break;
      case "4":
        inscreverCandidato()
        break;
      case "5":
        excluirVaga()
        break;
      case "6":
        alert("Saindo...")
        break;
    
      default:
        alert("Opcao Incorreta. Digite uma nova opcao: ")
        break;
    }
  } while (opcao !== 6);
}

