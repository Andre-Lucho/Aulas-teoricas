import { useState } from 'react';

const Display = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <nav>
        <button
          id="menuButton"
          className="bg-purple-300 px-4 py-2"
          onClick={(prev) => setMenu(!prev)}
        >
          Menu
        </button>
      </nav>
      {menu && (
        <ul id="menu">
          <li>Produtos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      )}
      <a href="/" className="bg-blue-200 py-2 px-4 inline">
        Contato
      </a>
      <a href="/" className="bg-blue-200 py-2 px-4 inline-block">
        Sobre
      </a>
      <p className="bg-purple-200 py-2 px-4">Saiba Mais</p>
      <a href="#principal" className="sr-only focus:not-sr-only">
        Pular para o conteúdo
      </a>
      <nav>
        <ul className="mb-96 flex gap-4">
          <li>
            <a href="/">Produtos</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>

      <main id="principal">
        <h1>Notebooks e Smartphones</h1>
      </main>
    </div>
  );
};

/*
Display
----------------------------------------------
block / inline / inline-block
grid / flex / inline-flex / inline-grid


Hidden e Invisible
----------------------------------------------
hidden - display: none; -- o elemento não está add no momento
invisible - visibility: hidden; -- mantem o espaçamento do item, porém está invisível


sr-only (screen-reader only)
----------------------------------------------
sr-only e not-sr-only

É uma classe utilitária que esconde o elemento da tela, mas mantém ele disponível para leitores de tela.



*/

export default Display;
