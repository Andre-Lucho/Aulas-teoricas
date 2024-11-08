let primNome = window.prompt("Qual é o seu primeito nome? Digite:")
let segunNome = window.prompt("Qual é o seu último nome? Digite:")
let campoEstudo = window.prompt("Qual é o seu campo de estudo de interesse? Digite:")
let anoAtual = window.prompt("Qual é o ano atual? Digite:")
let anoNasc = window.prompt("Qual é o seu ano de nascimento? Digite:")

window.alert(
  "Recruta Cadastrado com Sucesso!\n" +
  "\nNome Completo do Recuta: " + primNome + " " + segunNome +
  "\nCampo de interesse: " + campoEstudo +
  "\nIdade: " + (anoAtual - anoNasc)

)