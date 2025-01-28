import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [load, setLoad] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    try {
      setError(null);
      setLoad(true);
      response = await fetch(url, options);
      console.log(response);
    } catch (erro) {
      response = null;
      setError('Erro no fetch');
    } finally {
      setData(response);
      setLoad(false);
      return { response };
    }
  }, []);

  return { data, load, request, error };
};

export default useFetch;

// Sem o a const json e sua tranf em Json, pois já tenho isso nas options do fetch para a API Ranekapi
