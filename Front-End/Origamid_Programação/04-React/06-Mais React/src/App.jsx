import { useState } from 'react';
import { Produtos } from './components/Produtos';

function App() {
  const [ativar, setAtivar] = useState(true);
  return (
    <div>
      {ativar && <Produtos titulo={'Novos Produtos'} />}
      <button onClick={() => setAtivar(!ativar)}>Toggle</button>
    </div>
  );
}

export default App;
