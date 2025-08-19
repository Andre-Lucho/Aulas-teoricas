import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const Produto = () => {
  const global = useContext(GlobalContext);
  return (
    <div>
      <p>{global.a.numero}</p>
    </div>
  );
};

export default Produto;
