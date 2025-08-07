import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null); // {dados} é reativo à alteração de {produto}

  // Efeito p fetch de dados

  // 1. utilizando o fetch diretamente
  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((r) => r.json())
        .then((json) => setDados(json));
    }
  }, [produto]); // na 2. renderização(alteração de produto)

  // 2. utilizando função assync + try/catch
  // React.useEffect(() => {
  //   const fecthDados = async () => {
  //     if (produto !== null) {
  //       try {
  //         const response = await fetch(
  //           `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
  //         );
  //         const rJson = await response.json();
  //         setDados(rJson);
  //       } catch (error) {
  //         console.error('Erro ao buscar dados:', error);
  //       }
  //     }
  //   };
  //   fecthDados();
  // }, [produto]);

  if (dados == null) return null;
  // ou em App:
  // {produto && <Produto produto={produto} />}

  const { nome, preco, fotos } = dados;

  /* OBS:
  ----------------------------------------------- 
  Entender que o React só tem efeito após a sua renderização que é secundária ao return padrão!
  Então, a desestruturação deve ser setada aqui e não dentro do Hook (após o fetch), pois o useEffect ainda recebeu os dados da fetch(response) */

  return (
    <>
      <h2>{nome}</h2>
      <h3>R$ {preco}</h3>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </>
  );
};

export default Produto;
