let quadrado = "*"

for (let linha = 0; linha<= 8; linha++){
  for(let coluna =0; coluna<= 15; coluna++){
    quadrado += "*"
    if(linha == 8){
      quadrado += "*" + "\n"
    } 
  }
}

alert(quadrado)