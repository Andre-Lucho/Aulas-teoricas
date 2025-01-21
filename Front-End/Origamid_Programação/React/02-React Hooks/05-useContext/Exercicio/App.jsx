import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';
import Limpar from './Limpar';
import NovoDados from './NovoDados';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
      <br />
      <NovoDados />
    </GlobalStorage>
  );
};

export default App;
