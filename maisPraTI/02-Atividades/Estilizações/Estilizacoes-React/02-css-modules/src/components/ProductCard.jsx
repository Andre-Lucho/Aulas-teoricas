import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from './Button';
import Skeleton from './Skeleton';

import { TiStarOutline } from 'react-icons/ti';
import { TiStarFullOutline } from 'react-icons/ti';
import styles from '../styles/ProductCard.module.scss';

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
      <li
        className={`${styles.productCardContainer} ${
          darkTheme ? styles.darkTheme : ''
        }`}
      >
        <Skeleton width="100%" height="300px" />
        <nav className={styles.productNavItems}>
          <Skeleton width="60px" height="20px" />
        </nav>
        <figcaption
          className={`${styles.productCaption} ${
            darkTheme ? styles.darkTheme : ''
          }`}
        >
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="20px" />
          <Skeleton width="100px" height="36px" />
        </figcaption>
      </li>
    );
  }

  return (
    <li
      className={`${styles.productCardContainer} ${
        darkTheme ? styles.darkTheme : ''
      }`}
    >
      <img
        src={image}
        alt={`imagem de ${name}`}
        className={styles.productImg}
      />
      <nav className={styles.productNavItems}>
        <span className={styles.promo}>Promo</span>
        <span
          className={styles.favIcon}
          onClick={() => toggleFavorite(id)}
          style={{ cursor: 'pointer' }}
        >
          {isFavorite ? <TiStarFullOutline /> : <TiStarOutline />}
        </span>
      </nav>
      <figcaption
        className={`${styles.productCaption} ${
          darkTheme ? styles.darkTheme : ''
        }`}
      >
        <span>Produto: {name}</span>
        <span>Preço: R$ {price}</span>
        <Button variant={getButtonVariant(i)}>Adicionar</Button>
      </figcaption>
    </li>
  );
};

export default ProductCard;
