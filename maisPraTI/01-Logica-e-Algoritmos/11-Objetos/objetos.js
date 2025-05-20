/*
Objetos
------------------------------------------------------ 
Permitem uma maior abstração da realidade:
Posso elencar diversas características da algo, fazendo com que a descrição de seus aspectos descrevam a realidade e que a descrevam de forma mais genérica, para poder elencar mais elementos da mesma realidade, porém com alguns aspectos diferentes, dependendo da necessidade.
Podem representar estados abstratos. 
Devem possuir: Características(o que ele tem), estados(como ele está) e funções(ações) 

São uma instância (derivados) de classes --> Classes são os protótipos de um Objeto
*/

let livro = {
  nome: 'Marley e Eu', // Notação do objeto
  anoDeLancamento: 2024,
  autor: 'Will Smith',
  nrPaginas: 12,
  autores: ['Scooby', 'Barcão', 'Super-cão'],
  genero: 'comédia',

  mostrarCaracteristicas: function () {
    return `${this.nome} é um livro para ficar alegre`;
  },
};

// console.log(livro.nome);
// console.log(livro.mostrarCaracteristicas());

let livro2 = livro; //por referência --> aponta para o original e toda alteração em 1 afeta o outro

livro2.capitulos = 10;
// console.log(livro);
// console.log(livro2);

let filme = {
  titulo: 'Batman',
  anoLancamento: 2018,
  geneto: ['ação', 'aventura', 'suspense'],
  atores: ['a', 'b', 'c'],

  mostrarCaracteristicas: () => {
    return `${this.titulo} é um filme impactante`;
  },
};

function Anime(nome, maisForte, maisFraco, nota) {
  return {
    nome,
    maisForte,
    maisFraco,
    nota,
  };
}

// Factory --> forma de criar novos objetos sem fazer referência aos antigos

// Estruturas de reptição For In, For of ...
// key = índice ou chaves

// For IN --> itera sobre chaves(índice)
// ------------------------------------------------------

let jogadores = ['Tatum', 'Jordan', 'Pipen'];

for (let key in jogadores) {
  // console.log(key); // Printa os Índices == 0, 1, 2
  // console.log(jogadores); // Printa a Array 3x, pois tenho 3 posições nessa Array
  // console.log(jogadores[key]); // Tatum, Jordan, Pipen
}

let supermercado = {
  nome: 'Zafarri',
  endereço: 'Av, Protasio Alves, n 3400',
  frutas: ['banana', 'maca', 'melao'],
  mercearia: ['pao', 'frios', 'doces'],
  bebidas: {
    agua: ['com gás', 'sem gas'],
    cerveja: ['Brahma', 'Skoll', 'Bud'],
  },
};

for (let key in supermercado) {
  // console.log(key); // nome, endereço, frutas, mercearia, bebidas
  // console.log(supermercado); // printa 5x o objeto supermercado
  // console.log(`${key}: ${supermercado[key]} `); // print do conteúdo de cada chave(propriedade) de 'supermercado', menos o objeto no índice 'bebidas'
}

for (let bebida in supermercado.bebidas) {
  // console.log(`${bebida}: ${supermercado.bebidas[bebida]}`);
  // print do conteúdo interno de 'supermercado.bebidas' - agua:  [ ], cerveja :[ ]
}

/* For OF --> itera sobre valores 
------------------------------------------------------
Usado para Objetos iteráveis que possuam o método [Symbol.iterator]())
OBS.: NÃO FUNCIONA para objetos literais!
------------------------------------------------------

let palavra = 'Gremio';

for (let char of palavra) {
  // console.log(char);
}

/* 
Exercício 1
------------------------------------------------------
Calcular as médias das notas dos alunos de um professor e digam se a turma do professor está na média */

let professor = {
  nome: 'Parker',
  materia: 'Física',
  notas: {
    aluno1: [5, 7, 8],
    aluno2: [3, 7, 4],
  },
};

let somaNotas = 0;
let numeroAlunos = 0;

for (let aluno in professor.notas) {
  somaNotas += Array.isArray(professor.notas[aluno])
    ? professor.notas[aluno].reduce((acc, notas) => acc + notas) /
      professor.notas[aluno].length
    : professor.notas[aluno];
  // se for array, preciso iterar; não for array, soma direto

  numeroAlunos++;
  // iterando sobre as posições(chaves) de notas
}

// professor.notas[aluno].length --> media de cada aluno

let media = somaNotas / numeroAlunos; // media geral da turma

if (media >= 6) {
  // console.log(`A média da turma é ${media} e está acima do padrão`);
} else {
  // console.log(`A média da turma é ${media} e está abaixo do padrão`);
}

/*
Semelhanças, diferenças e aplicações das estruturas de repetição FOR...IN e FOR...OF em JavaScript.
----------------------------------------------------------------------------------------------------------------------------------

Semelhanças:
------------------------------------------------------

Ambas são estruturas de controle de fluxo utilizadas para iterar sobre elementos.
Ambas permitem executar um bloco de código repetidamente.
Diferenças Fundamentais:

A principal diferença reside no que cada estrutura itera:
--------------------------------------------------------------------------

FOR...IN: Itera sobre as propriedades enumeráveis de um objeto. 
Isso inclui as propriedades herdadas da cadeia de protótipos. As chaves das propriedades são geralmente strings (ou Symbols a partir do ECMAScript 2015). A ordem de iteração não é garantida e pode variar entre diferentes ambientes JavaScript.

for...of: Itera sobre os valores de um objeto iterável. 
Objetos iteráveis são aqueles que possuem um método [Symbol.iterator]() que retorna um objeto iterador. Exemplos comuns incluem Arrays, Strings, Maps, Sets, NodeList e outros. Ele foi introduzido no ECMAScript 2015 (ES6) para fornecer uma maneira mais direta e segura de iterar sobre os valores de coleções. A ordem de iteração é geralmente a ordem de inserção dos elementos.

Forma de Aplicar:

1. For...in:
------------------
------------------

A sintaxe básica é:
------------------------------------------------------
for (const key in object) {
  // bloco de código a ser executado para cada propriedade
  console.log(`Chave: ${key}, Valor: ${object[key]}`);
}
Exemplo com um Objeto Literal: */

