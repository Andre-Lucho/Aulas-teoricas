import React from 'react';
import UserContext from './UserContext';

// 1.

const Produto = () => {
  const dados = React.useContext(UserContext);
  console.log(dados);

  return (
    <div>
      <p>{dados.nome}</p>
    </div>
  );
};

// 2.

export default Produto;
