import React from 'react';

// const ButtonModal = ({ setModal }) => {
//   return <button onClick={() => setModal(true)}>Abrir</button>;
//   // setModal (true ) está vindo do useState em App.jsx, ATRAVÉS da prop!
// };

// export default ButtonModal;

// Callback

const ButtonModal = ({ setModal }) => {
  function handleClick() {
    setModal((ativo) => !ativo);
  }

  return <button onClick={handleClick}>Abrir</button>;
};

// Agora, o button abrir também fecha o modal
export default ButtonModal;
