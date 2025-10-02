import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

import { TiStarOutline } from 'react-icons/ti';
import { TiStarFullOutline } from 'react-icons/ti';
import '../styles/product-card.scss';

const ProductCard = ({ source, title }) => {
  const { darkTheme } = useContext(GlobalContext);

  return (
    <li className={`product-card-container ${darkTheme ? 'dark-theme' : ''}`}>
      <img src={source} alt={`imagem de ${title}`} className="product-img" />
      <nav className="product-nav-items">
        <span>Promo</span>
        <TiStarOutline />
        <TiStarFullOutline />
      </nav>
      <figcaption
        className={`product-caption ${darkTheme ? 'dark-theme' : ''}`}
      >
        <span>Produto: {title}</span>
        <span>Preço:</span>
        <button
          // onClick={() =>}
          className="product-button"
        >
          Adicionar
        </button>
      </figcaption>
    </li>
  );
};

export default ProductCard;
