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
