let properties = []
// let showproperty = []

const property = {
  type: "",
  rentSell: "",
  rooms: 0,
  bathrooms: 0,
  parking: true,
  neighborhood:""
}

// Como declarar as CHAVES em português para que:
// 1. elas façam a correspondência conrretas com os valores recebidos na funtion registerProperty()
// 2. sejam iteradas corretamente (em pt) quando listarmos os imoveis

let a = starSystem()

function menu() {
  option = prompt(
    "\nBem Vindo ao Sitema Cadastro de imóveis! " +
    "\n\nEscolha uma das opcoes abaixo:" +
    "\n01 - Cadastrar Novo imóvel" +
    "\n02 - Listar imóveis Cadastrados" +
    "\n03 - Excluir imóvel" +
    "\n04 - Sair")

  return option
}

function registerProperty() {
  
  property.type = prompt("O imovel é uma casa ou um apartamento?\nDigite (casa) ou (apart) para apartamento")
  property.rentSell = prompt("A administração será para aluguel ou venda?\nDigite (a) para aluguel ou (v) venda")
  property.rooms = parseFloat(prompt("Digite a quantidade de quartos presentes no imóvel:"))
  property.bathrooms = parseFloat(prompt("Digite a quantidade de banheiros presentes no imóvel:"))
  property.parking = confirm("O imóvel possiu garagem?\n Se sim, clique OK")
  property.neighborhood = prompt("Digite a localização (bairro) do imóvel:")
  
  const x = Object.values(property)
  properties.push(x)
  
  const showProperty1 = properties.map(function(prop, i) {
      return "Imovel: " + "0" + (i+1) + prop
    })
    
    alert(showProperty1)
    
    // const array = JSON.stringify(showProperty)
    //aqui não esta iterando

  if(confirm("Gostaria de adicionar mais 1 imovel?")){
    registerProperty()}

  return showProperty
}


function showProperties() {
  alert("Os imoveis cadastrados no sistemas são:\n" + properties)
  let confirmation = confirm("Gostaria de exibir novamente?")
  
  if(confirmation){
    showProperties()}
}

function starSystem() {
  let choise = ""
  let result = "" 
  
  do {
    choise = menu()
    
    switch (choise) {
      case "1":
        result = registerProperty()
        break;
      case "2":
        result = showProperties()
        break;
      case "3":
        result = pacientsLine()
        break;
      case "4":
        alert("Encerrando o sitema...")
        break;
      default:
        alert("Opcao Inválida. Escolha novamente: ")
        break;
    }
  } while (choise !== "4");
}

// alert("O(s) seguinte(s) imóvel(is) foi(foram) cadastrado(s):\n" 
// + properties.map(JSON.stringify).join('\n'))



// for(let i = 0; i< propertiesList.length; i++){
//   alert("Imovel N*: " + (i + 1) +
//     "\nProprietario: " + propertiesList[i].owner +
//     "\nQuartos: " + propertiesList[i].roons +
//     "\nBanheiros: " + propertiesList[i].bathroons +
//     "\nGaragem?: " + propertiesList[i].parking_lot
//   )