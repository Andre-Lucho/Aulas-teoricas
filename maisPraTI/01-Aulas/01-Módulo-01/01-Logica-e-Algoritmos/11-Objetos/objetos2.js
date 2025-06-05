let livraria = [
  { titulo: '1984', autor: 'George Orwell', ano: 1984 },
  { titulo: 'O Profeta', autor: 'Endrew Berthold', ano: 2001 },
  { titulo: 'O Código Limpo', autor: 'Martin', ano: 2010 },
  { titulo: 'O Velho e o mar', autor: 'Hemmingway', ano: 1910 },
  { titulo: 'O Príncipe', autor: 'Maquiavel', ano: 2002 },
];

// 1) For...of para iterar e verificar os livros publicados antes de 2000:

for (let livro of livraria) {
  if (livro.ano < 2000) {
    console.log(livro.titulo);
  }
}
// mais facil com for...of

// com for...in:
for (let livro in livraria) {
  if (livraria[livro].ano < 2000) {
    console.log(livraria[livro].titulo);
  }
}
//  poderia fazer com todas as estruturas de repetição

let filmes = [
  { titulo: 'Sempre ao seu lado', genero: 'Drama' },
  { titulo: 'Missão impossível', genero: 'Ação' },
  { titulo: 'Interestelar', genero: 'Sci-fi' },
  { titulo: 'Jogo da Imitação', genero: 'Drama' },
  { titulo: 'Top Gun', genero: 'Ação' },
  { titulo: 'Deadpool', genero: 'Heroi' },
  { titulo: 'Sexta-feira 13', genero: 'Terror' },
  { titulo: 'Tarzan', genero: 'Aventura' },
  { titulo: 'Como eu Era Antes de Você', genero: 'Drama' },
  { titulo: '2001- Uma Odiseia no Espaço', genero: 'Sci-fi' },
];

// 2) Listar a contagem dos gêneros

let contagemFilmes = {};
filmes.forEach((filme) => {
  if (contagemFilmes[filme.genero]) {
    contagemFilmes[filme.genero]++; // se soma ao genero já existente
  } else {
    contagemFilmes[filme.genero] = 1; // cria um novo indice
  }
});

console.table(contagemFilmes);

// for (let genero in contagemFilmes) {
//   console.log(
//     `Estao presentes na lista ${contagemFilmes[genero]} do genero ${genero}`,
//   );
// }
// acima: iterando e dando console em contagemFilmes

// let generos = [];

// for (let filme of filmes) {
//   if (!generos.includes(filme.genero)) {
//     generos.push(filme.genero);
//   }
// }
// console.log(generos.length);
//  do colega---rever

// 3) Contruir uma função que calcula o fatorial de um número

function fatorial(numero) {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(fatorial);
}

fatorial(5);

// 4) Imprima os primeiros 10 números da sequencia de Fibonacci

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...]
// os 2 anteriores somados dao o 3

function sequenciaFibonacci() {
  let a = 0;
  let b = 1;
  // não tenho nada abaixo dos 2
  let temp;
  console.log(a, b);
  for (let i = 3; i <= 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}

sequenciaFibonacci(10);

// fazer com reduce!!

// a partir da posicao 3  = i+2

// 5) Fazer uma função de PA - Progressão aritmética

// numero + constante
// numero inicial + constante

// for(let i = numero; i)

function pa(primeiroTermo, razao) {
  let soma = 0;
  for (let i = 0; i < 10; i++) {
    let term = primeiroTermo + i * razao;
    console.log(term);
    soma += term;
  }
}

pa(2, 2);
