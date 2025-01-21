import React from 'react';

export const GlobalContext = React.createContext(); // escopo do contexto

export const GlobalStorage = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
