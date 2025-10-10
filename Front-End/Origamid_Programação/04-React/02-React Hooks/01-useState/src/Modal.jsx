import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <>
        <p>Esse é o modal.</p>
        <button style={{ marginRight: '1rem' }} onClick={() => setModal(false)}>
          Fechar
        </button>
      </>
    );
  }
  return null;
};

export default Modal;
