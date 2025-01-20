/*
Regras
------------------------------------

Top Level
------------------------------------

Não utilize os hooks dentro de funções, loops ou condicionais. */

const App = () => {
  // Correto
  React.useEffect(() => {
    document.title = 'Título novo';
  }, []);

  let condicao = true;
  if (condicao) {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  function mudarTitulo() {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  for (let i = 0; i < 10; i++) {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  return <div></div>;
};

/*
Componentes e Custom Hooks
------------------------------------

Utilize hooks apenas em componentes e em custom hooks. */

import React from 'react';

// Errado, mas pode se transformar em um custom hook se começar com useNumeroAleatorio
function numeroAleatorio() {
  const numero = Math.random();
  React.useEffect(() => {
    document.title = numero;
  }, []);
  return numero;
}

const App = () => {
  return <div></div>;
};

export default App;
