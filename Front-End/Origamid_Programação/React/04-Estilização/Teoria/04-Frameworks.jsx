/*
CSS
-----------------------------------
Podemos adicionar qualquer library/framework de css ao React. 
Popper é necessário para algumas funções do bootstrap.

npm install bootstrap@next

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



Componentes
-----------------------------------
Existem frameworks de CSS que te fornecem componentes prontos para serem utilizados no local de classes. 
O react-bootstrap utiliza em sua base o bootstrap, mas fornece componentes React.

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
