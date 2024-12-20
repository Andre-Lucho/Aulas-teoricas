import React from 'react';
import Produto from './Produto';

const App = () => {
  const [data, setData] = React.useState(null);
  const [load, setLoad] = React.useState(null);
  // carregando... é um estado

  async function handleClick(event) {
    setLoad(true);
    const dadosResponse = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const dadosJson = await dadosResponse.json();
    setLoad(false);
    setData(dadosJson);
  }

  return (
    <>
      <button style={{ margin: '.3rem' }} onClick={handleClick}>
        Tablet
      </button>
      <button style={{ margin: '.3rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: '.3rem' }} onClick={handleClick}>
        Notebook
      </button>
      {load && <p>Carregando...</p>}
      {!load && data && <Produto data={data} />}
      {/* data && --> verifica se 'data' é true:
      inicialmente o valor de data é NULL == Não existe nenhuma props para um valor null!! Então, não renderiza  <Produto>
      Devo executar <Produtos /> apenas se data for algo diferente de null, por isso a condição
      */}
    </>
  );
};

export default App;
