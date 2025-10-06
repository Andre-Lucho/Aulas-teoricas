/*
Bootstrap e React-Bootstrap
-----------------------------------
Podemos adicionar qualquer library/framework de css ao React. 
Popper é necessário para algumas funções do bootstrap.
npm install bootstrap



Instalando com Vite
----------------------
-----------------------

npm i --save bootstrap @popperjs/core
npm i --save-dev sass


Estrutura de pastas
--------------------

/src:
/src ----> index.html
/src/js --> main.js
/src/scss --> styles.scss


Configure Vite (vite.config.js):
-----------------------------------

import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
}


index.html
---------------

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Vite</title>
    ** <script type="module" src="./js/main.js"></script> **
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
  </body>
</html>


Importando o Bootstrap
-------------------------
Arquivo --> src/scss/styles.scss:
-----------------------------------

@import "bootstrap/scss/bootstrap";



Importando JS Bootstrap (Popper will be imported automatically through Bootstrap):
--------------------------------------------------------------------------------------
Arquivo --> src/js/main.js:
------------------------------

Import our custom CSS:
import '../scss/styles.scss'

Import all of Bootstrap’s JS:
import * as bootstrap from 'bootstrap'

---------------------------------------------------------

You can also import JavaScript plugins individually as needed to keep bundle sizes down:
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';




Aula
------
-------


Main.jsx
------------
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);


App.jsx
---------
import React from 'react';

const App = () => {
  return (
    <div className="card bg-dark text-white m-5" style={{ maxWidth: '18rem' }}>
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500</h5>
        <p className="card-text">
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </p>
      </div>
    </div>
  );
};

export default App;


React-Bootstrap
-------------------
-------------------

Componentes
-----------------------------------
Existem frameworks de CSS que te fornecem componentes prontos para serem utilizados no local de classes. 
O React-Bootstrap utiliza em sua base o bootstrap, mas fornece componentes React.

npm install react-bootstrap bootstrap

import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <Card bg="dark" text="white" style={{ maxWidth: '18rem' }} className="m-5">
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App; */
