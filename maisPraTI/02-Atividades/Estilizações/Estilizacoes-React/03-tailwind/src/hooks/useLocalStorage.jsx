import { useState, useEffect } from 'react';

const useLocalStorage = (key, inicial) => {
  const [state, setState] = useState(() => {
    const local = localStorage.getItem(key);
    return local ? JSON.parse(local) : inicial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
