// 1.

import Form from './Form/Form';

// aqui, com props desestruturado: props.backgroundColor, props.color, props.texto --> no return
const Titulo = ({ backgroundColor, color, texto, children }) => {
  return (
    <h1 style={{ backgroundColor: backgroundColor, color: color }}>
      {texto}, {children}
    </h1>
  );
};

function App() {
  return (
    <div>
      <Titulo backgroundColor="red" color="purple" texto="meu título 1" />
      <Titulo backgroundColor="blue" color="gray" texto="Novo título 1" />
      <Titulo texto="outro título 2">
        Esse é o Children
        <p>Passando outros elems no Children</p>
      </Titulo>
      <Form />
    </div>
  );
}

export default App;
