import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [comprar, setComprar] = React.useState(0);

  function comprarUm() {
    setComprar((comprar) => comprar + 1);
  }

  function comprarDois() {
    setComprar((comprar) => comprar + 2);
  }

  return (
    <GlobalContext.Provider
      value={{ nome: 'André', comprar, setComprar, comprarUm, comprarDois }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
