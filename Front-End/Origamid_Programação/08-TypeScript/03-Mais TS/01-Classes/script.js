"use strict";
class Produto {
    //*
    tipo = 'produto';
    nome;
    preco; //**
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
const livro = new Produto('O Senhor dos Anéis');
/*

1.*) TS - no corpo da classe, definimos o tipo de cada propriedade
2. **) como preco é um parâmetro opcional(?.), ele pode ser undefined */
// 2. Modificadores
// --------------------
class Produto2 {
    tipo = 'produto';
    preco;
    nome;
    constructor(nome, preco) {
        this.nome = nome;
        this.tipo;
        this.preco = preco;
    }
    getTipo() {
        return this.tipo;
    }
    getPreco() {
        return Produto2.transformarPreco(this.preco);
    }
    // // [javascript] static: não fará parte do Objeto criado e sim da função construtora (classe)
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const livro2 = new Produto2('O Senhor dos Aneis', 200);
// console.log(livro2.getTipo());
console.log(livro2.getPreco());
console.log(livro2.nome);
console.log(Produto2.transformarPreco(100)); // Está na classe Produto e nao na instância livro2
livro2.nome = 'O Hobbit'; // readonly - não pode ser modificado
livro2.tipo = 'livro'; // private
console.log(livro2.nome);
console.log(livro2.tipo);
// 3. Class e Interface
// ------------------------------
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
