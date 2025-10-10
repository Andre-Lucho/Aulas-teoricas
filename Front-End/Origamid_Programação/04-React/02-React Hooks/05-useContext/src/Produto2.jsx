import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Produto2 = () => {
  const globalContent = useContext(GlobalContext);
  return (
    <div>
      <p>{globalContent.nome} Comprou:</p>
      {/* contexto sendo consumido com os seus elementos exportados */}
      <p>{globalContent.comprar} Frutas</p>
      <button onClick={globalContent.handleClick}>Comprar</button>
    </div>
  );
};

export default Produto2;
