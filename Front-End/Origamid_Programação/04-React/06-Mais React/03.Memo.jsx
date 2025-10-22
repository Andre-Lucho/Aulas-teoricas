/*
Memo
-----------------------------------

React.memo
Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. 
Use apenas para elementos que não dependam de estados diferentes. 

Obs:
----
Usado em Componentes fixos no app, que não dependem de att de estados */

// App.jsx

import React from 'react';
import Header from './Header';

export const App = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

// Header.jsx

import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return <div>Header fixo</div>;
};

export default React.memo(Header);
