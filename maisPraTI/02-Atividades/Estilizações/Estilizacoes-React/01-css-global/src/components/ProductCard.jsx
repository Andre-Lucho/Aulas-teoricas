import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from './Button';
import Skeleton from './Skeleton';

import { TiStarOutline } from 'react-icons/ti';
import { TiStarFullOutline } from 'react-icons/ti';
import '../styles/product-card.scss';

const ProductCard = ({ product, i }) => {
  const { darkTheme, favoriteProducts, toggleFavorite } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const { name, image, price, id } = product;

  const isFavorite = favoriteProducts.includes(id);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getButtonVariant = (i) => {
    const variants = ['solid', 'outline', 'ghost'];
    return variants[i % 3];
  };

  if (loading) {
    return (
      <li className={`product-card-container ${darkTheme ? 'dark-theme' : ''}`}>
        <Skeleton width="100%" height="300px" />
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
      <img src={image} alt={`imagem de ${name}`} className="product-img" />
      <nav className="product-nav-items">
        <span className="promo">Promo</span>
        <span
          className="fav-icon"
          onClick={() => toggleFavorite(id)}
          style={{ cursor: 'pointer' }}
        >
          {isFavorite ? <TiStarFullOutline /> : <TiStarOutline />}
        </span>
      </nav>
      <figcaption
        className={`product-caption ${darkTheme ? 'dark-theme' : ''}`}
      >
        <span>Produto: {name}</span>
        <span>Preço: R$ {price}</span>
        <Button variant={getButtonVariant(i)}>Adicionar</Button>
      </figcaption>
    </li>
  );
};

export default ProductCard;
