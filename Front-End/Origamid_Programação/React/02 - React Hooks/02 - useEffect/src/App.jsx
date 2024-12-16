import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);

  const titulo = 'Clicou ';

  React.useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar)
  }, []);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
