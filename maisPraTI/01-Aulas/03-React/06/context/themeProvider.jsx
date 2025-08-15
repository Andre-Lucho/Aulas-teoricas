import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const themeContext = createContext(null);

export function ThemelProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toogleTheme = useCallback(() => {
    setTheme((newTheme) => (newTheme === 'light' ? 'dark' : 'light'));
  });
  // useCallback = memoriza uma função

  const value = useMemo(() => {
    theme, toogleTheme;
  }, [theme, toogleTheme]);
  // useMemo - também memoriza evitanto re-renderizações

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(themeContext);
  if (!theme)
    throw new Error('Você precisa usar Hook dentro do provider correto');
  return theme;
}
