import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((r) => r.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (dados == null) return null;

  return (
    <>
      <h2>{dados.nome}</h2>
      <h3>R$ {dados.preco}</h3>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </>
  );
};

export default Produto;
