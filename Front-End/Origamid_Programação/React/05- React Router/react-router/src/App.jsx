import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Produto from './components/Produto';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
