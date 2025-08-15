import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemelProvider from '../context/themeProvider';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <themeContext>
      <App />
    </themeContext>
  </StrictMode>,
);
