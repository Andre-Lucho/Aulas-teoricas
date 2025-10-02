import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from './Button';
import Skeleton from './Skeleton';

import { TiStarOutline } from 'react-icons/ti';
import { TiStarFullOutline } from 'react-icons/ti';
import '../styles/product-card.scss';

const ProductCard = ({ source, title }) => {
  const { darkTheme } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <li className={`product-card-container ${darkTheme ? 'dark-theme' : ''}`}>
        <Skeleton width="100%" height="200px" />
        <nav className="product-nav-items">
          <Skeleton width="60px" height="20px" />
        </nav>
        <figcaption
          className={`product-caption ${darkTheme ? 'dark-theme' : ''}`}
        >
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="20px" />
          <Skeleton width="100px" height="36px" />
        </figcaption>
      </li>
    );
  }

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
        <Button variant="solid">
          Adicionar
        </Button>
      </figcaption>
    </li>
  );
};

export default ProductCard;
