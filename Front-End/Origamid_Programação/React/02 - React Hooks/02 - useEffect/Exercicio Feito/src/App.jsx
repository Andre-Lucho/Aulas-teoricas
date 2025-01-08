import React from 'react';
import Produto from './Produto';
const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('produto');
    if (produtoLocal) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto) localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <button onClick={handleClick} style={{ margin: '.3rem' }}>
        Notebook
      </button>
      <button onClick={handleClick} style={{ margin: '.3rem' }}>
        Smartphone
      </button>
      {produto && <Produto produto={produto} />}
    </>
  );
};

export default App;
