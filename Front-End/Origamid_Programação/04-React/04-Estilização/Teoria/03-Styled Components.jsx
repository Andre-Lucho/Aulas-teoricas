/*
Styled Components
----------------------------------------------------------------------
Permite escrevermos o CSS diretamente no JavaScript. 
Ao invés de classes, criamos COMPONENTES com um estilo único.

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: tomato;
`;

const App = () => {
  return (
    <div>
      <Title>Título principal</Title>
    </div>
  );
};

*/

/*
Instalação
----------------------------------------------------------------------
npm install styled-components

Plugin do VS Code:
# vscode-styled-components */

/*
styled
----------------------------------------------------------------------
O styled é um objeto com diferentes métodos que representam as tags de HTML.

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2em;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  return (
    <ProdutosContainer>
      <Produto>
        <Titulo>
          Notebook <Preco>R$ 1999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
      <Produto>
        <Titulo>
          Smartphone <Preco>R$ 2999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
    </ProdutosContainer>
  );
}; */

/*
Template String Transpilation
----------------------------------------------------------------------
O uso dos backticks para passarmos a string com os valores do CSS, é válido no JavaScript. 
Esses valores são passados como argumento da função.

function template(value, total) {
  console.log(value);
  console.log(total);
}
const total = 10;
template`São ${total} no total`; */

/*
Props
----------------------------------------------------------------------
Podemos passar propriedades como em um component de React.


const Preco = styled.p`
  background: ${(props) => props.cor}; **
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  function template(value, total) {
    console.log(value);
    console.log(total);
  }
  const total = 10;
  template`São ${total} no total`;

  return (
    <div>
      <Preco cor="#53d956">R$ 2999</Preco>
      <Preco cor="#84e">R$ 1999</Preco>
    </div>
  );
};

Obs:
-----
-----

1) Nos dá a possibilidade de reaproveitamento, variando nas propriedades que sejam necessárias;

2) Podemos utilizar métodos JS: 
background: ${ hsl(Math.random() * 360, 100%, 50%) }
hsl - hue, saturação, luminozidade
hue = cor --> trocando aleatoriamente com JS

*/

/*

Estado
----------------------------------------------------------------------
Podemos passar o estado como uma propriedade e modificarmos certos estilos com base no mesmo.


import styled from 'styled-components';

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
      Ativar
    </Button>
  );
};

*/

/*
Pseudo
----------------------------------------------------------------------
Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento.

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;


*/
