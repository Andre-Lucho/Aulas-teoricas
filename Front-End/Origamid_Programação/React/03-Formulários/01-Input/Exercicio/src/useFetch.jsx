import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [load, setLoad] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoad(true);
      response = await fetch(url, options);
      // json = await response.json();
    } catch (erro) {
      json = null;
      setError('Erro no fetch');
    } finally {
      setData(json);
      setLoad(false);
      return { response, json };
    }
  }, []);

  return { data, load, request, error };
};

export default useFetch;
