import dadosProduto from '../fecthProduto.js';

function fecthSmatphone() {
  const dados = dadosProduto(
    'https://ranekapi.origamid.dev/json/api/produto/smartphone',
  );
  return dados;
}

export default fecthSmatphone;
