import React from 'react';
// import UserContext from './UserContext';

// 1.

// const Produto = () => {
//   const dados = React.useContext(UserContext);
//   console.log(dados);

//   return (
//     <div>
//       <p>{dados.nome}</p>
//     </div>
//   );
// };

// 2.
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const contextoGlobal = React.useContext(GlobalContext);
  // console.log(global);

  return (
    <div>
      <p>Cliente: {contextoGlobal.nome}</p>
      <p>Ítens comprados: {contextoGlobal.comprar}</p>
      <button onClick={() => contextoGlobal.comprarDois()}>Comprar +2</button>
      <button onClick={() => contextoGlobal.comprarUm()}>Comprar +1</button>
    </div>
  );
};

export default Produto;
