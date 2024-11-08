// // METODO REDUCE // //

// REDUCE: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final

// SEM A UTILIZACAO DO METODO

// let nivelTotal = 0
// for (let i = 0; i < personagens.length; i++) {
//   nivelTotal += personagens[i].nivel
// }

// COM A UTILIZACAO DO REDUCE

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)

// console.log(nivelTotal)

// OUTRAS UTILIZACOES DO METODO REDUCE = 
//REORGANIZACAO DO ARRAY-MAE EM OUTROS ARRAYS "FILTRADOS" 

// const racas = personagens.reduce(function (valorAcumulado /*AGRUPAMENTO DOS DADOS*/, personagem /*o que quero transformar*/) {
  
//   if (valorAcumulado[personagem.raca]) {
//    //FAZ UMA VERIFICAÇÃO SE O VALOR ACUMULADO, OU SEJA, SE O RESULTADO DO AGRUPAMENTO DOS DADOS 
//   //NA CHAVE PERSONAGEM:RAÇA É TRUE = SÃO DA MESMA RAÇA

//      valorAcumulado[personagem.raca].push(personagem)
//     // SE SIM, VAI FAZENDO O PUSH NOS DE MESMA RAÇA
//     // cada RAÇA REORGANIZADA VIRA UM ARRAY, COM OBJETOS PARA OS ELMS DIFERENTES DENTRO DAQUELA RAÇA

//   } else {
//     valorAcumulado[personagem.raca] = [personagem]
//      // SE NÃO, CRIA UM NOVO OBJETO
//   }
//   return valorAcumulado
// }, {})
// // valor inicial é um OBJETO VAZIO = vou reorganizar meus novos Arrays na forma de OBJETOS

// console.log(racas)

const cadastro = [
  { nome: "Andre", sobrenome: "Lucho", telefone: 991431880, email: "andretlucho@gmail.com", CPF: 123456789},
  { nome: "Dione", sobrenome: "Tanuri", telefone: 999572204, email: "dionetanuri@gmail.com", CPF: 987654321},
  { nome: "Eduardo", sobrenome: "Lucho", telefone: 999886655, email: "eduardolucho@gmail.com", CPF: 235487965},
  { nome: "Deyse", sobrenome: "Tanuri", telefone: 999663355, email: "deysetanuri@gmail.com", CPF: 856974536},
  { nome: "Esmeralda", sobrenome: "Diniz", telefone: 981557788, email: "esmeralda@gmail.com", CPF: 587469883}
]

const cliente = cadastro.reduce(function (mesmoSobrenome, novoArray){
  if(mesmoSobrenome[novoArray.sobrenome]) {
    mesmoSobrenome[novoArray.sobrenome].push(novoArray)
  } else {
    mesmoSobrenome[novoArray.sobrenome] = [novoArray]
  }
  return mesmoSobrenome
}, {})

console.log(cliente)