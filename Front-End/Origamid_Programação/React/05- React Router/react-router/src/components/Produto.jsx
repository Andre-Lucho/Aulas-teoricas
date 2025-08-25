import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const search = new URLSearchParams(location.key);
    console.log(search);
  }, [location]);

  return (
    <div>
      <h1>Produtos</h1>
      <h2>Produto: {params.id}</h2>
    </div>
  );
};

export default Produto;
