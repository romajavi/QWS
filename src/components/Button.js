import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { buttonBaseStyles, buttonSizes, buttonVariants } from '../styles/GlobalStyles.js';

// Definir la animación del botón
const buttonAnimation = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
`;

// Componente de botón estilizado
const StyledButton = styled.button`
  ${buttonBaseStyles}
  ${props => buttonSizes[props.size || 'medium']}
  ${props => buttonVariants[props.variant || 'primary']}
  ${props => props.customStyle}

  ${props => props.$isAnimated && css`
    animation: ${buttonAnimation} 2s infinite ease-in-out;
  `}

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  ${props => props.type === 'submit' && css`
    margin-left: auto;
  `}

  ${props => props.variant === 'clear' && css`
    background: ${props => props.theme.colors.secondaryBackground};
    &:hover {
      background: ${props => props.theme.colors.secondaryBackground};
      opacity: 0.8;
    }
  `}
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  animated = false,
  className = '',
  customStyle,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $isAnimated={animated}
      size={size}
      className={className}
      customStyle={customStyle}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;