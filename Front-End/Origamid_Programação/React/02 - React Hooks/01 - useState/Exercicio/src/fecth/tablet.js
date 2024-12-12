import dadosProduto from '../fecthProduto.js';

function fecthTablet(linkProduto) {
  const dados = dadosProduto(
    'https://ranekapi.origamid.dev/json/api/produto/tablet',
  );
  return dados;
}

export default fecthTablet;
