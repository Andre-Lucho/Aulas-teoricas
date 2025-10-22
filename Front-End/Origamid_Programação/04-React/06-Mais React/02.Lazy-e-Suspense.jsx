/*

Lazy e Suspense
-----------------------------------

Code Splitting
Com o Lazy e Suspense podemos dividir o código da nossa aplicação. 
Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias. */

import React from 'react';
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      {ativar && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivar(true)}>Ativar</button>
    </div>
  );
};

export default App;
