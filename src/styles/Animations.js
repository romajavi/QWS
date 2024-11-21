import { keyframes, css } from 'styled-components';

// Animación de resplandor pulsante
export const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`;

// Animación sutil para el Captcha
export const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

// Convertir a función para mantener consistencia
export const floatingStyles = (intensity = 1) => css`
  animation: ${floatAnimation} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3 * intensity}px);
  }
`;

// Los otros estilos que ya convertimos a funciones
export const glowButtonStyles = (intensity = 1) => css`
  animation: ${glowPulse} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12 * intensity}px rgba(255, 215, 0, 0.8), 
                0 0 ${50 * intensity}px rgba(255, 215, 0, 0.5);
  }
`;

export const subtleGlowStyles = (intensity = 0.5) => css`
  animation: ${glowPulse} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15 * intensity}px rgba(255, 215, 0, 0.6), 
                0 0 ${30 * intensity}px rgba(255, 215, 0, 0.4);
  }
`;