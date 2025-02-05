import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';
import Limpar from './Limpar';
import NovoDados from './NovoDados';

const App = () => {
  return (
    <GlobalStorage>
      <Limpar />
      <br />
      <NovoDados />
      <br />
      <Produto />
    </GlobalStorage>
  );
};

export default App;
