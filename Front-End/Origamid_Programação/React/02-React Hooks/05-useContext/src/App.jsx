import React from 'react';
import Produto from './Produto';
// import UserContext from './UserContext';

// const App = () => {
//   return (
//     <UserContext.Provider value={{ nome: 'André' }}>
//       <Produto />
//     </UserContext.Provider>
//   );
// };

import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
