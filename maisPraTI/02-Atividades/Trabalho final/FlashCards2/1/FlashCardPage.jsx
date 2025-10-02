import React from 'react';
import NavBar from '../components/NavBar';
import Flashcard from '..components/SavedFlashCard';
import '../styles/components/savedFlashCard.sass';

export default function FlashCardPage() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const mockCardData = {
  //   title: 'Palavra ou Tema aqui',
  //   difficulty: 'medium',
  //   initialContent: '',
  //   questionId: '/questions/123',
  // };

  // const handleModal = () => {
  //   setIsModalOpen((prev) => !prev);
  // };

  return (
    <div className="container-flashcard">
      {/* <div>
        <NavBar />
      </div> */}

      {/* Layout mínimo p teste == FlashCardSalvo */}
      <div className="App">
        <header className="App-header">
          <h1>Meus Flashcards</h1>
          <button className="open-card-btn" onClick={handleModal}>
            Abrir Flashcard
          </button>
        </header>
      </div>

      <div>
        {isModalOpen && <Flashcard data={mockCardData} onClose={handleModal} />}
      </div>

      <div>{/* Flashcards em si */}</div>
    </div>
  );
}
