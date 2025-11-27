import { useState, useRef, useEffect } from 'react';

const Display = () => {
  const [menu, setMenu] = useState(false);

  const ul = useRef();

  useEffect(() => {
    ul.current.classList.toggle('invisible');
  }, [menu]);

  const handleClick = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <div className="m-4">
        <a href="/" className="bg-blue-200 py-2 px-4 inline-block">
          Contato
        </a>
        <a href="/" className="bg-blue-200 py-2 px-4 block">
          Sobre
        </a>
        <p className="bg-purple-200 py-2 px-4">Saiba Mais</p>
      </div>
      <nav>
        <button
          id="menuButton"
          className="bg-purple-300 px-4 py-2"
          onClick={handleClick}
        >
          Menu
        </button>
        <ul id="menu" ref={ul} className="invisible text-white">
          {/* hidden == display:none */}
          <li>Produtos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <p>Aqui</p>
      </nav>
    </>
  );
};

/*
Display
----------------------------------------------
block / inline / inline-block
grid / flex / inline-flex / inline-grid


Hidden e Invisible
----------------------------------------------
hidden === display: none; -- o elemento não está add no momento

Mantém a propriedade CSS --> visibility: hidden
invisible === visibility: hidden; -- mantem o espaçamento do item, porém está invisível


sr-only (screen-reader only) --> para leitores de tela
----------------------------------------------
sr-only e not-sr-only

Sr-only é uma classe utilitária que funciona como um recurso de acessibilidade que mantém o elemento DOM disponível para leitores de tela.
É utilizado para deixar o elemento não visível, apenas se tornando visível com se dá algum comando(ex. tecla TAB)
mto utilizado juntament com focus:not-sr-only == quando está focado, o elem DOM aparece em tela; qd não, não aparece.




*/

export default Display;
