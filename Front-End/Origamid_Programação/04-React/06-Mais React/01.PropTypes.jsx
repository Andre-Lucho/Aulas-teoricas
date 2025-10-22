/*
PropTypes
-----------------------------------
No Vite é necessário instalar o pacote prop-types.

Instalar:
npm install prop-types


O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É também possível especificar se uma propriedade é obrigatória ou não. O prop-types já vem instalado no create-react-app, basta importarmos o mesmo para utilizarmos.

https://reactjs.org/docs/typechecking-with-proptypes.html */

import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

// App.js;

import Button from './Button';

const App = () => {
  return (
    <div>
      <h1>Meu App</h1>
      <Button margin="10px" width={300}>
        Clique Aqui
      </Button>
    </div>
  );
};

/*

defaultProps
-----------------
Podemos também definir valores padrões para as propriedades através do defaultProps. 
Não é necessário o uso do prop-types para definirmos uma propriedade padrão. 
Isso faz parte do React. */

import PropTypes from 'prop-types';

export const Button2 = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  width: 200,
  disabled: false,
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};
