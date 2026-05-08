"use strict";
// // 1 - Duck Typing
// interface Produto {
//   nome: string;
//   quantidade: number;
// }
const artigo = {
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
if (artigo.autor === "string") {
    console.log(artigo.autor.toLocaleLowerCase());
}
function mostrarTitulo(obj) {
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
