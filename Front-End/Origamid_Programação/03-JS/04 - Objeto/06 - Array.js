/*
Arrays
--------------- 

Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais. */

const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];
const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    // console.log(nome);
  },
];
// dados[2]("Ford"); // acessa a função === Ford
dados[1][2].cor; // acessa o objeto da array dentro da Array === Azul

// OBS --> qt maior a quant de elementos e mais tipos diferentes de dados tivermos dentro de uma Array, maior o tempo de processamento; elem vazios tb aumenta o tempo

/*
A) Construção de Arrays
------------------------------------
------------------------------------ 


Toda array herda os métodos e propriedades do protótipo do construtor Array.
Os valores das array's não são estáticos */

const instrumentos2 = ["Guitarra", "Baixo", "Violão"];
const carros = new Array("Corola", "Mustang", "Honda");
carros[1]; // Mustang
carros[2] = "Ferrari";
carros[10] = "Parati";
carros.length; // 11

// console.log(carros);

dados[1][2].marca = "Renault";
// console.log(dados[1][2]);

/*
a) Array.from()
------------------- 

Array.from() é um método utilizado para transformar array-like objects, em uma array.*/

// 1)
let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

// 2)
// aqui tb temos um array-like = objeto que se parece um array
const carros2 = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 3, //--> é necessário passar seu length como prorpiedade
};

const carrosArray = Array.from(carros2);
// console.log(carrosArray);

/*

b) Array.isArray()
---------------------- 

Verica se o valor passado é uma array e retorna um valor booleano. */

let li2 = document.querySelectorAll("li"); // NodeList
Array.isArray(li2); // false

li2 = Array.from(li); // Array
Array.isArray(li2); // true

/*

c) Array.of(), Array() e new Array()
------------------------------------ 
Verica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array. */

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

const ab = Array.of("5", "3", "2", "10"); //--> array de string

//
// Transformando um Array de string === Array de number

const arr = ["5", "3", "2", "10"];

let newarr = [];
arr.forEach((valor, i) => (newarr[i] = Number(valor)));
// console.log(newarr);

/*

B) Propriedades e Métodos do Prototype
------------------------------------
------------------------------------ 


[].length retorna o tamanho da array.
------------------------------------------ */

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
frutas.length; // 3
frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2

/*

B.1) Métodos Modicadores
----------------------

Os próximos métodos que vamos falar sobre, são métodos modicadores (mutator methods). 
Além de retornarem um valor, eles modicam a array original. 

a) [].sort()
--------------

[].sort() organiza a pelo unicode. ordem os caracteres
*/

const instrumentos3 = ["Guitarra", "Baixo", "Violão"];
instrumentos3.sort();
instrumentos3; // ['Baixo', 'Guitarra', Violão]
const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

/*

b) [].unshift() e [].push()
------------------------------

[].unshift() adiciona elementos ao início da array;
também retorna o length da mesma. 
[].push() adiciona elementos ao final da array e retorna o length da mesma.*/

const cars = ["Ford", "Fiat", "VW"];
cars.unshift("Honda", "Kia"); // 5
cars; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];
// console.log(cars.unshift()); //--> retornando a qt de elems no array 'cars'

cars.push("Ferrari"); // 6
// console.log(cars); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];
// console.log(cars.push()); //--> retornando a qt de elems no novo array 'cars'

/*

c) [].shift() e [].pop()
---------------------------- 

[].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo. */

const cars2 = ["Ford", "Fiat", "VW", "Honda"];
const primeiroCarro = cars2.shift(); // ---> retorna 'Ford'
// console.log(cars2); // tirou o elem da array cars 2 === ['Fiat', 'VW', 'Honda'];
const ultimoCarro = cars2.pop(); // ---> retorna'Honda'
// console.log(cars2); // tirou o elem da ultima nova array cars2 ===['Fiat', 'VW'];

/*

d) [].reverse()
-------------------------------

[].reverse() inverte os itens da array e retorna a nova array. */

const cars3 = ["Ford", "Fiat", "VW", "Honda"];
// console.log(cars3.reverse()); // retona a nova array === ['Honda', 'VW', 'Fiat', 'Ford'];
// console.log(cars3); // ===

/*

e) [].splice()
--------------------------

[].splice(index, remover, item1, item2, ...) adiciona valores na array A PARITR do INDEX( do index EM DIANTE). 
Remove a quantidade de itens que for passada no segundo parâmetro (retorna os itens removidos). */

const suvs = ["Ford", "Fiat", "VW", "Honda"];
// suvs.splice(1, 0, "Kia", "Mustang"); // [] -- não retona nada, pois nada foi removido
// suvs; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']
suvs.splice(2, 2, "Ferrari");
// console.log(suvs); // ['Ford', 'Kia', 'Ferrari', 'VW', 'Honda']

/*

f) [].copyWithin()
------------------------------------ 
[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o nal e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.*/