const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'Porto Alegre',
};

for (const propriedade in pessoa) {
  // console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
// Saída esperada (a ordem pode variar):
// nome: João
// idade: 30
// cidade: Porto Alegre

/*Importante ao usar for...in com Arrays:

Embora tecnicamente seja possível usar for...in com ARRAYS (já que arrays são objetos em JS com índices como propriedades), NÃO É RECOMENDADO. 
Isso ocorre porque for...in também itera sobre quaisquer propriedades não numéricas adicionadas ao array e sobre as propriedades herdadas do protótipo do Array.*/

const frutas = ['maçã', 'banana', 'laranja'];
frutas.novaPropriedade = 'uva';

for (const indice in frutas) {
  // console.log(indice);
}
// Saída esperada (a ordem pode variar):
// 0
// 1
// 2
// novaPropriedade

/*

2. For...of:
-------------------------
-------------------------

A sintaxe básica é:
------------------------------------------------------
for (const value of iterable) {
  // bloco de código a ser executado para cada valor
  console.log(value);
}
Exemplo com um Array: */

const cores = ['vermelho', 'verde', 'azul'];

for (const cor of cores) {
  // console.log(cor);
}
// Saída esperada:
// vermelho
// verde
// azul

//Exemplo com uma String:

const mensagem = 'Olá';

for (const letra of mensagem) {
  // console.log(letra);
}
// Saída esperada:
// O
// l
// á

//Exemplo com um Map:

const mapa = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

for (const [chave, valor] of mapa) {
  // console.log(`Chave: ${chave}, Valor: ${valor}`);
}
// Saída esperada:
// Chave: a, Valor: 1
// Chave: b, Valor: 2
// Chave: c, Valor: 3

//Exemplo com um Set:

const conjunto = new Set([10, 20, 30, 20]); // Sets armazenam apenas valores únicos

for (const numero of conjunto) {
  // console.log(numero);
}
// Saída esperada:
// 10
// 20
// 30

/*Em resumo:

Use for...in para iterar sobre as propriedades de um objeto. Seja cauteloso ao usá-lo com arrays.
Use for...of para iterar sobre os valores de objetos iteráveis como arrays, strings, Maps e Sets. 
É a maneira mais moderna e segura de percorrer coleções de dados em . */

/*

Iterando um Objeto literal com For...OF
------------------------------------------------------
------------------------------------------------------

Para obter um resultado semelhante ao que você obteve com for...in usando for...of, você precisaria de uma etapa intermediária para tornar o objeto iterável. Existem algumas maneiras de fazer isso:

1. Iterando sobre as Chaves do Objeto e Acessando os Valores:

Você pode usar Object.keys() para obter um array com as chaves do objeto e, então, iterar sobre esse array com for...of. */

let supermercado1 = {
  nome: 'Zafarri',
  endereço: 'Av, Protasio Alves, n 3400',
  frutas: ['banana', 'maca', 'melao'],
  mercearia: ['pao', 'frios', 'doces'],
  bebidas: {
    agua: ['com gás', 'sem gas'],
    cerveja: ['Brahma', 'Skoll', 'Bud'],
  },
};

for (const bebida of Object.keys(supermercado1.bebidas)) {
  console.log(`${bebida}: ${supermercado1.bebidas[bebida]}`);
}
// Saída:
// agua: [ 'com gás', 'sem gas' ]
// cerveja: [ 'Brahma', 'Skoll', 'Bud' ]

// Neste caso, Object.keys(supermercado.bebidas) retorna o array ['agua', 'cerveja'], que é iterável pelo for...of. Dentro do loop, bebida representa cada chave, e usamos essa chave para acessar o valor correspondente em supermercado.bebidas[bebida].

/*

2. Iterando sobre as Entradas (Chave-Valor) do Objeto:

Você também pode usar Object.entries() para obter um array de arrays, onde cada sub-array contém a chave e o valor de cada propriedade do objeto. */

for (const [bebida, tipos] of Object.entries(supermercado1.bebidas)) {
  console.log(`${bebida}: ${tipos}`);
}
// Saída:
// agua: [ 'com gás', 'sem gas' ]
// cerveja: [ 'Brahma', 'Skoll', 'Bud' ]

// Aqui, Object.entries(supermercado.bebidas) retorna [['agua', ['com gás', 'sem gas']], ['cerveja', ['Brahma', 'Skoll', 'Bud']]]. O for...of desestrutura cada sub-array em bebida (a chave) e tipos (o valor).

/*
Em resumo:

O for...in itera diretamente sobre as chaves de um objeto.
O for...of itera sobre os valores de objetos iteráveis. Objetos literais não são iteráveis por padrão.
Para obter um resultado semelhante ao for...in com for...of em um objeto literal, você precisa usar métodos como Object.keys() ou Object.entries() para criar um objeto iterável (um array) a partir das chaves ou das entradas do objeto. 
A escolha entre Object.keys() e Object.entries() dependerá se você precisa apenas das chaves ou de pares chave-valor durante a iteração.
*/

// Object.values --> transforma um Objeto em um Array
