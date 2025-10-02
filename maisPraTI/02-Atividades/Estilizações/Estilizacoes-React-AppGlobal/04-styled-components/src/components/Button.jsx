import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  
  ${props => props.variant === 'solid' && `
    background-color: #9b1010;
    color: white;
  `}
  
  ${props => props.variant === 'outline' && `
    background-color: transparent;
    color: #9b1010;
    border: 2px solid #9b1010;
  `}
  
  ${props => props.variant === 'ghost' && `
    background-color: transparent;
    color: #9b1010;
    border: none;
  `}
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Button = ({ variant = 'solid', children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;