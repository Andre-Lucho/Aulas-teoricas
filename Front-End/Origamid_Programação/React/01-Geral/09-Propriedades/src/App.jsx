import Form from './Form/Form';

// 1.

// function App() {
//   return (
//     <>
//       <Form />
//     </>
//   );
// }

// 2.

import Titulo3 from './Título3';
const App = () => {
  return (
    <section>
      <Titulo3 />
      {/* nessa linha está renderizando normalmente o componente s/ Children*/}
      <Titulo3>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo3>{' '}
      {/* aqui temos o children executado*/}
    </section>
  );
};

export default App;
