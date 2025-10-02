import { useState } from 'react';
import { FlashcardModal } from '/components/flashcard-modal';
// import { Button } from "@/components/ui/button"

const sampleFlashcard = {
  id: '1',
  title: 'Conceitos de React',
  question: 'O que são React Hooks?',
  answer:
    'React Hooks são funções especiais que permitem usar estado e outras funcionalidades do React em componentes funcionais. Eles foram introduzidos no React 16.8 e incluem useState, useEffect, useContext, entre outros.',
  difficulty: 'medium',
  questionId: 'q123',
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Sistema de Flashcards
        </h1>

        <div className="text-center">
          <Button onClick={() => setIsModalOpen(true)}>Abrir Flashcard</Button>
        </div>

        <FlashcardModal
          flashcard={sampleFlashcard}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onEdit={(id) => console.log('Editar flashcard:', id)}
          onDelete={(id) => console.log('Excluir flashcard:', id)}
          onViewQuestion={(questionId) =>
            console.log('Ver questão:', questionId)
          }
        />
      </div>
    </div>
  );
}
