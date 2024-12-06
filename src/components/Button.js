import React from 'react';
import styled from 'styled-components';
import { glowButtonStyles, subtleGlowStyles } from '../styles/Animations.js';

// Filtramos las props que no queremos que lleguen al DOM
const StyledButton = styled.button.withConfig({
  shouldComponentUpdate: props => {
    return !['isActive'].includes(props);
  },
})`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonText};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  padding: ${({ $size }) =>
    $size === 'small' ? '0.5rem 1rem' :
      $size === 'medium' ? '0.75rem 1.5rem' :
        '1rem 2rem'
  };
  
  font-size: ${({ $size }) =>
    $size === 'small' ? '0.875rem' :
      $size === 'medium' ? '1rem' :
        '1.125rem'
  };
  
  min-width: ${({ $size }) =>
    $size === 'small' ? '100px' :
      $size === 'medium' ? '150px' :
        '200px'
  };
  
  background: ${({ $variant, theme }) =>
    $variant === 'secondary'
      ? theme.colors.secondaryBackground
      : theme.colors.primary
  };
  
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
  glowIntensity = 1,
  className,
  isActive,  // Capturamos isActive aquí para que no se pase al DOM
  ...props
}) => {
  // Omitimos isActive de las props que se pasan al StyledButton
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $glow={glow}
      $glowIntensity={glowIntensity}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;