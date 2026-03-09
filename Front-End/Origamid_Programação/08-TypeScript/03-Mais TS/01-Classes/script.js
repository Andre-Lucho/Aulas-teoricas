"use strict";
class Produto {
    tipo = 'produto';
    nome;
    preco; //*
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
const livro = new Produto('O Senhor dos Anéis');
// * como preco é um parâmetro opcional, ele pode ser undefined
