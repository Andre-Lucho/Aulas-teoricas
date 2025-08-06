import React from 'react';

const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir</button>;
};

// Agora, o button abrir também fecha o modal
export default ButtonModal;
