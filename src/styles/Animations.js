import { keyframes, css } from 'styled-components';

// Animación de resplandor pulsante
export const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`;

// Animación sutil para el Captcha
export const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`;

// Estilos mixins para botones
export const glowButtonStyles = css`
  animation: ${glowPulse} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.8), 0 0 50px rgba(255, 215, 0, 0.5);
  }
`;

// Estilos para el Captcha
export const floatingStyles = css`
  animation: ${floatAnimation} 2s infinite ease-in-out;
`;

// Variante más sutil para botones secundarios
export const subtleGlowStyles = css`
  animation: ${glowPulse} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4);
  }
`;