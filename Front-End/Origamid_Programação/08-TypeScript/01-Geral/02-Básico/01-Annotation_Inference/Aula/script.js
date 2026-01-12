'use strict';
let produto = 'Livro';
let preco = 200;
let novoPreco = 500;
produto = 20;
novoPreco = 'Nome';
// Objeto
const carro = {
  marca: 'Renault',
  portas: 5,
};
carro.marca = 'Honda';
carro.marca = 300;
carro.marcas = 'asdfasdf';
let barato = preco < 200 ? true : 'produto caro';
// ou
let barato1 = preco < 200 ? true : 'produto caro';
// (fazendo a Annotation )
// OBS.: observar que a const 'barato' tem 2 opções (true | 'produto caro')
// pois ele fez a leitura, mas não a execução
/*

Functions
------------------

*/
function somar(a, b) {
  return a + b;
}
function somar1(a, b) {
  return a + b;
}
// // (fazendo a Annotation do tipo de retorno)
console.log(somar(2, 2));
somar('oi', 2);
const ps5 = {
  modelo: 'digital',
  preco: '3000',
};
function priceTransform(produto) {
  produto.preco = 'R$' + produto.preco;
  return produto;
}
console.log(priceTransform(ps5));
//# sourceMappingURL=script.js.map
