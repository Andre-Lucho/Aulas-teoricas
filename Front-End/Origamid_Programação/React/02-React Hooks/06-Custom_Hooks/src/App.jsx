import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  /* 
  1. useLocalStorage
  ------------------------------------
  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick} style={{ marginRight: '.5rem' }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  ); 
  */

  /*
  2. useFetch
  ------------------------------------ */

  const { request, data, load, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      // console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  /* 
  2.1
  ------------------------------------

  React.useEffect(()=>{
    const { response, json } = request(
      'https://ranekapi.origamid.dev/json/api/produto/', // *1
    ).then((obj) => console.log(obj)); // *2
    
    console.log(response); **
  }, []);
  
1. Função assincrona retorna Promise
  constantes 'response' e 'json' ainda não estão acessíveis - métodos do RETORNO da Promise 'request()'
  **console.log(response) = undefined
  devo usar um .then();

  2.2.
  ------------------------------------
    Agora, retornando métodos e propriedades do retorno da Promise!   */

  if (load) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (data)
    return (
      <div>
        <p>Preferido: </p>
        <button onClick={handleClick} style={{ marginRight: '.5rem' }}>
          notebook
        </button>
        <button onClick={handleClick}>smartphone</button>
        <ul>
          {data.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
        </ul>
      </div>
    );
  else return null; // para erro no request --> teria a mensagem carregando indefinidamente, sendo a consição do error
};

export default App;
