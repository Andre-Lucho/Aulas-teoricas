import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from './Button';
import Skeleton from './Skeleton';

import { TiStarOutline } from 'react-icons/ti';
import { TiStarFullOutline } from 'react-icons/ti';
import { 
  ProductCardContainer, 
  ProductImg, 
  ProductNavItems, 
  ProductCaption
} from '../styled-components/ProductCardStyles';

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
      <ProductCardContainer darkTheme={darkTheme}>
        <Skeleton width="100%" height="200px" />
        <ProductNavItems>
          <Skeleton width="60px" height="20px" />
        </ProductNavItems>
        <ProductCaption darkTheme={darkTheme}>
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="20px" />
          <Skeleton width="100px" height="36px" />
        </ProductCaption>
      </ProductCardContainer>
    );
  }

  return (
    <ProductCardContainer darkTheme={darkTheme}>
      <ProductImg src={source} alt={`imagem de ${title}`} />
      <ProductNavItems>
        <span>Promo</span>
        <TiStarOutline />
        <TiStarFullOutline />
      </ProductNavItems>
      <ProductCaption darkTheme={darkTheme}>
        <span>Produto: {title}</span>
        <span>Preço:</span>
        <Button variant="solid">
          Adicionar
        </Button>
      </ProductCaption>
    </ProductCardContainer>
  );
};

export default ProductCard;
