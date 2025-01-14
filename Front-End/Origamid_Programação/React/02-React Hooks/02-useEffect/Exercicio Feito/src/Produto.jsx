import React from 'react';
const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    const fetchDados = async () => {
      if (produto) {
        try {
          const dadosResponse = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
          );
          const dadosJson = await dadosResponse.json();
          setDados(dadosJson);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchDados();
  }, [produto]);

  if (dados) {
    const { nome, preco, fotos } = dados;
    return (
      <div>
        <h1>{nome}</h1>
        <p>R$ {preco}</p>
        <img src={fotos[0].src} alt={fotos[0].titulo} />
      </div>
    );
  }
};

export default Produto;
