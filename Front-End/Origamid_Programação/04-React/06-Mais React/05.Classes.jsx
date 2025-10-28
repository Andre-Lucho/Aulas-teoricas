/*
Classes
----------------------------------------

extends React.Component
-------------------------
Antes dos hooks a única forma de criarmos componentes com estados reativos, era através da extensão da classe React.Component. O JSX que é renderizado pelo componente de classe deve estar dentro do retorno do método render(). 

*/

// Produtos.jsx

import React from 'react';

export class Produtos extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente de Classe</h1>
      </div>
    );
  }
}

import Produtos from './Produtos';

const App = () => {
  return (
    <div>
      <Produtos />
    </div>
  );
};

/*
this.props
-------------
As propriedades ficam dentro do objeto da classe, e podem ser acessadas através do this.props;

*/

const App1 = () => {
  return (
    <div>
      <Produtos titulo="Meus Produtos" />
    </div>
  );
};

class Produtos1 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}

/*

this.state
------------------
Para definirmos um estado, temos que definir o valor inicial do mesmo no contructor da classe. 
Como essa classe é uma extensão, é necessários usarmos o super com o valor das propriedades do Component.

*/
class Produtos2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}

/*

this.setState()
----------------------
O this.setState é um método especial utilizado para atualizarmos o this.state. 
Ele irá renderizar o componente, toda vez que for ativado.

*/

class Produtos3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button
          onClick={() =>
            this.setState((state) => ({
              contar: state.contar + 1,
            }))
          }
        >
          Adicionar
        </button>
      </div>
    );
  }
}

/*
Métodos
----------------
Os métodos podem ser definidos no corpo da classe. 
Mas para passarmos os mesmos como um callback é necessário utilizarmos o bind, para que o método mantenha o contexto da classe em this.

*/

class Produtos4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

/*
Ciclo de Vida
-----------------------
Assim como podemos usar o useEffect para efeitos que acontecem de acordo com mudanças no componente. Temos também alguns métodos na classe para lidar com esse ciclo de vida do componente. Aqui mostro apenas 3, mas existem diversos outros métodos.

*/

class Produtos5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Quando ele monta, utilizado para o Fetch');
  }

  componentDidUpdate() {
    console.log('Sempre que atualiza');
  }

  componentWillUnmount() {
    console.log('Sempre que é desmontado');
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}
