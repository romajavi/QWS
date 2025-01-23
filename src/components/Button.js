import React from 'react';
import styled from 'styled-components';
import { glowButtonStyles, subtleGlowStyles } from '../styles/Animations.js';

const StyledButton = styled.button.withConfig({
  shouldComponentUpdate: props => {
    return !['isActive'].includes(props);
  },
})`
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
  
  width: ${({ $customWidth }) => $customWidth || 'auto'};
  min-width: ${({ $size }) =>
    $size === 'small' ? '80px' :
      $size === 'medium' ? '120px' :
        '150px'
  };
  
  @media (max-width: 768px) {
    width: ${({ $mobileWidth }) => $mobileWidth || 'auto'};
    min-width: ${({ $size }) =>
    $size === 'small' ? '60px' :
      $size === 'medium' ? '100px' :
        '120px'
  };
    padding: ${({ $size }) =>
    $size === 'small' ? '0.4rem 0.8rem' :
      $size === 'medium' ? '0.6rem 1.2rem' :
        '0.8rem 1.6rem'
  };
    font-size: ${({ $size }) =>
    $size === 'small' ? '0.75rem' :
      $size === 'medium' ? '0.875rem' :
        '1rem'
  };
  }
  
  background: ${({ $useGradient, $variant, theme }) =>
    $useGradient ? 'linear-gradient(45deg, #52c1b9, #FFD700)' :
      $variant === 'secondary' ? theme.colors.secondaryBackground :
        theme.colors.primary
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
  isActive,
  customWidth,
  mobileWidth,
  useGradient = false,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $glow={glow}
      $glowIntensity={glowIntensity}
      $customWidth={customWidth}
      $mobileWidth={mobileWidth}
      $useGradient={useGradient}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;