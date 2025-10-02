import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [darkTheme, setDarkTheme] = useLocalStorage('theme', false);

  return (
    <GlobalContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
