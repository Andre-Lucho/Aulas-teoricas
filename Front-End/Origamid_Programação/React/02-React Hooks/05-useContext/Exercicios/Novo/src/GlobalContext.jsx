import { createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const a = { numero: 12 };
  return (
    <GlobalContext.Provider value={{ a }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
