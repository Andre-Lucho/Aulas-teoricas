import React from 'react';
import Button from './Button';
import fetchProduto from './fetchProduto.js';

const App = () => {
  const [dados, setDados] = React.useState(null);

  function handleClick(event) {
    const evento = event.target.innerText;
    const produto = fetchProduto(evento);
    console.log(produto); // retonando a Promise e não o Objeto da fetch ?
    setDados(produto);
    console.log(dados); // retornando null == não atualizou ?
  }

  return (
    <>
      <Button handleFunction={handleClick} />
    </>
  );
};

export default App;
