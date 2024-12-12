// import React from 'react';

// const Button = (fetchFunction, produto) => {
//   return (
//     <>
//       <button style={{ margin: '.3rem' }} onClick={fetchFunction}>
//         {produto}
//       </button>
//     </>
//   );
// };

// export default Button;

// Corrigido - Aula

import React from 'react';
import dadosProduto from './fecthProduto';
import fecthNotebook from './fecth/notebook';

const Button = ({ produto }) => {
  function handleClick(event) {
    const evento = event.target.innerText;
    fecthNotebook(evento);
  }

  return (
    <>
      <button style={{ margin: '.3rem' }} onClick={handleClick}>
        {produto}
      </button>
    </>
  );
};

export default Button;
