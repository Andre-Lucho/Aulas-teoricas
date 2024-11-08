const property = {}
property.owner= "";
property.roons= "";
property.bathroons= "";
property.parking_lot= "";

let menu = ""

do{
  let properties = ""
  for(let i = 0; i< property.length; i++) {
    properties += (i +1);
  }

  menu = prompt("Cadastro de Novos Imoveis\n" +
    "\nNumero de Imoveis cadastrados: " + properties +
    "\n\nEscolha uma das seguintes opções e digite o n escolhido:" +
    "\n1. Cadastrar imovel\n2. Listar Imoveis Cadstrados\n3. Sair"
  )

  switch(menu){
    case("1"):
    property.owner += prompt("Escreva o nome do Proprietario: ")
    property.roons += prompt("Escreva a quantidade de quartos: ")
    property.bathroons += prompt("Escreva a qunatidade de banheiros: ")
    property.parking_lot += confirm("A unidade possui garagem?: ")
    break
    case("2"):
    alert(("Imoveis Cadastrados: ") + property)
    break
    case("3"):
    alert("O sistema está sendo encerrado... ")
    break
    default:
      alert("Opcao invalida")
  }  
  
} while (menu !== "3") 