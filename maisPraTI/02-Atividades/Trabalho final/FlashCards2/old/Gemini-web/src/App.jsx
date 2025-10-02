// 1.
import { useState } from 'react';
import Flashcard from './components/Flashcard/Flashcard';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados que viriam do seu backend
  const mockCardData = {
    title: "O que é o Hook 'useState'?",
    difficulty: 'Easy',
    content:
      'É um Hook que permite adicionar estado a componentes de função. Ele retorna um par de valores: o estado atual e uma função para atualizá-lo.',
    questionId: '/questions/123', // Exemplo de rota para a questão
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu App de Flashcards</h1>
        <button className="open-card-btn" onClick={handleOpenModal}>
          Abrir Card de Exemplo
        </button>
      </header>

      {/* Renderização condicional do modal */}
      {isModalOpen && (
        <Flashcard data={mockCardData} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
