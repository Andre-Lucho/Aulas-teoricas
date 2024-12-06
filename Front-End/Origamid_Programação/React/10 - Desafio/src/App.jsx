import Home from './Home';
import Header from './Header';
import Produtos from './Produtos';
import Titulo from './Titulo';

function App() {
  const { pathname } = window.location;
  let Component;
  pathname === '/produtos.html' ? (Component = Produtos) : (Component = Home);

  return (
    <>
      <ul>
        <Header cl="lista" href="http://localhost:5173/" tagName="Home" />
        <Header cl="lista" href="./produtos.html" tagName="Produtos" />
      </ul>
      <Component />
    </>
  );
}

export default App;
