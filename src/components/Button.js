import React from 'react';
import styled from 'styled-components';
import { glowButtonStyles, subtleGlowStyles } from '../styles/Animations.js';

const StyledButton = styled.button`
  /* Estilos base */
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonText};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  /* Tamaños */
  padding: ${({ $size }) => $size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  font-size: ${({ $size }) => $size === 'medium' ? '0.875rem' : '1rem'};
  min-width: ${({ $size }) => $size === 'large' ? '100px' : '150px'};
  
  /* Variantes */
  background: ${({ $variant, theme }) =>
    $variant === 'secondary'
      ? theme.colors.secondaryBackground
      : theme.colors.primary
  };
  
  /* Efectos de resplandor */
  ${({ $glow, $variant, $glowIntensity = 1 }) =>
    $glow && $variant === 'primary' ? glowButtonStyles($glowIntensity) : ''}
  ${({ $glow, $variant, $glowIntensity = 0.5 }) =>
    $glow && $variant === 'secondary' ? subtleGlowStyles($glowIntensity) : ''}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  glow = false,
  glowIntensity = 1, // Nueva prop para controlar la intensidad
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $glow={glow}
      $glowIntensity={glowIntensity}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;