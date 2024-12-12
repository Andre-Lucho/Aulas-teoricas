async function dadosProduto(linkProduto) {
  const dadosResponse = await fetch(linkProduto);
  const dadosJson = await dadosResponse.json();
  return dadosJson;
}

export default dadosProduto;
