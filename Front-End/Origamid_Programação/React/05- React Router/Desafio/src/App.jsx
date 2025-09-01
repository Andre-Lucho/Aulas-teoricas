import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStorage } from './components/Global/GlobalContext';
import Dashboard from './components/Produtos/Dashboard';
import Header from './components/Header';
import Contato from './components/Contato';
import NotFound from './components/NotFound';
import Produto from './components/Produtos/Produto';
import Head from './components/Hooks/Head';
import './styles/App.scss';

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <GlobalStorage>
          <section>
            <Header />
            {/* <Head title="Home" description="home" /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="produto/:id" element={<Produto />} />
              <Route path="contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </GlobalStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;
