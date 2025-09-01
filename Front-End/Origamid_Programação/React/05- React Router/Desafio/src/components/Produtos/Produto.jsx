import { useEffect, useState } from 'react';
import '../../styles/produto.scss';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const handleFetch = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const rJson = await response.json();
        setProduto(rJson);
      } catch (erro) {
        setError(`Erro api:  ${error}`);
      } finally {
        setLoading(false);
      }
    };
    handleFetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  useEffect(() => {
    if (produto) {
      const { nome } = produto;
    }
  }, [produto]);

  if (loading)
    return (
      <>
        <p>Carregando...</p>
      </>
    );

  if (error)
    return (
      <div className="erro-container">
        <p>Erro na requisição!</p>
        <p>{error}</p>
      </div>
    );

  if (!produto) return null;

  if (produto)
    return (
      <section className="produto-container">
        <h1>{nome}</h1>
        <span>R$ {preco}</span>
        <p>{descrição}</p>
      </section>
    );
};

export default Produto;
