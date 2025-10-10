import React from 'react';

import styled from 'styled-components';

// aplicando um componente e dizendo qual tag quero estilizar via template string

const Body = styled.body`
  background-color: #181f2b;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: aqua;
`;

// ao inspecionar --> ele cria uma tag do tipo apontado, com um in-line CSS style
function App() {
  return (
    <div>
      <Body></Body>
      <Title>Titulo Styled-component</Title>
    </div>
  );
}

export default App;
