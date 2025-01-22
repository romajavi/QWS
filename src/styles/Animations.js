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
  // Reducir la duración de 2s a 1s
  animation: ${floatAnimation} 1s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  // Reducir la duración de la transición de 0.3s a 0.2s
  transition: all 0.2s ease;
`;

// Los otros estilos que ya convertimos a funciones
export const glowButtonStyles = (intensity = 1) => css`
  position: relative;
  overflow: hidden;
  animation: ${gradientGlow} 4s ease-in-out infinite;
  background-size: 200% auto;
  transition: all 0.2s ease;
  
  &:hover {
    animation: none;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.accent}
    );
    background-size: 200% auto;
    box-shadow: 0 0 ${10 * intensity}px rgba(0, 255, 255, 0.4);
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

const gradientGlow = keyframes`
  0% {
    box-shadow: none;
    background: ${props => props.theme.colors.primary};
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.primary}
    );
  }
  100% {
    box-shadow: none;
    background: ${props => props.theme.colors.primary};
  }
`;