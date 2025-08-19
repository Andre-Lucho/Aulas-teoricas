import { useCallback, useState } from 'react';

const set1 = new Set();
const setCallback = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  setCallback.add(func2);

  console.log('Set1:', set1);
  //  a cada nova renderização, uma nova 'função func1' é armazenada em set1();

  console.log('SetCallback:', setCallback);
  // só armazena a 'função func2' um única vez!
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
