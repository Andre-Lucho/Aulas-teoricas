import React from 'react';

const App = () => {
  const useNumeroAleatorio = () => {
    const numero = Math.random();
    React.useEffect(() => {
      document.title = numero;
    }, []);
    return numero;
  };
  useNumeroAleatorio();

  return <div></div>;
};

export default App;