["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']
["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

/*

g) [].fill()
------------------------------------ 

[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.*/

["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ['Banana', 'Banana', 'Banana', 'Banana']
["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2); //--> a partir da posição 2
// ['Item1', 'Item2', 'Banana', 'Banana']
["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3); //--> a partir da posição 1, preenche Banana' ATÉ a posição 3
// ['Item1', 'Banana', 'Banana', 'Item4']

/*

B.2) Métodos de Acesso 
---------------------------------

Os métodos abaixo não modicam a array original, APENAS RETORNAM uma array modicada.


a)[].concat()
------------------------------------ 

[].concat() irá concatenar a array com o valor passado. */

const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];
const maisTransportes = [].concat(transporte1, transporte2, "Van");
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

/*

b) [].includes(), [].indexOf() e [].lastIndexOf()
------------------------------------ 

[].includes(valor) verica se a array possui o valor e retorna true ou false. [].indexOf(valor) verica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último. */

const linguagens = ["html", "css", "js", "php", "python", "js"];
linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // ---> retorna o 1° elem === 2
linguagens.lastIndexOf("js"); // 5

/*
[].join()
----------------------

c) [].join(separador) junta todos os valores da array e RETORNA uma STRING com eles. 
Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
OBS --> esta retornando string, mas permanece uma array. */

const linguagens2 = ["html", "css", "js", "php", "python"];
// console.log(linguagens2.join("")); // 'html,css,js,php,python'
linguagens2.join(""); // 'htmlcssjsphppython'
linguagens2.join(" "); // 'html css js php python'
linguagens2.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2"); // ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1"); // <h1>Título Principal</h1>
// console.log(htmlString); // -->Devo guardar em uma variavel para manter o join

// console.log(linguagens2.join("', '"));
// console.log(linguagens2);

/*

d) [].slice()
------------------------------------ 

[].slice(inicio, final) retorna os itens da array A PARTIR pelo início 
e indo ATÉ (NÃO INCLUI) o valor de final.*/

const linguagens3 = ["html", "css", "js", "php", "python"];
linguagens3.slice(3); // ['php', 'python']
linguagens3.slice(1, 4); // ['css', 'js', 'php']

/*

=> !!!!! IMPORTANTE !!!!
---------------------------
--------------------------- */

const cloneLinguagens1 = linguagens3;
// É DIFERENTE:

const cloneLinguagens2 = linguagens3.slice();
// PQ?

// cloneLinguagens1 faz referência a linguagens3 (link); toda a alteração em lingugens3 será mod em cloneLinguagens1

// AGORA:
// cloneLinguagens2 É UM CLONE VERDADEIRO DE linguagens3.slice()

// console.log(cloneLinguagens1); // ['html', 'css', 'js', 'php', 'python']
linguagens3.pop();
// console.log(cloneLinguagens1); // ['html', 'css', 'js', 'php']

// console.log(cloneLinguagens2); // ['html', 'css', 'js', 'php', 'python']
linguagens3.pop();
// console.log(cloneLinguagens2); // ['html', 'css', 'js', 'php', 'python']
// CLONE

/*

Exercícios
--------------------- 
*/

// A)
// ------------

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];

// 1) Remova o primeiro valor de comidas e coloque em uma variável

// const newFood = comidas.slice();
// const newFood2 = comidas.slice();
// console.log(newFood);

const a = comidas.slice(1);
console.log(a); //--> sem mod array

// comidas.shift();
// const comidas2 = comidas;
// console.log(comidas2);

// 2) Remova o último valor de comidas e coloque em uma variável

const b = comidas.slice(0, -1);
console.log(b); //--> sem mod array

// newFood.pop();
// const comidas3 = newFood;
// console.log(comidas3);

// 3) Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);

// 4) Adicione 'Peixe' e 'Batata' ao início da array

comidas.unshift("Peixe", "Batata");
console.log(comidas);

// B)
// ------------

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];

// 1) Arrume os estudantes em ordem alfabética
const newEstudanteestudantes = estudantes.sort();
console.log(estudantes);

// 2) Inverta a ordem dos estudantes

console.log(estudantes.reverse());
console.log(estudantes);

// 3) Verifique se Joana faz parte dos estudantes

console.log(estudantes.includes("Joana"));

// 4) Verifique se Juliana faz parte dos estudantes

console.log(estudantes.includes("Juliana"));

// C)
// ------------

let html = `<section>
<div>Sobre</div>
  <div>Produtos</div>
  <div>Contato</div>
  </section>`;

// 1) Substitua section por ul e div com li, utilizando split e join

// const abc = html.split("section").join("ul");
// console.log(abc);

// const newHtml = abc.split("div").join("li");
// console.log(newHtml);

//ou

html = html.split("section").join("ul").split("div").join("li");

console.log(html);

// string = split -> retona []. join --> retorna string --> split --> array

// observar o let = html

// D)
// ------------

const carros3 = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover, salve a array original em outra variável

const carrosClone = carros3.slice();

carros3.pop();

console.log(carros3);
console.log(carrosClone);
