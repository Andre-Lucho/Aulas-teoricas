import React from 'react';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({
    nome: 'André',
    idade: '43',
    faculdade: false,
  });
  const [contar, setContar] = React.useState(0);

  const { nome, idade, faculdade } = dados;

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: !faculdade });
    setContar((contar) => contar + 1);
  }
  return (
    <>
      <p>{nome}</p>
      <p>{idade}</p>
      <p>{faculdade ? 'Possui faculdade' : 'Não Possui'}</p>
      <p>{contar}</p>
      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </>
  );
};

export default App;
