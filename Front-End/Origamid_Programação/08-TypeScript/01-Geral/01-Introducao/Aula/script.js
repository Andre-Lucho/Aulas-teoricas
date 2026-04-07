"use strict";
function somar(a, b) {
    return a + b;
}
console.log(somar(5, 5));
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
