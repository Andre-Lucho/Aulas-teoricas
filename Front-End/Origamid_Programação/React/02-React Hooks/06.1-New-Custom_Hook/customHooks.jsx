/*
CustomHooks
------------------------------------

useLocalStorage
------------------------------------

Podemos criar nossos próprios hooks, assim evitamos a repetição de código. 
Todo custom hook deve começar com a palavra 'use'. Exemplo: 'useNomeDoHook'. 
Ele é uma função que retorna algo que NÃO um componente Reack (com as tags HTML)
Podemos retornar o que quisermos do hook, seja um valor único, uma array ou um objeto.*/

const useLocalStorage = (key, inicial) => {
  const [state, setState] = useState(() => {
    // *
    const local = localStorage.getItem(key);
    return local ? local : inicial;
  });
  /* (*) pq 'state' inicialmente é definido por uma arrow funct ?? 
  Pois quero definir (ou verificar) o valor de 'state' de forma reativa (a cada interação com o usuário == qd tivermos um refresh na página). 
  Se eu tivesse um valor fixo, seria sempre aquele valor (até q fosse alterado pelo setState == aqui, NÃO depende so setState) */

  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);
  // toda vez q meu 'state' alterar, ele sera setado no localStorage
  // Obs.:  key aqui será sempre o mesmo(não altera); porém, é obrigatório colocar nas dependências do useEffect

  return [state, setState]; // Retorno igual os React.useState

  // *
};

/* 
  * IMPORTANTE (localStorage):
  ------------------------------------

  Valores armazenados no localStorage são sempre STRINGS!
  
  1.Caso queira armazenar e utilizar valores com NÚMEROS, devo transformar em numeral, POIS ele ira concatenar os diversos numeros que irão sendo armazenados

  2. 'false' => uma string 'false' é um valor verdadeiro!! Devo transformar em booleano!
};

// App.jsx

import useLocalStorage2 from './useLocalStorage';

const App2 = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  } 


  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

/*
useFetch
------------------------------------

Aqui o useCallback é necessário para evitar um render infinito. */

import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    // options é um objeto com as opções de requisição: POST, GET, DELETE, PUT (get é a padrão)
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false); // aqui no finally, pois se em try tivermos erro, ele não será executado ( está a[após o fetch])
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
  /* pq retornar um objeto? Poderia ser com uma array? Sim, porém: 
   com um objeto posso invocar os valores de forma aleatória (com uma array, teria de ser na ordem que eu determinei meu retorna); assim, fica mais fácil a invocação */
};

//  export default useFetch;

// #App.jsx

import useFetch2 from './useFetch';

const App = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook');
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return <div>{data.nome}</div>;
  else return null; // para erro no request --> teria a mensagem carregando indefinidamente, sendo a consição do error
};

export default App;
