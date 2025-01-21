import React from 'react';

const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
