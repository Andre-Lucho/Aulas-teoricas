async function fetchProduto(evento) {
  const dadosResponse = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${evento}`,
  );
  const dadosJson = await dadosResponse.json();
  return dadosJson;
}

export default fetchProduto;
