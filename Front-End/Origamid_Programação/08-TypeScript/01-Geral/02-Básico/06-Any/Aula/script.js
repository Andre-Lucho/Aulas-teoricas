"use strict";
// Type
let preco = 200;
preco = '200';
// criando uma variável tipo Objeto com o type 'Produto':
const pc = {
    nome: 'PC',
    preco: 5000,
    teclado: true,
};
// Object
function preencherDados(dados) {
    document.body.innerHTML += `
  <div style="color: #f6f6f6; font-size: 1.2rem">
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
  </div>

  `;
}
// Função com argumento tipo Type
function preencherDados2(dados) {
    document.body.innerHTML += `
  <div style="color: #58afbc; font-size: 1.4rem">
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
  </div>

  `;
}
// Função com argumento tipo Interface
function preencherDados3(dados) {
    document.body.innerHTML += `
  <div style="color: #58afbc; font-size: 1.4rem">
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
  </div>

  `;
}
preencherDados({
    nome: 'PS5',
    preco: 2000,
    teclado: false,
});
preencherDados2(pc);
function tipoCategoria(categoria) {
    console.log(categoria);
}
tipoCategoria('codigo');
