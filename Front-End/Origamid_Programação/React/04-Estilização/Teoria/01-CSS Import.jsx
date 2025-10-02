/*

CSS Import
----------------------------------------------------------------------
A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript.
Quem gerencia as importações é builder(Css loader e style loader)

import './App.css';

App.jsx
----------
import './App.css';

const App = () => {
  return (
    <div className="container">
      <p className="text">Meu site</p>
    </div>
  );
};

App.css
----------------
// Estilização abaixo */

/*
Componentes
----------------------------------------------------------------------

Ao importar um componentes, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.

App.jsx
----------
import './App.css';
import Title from './Components/Title';

const App = () => {
  return (
    <div className="container">
      <Title text="Meu título" /> 
      <p className="text">Meu site</p>
    </div>
  );
};

Title.jsx
------------
import './Title.css';

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};

Title.css
-------------
.Title {
  font-size: 2rem;
  font-family: Cambria, serif;
}
*/

/*
Conflito
----------------------------------------------------------------------
Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.

import Title from './Components/Title';
import Produto from './Components/Produto';

App.jsx
------------
const App = () => {
  return (
    <div>
      <Title text="Meu título" />
      <Produto />
    </div>
  );
};

Title.jsx
-------------
import './Title.css';

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};

Title.css
-----------
.Title {
  font-size: 2rem;
  font-family: sans-serif;
}

Product.jsx
----------------
import './Produto.css';

const Produto = () => {
  return <h1 className="Title">Notebook</h1>;
};


Produto.css
-------------------
h1 {
  color: tomato;
}
h1.Title {
  font-family: serif;
}

main.css (bundle final)
---------------------------------
.Title {
  font-size: 2rem;
  font-family: sans-serif;
}
h1 {
  color: tomato;
}
h1.Title {
  font-family: serif;
}

*/

/*
Evite Conflitos
----------------------------------------------------------------------
Defina nomes únicos para os componentes e coloque classes com os mesmos nomes

import './UserForm.css';

const UserForm = () => {
  return (
    <div className="UserForm">
      <h1>Formulário</h1>
      <p className="UserFormText">Esse texto.</p>
    </div>
  );
};


UserForm.css
-----------------------
.UserForm h1 {
  color: tomato;
}

.UserFormText {
  font-family: serif;
}

*/
