import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { productImgs } from '../imgData';
import { 
  ProductGridContainer, 
  ProductContainer 
} from '../styled-components/ProductGridStyles';

const ProductGrid = ({ renderProductCard }) => {
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

  // Função padrão de renderização se nenhuma for fornecida
  const defaultRenderProductCard = (product, index) => (
    <ProductCard key={index} source={product.source} title={product.title} />
  );

  // Usa a função fornecida ou a padrão
  const renderFunction = renderProductCard || defaultRenderProductCard;

  // Função que aplica o método .map() e retorna os elementos
  const renderProducts = () => {
    return products.map((product, index) => renderFunction(product, index));
  };

  return (
    <ProductGridContainer>
      <ProductContainer>{renderProducts()}</ProductContainer>
    </ProductGridContainer>
  );
};

export default ProductGrid;

// Para responder à sua pergunta sobre como fazer com que os métodos .map() aplicados no return de
//   ProductGrid.jsx possam ser enviados via props para o componente ProductCard, fizemos o seguinte:

//    1. Refatoramos o ProductGrid.jsx para:
//       - Combinar os dados de título e fonte em um único array de produtos
//       - Criar uma prop renderProductCard que permite passar uma função de renderização
//         personalizada
//       - Manter uma função de renderização padrão caso nenhuma seja fornecida
//       - Usar o método .map() para aplicar a função de renderização a cada produto

//    2. Atualizamos o ProductCard.jsx para garantir que ele receba e utilize corretamente as props.

//    3. Criamos um exemplo (ProductGridExample.jsx) demonstrando como usar o componente ProductGrid
//       com uma função de renderização personalizada.

//   Desta forma, você pode passar diferentes funções de renderização via props para personalizar
//   como cada produto é exibido, em vez de estar preso à implementação padrão do ProductCard. Isso
//   torna o componente ProductGrid muito mais flexível e reutilizável.
