// const obj = {
//   nome: 'Origamid',
// };

// if ('nome' in obj) {
//   // console.log('Sim');
// }

// interface Produto {
//   nome: string;
//   preco: number;
// }

// const fetchProd = async (): Promise<void> => {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   const data = await response.json();
//   handleProduto(data);
// };

// const handleProduto = (data: Produto) => {
//   if ('preco' in data) {
//     document.body.innerHTML += `
//       <p>Nome: ${data.nome}</p>
//       <p>Preço: R$ ${data.preco}</p>
//     `;
//   }
// };

// fetchProd();

// ----------------------------------------------

function typeGuard(value: unknown) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    // const prototipo = Object.getPrototypeOf(Object.getPrototypeOf(value));
    // console.log(value.__proto__.__proto__.__proto__);
    return value.innerText;
  }
}

console.log(typeGuard('Origamid'));
console.log(typeGuard(200));

const a = document.querySelector('a');
if (a) {
  console.log(typeGuard(a));
}
