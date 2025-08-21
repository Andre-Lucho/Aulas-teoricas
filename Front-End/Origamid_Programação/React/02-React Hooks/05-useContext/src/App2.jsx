import Produto2 from './Produto2';
import { GlobalStorage } from './GlobalContext';
// importando o elemento sem o --> export default

const App2 = () => {
  return (
    <div>
      <GlobalStorage>
        <Produto2 />
      </GlobalStorage>
    </div>
  );
};

export default App2;

/*
Importante:
O componente App não precisa acessar o contexto de GlobalContext diretamente, pois ele vai ser o "pai" dos componentes que o utilizarão.


*/
