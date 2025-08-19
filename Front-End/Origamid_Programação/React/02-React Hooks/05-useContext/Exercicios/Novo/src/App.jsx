import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './components/Produto';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
