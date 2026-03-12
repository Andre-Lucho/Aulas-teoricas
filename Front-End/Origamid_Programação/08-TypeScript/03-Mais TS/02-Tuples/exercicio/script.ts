// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

type Modelo = {
  marca: string;
  cor: string;
};

type Venda = [string, number, string, Modelo];

const totalVendas = (data: Venda[]) => {
  const div = document.querySelector('.div');
  const total = data.reduce((acc, venda) => acc + venda[1], 0);
  // lembrar que o reduce esta percorrendo 'data' ===> [Venda] ---> na posição 1 está o preço
  // console.log(total);
  if (div && div instanceof HTMLElement) {
    div.innerHTML = `
    <p>Total das vendas: ${total}</p>
  `;
  }
};

const fetchVendas = async () => {
  const url = 'https://api.origamid.dev/json/vendas.json';
  const response = await fetch(url);
  const data: Venda[] = await response.json();
  totalVendas(data);
};

fetchVendas();

// Loop pelas Arrays do retorno da API com 'for'(relembrar):
// ----------------------------------------------------------

// let total = 0;
// for (let i; i < data.length; i++) {
//   total += data[i][1];
// }
