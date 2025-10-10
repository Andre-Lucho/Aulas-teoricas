import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  const [recarregar, setRecarregar] = React.useState(false); // Estado para controlar o fetch

  const fetchDados = async () => {
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      const rJson = await response.json();
      setDados(rJson);
    } catch (error) {
      console.log('Erro no fetch', error);
    }
  };

  React.useEffect(() => {
    fetchDados();
  }, [recarregar]); // O fetch será chamado sempre que a chave mudar

  function limparDados() {
    setDados(null);
  }

  function setarNovosDados() {
    setRecarregar(!recarregar);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados, setarNovosDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
