import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [load, setLoad] = React.useState(null);
  const [error, setError] = React.useState(null);

  /* 1.
  ------------------------------------

async function request(url, options) {
  try {
    setError(null);
    setLoad(true);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
  } catch (erro) {
    setError('Erro no fetch');
  } finally {
    setLoad(false);
    return { response, json };
    // atenção: retorno da função request()
  }
}
// pq uma função aqui? Pois, ela só irá ser executada qd eu a invocar == mais controle

return { data, load, request, error };
}; */

  /*  
2.
------------------------------------
deixando acesso aos métodos e propriedades da Promise(fetch - request()):

  async function request(url, options) {
    let response;
    let json;
    try {
      setError(null);
      setLoad(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null; //em caso de erro, volta ao valor inicial
      setError('Erro no fetch');
    } finally {
      setData(json); // caso de erro == será sempre setado
      setLoad(false);
      return { response, json };
      // não tem acesso a essas variáveis aqui (estão dentro do 'try') - botar do lado de fora
    }
  }
  return { data, load, request, error };
}; */

  /*  
3.
------------------------------------
Utilizando o useCallback p/ invocar a função APENAS 1X */

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoad(true);
      response = await fetch(url, options);
      json = await response.json();
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
