import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';
import Titulo from './Titulo';

const { pathname } = window.location;
let Component;
pathname === '/Produtos' ? (Component = Produtos) : (Component = Home);

const App = () => {
  return (
    <>
      <ul>
        <Header href="http://localhost:5173/" tagName="Home" />
        <Header href="./Produtos" tagName="Produtos" />
      </ul>
      <Component />
    </>
  );
};

export default App;
