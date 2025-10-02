import React from 'react';
import { GlobalStorage } from './components/GlobalContext';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStorage>
        <Navbar />
        <ProductGrid />
        <Footer />
      </GlobalStorage>
    </>
  );
}

export default App;
