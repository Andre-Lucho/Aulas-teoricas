import React from 'react';
// import Produto from './Produto';

// const App = () => {
//   const [contar, setContar] = React.useState(0);

//   // const titulo = 'Clicou '; estático (não reativo)

//   React.useEffect(() => console.log('teste'), []);

//   React.useEffect(() => {
//     document.title = 'Clicou ' + contar;
//   }, [contar]);

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
// };

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

// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);

//   return (
//     <>
//       <p>Meu App</p>
//       <button onClick={() => setAtivo(!ativo)}>Abrir</button>
//       {ativo && <Produto />}
//     </>
//   );
// };

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && ( // verificando o valor de 'dados'; caso não tivesse, <h1> e <p> seriam null
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
