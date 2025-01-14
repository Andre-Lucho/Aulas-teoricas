import React from 'react';

const Produto = () => {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    // Utilizamos o useEffect para adicionarmos eventos direto ao DOM

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; //
  }, []);
  // Limpa o evento quando o elemento é removido do DOM.

  return <p style={{ height: '200vh' }}>Produto</p>;
};

export default Produto;
