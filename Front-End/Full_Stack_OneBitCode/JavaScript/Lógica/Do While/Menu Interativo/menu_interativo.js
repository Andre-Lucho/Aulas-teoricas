let option = parseFloat(prompt("Menu Interativo" +
"\nEscolha uma das seguintes opções e digite o n escolhido: " +
"\n01- opção X " + "\n02- opção 02" + "\n03- opção 03" + "\n04- opção 04" + "\n05- Encerrar"
))

// ALGORITMO ERRADO = QQUER OPCAO != 5, O ALG VAI FICAR EXECUTANDO (EM LOOP)
// OS COMANDOS PRESENTES EM DO E MOSTRANDO A OPCAO QUE EU ESCOLHI

// SE ESCOLHER 5 = ELE VAI ENTRAR EM DO, VERIFICAR O WHILE E, COMO WHILE E FALSO
// VAI EXECUTAR O RESTANTE(MOSTRANDO O MENU INTERATIVO), COMO SE FOSSE UMA EXECUCAO COMUM 
// = DE LEITURA E EXECUCAO DE ALGORITO INDEPENDENTE DAQUELE WHILE

do {
  alert("A opção escolhida foi " + option)
} while (option != 5 ){
    option = prompt("Menu Interativo" +
      "\nEscolha uma das seguintes opções e digite o n escolhido: " +
      "\n01- opção X " + "\n02- opção 02" + "\n03- opção 03" + "\n04- opção 04" + "\n05- Encerrar"
      )
    alert("A opção escolhida foi " + option)
  }

alert("\nO sistema está sendo encerrado... ")


