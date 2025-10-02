import { useState } from 'react';
import './Flashcard.scss';

// O componente recebe os dados do card e uma função para fechá-lo
const Flashcard = ({ data, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Dados mock caso não venham via props, para evitar erros
  const {
    title = 'Título Padrão',
    difficulty = 'medium',
    content = 'Conteúdo do card...',
    questionId = '#',
  } = data || {};

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este card?')) {
      // Aqui viria a lógica para chamar o backend e excluir o card
      console.log(`Card ${title} excluído!`);
      onClose(); // Fecha o modal após a exclusão
    }
  };

  // Impede que o clique dentro do card feche o modal
  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Overlay que escurece o fundo e fecha o modal ao clicar fora
    <div className="flashcard-modal-overlay" onClick={onClose}>
      <div
        className={`flashcard-container ${isFlipped ? 'is-flipped' : ''}`}
        onClick={handleCardClick} // Usa o stopPropagation
      >
        {/* Frente do Card */}
        <div className="flashcard-front" onClick={handleFlip}>
          <div
            className={`difficulty-tag difficulty-${difficulty.toLowerCase()}`}
          >
            {difficulty}
          </div>
          <h2 className="card-title">{title}</h2>
          <span className="flip-hint">Clique para virar</span>
        </div>

        {/* Verso do Card */}
        <div className="flashcard-back">
          <div className="card-content">
            <p>{content}</p>
          </div>
          <div className="card-actions">
            <button
              className="action-btn access-btn"
              onClick={() => (window.location.href = questionId)}
            >
              Acessar
            </button>
            <button className="action-btn edit-btn">Editar</button>
            <button className="action-btn delete-btn" onClick={handleDelete}>
              Excluir
            </button>
          </div>
          <span className="flip-hint-back" onClick={handleFlip}>
            Voltar
          </span>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
