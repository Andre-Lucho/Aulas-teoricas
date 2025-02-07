import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';
import Limpar from './Limpar';
import NovoDados from './NovoDados';

const App = () => {
  return (
    <GlobalStorage>
      <NovoDados />
      <br />
      <Limpar />
      <br />
      <Produto />
    </GlobalStorage>
  );
};

export default App;
