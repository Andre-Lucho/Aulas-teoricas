"use strict";
/*
Null
------------- */
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
if (button)
    button.click();
button?.click();
const jogo = {
    nome: 'Ragnarok',
};
const livro = {};
jogo.nome.toLowerCase(); // apenas SINALIZA o erro -- aqui pode ser undefined, por causa da interface, mas não tranca o app
jogo.nome?.toLowerCase(); // correto
// livro.nome.charAt; // DÁ ERRO! no runtime - aqui é realmente undefined; Não tenho nada dentro do objeto 'livro'
livro.nome?.charAt; // correto
// posso fazer uma checagem também
console.log(jogo.nome);
console.log(livro.nome);
