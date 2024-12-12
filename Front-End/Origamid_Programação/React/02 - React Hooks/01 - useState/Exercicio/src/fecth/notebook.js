import dadosProduto from '../fecthProduto.js';

function fecthNotebook(evento) {
  const dados = dadosProduto(
    'https://ranekapi.origamid.dev/json/api/produto/`${evento}`',
  );
  return dados;
}

export default fecthNotebook;
