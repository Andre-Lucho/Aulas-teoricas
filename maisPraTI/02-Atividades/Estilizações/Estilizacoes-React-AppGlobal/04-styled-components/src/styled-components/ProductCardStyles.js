import styled from 'styled-components';

export const ProductCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-color: #9b1010;
  border: 2px solid ${props => props.darkTheme ? '#f2f2f2' : '#10161e'};
  border-radius: 6px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductNavItems = styled.nav`
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 200px;
  display: flex;
  align-items: center;
  justify-self: end;
  flex: 1;
  width: 100%;
`;

export const ProductCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.darkTheme ? '#10161e' : '#f2f2f2'};
  color: ${props => props.darkTheme ? '#d4d4d4' : '#10161e'};
`;

export const ProductButton = styled.button`
  cursor: pointer;
`;