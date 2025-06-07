function nomesOrdenadosPorPreco(produtos) {
  let copia = produtos.slice();
  copia.sort((a, b) => a.preco - b.preco);

  let nomes = copia.map((prod) => prod.nome);

  return nomes;
}

let produtos = [
  { nome: 'Celular', preco: 15 },
  { nome: 'Caderneta', preco: 12 },
  { nome: 'notebook', preco: 1 },
  { nome: 'DVD', preco: 0.5 },
];

console.log(nomesOrdenadosPorPreco(produtos));
