import ProductGrid from './ProductGrid';
import './ProductCard'; // Mantém a importação para garantir que o componente exista

// Exemplo de como usar o ProductGrid com uma função de renderização personalizada
const ProductGridExample = () => {
  // Função personalizada para renderizar cada produto
  const customRenderProductCard = (product, index) => {
    return (
      <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <img src={product.source} alt={`imagem de ${product.title}`} style={{ width: '100px', height: '100px' }} />
        <h3>{product.title}</h3>
        <p>Este é um produto personalizado</p>
      </div>
    );
  };

  return (
    <div>
      <h2>Grade de Produtos com Renderização Padrão</h2>
      <ProductGrid />
      
      <h2>Grade de Produtos com Renderização Personalizada</h2>
      <ProductGrid renderProductCard={customRenderProductCard} />
    </div>
  );
};

export default ProductGridExample;