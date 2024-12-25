import React from 'react';
import Produto from './Produto';

// const App = () => {
//   const [contar, setContar] = React.useState(0);

//   // const titulo = 'Clicou '; estático (não reativo)

//   React.useEffect(() => console.log('teste'), []);

//   React.useEffect(() => {
//     document.title = 'Clicou ' + contar;
//   }, [contar]);

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
// };

// export default App;

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const [modal, setModal] = React.useState(false);

//   React.useEffect(() => {
//     document.title = 'Total ' + contar;
//   }, [contar]);

//   React.useEffect(() => {
//     setContar(0);
//   }, [modal]);

//   return (
//     <>
//       {modal && <p>Meu Modal</p>}
//       <button onClick={() => setModal(!modal)}>Modal</button>
//       <hr />
//       <button onClick={() => setContar(contar + 1)}>{contar}</button>
//     </>
//   );
// };

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </>
  );
};

export default App;
