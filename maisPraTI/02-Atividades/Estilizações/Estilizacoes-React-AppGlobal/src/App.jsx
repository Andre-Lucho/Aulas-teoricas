import React from 'react';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>Estilizações com React</h1>
      <p>Escolha uma das abordagens de estilização abaixo:</p>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem', 
        marginTop: '2rem' 
      }}>
        <a 
          href="/01-css-global" 
          style={{ 
            padding: '1rem', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '4px', 
            textDecoration: 'none', 
            color: '#333',
            border: '1px solid #ddd'
          }}
        >
          1. CSS Global
        </a>
        <a 
          href="/02-css-modules" 
          style={{ 
            padding: '1rem', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '4px', 
            textDecoration: 'none', 
            color: '#333',
            border: '1px solid #ddd'
          }}
        >
          2. CSS Modules
        </a>
        <a 
          href="/03-tailwind" 
          style={{ 
            padding: '1rem', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '4px', 
            textDecoration: 'none', 
            color: '#333',
            border: '1px solid #ddd'
          }}
        >
          3. Tailwind CSS
        </a>
        <a 
          href="/04-styled-components" 
          style={{ 
            padding: '1rem', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '4px', 
            textDecoration: 'none', 
            color: '#333',
            border: '1px solid #ddd'
          }}
        >
          4. Styled Components
        </a>
      </div>
    </div>
  );
}

export default App;