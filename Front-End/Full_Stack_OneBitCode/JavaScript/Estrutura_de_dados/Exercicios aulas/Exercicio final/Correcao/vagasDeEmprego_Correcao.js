
// vagas no escopo + externo = para ficar disponivel em todo o codigo
const vagas = []

function listarVagas() {
  // mais facil p concatenar os valores em formato de texto
  
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // Formato da Lista de Vagas:
    //1. nome, (x candidatos)
    textoFinal += indice + ". "
    //terei as propriedades da vaga em um objeto = propriedade - nome
    textoFinal += vaga.nome
    //o objeto tambem tera um Array candidatos
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return alert("Listagem de Vagas: \n" + textoFinal)
  
  }, "")

  alert(vagasEmTexto)
}

function criarNovaVaga() {
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe um descrição para a vaga:")
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

  const confirmacao = confirm(
    "Confirme os dados informados para a nova vaga: \n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if (confirmacao) {
    // cadidatos = Array com a quantidade de candidatos cadastrados para essa vaga
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    //a cada nova vaga, o objeto sera add no Array VAGAS
    vagas.push(novaVaga)
    alert("Vaga Criada")
  } else {
    alert("Vaga NÃO criada!")
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:")
  
  if (indice >=vagas.length || indice< 0) {
    alert("Indice Invalido. Saindo...")
    // Usamos o RETURN aqui com funcao IGUAL ao BREAK - a funcao para de funcionar
    return    
  }
  
  //APONTANDO PARA UM OBJETO DO ARRAY VAGAS NA POSICAO indice
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
    return textoFinal + "\n - " + candidato
  }, "")

  alert(
    "Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos:" + candidatosEmTexto
  )
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):")
  const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada")
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluída.")
  }
}

function menuPrincipal() {
  let opcao = ""
  opcao = prompt(
    "Bem vindo ao Sistema de Vagas OneBitEmpregos" +
    "\n\nDigite a opcao desejada: " +
    "\n\n1.Listar vagas disponíveis" +
    "\n2.Criar um nova vaga" +
    "\n3.Visualizar uma vaga" +
    "\n4.Inscrever um candidato em uma vaga" +
    "\n5.Excluir uma vaga" +
    "\n6.Sair" 
    )
  return opcao
}

function executar() {
  let opcao = ""
  
  do {
    opcao = menuPrincipal()  
  
    switch (opcao) {
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
        break
      default:
        alert("Opcao Incorreta. Digite uma nova opcao: ")
        
    }
  } while (opcao !== "6")
}


executar()