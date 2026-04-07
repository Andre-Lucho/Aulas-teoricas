//@ts-check
const frase1 = 'Front End';
const total1 = 100.05;
const empresas1 = ['Apple', 'Microsoft'];
const body = document.body;
const button1 = document.querySelector('button');

frase1.toLowerCase();
frase1.toFixed();

total1.toFixed();
total1.toLowerCase();

empresas1.map((empresa) => empresa.toUpperCase());
empresas1.toLowerCase();

body.style.background = '#000';
body.map((item) => item);

console.log(button1);
button1.click();

const operacao = true + 'teste' - (4 * {}) / [];
const strings1 = 'Front ' + 'End';
const numbers1 = 100 + 200;
console.log(strings1, numbers1);

const produtos = [
  {
    nome: 'O Senhor dos Anéis',
    tipo: 'livro',
  },
  {
    nome: 'A Guerra dos Tronos',
    tipo: 'livro',
  },
  {
    nome: 'Dark Souls',
    tipo: 'jogo',
  },
];

function filtrarLivros(dados) {
  return dados.filter((item) => item.tipo === 'livro');
}

console.log(filtrarLivros(produtos));
