//  1 - Duck Typing
// ------------------------
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
// --------------------------

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

//Problema:
//---------

// artigo.autor
// if (artigo.autor === "string") {
//   console.log(artigo.autor.toLocaleLowerCase());
// }
// //-> Essa prop não existe e o TS não aponta erro --> aponta como unknown - fazer Type Guard

/* 3- Utility type - Record
-----------------------------
 interface de um Objeto que possui <chave, tipo>. Pode ser usado para definir a interface de um Objeto Literal genérico. */


type ObjetoLiteral1 = {
  [key: string]: unknown;
};


// type ObjetoLiteral2 = Record<"titulo", unknown>;
// type ObjetoLiteral2 = Record<"titulo" | "autor", unknown>;
type ObjetoLiteral2 = Record<string, string>;
// type ObjetoLiteral2 = Record<string, unknown>;

// // a)
// function mostrarTitulo1(obj: any) {
//   if ('titulo' in obj) {
//     console.log(obj.titulo);
//   }
// }

// // b) verificando especificamente um objeto no Type Guard
// function mostrarTitulo2(obj: {}) {
//   if (obj && typeof obj === 'object' && 'titulo' in obj) {
//     console.log(obj.titulo);
//   }
// }

//  c) com utility types Record
function mostrarTitulo3(obj: ObjetoLiteral2) {
  if (obj && typeof obj === 'object' && "titulo" in obj) {
    console.log(obj.titulo);
  }
}

mostrarTitulo3({ titulo: 'a', autor: '200' })


// // Erros:
// mostrarTitulo2(200); //--> erro em runtime -- esperando um objeto
// // mostrarTitulo1(200); //--> erro em runtime
// // mostrarTitulo1([1, 2]); //--> erro em runtime
// // mostrarTitulo1(null); //--> erro em runtime
// // mostrarTitulo1(undefined);

// mostrarTitulo1({
//   titulo: 'André',
// });

