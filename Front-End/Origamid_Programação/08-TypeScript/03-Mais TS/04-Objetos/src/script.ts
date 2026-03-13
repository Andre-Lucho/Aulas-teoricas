// 1 - Duck Typing
interface Produto {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: 'Notebook',
  quantidade: 10,
  cor: 'azul',
};

const produto2 = {
  nome: 'Geladeira',
  quantidade: 4,
  freezer: true,
};

const servico1 = {
  nome: 'Instalação',
};

function mostrarQuantidade(produto: Produto) {
  console.log(produto);
}

// mostrarQuantidade(servico1);

// 2- [Key:string]: unknown

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
  // permite adicionar qualquer outra propriedade nos objetos criados
}

const artigo: Post = {
  titulo: 'Título',
  visualizacoes: 200,
  tags: ['TS', 'Java', 'Python'],
  autor: 'EleMesmo',
};

// artigo.titulo --> string
// artigo.tags --> string[]
// artigo.visualizacoes --> number

// artigo.autor --> unknown ---> TS não sabe que existe essa propriedade, por isso não aparece no autocomplete

/* Problema:
---------
artigo.vendas --> Essa prop não existe e o TS não aponta erro --> aponta como unknown - fazer Type Guard*/

// 3- Record

type ObjetoLiteral1 = {
  [key: string]: unknown;
};

type ObjetoLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
  if ('titulo' in obj) {
    console.log(obj.titulo);
  }
}

// Erros:
// mostrarTitulo("string");
// mostrarTitulo(200);
// mostrarTitulo([1, 2]);
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
  titulo: 'André',
});
