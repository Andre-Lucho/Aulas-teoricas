import React, { useState } from 'react';
import { GlobalStorage } from './GlobalContext';
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <GlobalStorage>{<Form />}</GlobalStorage>
    </div>
  );
};

export default App;
