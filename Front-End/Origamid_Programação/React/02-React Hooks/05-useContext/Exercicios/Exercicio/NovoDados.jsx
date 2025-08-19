import React from 'react';
import { GlobalContext } from './GlobalContext';

const NovoDados = () => {
  const { setarNovosDados } = React.useContext(GlobalContext);

  return (
    <div>
      <button onClick={setarNovosDados}>Recarregar Dados</button>
    </div>
  );
};

export default NovoDados;
