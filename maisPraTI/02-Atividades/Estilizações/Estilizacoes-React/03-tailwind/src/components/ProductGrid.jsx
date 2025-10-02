import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { productData } from '../productData';

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
    <div className="grid-area-product-grid w-[95%] mx-auto my-6">
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 ? renderProducts() : null}
      </ul>
    </div>
  );
};

export default ProductGrid;
