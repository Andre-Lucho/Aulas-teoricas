import { useState, useEffect } from 'react';

const useLocalStorage = (key, inicial) => {
  const [inicialState, setInicialStateState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? stored : inicial;
  });

  useEffect(() => localStorage.setItem(key, inicialState), [inicialState]);

  return [inicialState, setInicialStateState];
};

export default useLocalStorage;
