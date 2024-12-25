import React from 'react';
import Button from './Button';
import fetchProduto from './fetchProduto.js';

const App = () => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    const evento = event.target.innerText;
    const produto = await fetchProduto(evento);
    console.log(produto); // retonando a Promise e não o Objeto da fetch ? agora, ok
    setDados(produto);
    // console.log(dados); // retornando null == não atualizou, pq ?
    // O hook irá atualizar dados e renderizar novamente o componente.
    // Isso não irá ocorrer enquanto a função está sendo acionada, mas sim após ela.
    // Logo, a fetch buscou os dados, porém ainda não atualizou o hook --> 'dados' deve ser utilizado em outro componente, como argumento passado e invocado dentro desse componente, ou return
  }

  return (
    <>
      <Button handleFunction={handleClick} />
    </>
  );
};

export default App;
