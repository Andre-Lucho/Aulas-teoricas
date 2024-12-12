import React from 'react';
import Button from './Button';
import fecthSmatphone from './fecth/smartphone.js';
import fecthNotebook from './fecth/notebook.js';
import fecthTablet from './fecth/tablet.js';

const App = () => {
  const [dados, setDados] = React.useState(null);

  return (
    <>
      <Button produto="Tablet" />
    </>
  );
};

export default App;
