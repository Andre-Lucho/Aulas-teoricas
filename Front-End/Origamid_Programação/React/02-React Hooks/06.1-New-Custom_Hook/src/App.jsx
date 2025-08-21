import { useEffect } from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import useFetch from './Hooks/useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, load, error, response, json } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      //console.log(response); // tenho acesso aqui ao retorno de response e json
    }
    fetchData();
  }, [request]); // caso a dep  == request, a cada att de estado, tenho a função carregada novamente == infinitas solicitações ao servidor!

  // acima: retorna uma Promise

  if (error) return <p>{error}</p>;
  if (load) return <p>Carregando....</p>;
  if (data) {
    return (
      <div>
        <p>Preferido: </p>
        <button
          onClick={({ target }) => setProduto(target.innerText)}
          style={{ marginRight: '.5rem' }}
        >
          notebook
        </button>
        <button onClick={({ target }) => setProduto(target.innerText)}>
          smartphone
        </button>
        {data.map(({ id, nome, fotos, preco }) => (
          <ul key={id}>
            <li>
              <h3>{nome}</h3>
            </li>
          </ul>
        ))}
      </div>
    );
  } else return null;
};

export default App;
