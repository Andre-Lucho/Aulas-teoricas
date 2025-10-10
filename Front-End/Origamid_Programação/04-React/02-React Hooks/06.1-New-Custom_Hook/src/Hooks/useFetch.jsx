import { useState, useEffect, useCallback } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(null);
  const [error, setError] = useState(null);

  // **
  const request = useCallback(async (url, options) => {
    let response, json;
    try {
      setError(null);
      setLoad(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError('Erro no fetch');
    } finally {
      setData(json); // caso haja erro no fetch => json = null --> vou ter algum valor (ver catch)
      setLoad(false);
      return { response, json }; // olhar os lets acima(escopo)
    }
  }, []);

  return { data, load, request, error }; // --> returno do UseFetch como Objeto--> ter acesso, independente da ordem
};

export default useFetch;
/*
**:

1. pq uma função aqui? Pois, ela só irá ser executada qd eu a invocar == mais controle
2. pq o useCallBack? --> invocar a função APENAS 1X e  evitar as várias chamadas ao servidor 
(ver em App.jsx - dependência do [request])  */
