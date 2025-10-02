import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from './Button';
import Skeleton from './Skeleton';

import { TiStarOutline } from 'react-icons/ti';
import { TiStarFullOutline } from 'react-icons/ti';

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
      <li className={`flex flex-col relative z-10 bg-[#9b1010] border-2 ${darkTheme ? 'border-[#f2f2f2]' : 'border-[#10161e]'} rounded-lg`}>
        <Skeleton width="100%" height="200px" />
        <nav className="absolute z-20 top-1 left-40 flex items-center justify-self-end flex-1 w-full">
          <Skeleton width="60px" height="20px" />
        </nav>
        <figcaption
          className={`flex flex-col ${darkTheme ? 'bg-[#10161e] text-[#d4d4d4]' : 'bg-[#f2f2f2] text-[#10161e]'}`}
        >
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="20px" />
          <Skeleton width="100px" height="36px" />
        </figcaption>
      </li>
    );
  }

  return (
    <li className={`flex flex-col relative z-10 bg-[#9b1010] border-2 ${darkTheme ? 'border-[#f2f2f2]' : 'border-[#10161e]'} rounded-lg`}>
      <img src={source} alt={`imagem de ${title}`} className="w-full h-auto" />
      <nav className="absolute z-20 top-1 left-40 flex items-center justify-self-end flex-1 w-full">
        <span>Promo</span>
        <TiStarOutline />
        <TiStarFullOutline />
      </nav>
      <figcaption
        className={`flex flex-col ${darkTheme ? 'bg-[#10161e] text-[#d4d4d4]' : 'bg-[#f2f2f2] text-[#10161e]'}`}
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
