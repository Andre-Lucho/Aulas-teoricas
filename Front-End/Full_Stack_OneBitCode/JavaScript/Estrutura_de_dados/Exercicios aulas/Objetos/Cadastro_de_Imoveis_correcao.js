let propertiesList = []
let menu = "" // DEve ser declarada aqui
const property = {}
let confirmation = []

// as variaveis, arrays e Obejtos PODEM SER DECLARADAS aqui... 
// DEVEMOS CUIDAR DO TIPO - "confirmation" DEVE SER  UM ARRAY

do{
  menu = prompt("Cadastro de Imoveis\n" +
    "\nNumero de Imoveis Cadastrados: " + propertiesList.length +
    "\n\nEscolha uma das seguintes opções: " +
    "\n1. Cadastrar imovel\n2. Listar Imoveis Cadstrados\n3. Sair"
  )

  switch(menu){
    case "1":
      property.owner = prompt("Escreva o nome do Proprietario: ")
      property.roons = parseFloat(prompt("Escreva a quantidade de quartos: "))
      property.bathroons = parseFloat(prompt("Escreva a qunatidade de banheiros: "))
      property.parking_lot = prompt("A unidade possui garagem?: (S/N)")

      confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + property.owner +
        "\nQuartos: " + property.roons +
        "\nBanheiros: " + property.bathroons +
        "\nPossui Garagem? " + property.parking_lot
      )
        if(confirmation){
          propertiesList.push(property)
          alert("Imovel Salvo")
        } else {
          alert("Voltando ao menu...")
        } 
    break
    
    // COMO FAZER, CASO O USUARIO NAO CONFIRME ALGUMA INFO, 
    // VOLTE A PEDIR OS DADOS, SEM VOLTAR AO MENU PRINCIPAL??

    case "2":
      for(let i = 0; i< propertiesList.length; i++){
        alert("Imovel N*: " + (i + 1) +
          "\nProprietario: " + propertiesList[i].owner +
          "\nQuartos: " + propertiesList[i].roons +
          "\nBanheiros: " + propertiesList[i].bathroons +
          "\nGaragem?: " + propertiesList[i].parking_lot
        )
      }
    break
    
    case "3":
    alert("O sistema está sendo encerrado... ")
    break
    default:
      alert("Opcao invalida")
  }  
  
} while (menu !== "3")