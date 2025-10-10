import Produto from './Produto';
import UserContext from './UserContext';

// 1.

const App = () => {
  // console.log(UserContext);
  return (
    <UserContext.Provider value={{ nome: 'André' }}>
      <Produto />
    </UserContext.Provider>
  );
};
// o componente Produto está sendo envolvido pelo UserContext, com o Provider --> tem acesso global ao objeto --> {nome: 'André'}

export default App;
