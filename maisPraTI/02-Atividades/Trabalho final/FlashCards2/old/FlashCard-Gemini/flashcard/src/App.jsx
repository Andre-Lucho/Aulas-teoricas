import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import AddCardForm from './components/AddCardForm';
import EditCardForm from './components/EditCardForm';

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: 'O que é React?', content: 'Uma biblioteca JavaScript para construir interfaces de usuário.', difficulty: 'Fácil' },
    { id: 2, title: 'O que é JSX?', content: 'Uma extensão de sintaxe para JavaScript que permite escrever HTML em React.', difficulty: 'Fácil' },
    { id: 3, title: 'O que são Hooks?', content: 'Funções que permitem usar o estado e outros recursos do React sem escrever uma classe.', difficulty: 'Médio' },
  ]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  const openCard = (id) => {
    const card = cards.find(c => c.id === id);
    setSelectedCard(card);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
    closeCard();
  };

  const addCard = (card) => {
    const newCard = { ...card, id: Date.now() };
    setCards([...cards, newCard]);
    setShowAddForm(false);
  };

  const updateCard = (updatedCard) => {
    setCards(cards.map(card => (card.id === updatedCard.id ? updatedCard : card)));
    setEditingCard(null);
    closeCard();
  };

  return (
    <div className="App">
      <h1>Flashcards</h1>
      <button onClick={() => setShowAddForm(true)}>Adicionar Novo Card</button>
      <div className="card-list">
        {cards.map(card => (
          <div key={card.id} className="card-list-item">
            <span>{card.title}</span>
            <button onClick={() => openCard(card.id)}>Abrir</button>
          </div>
        ))}
      </div>
      {selectedCard && (
        <Flashcard
          card={selectedCard}
          onClose={closeCard}
          onDelete={deleteCard}
          onEdit={() => setEditingCard(selectedCard)}
        />
      )}
      {showAddForm && <AddCardForm onAddCard={addCard} onCancel={() => setShowAddForm(false)} />}
      {editingCard && (
        <EditCardForm
          card={editingCard}
          onUpdateCard={updateCard}
          onCancel={() => setEditingCard(null)}
        />
      )}
    </div>
  );
}

export default App;
