import React, { useState } from 'react';
import './AddCardForm.css';

const AddCardForm = ({ onAddCard, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [difficulty, setDifficulty] = useState('Fácil');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onAddCard({ title, content, difficulty });
    setTitle('');
    setContent('');
    setDifficulty('Fácil');
  };

  return (
    <div className="add-card-form-overlay">
      <div className="add-card-form-content">
        <h2>Adicionar Novo Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">Dificuldade</label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="Fácil">Fácil</option>
              <option value="Médio">Médio</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit">Adicionar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardForm;
