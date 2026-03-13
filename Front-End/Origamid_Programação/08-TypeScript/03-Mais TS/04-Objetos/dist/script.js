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
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({
    titulo: 'André',
});
//# sourceMappingURL=script.js.map