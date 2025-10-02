import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from './Button';
import Skeleton from './Skeleton';

import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';

const ProductCard = ({ product, i }) => {
  const { favoriteProducts, toggleFavorite } = useContext(GlobalContext);
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
      <li className="flex flex-col bg-primary border-2 border-card-border-light rounded-[6px] pb-[1.2rem] shadow-card dark:border-card-border-dark dark:shadow-dark-card">
        <Skeleton width="100%" height="300px" />
        <nav className="absolute top-2 right-2 z-10">
          <Skeleton width="60px" height="20px" />
        </nav>
        <figcaption className="flex flex-col p-4 bg-card-bg-caption gap-2 text-card-text-light dark:text-card-caption-text-dark">
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="20px" />
          <Skeleton width="100px" height="48px" />
        </figcaption>
      </li>
    );
  }

  return (
    <li
      className="flex flex-col relative bg-primary border-2 border-card-border-light 
                 rounded-[6px] transition-all duration-200 ease-in-out shadow-card pb-[1.2rem]
                 hover:-translate-y-[5px] hover:shadow-card-hover
                 dark:border-card-border-dark dark:shadow-dark-card dark:hover:shadow-dark-card-hover"
    >
      <img
        src={image}
        alt={`imagem de ${name}`}
        className="block w-full h-auto mx-auto"
      />
      <nav className="absolute z-20 top-[8px] right-[8px] flex items-center gap-[0.5rem] w-fit">
        <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
          Promo
        </span>
        <span
          onClick={() => toggleFavorite(id)}
          className="cursor-pointer text-2xl text-yellow-400"
        >
          {isFavorite ? <TiStarFullOutline /> : <TiStarOutline />}
        </span>
      </nav>
      <figcaption className="flex flex-col flex-wrap p-4 bg-card-bg-caption gap-0 text-card-text-light dark:text-card-caption-text-dark">
        <span className="line-clamp-2 min-h-[3em] overflow-hidden text-ellipsis">
          Produto: {name}
        </span>
        <span>Preço: R$ {price}</span>
        <Button variant={getButtonVariant(i)}>Adicionar</Button>
      </figcaption>
    </li>
  );
};

export default ProductCard;
