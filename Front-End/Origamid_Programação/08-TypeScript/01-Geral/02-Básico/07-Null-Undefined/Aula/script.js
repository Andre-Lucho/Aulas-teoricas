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
jogo.nome.toLocaleLowerCase;
// sinaliza o erro -- aqui pode ser undefined, por causa da interface, mas não tranca o app
// livro.nome.charAt;
// // dá erro - aqui é realmente undefined; Não tenho nada dentro do objeto 'livro'
// correto
livro.nome?.charAt;
// posso fazer uma checagem também
// console.log(jogo.nome);
// console.log(livro.nome);
