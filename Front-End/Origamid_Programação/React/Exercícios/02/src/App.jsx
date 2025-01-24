import InputTag from './InputTag';
import List from './List';

const App = () => {
  // useEffect(() => {}, [item]);
  return (
    <>
      <div className="header">
        <h1>TODO List</h1>
        <h2>Lista de Tarefas:</h2>
      </div>
      <InputTag />
      <List />
    </>
  );
};

export default App;
