"use strict";
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
function mostrarQuantidade(produto) {
    console.log(produto);
}
const artigo = {
    titulo: 'Título',
    visualizacoes: 200,
    tags: ['TS', 'Java', 'Python'],
    autor: 'EleMesmo',
};
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
function mostrarTitulo3(obj) {
    if (obj && typeof obj === 'object' && "titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo3({ titulo: 'a', autor: '200' });
// // Erros:
// mostrarTitulo2(200); //--> erro em runtime -- esperando um objeto
// // mostrarTitulo1(200); //--> erro em runtime
// // mostrarTitulo1([1, 2]); //--> erro em runtime
// // mostrarTitulo1(null); //--> erro em runtime
// // mostrarTitulo1(undefined);
// mostrarTitulo1({
//   titulo: 'André',
// });
