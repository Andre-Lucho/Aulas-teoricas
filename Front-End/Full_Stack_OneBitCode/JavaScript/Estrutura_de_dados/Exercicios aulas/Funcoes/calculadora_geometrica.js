let menu = ""
const resultado = ""
let quadrado = {}

do {
  menu = prompt("CALCULADORA GEOMETRICA\n" +
    "\nEscolha qual area que você gostaria de calcular das FIGURAS GEOMÉTRICAS abaixo: " +
    "\n1. Área do quadrado\n2. Área do retângulo\n3. Área do triângulo\n4. Área do trapézio\n5. Área do círculo\n6. Sair"
)

  function operacao(medidas) {
    let medidas = {}
      medidas.lado = parseFloat("") ,
      medidas.quadrado = parseFloat("")
      medidas.altura = parseFloat("") ,
      medidas.baseMaior = parseFloat("") ,
      medidas.baseMenor = parseFloat("") ,
      medidas.raio = parseFloat("")
      medidas.calculadora = function(a) {
        alert("Realizando a Operacao...")
        const resultado = operacao(a)
        return alert(resultado)
    }
  }
  
  // medidas.calculadora = function(a, b, operacao) {
  //   alert("Realizando a Operacao...")
  //   const resultado = operacao(a , b)
  //   return alert(resultado)
  // }  

  switch(menu){
    case "1":
      medidas.lado = parseFloat(prompt("Digite os seguintes valores:\n" +
    "Medida do lado = "))
      function areaQuadrado(){
        quadrado = (medidas.lado * medidas.lado)      
        return quadrado
      }
      medidas.calculadora(areaQuadrado)
    break
    
    case "2":
      medidas.lado = parseFloat(prompt("Digite os seguintes valores:\n" +
      "Medida do Lado = "))
      medidas.altura = parseFloat(prompt("Digite os seguintes valores:\n" +
    "Medida da Altura = "))
      function areaRetangulo(){
        return medidas.lado * medidas.altura
      }
      medidas.calculadora(medidas.lado, medidas.altura, areaRetangulo)
    break

    case "3":

    break

    case "4":
      medidas.base_maior = parseFloat(prompt("Digite os seguintes valores:\n" +
    "Medida da Base = "))
      medidas.base_menor = parseFloat(prompt("Digite os seguintes valores:\n" +
    "Medida da Base = "))
    break

    case "5":
    
    break

    case "6":
      medidas.raio= parseFloat(prompt("Digite os seguintes valores:\n" +
    "Medida da Base = "))
    break

    default:
      alert("Opcao invalida")
  }

} while(menu !=="6")