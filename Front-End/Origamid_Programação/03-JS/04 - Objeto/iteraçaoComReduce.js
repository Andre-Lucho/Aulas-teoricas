let vendas = [
  {
    cliente: 'André',
    compras: [
      { camisa: 'Polo-Azul', preco: 'R$50' },
      { bermuda: 'Adidas-Verde', preco: 'R$100' },
      { tenis: 'NikeAir', preco: 'R$200' },
    ],
  },
  {
    cliente: 'João',
    compras: [
      { camisa: 'Polo-Vermelha', preco: 'R$65' },
      { calça: 'Social-002', preco: 'R$80' },
      { sapato: 'preto', preco: 'R$320' },
    ],
  },
  {
    cliente: 'Sofia',
    compras: [
      { blusa: 'Rosa002', preco: 'R$74' },
      { bijuteria: '0232', preco: 'R$60' },
    ],
  },
  {
    cliente: 'Renata',
    compras: [
      { capaCelular: 'Rosa002', preco: 'R$24' },
      { enfeite: '032', preco: 'R$15' },
      { caderno: 'Tilibra55', preco: 'R$40' },
    ],
  },
];

// vendas.forEach((compras) => {
//   let a = compras.compras;
//   a.map((pr) => console.log(pr.preco));
// });

// console.log(vendas);

// function sales(arr) {
//   let newSalesArr = arr.slice();

//   let newPrices = [];
//   const regexp = /[R$']/gi;

//   newSalesArr.map((compra) => {
//     let a = compra.compras.map((item) => {
//       let price = Number(item.preco.replace(regexp, ''));
//       return price;
//     });
//     return { ...compra, price };
//   });

//   return newPrices;
// }

// console.log(sales(vendas));

function salesReduce(arr) {
  let newSalesArr = arr.slice();
  const regexp = /[R$']/gi;

  const allPrices = newSalesArr.reduce((acc, venda) => {
    const price = venda.compras.map((item) => {
      return Number(item.preco.replace(regexp, ''));
    });
    // return acc.concat(price);
    return [...acc, ...price];
  }, []);
  return allPrices;
}

console.log(salesReduce(vendas));

