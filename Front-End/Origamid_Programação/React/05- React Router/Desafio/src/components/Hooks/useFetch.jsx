import { useState, useCallback } from 'react';

const useFetch = () => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [jsonReturn, setJsonReturn] = useState(null);

  const request = useCallback(async (url, options) => {
    let response, json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setResponse(response);
      setJsonReturn(json);
    } catch (erro) {
      json = null;
      setError(erro);
    } finally {
      setFetchData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { fetchData, loading, request, error, response, jsonReturn };
};

export default useFetch;
