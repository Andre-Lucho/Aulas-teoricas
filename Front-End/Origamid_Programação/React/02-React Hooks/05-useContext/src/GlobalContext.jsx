import React from 'react';

export const GlobalContext = React.createContext(); // escopo do contexto

export const GlobalStorage = ({ children }) => {
  // que elementos dentro do escopo estou exportando p todo projeto
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
      // passando o Provider aqui
    >
      {children}
    </GlobalContext.Provider>
  );
};
