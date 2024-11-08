
// FUNCAO RECEBENDO MTOS PARAMENTROS

// 1)
//
function muitosParametros(nome, idade, apelido, dataDeNascimento, senha, enderço, aniversario){
  //....
  return nome + " " + idade + "  " + apelido + " " + dataDeNascimento + " " + senha + " " + enderço + " " + aniversario
}

//Ao chamar a funcao = Devo nominar todos os parametros acima
// aqui, o return retorna apenas os valores
console.log(muitosParametros("nome", "idade", "apelido", "dataDeNascimento", "senha", "endereco", "aniversario"))



//1.1) OU = com variavel ,ou seja, os dados ficam armazenados
//
function muitosParametros(nome, idade, apelido, dataDeNascimento, senha, enderço, aniversario){
  //....
  let parametros = nome + " " + idade + "  " + apelido + " " + dataDeNascimento + " " + senha + " " + enderço + " " + aniversario
  return parametros
}

//Ao chamar a funcao = Devo nominar todos os parametros acima
let dados = muitosParametros("nome", "idade", "apelido", "dataDeNascimento", "senha", "endereco", "aniversario")
console.log(dados)





// 2) mesmo tipo de funcao (recebe mtos paramentros), porem com apenas 1 elemento como parametro = objeto
//
function objetoComoParametro (usuario){
  //...
  
  return usuario
}

//declaro o objeto com os paramentros que quero
let dadosDoUsuario = {
  nome:"Andre",
  idade: 42, 
  apelido: "Deco", 
  dataDeNascimento: "10/" + "09/" + "1981",
  senha: 1234,
  enderço: "Av. Pirapo",
  aniversario: "10 Setembro",
}

//chamo a funcao, utilizando o objeto como parametro - que tem apenas 1 paramento
// aqui, o return retorna apenas os valores

console.log(objetoComoParametro(dadosDoUsuario))


//2.1) OU = com variavel ,ou seja, os dados ficam armazenados
//
function objetoComoParametro (usuario){
  //...
  let paramento = usuario
  return paramento
}

//declaro o objeto com os paramentros que quero
let dadosDoUsuario1 = {
  nome:"Andre",
  idade: 42, 
  apelido: "Deco", 
  dataDeNascimento: "10/" + "09/" + "1981",
  senha: 1234,
  enderço: "Av. Pirapo",
  aniversario: "10 Setembro",
}

//chamo a funcao, utilizando o objeto como parametro - que tem apenas 1 paramento
let novosDados = objetoComoParametro(dadosDoUsuario1)
console.log(novosDados)