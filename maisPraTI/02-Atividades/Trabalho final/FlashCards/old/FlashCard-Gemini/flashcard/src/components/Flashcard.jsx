import React, { useState } from 'react';
import './Flashcard.css';
import { LuFileQuestion } from 'react-icons/lu';
import { TiPencil } from 'react-icons/ti';
import { FaRegTrashAlt } from 'react-icons/fa';

const Flashcard = ({ card, onClose, onDelete, onEdit }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!card) {
    return null;
  }

  const { id, title, content, difficulty } = card;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este card?')) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    onEdit();
  };

  const difficultyColor = {
    Fácil: 'green',
    Médio: 'orange',
    Difícil: 'red',
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flashcard">
          <div className={`card-inner ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="card-face card-front">
              <div className="difficulty-tag" style={{ backgroundColor: difficultyColor[difficulty] }}>
                {difficulty}
              </div>
              <div className="card-title">{title}</div>
            </div>
            <div className="card-face card-back">
              <div className="card-content">{content}</div>
            </div>
          </div>
        </div>
        <div className="card-actions">
          <button><LuFileQuestion /></button>
          <button onClick={handleEdit}><TiPencil /></button>
          <button onClick={handleDelete}><FaRegTrashAlt /></button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
