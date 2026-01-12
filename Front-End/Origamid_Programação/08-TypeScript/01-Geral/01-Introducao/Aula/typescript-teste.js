//@ts-check
const frase1 = 'Front End';
const total1 = 100.05;
const empresas1 = ['Apple', 'Microsoft'];
const body = document.body;
const button1 = document.querySelector('button');

frase.toLowerCase();
frase.toFixed();

total.toFixed();
total.toLowerCase();

empresas.map((empresa) => empresa.toUpperCase());
empresas.toLowerCase();

body.style.backgrounds = '#000';
body.map((item) => item);

console.log(button);
button.click();

const operacao = true + 'teste' - (4 * {}) / [];
const strings1 = 'Front ' + 'End';
const numbers1 = 100 + 200;
console.log(strings, numbers);

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
