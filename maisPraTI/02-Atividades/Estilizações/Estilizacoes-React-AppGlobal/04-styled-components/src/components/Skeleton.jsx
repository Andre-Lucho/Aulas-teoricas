import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const StyledSkeleton = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  
  ${props => props.darkTheme && `
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
  `}
`;

const Skeleton = ({ width, height, borderRadius = '4px', darkTheme }) => {
  return (
    <StyledSkeleton 
      style={{ width, height, borderRadius }}
      darkTheme={darkTheme}
    />
  );
};

export default Skeleton;