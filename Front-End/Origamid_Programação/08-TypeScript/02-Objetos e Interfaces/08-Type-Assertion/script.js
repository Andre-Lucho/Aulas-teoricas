"use strict";
// 1.
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json(); // posso indicar aqui o tipo de retorno com == 'as Promise<Produto>'
}
async function handleProduto1() {
    const produto = (await fetchProduto()); // ou posso indicar aqui produto 'as Produto'
    console.log(produto.preco);
}
async function handleProduto2() {
    const produto = await fetchProduto();
    produto.nome; // ou posso indicar assim == não recomendado
}
handleProduto1();
// 3.
document.querySelector('a').href = 'https://www.origamid.com';
// estou afirmando que 'document.querySelector('a')' nunca será null --> qd for, dará erro de runtime!! Cuidado
// 4.
const video1 = document.querySelector('.player');
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player'); // Há a possibilidade de ser null
const video4 = document.querySelector('.player'); // Há a possibilidade de ser null
video1.volume;
video2.volume;
video3?.volume; // somente irá executar o método se NÃO for null
video4.volume; // tiro a possibilidade do null, pois estou afirmando o que ele é
