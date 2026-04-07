function somar(a: number, b: number) {
  return a + b;
}

console.log(somar(5, 5));

type Produto = {
  nome: string;
  tipo: string;
};

const produtos: Produto[] = [
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

// ou

const produtos1: {
  nome: string;
  tipo: string;
}[] = [
  {
    nome: 'pão',
    tipo: 'forma',
  },
];

function filtrarLivros(dados: Produto[]) {
  return dados.filter((item) => item.tipo === 'livro');
}

console.log(filtrarLivros(produtos1));
