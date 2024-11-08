 //usamos parsefloat, pois no returno temos um "+" = 
  //pode confundir com concatenar as strings que retornam do prompt

let lado = 0
let base = 0
let altura = 0
let baseMaior = 0
let baseMenor = 0
let raio = 0
let circulo = ""

executar()

function lerTexto(texto){
  return prompt(texto)
}

function lerTextocomValor(texto){
  let valor = parseFloat(prompt(texto))
  return valor
}

function escolherValores(){
  let quantLados = 0

  do {
    quantLados = lerTexto("Quantos lados possui a figura?") 
      switch (quantLados) {
        case "1":
          circulo = lerTexto("A figura a ser calculada e um circulo? Digite s(sim) ou n(nao): ")
          if (circulo == n) {
            lado = lerTextocomValor("Digite o valor do lado da figura:")
            return lado
          }else {
            raio = lerTextocomValor("Digite o valor do raio do circulo:")
            return raio
          }
        
        case "2":
          base = lerTextocomValor("Digite o valor da base da figura:")
          altura = lerTextocomValor("Digite o valor da altura da figura:")
          return base, altura      
        
        case "3":
          baseMaior = lerTextocomValor("Digite o valor da base maior da figura:")
          baseMenor = lerTextocomValor("Digite o valor da base menor da figura:")
          altura = lerTextocomValor("Digite o valor da altura da figura:")
          return baseMaior, baseMenor, altura
        
        default:
          prompt("Valor digitado incorreto")
          break;
      }
  } while (quantLados > 3);
} 

function exibirMenu(){
  return prompt(
    "CALCULADORA GEOMETRICA\n" +
    "\nEscolha qual area que você gostaria de calcular" +
    "\ndas FIGURAS GEOMÉTRICAS abaixo:\n" +
    "\n1. Calcular área do quadrado" +
    "\n2. Calcular área do retângulo" +
    "\n3. Calcular área do triângulo" +
    "\n4. Calcular área do trapézio" +
    "\n5. Calcular área do círculo" +
    "\n6. Sair\n"
  )
}

function calcularAreaQuadrado(lado){
  return calcularAreaRetangulo(lado, lado)
}

function calcularAreaRetangulo(base, altura){
  return base * altura
}

function calcularAreaTriangulo(base, altura){
  return calcularAreaRetangulo(base, altura) / 2
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura){
  return (baseMaior + baseMenor)* altura / 2
}

function calcularAreaCirculo(raio){
  return 3.14 * Math.pow(raio, 2)
}


function executar(){
  let opcao = ""
  let lados = ""
  
  do{
    opcao = exibirMenu()
    lados = escolherValores()
    let resultado = ""

    switch(opcao){
      case "1":
        resultado = calcularAreaQuadrado(lado)        
        break
      case "2":
        resultado = calcularAreaRetangulo(base, altura)                
        break
      case "3":
        resultado = calcularAreaTriangulo(base, altura)                
        break
      case "4":
        resultado = calcularAreaTrapezio(baseMaior, baseMenor, altura)                
        break
      case "5":
        resultado = calcularAreaCirculo(raio)                
        break
      case "6":
        alert("Encarrendo...")
        break
      default:
        alert("Opcao Invalida. Escolha novamente: ")
      }
      

    if (resultado){
      alert("Area calculada da Figura=\n" + resultado)
    }    
    
  } while(opcao !== "6")
}  

// TODO o algoritmo escrito com FUNCOES EM SEPARADO (para CADA PARTE) 
// e nas execucoes chamando cada uma = Mais ORGANIZADO e de FACIL LEITURA!!