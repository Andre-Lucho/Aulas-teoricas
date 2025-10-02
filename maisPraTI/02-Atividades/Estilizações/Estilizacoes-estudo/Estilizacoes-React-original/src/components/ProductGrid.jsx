import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { productImgs } from '../imgData';

import '../styles/product-grid.scss';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productImgs) {
      const productList = productImgs.map((product) => {
        const [title, source] = Object.entries(product)[0];
        return { title, source };
      });
      setProducts(productList);
    }
  }, [productImgs]);

  // Função que cria o mapeamento dos produtos
  const renderProducts = () => {
    return products.map((product, index) => (
      <ProductCard 
        key={index}
        source={product.source} 
        title={product.title} 
      />
    ));
  };

  return (
    <div className="product-grid-container">
      <ul className="product-container">
        {renderProducts()}
      </ul>
    </div>
  );
};

export default ProductGrid;
