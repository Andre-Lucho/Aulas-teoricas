import { useState, useCallback } from 'react';

const useFetch = () => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setResponse(response);
    } catch (erro) {
      response = null;
      json = null;
      setError('Erro no fetch');
    } finally {
      setFetchData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { request, fetchData, loading, error, response };
};

export default useFetch;

// Sem o a const json e sua tranf em Json == Método POST
