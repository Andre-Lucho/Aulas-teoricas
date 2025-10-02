import styled from 'styled-components';

export const ProductGridContainer = styled.div`
  grid-area: 'product-grid';
  width: 95%;
  margin: 1.5rem auto;
`;

export const ProductContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
`;