import { Fragment } from 'react';
import Form from './Form/Form.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Ativo</p>;
  }
};

function App() {
  return (
    <Fragment>
      <Teste />
      <Header />
      <br />
      <Form />
      <Footer />
    </Fragment>
  );
}

export default App;
