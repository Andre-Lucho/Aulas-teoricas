import React from 'react';
import Button from './Button';
import fetchProduto from './fetchProduto.js';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [load, setLoad] = React.useState(null);

  async function handleClick(event) {
    setLoad(true);
    const evento = event.target.innerText;
    const produto = await fetchProduto(evento);
    setLoad(false);
    setDados(produto);
    // console.log(dados); // retornando null == não atualizou, pq ?
    // O hook irá atualizar dados e renderizar novamente o componente.
    // Isso não irá ocorrer enquanto a função está sendo acionada, mas sim após ela.
    // Logo, a fetch buscou os dados, porém ainda não atualizou o hook --> 'dados' deve ser utilizado em outro componente, como argumento passado e invocado dentro desse componente, ou return
  }

  return (
    <>
      <Button handleFunction={handleClick} label="Tablet" />
      <Button handleFunction={handleClick} label="Smartphone" />
      <Button handleFunction={handleClick} label="Notebook" />
      {load && <p>Carregando...</p>}
      {!load && dados && <Produto data={dados} />}
    </>
  );
};

export default App;
