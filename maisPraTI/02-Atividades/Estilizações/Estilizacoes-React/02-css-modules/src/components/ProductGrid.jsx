import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { productData } from '../productData';

import styles from '../styles/ProductGrid.module.scss';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const renderProductCard = (product, i) => (
    <ProductCard key={product.id} product={product} i={i} />
  );

  const renderProducts = () => {
    return products.map((product, i) => renderProductCard(product, i));
  };

  return (
    <div className={styles.productGridContainer}>
      <ul className={styles.productContainer}>
        {products.length > 0 ? renderProducts() : null}
      </ul>
    </div>
  );
};

export default ProductGrid;
