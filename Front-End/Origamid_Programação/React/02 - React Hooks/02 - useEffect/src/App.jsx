import React from 'react';
import Produto from './Produto';

// const App = () => {
//   const [contar, setContar] = React.useState(0);

//   // const titulo = 'Clicou ';

//   React.useEffect(() => console.log('teste'), []);

//   React.useEffect(() => {
//     document.title = 'Clicou ' + contar;
//   }, [contar]);

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
// };

// export default App;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </div>
  );
};

export default App;
