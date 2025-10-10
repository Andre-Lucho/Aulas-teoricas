import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState('');

  const getData = async () => {
    if (userInput !== '') {
      const userData = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${userInput}`,
      );
      const dataJSON = await userData.json();
      setData(dataJSON);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const cleanData = () => {
    setData(null);
  };

  return (
    <GlobalContext.Provider
      value={{ data, userInput, setUserInput, getData, cleanData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
