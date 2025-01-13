import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  // Efeitos para o localStorage
  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('produto'); //inicialmente = null; não dá erro, pois null é válido (diferente de undefined == erro)
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);
  // efeito 2 --> qd  localStorage não está vazio

  React.useEffect(() => {
    if (produto !== null) localStorage.setItem('produto', produto); // produto é renderizado inicialmente como null!
  }, [produto]);
  // efeito 1 --> qd  localStorage = vazio

  // -----------------------------------------------
  // evento de click
  function handleClick({ target }) {
    setProduto(target.innerText);
    // aqui, alterando o estado de 'produto' com useState
    // podemos setar aqui as alterações no localStorage, porém podemos utilizar o useEffect, alterando o localStorage a partir da alteração do estado de 'produto' também, deixando o useState apenas para alterar o estado de 'produto'
  }
  // -----------------------------------------------

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '.5rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
    </>
  );
};

export default App;
