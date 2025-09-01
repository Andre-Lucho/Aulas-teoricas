import { useContext, useEffect } from 'react';
import { GlobalContext } from '../Global/GlobalContext';
import { Link } from 'react-router-dom';
import '../../styles/dashboard.scss';

const Dashboard = () => {
  const context = useContext(GlobalContext);
  const { request, fetchData, loading, error } = context;

  useEffect(() => {
    const handleFetch = async () => {
      await request(`https://ranekapi.origamid.dev/json/api/produto/`);
    };
    handleFetch();
  }, []);

  // useEffect(() => {
  //   console.log(fetchData);
  // }, [fetchData]);

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
        <p>{error.message}</p>
      </div>
    );

  if (!fetchData) return null;
  return (
    <>
      <h1>Produtos</h1>
      <div className="galery-container animeLeft">
        {fetchData &&
          fetchData.map((item) => {
            let { id, fotos, nome } = item;
            return (
              <Link to={`produto/${id}`} key={id} className="img-container">
                {fotos && fotos.length > 0 && (
                  <img src={fotos[0].src} alt={`Imagem: ${nome}`} />
                )}
                <span className="img-legenda">{nome}</span>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Dashboard;
