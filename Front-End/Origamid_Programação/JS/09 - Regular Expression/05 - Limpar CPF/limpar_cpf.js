const cpfList = document.querySelectorAll(".cpf li");
console.log(cpfList);

// 1.

// const a = function elementsInnerText(cpfList) {
//   const arrayElements = Array.from(cpfList); //Transformando o conj de elem em Array e não cada elem --> não necessito um loop aqui
//   console.log(arrayElements);
//   return arrayElements.map((li) => {
//     return li.innerText; //pegando o conteúdo
//   });
// };

// console.log(a(cpfList));

// tranformo uma Array de Li's(com métodos e prop) em uma Array de somente números e puxo do HTML essa Array p o console!! */

/* OBS:
1. Pq não forEach --> forEach não permite modificação na Array
O forEach não tem como objetivo trazer um retorno válido, apenas fazer as modificações em cada item...O método sempre retorna 'undefined' === Não tem retorno
2. Se o objetivo for modicar os valores da array atual, sempre utilize o .MAP, pois assim uma nova array com os valores modicados é retornada */

// 2.

const arrayCpfs = [...cpfList];
console.log(arrayCpfs); // usando desestruturação para transformar uma NodeList em Array direto!

const elementsInnerText = ([...cpf]) => {
  // console.log(...cpf);
  return cpf.map((element) => element.innerText);
  // forma reduzida da Arrow Func n necessita return!!
};

console.log(elementsInnerText(cpfList));

// Functions
// -----------------
// outra forma--> com (2x Arrow function reduzidas):

// 1. Pegar apenas o texto contino no NodeList
// const elementsInnerText = ([...elements]) =>
//   elements.map((element) => element.innerText);

// // 2. Limpar o CPF
const cleanCPF = (cpf) => {
  // const regexp = /[\.-\s]/g; //ou
  const regexp = /[\D]/g;
  return cpf.replace(regexp, ""); // só numeros
};

// // 3. Reconstruir o CPF no formato padrão desejado
const newCPF = (cpf) => {
  const regexp = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
  return cpf.replace(regexp, "$1.$2.$3-$4");
};

// 4. Formatar CPF
// const formatCPF = (cpfs) => {
//   const cpfclean = cpfs.map((cpf) => cleanCPF(cpf));
//   const cpfnew = cpfclean.map((cpf2) => newCPF(cpf2));
//   return cpfnew;
// };

/*
IMPORTANTE: 

outra forma para formatCPF (acima)
-------------------------------------------------------
1.qd o retorno é uma Callback(outra função) que retorna apenas o processo com aquilo que se itera --> passo apenas a(s) função(oẽs) de Callback!! 
2.linkando aqui pois ambas retornam Arrays!
*/
const formatCPF = (cpfs) => cpfs.map(cleanCPF).map(newCPF);

// // 5. Agrupando as funções
const substituirCPF = (cpfsElemets) => {
  const cpfs = elementsInnerText(cpfsElemets);
  const cpfFormated = formatCPF(cpfs);
  console.log(cpfFormated);

  cpfsElemets.forEach(
    (element, index) => (element.innerText = cpfFormated[index])
  ); //Substituindo os cpf's formatados no HTML
};

substituirCPF(cpfList);

// const finalCPF = elementsInnerText(cpfSelection);

// console.log(formatCPF(finalCPF));
// console.log(cleanCPF("222. 222-222-22"));
// console.log(newCPF("22222222222"));
// console.log(elementsInnerText(cpfList));
