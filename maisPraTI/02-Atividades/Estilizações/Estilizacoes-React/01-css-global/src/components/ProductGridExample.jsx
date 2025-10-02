import ProductGrid from './ProductGrid';
import './ProductCard';

const ProductGridExample = () => {
  const customRenderProductCard = (product, i) => {
    return (
      <div
        key={product.id}
        style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}
      >
        <img
          src={product.image}
          alt={`imagem de ${product.name}`}
          style={{ width: '100px', height: '100px' }}
        />
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
    );
  };

  return (
    <div>
      <ProductGrid />
      <ProductGrid renderProductCard={customRenderProductCard} />
    </div>
  );
};

export default ProductGridExample;
