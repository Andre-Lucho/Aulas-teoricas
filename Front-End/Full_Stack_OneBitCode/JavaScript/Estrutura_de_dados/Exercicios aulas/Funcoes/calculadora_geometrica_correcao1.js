executar()

function calcularAreaQuadrado(){
  const lado = prompt("Informe o lado do quadrado")
  return lado * lado
}

function calcularAreaRetangulo(){
  const base = prompt("Informe a base lado do retangulo")
  const altura = prompt("Informe o altura do retangulo")
  return base * altura
}

function calcularAreaTriangulo(){
  const base = prompt("Informe a base lado do triangulo")
  const altura = prompt("Informe o altura do triangulo")
  return base * altura / 2
}

function calcularAreaTrapezio(){
  const baseMaior = parseFloat(prompt("Informe a base lado do triangulo"))
  const baseMenor = parseFloat(prompt("Informe a base lado do triangulo"))
  const altura = prompt("Informe o altura do triangulo")
  return (baseMaior + baseMenor)* altura / 2
  //usamos parsefloat, pois no returno temos um "+" = 
  //pode confundir com concatenar as strings que retornam do prompt
}

function calcularAreaCirculo(){
  const raio = prompt("Informe o raio do circulo")
  return 3.14 * Math.pow(raio, 2)
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

function executar(){
  let opcao = ""
  
  do{
    opcao = exibirMenu()
    let resultado = ""

    switch(opcao){
      case "1":
        resultado = calcularAreaQuadrado()        
        break
      case "2":
        resultado = calcularAreaRetangulo()                
        break
      case "3":
        resultado = calcularAreaTriangulo()                
        break
      case "4":
        resultado = calcularAreaTrapezio()                
        break
      case "5":
        resultado = calcularAreaCirculo()                
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