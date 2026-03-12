"use strict";
let chave1; // possíveis valores recebidos por 'chave'
let chave; // chaves da interface 'Produto' --> são strings
function coordenadas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return { x, y };
};
// let chaves: keyof Elementos;
// chaves = '';
function selection(selector) {
    return document.querySelector(selector);
}
// Estou dizendo que a function 'selection' recebe o parâmetro:string = 'a' e a função retorna a posição 'a' da interface Elementos === HTMLAnchorElement
selection('a')?.href; // retornando tipo = HTMLAnchorElement | null
/*

02. a) Criando um type Generic
------------------------------- */
function selection1(selector) {
    return document.querySelector(selector);
}
selection1('input')?.name;
// Função de checagem de interface Simples
function checkInterface(obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
async function handleData() {
    // const jogo = await fetchData<Jogo></Jogo>('/jogo.json');
    const jogo1 = await fetchData('/jogo.json');
    // const livro = await fetchData<Livro>('/livro.json');
    const livro1 = await fetchData('/livro.json');
    if (checkInterface(jogo1, 'desenvolvedora')) {
        console.log(jogo1.desenvolvedora.toLowerCase());
    }
    if (checkInterface(livro1, 'paginas')) {
        console.log(livro1.paginas.toFixed());
    }
    // console.log(jogo, livro);
}
handleData();
// Função de checagem de interface mais completa - Checa todos os elementos da interface
function checkInterfaceComplexa(obj, ...keys) {
    if (obj &&
        typeof obj === 'object' &&
        keys.filter((key) => key in obj).length === keys.length) {
        return true;
    }
    else {
        return false;
    }
}
