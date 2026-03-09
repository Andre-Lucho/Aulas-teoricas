class Produto {
  tipo = 'produto';
  nome: string;
  preco: number | undefined; //*
  constructor(nome: string, preco?: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const livro = new Produto('O Senhor dos Anéis');

// * como preco é um parâmetro opcional, ele pode ser undefined
