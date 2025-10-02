import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [darkTheme, setDarkTheme] = useLocalStorage('theme', false);
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage(
    'favoriteProducts',
    [],
  );

  const toggleFavorite = (productId) => {
    setFavoriteProducts((prevFavorites) => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter((id) => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

  return (
    <GlobalContext.Provider
      value={{ toggleFavorite, darkTheme, setDarkTheme, favoriteProducts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
