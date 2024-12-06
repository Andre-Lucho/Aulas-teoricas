/* const App = () => {
  let ativo = true;

  function handleClick() {
    ativo = !ativo;
    console.log(ativo);
  }
return (
    <>
      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </>
  ); 
}

ACIMA:
--------------
Estou mudando o estado do componente; porém, o render não irá ser atualizado !!!
Por isso, utilizamos os Hooks! */

import React from 'react';

const App = () => {
  /* 
  const ativoHook = React.useState('oi'); // Método do Objeto do React
  console.log(ativoHook); 
  ativoHook == Array --> [arg, função ] 
  arg --> o que passo
  função --> atualizador do Estado

  Utilizo desestruturando essa array, como abaixo:
  
  */
  const [ativo, setAtivo] = React.useState(true);

  return (
    <>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </>
  );
};

export default App;
