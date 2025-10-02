import React from 'react';
import { GlobalStorage } from './components/GlobalContext';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styled-components/theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${GlobalStyle}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalStorage>
        <Navbar />
        <ProductGrid />
        <Footer />
      </GlobalStorage>
    </ThemeProvider>
  );
}

export default App;
