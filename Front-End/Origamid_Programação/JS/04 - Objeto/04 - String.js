// String
// É a Função Construtora de strings.
// Toda string possui as propriedades e métodos do prototype de String.

const comida = "pizza"; // --> retona uma string
const liquido = new String("água"); //--> retorna um objeto de String
const ano = new String(2018);

// comida e liquido têm todos os métodos e propriedades herdadas de String

// console.log(comida.toUpperCase());
// console.log(liquido.toUpperCase());

/* 
Propriedades e Métodos com String
--------------------------------- 

A) .lenght --> NÃO modifica str
tamanho da string
Qt de caracteres

// console.log(comida.lenght) --> 6
// console.log(comida.lenght - 1) --> último caracter 
lenght é a qt de caracteres --> 6 caracteres
porem , inicia no 0 o index

comida:  
6 caracteres = 6-1 = 5
* posição 5 = 0 - 5  => 'a' */

//
// B).charAt() --> NÃO modifica str
// Retorna o caracter de acordo com o index de (n).

const linguagem = "JavaScript";
linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

//
// C) .concat(str2, str3, ...) --> NÃO modifica str
// Concatena as strings (1° + demais) e retorna o resultado.

const frase = "A melhores linguagens são";
const linguagem2 = " JavaScript";
const fraseCompleta = frase.concat(linguagem2, " e ", "Python", "!!");
// console.log(fraseCompleta);

//
// D) .includes(search, position) --> NÃO modifica str
// Procura pela string exata dentro de outra string. A procura é Case Sensitive.
// position = começa a pesquisa apartir de qual posição??

const fruta = "Banana";
const fruta2 = "Melancia";

const listaFrutas = "Melancia, Banana, Laranja";
listaFrutas.includes(fruta); // true
// listaFrutas possui fruta?
fruta.includes(listaFrutas); // false
// fruta possui listaFrutas?

// console.log(listaFrutas.includes(fruta, 10)); //true
// console.log(listaFrutas.includes(fruta2, 10)); //false

//
//E) .endsWith(search) e .startsWith(search) --> NÃO modifica str
// Procura pela string exata dentro de outra string. A procura é case sensitive.

const fruta3 = "Banana";
fruta3.endsWith("nana"); // true
fruta3.startsWith("Ba"); // true
fruta3.startsWith("na"); // false

//
// F) .slice(start, end) --> Modifica str
// Corta a string de acordo com os valores de start e end.`

// SE PASSAR APENAS 1 CHART --> CORTA até aquela posição
// posição negativa --> corta de trás p frente

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";
transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax
transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

// G) .indexOf(search) e .lastIndexOf(search)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = "Guitarra";
instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
// console.log(instrumento.lastIndexOf("ra")); // 6

//  H) .padStart(n, str) e .padEnd(n, str) ---> alinhamento de chart
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const listaPrecos = ["R$ 99", "R$ 199", "R$ 1200"];
listaPrecos.forEach((item) => {
  // console.log(item.padEnd(10, ",0000")); // 10 caracteres total ; 5 a +
});

// console.log(listaPrecos[0].padStart(10, ".")); // .....R$ 99
// console.log(listaPrecos[0].padEnd(10, ".")); // R$ 99.....

// I) .repeat(n)
// Repete a string (n) vezes.

const frase2 = "Ta";
frase2.repeat(5); // TaTaTaTaTa

/*

J)str.replace(regexp|substr, newstr|function)
Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto.

OBS: Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
Veremos mais sobre Regular Expression */

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'
// console.log(preco);

// listaItens = listaItens.replace("Camisas", "Capacete");
// console.log(listaItens);

listaItens = listaItens.replace(/[ ]+/g, ", ");
// console.log(listaItens);

//
// K) split(padrao)
// Divide a string de acordo com o PADRÃO passado e RETORNA um ARRAY.
// join é um método de Array

let listaItens2 = "Camisas Bonés Calças Bermudas Vestidos Saias";
let arrayItens = listaItens2.split(" ");
// console.log(arrayItens);

arrayItens = listaItens.split(", "); //ln 132
// console.log(arrayItens);

arrayItens = listaItens.split(); // retorna um Array com 1 item, apenas
// console.log(arrayItens);

arrayItens = listaItens.split(""); // retorna cada caractere como 1 item
// console.log(arrayItens);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
console.log(htmlArray);
const htmlNovo = htmlArray.join("section");
//join é um método de Array --> retorna uma string
console.log(htmlNovo);

//
// L) .toLowerCase() e .toUpperCase()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para vericarmos input de usuários.

// OBS:
// Geralmente utilizado para verificar como foi escrita o input de um usuário

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

//
//
// M)str.trim(), str.trimStart(), str.trimEnd()
// Remove espaço em branco do início ou final de uma string.
const valor = " R$ 23.00 ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00 '
valor.trimEnd(); // ' R$ 23.00'

//
//
// N) + na frente de String ---> Transforma a string em number!

/*

// EXERCICIOS


1) Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento: 
*/

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

// let control = 0;
// transacoes.forEach((item) => {
//   const number = +item.valor.replace("R$ ", "");
//   control += number;
//   console.log(control);
// });
// console.log(control);

// outra forma, se quisesse pegar valores de itens com descrição diferente:

let totalTax = 0;
let totalReceived = 0;
transacoes.forEach((item) => {
  const number = +item.valor.replace("R$ ", "");
  if (item.descricao.includes("Taxa")) {
    totalTax += number;
  } else {
    totalReceived += number;
  }
});
// console.log(totalTax, totalReceived);

const totalSum = totalTax + totalReceived;
// console.log(totalSum);

/*

2)Retorne uma array com a lista abaixo:
*/
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const newArray = transportes.split(";");
// console.log(newArray);

/*

3) Substitua todos os span's por a's:
*/

const html = `<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
  </ul>`;

const newHTML = html.split("span").join("a");
// html.split("span") --> esta retornando um Array. Posso passar um metodo de array depois = .join
// posso ir passando metodos e propriedades infinitamente
// console.log(newHTML);

/*

4)Retorne o último caracter da frase 
*/

const frase3 = "Melhor do ano!";

const lastChart = frase3.charAt(frase3.length - 1);
// console.log(lastChart);

// ou

// console.log(frase3[frase3.length - 1]);

// ou

// console.log(frase3.slice(-1));

/*

5) Retorne o total de taxas 
*/
const transacoes2 = [
  "Taxa do Banco",
  "  TAXA DO PÃO",
  " taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let control = 0;
transacoes2.forEach(() => {
  item = item.toLowerCase().trim();
  // console.log(item);
  if (item.includes("taxa")) {
    control++;
  }
});

// console.log(control);
