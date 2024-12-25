import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);
  // efeito 2 --> qd  localStorage não está vazio

  React.useEffect(() => {
    if (produto !== null) localStorage.setItem('produto', produto);
  }, [produto]);
  // efeito 1 --> qd  localStorage = vazio

  function handleClick({ target }) {
    setProduto(target.innerText);
    // aqui, altero o useState de 'produto'
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartPhone</button>
      <Produto produto={produto} />
    </>
  );
};

export default App;
