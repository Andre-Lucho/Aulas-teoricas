import React from 'react';
import Dashboard from './components/Dashboard';

import style from './styles/App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Dashboard />
    </div>
  );
}

export default App;
