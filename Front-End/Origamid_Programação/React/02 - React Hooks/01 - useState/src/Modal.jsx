import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <>
        Esse é o modal. <button onClick={() => setModal(false)}>Fechar</button>
      </>
    );
  }
  return null;
};

export default Modal;
