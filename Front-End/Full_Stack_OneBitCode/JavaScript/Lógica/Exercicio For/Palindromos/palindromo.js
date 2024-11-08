const palavra = prompt("Informe uma palavra:")
let palavraInvertida = []

for(let i = palavra.length -1; i>=0 ; i--){
  palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida) {
  alert(palavra + " e um palindromo!\n\n " + 
  palavra + "  -> e IGUAL a sua forma INVERTIDA -> " + palavraInvertida
  )

} else {
    alert(palavra + " nao e um palindromo!\n\n" +
    palavra + " -> e DIFERENTE da sua forma INVERTIDA -> " + palavraInvertida
    )
}

/* ATRIBUTOS FOR
  let i = palavra.lenght -1 -- 
  DECLARANDO E A ATRIBUINDO VAR I O TAMANHO DA PALAVRA DIGITADA PELO USUARIO -1
  POIS = O TAMANHA CORRESPONDE AOS NUMERO DE CARACTERES (INICIANDO EM 1), 
  MAS A POSICAO DE UM VETOR INICIA EM 0

  let i >=0
  QUERO QUE A CONTAGEM TERMINE NA ULTIMA POSICAO DO VETOR

  i--
  QUERO QUE O LACO DE VOLTAS DECRESCENTES ; 1 DE CADA VEZ

  palavraInvertida += palavra[i]
  A VAR palavraInvertida recebe um caractere na posicao i da VAR palavra a cada
  VOLTA, CONCATENANDO COM O ULTIMO VALOR */