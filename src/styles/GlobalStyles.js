import { createGlobalStyle, css, keyframes } from 'styled-components';

// Animación para el efecto de gradiente
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Definición de tamaños predeterminados para botones
export const buttonSizes = {
  small: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    min-width: 100px;
  `,
  medium: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    min-width: 150px;
  `,
  large: css`
    padding: 1rem 2rem;
    font-size: 1.125rem;
    min-width: 1000px;
  `
};

// Estilos base para todos los botones
export const buttonBaseStyles = css`
  /* Estilos generales */
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonText};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  /* Nuevo: Contenedor flex para centrado */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Centrado horizontal */
  text-align: center;

  /* Efecto de gradiente en hover */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(90deg,
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.accent}
    );
    background-size: 200% 200%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Animaciones y efectos de hover */
  &:hover::before {
    opacity: 1;
    animation: ${gradientAnimation} 3s linear infinite;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
  }

  /* Efecto al hacer click */
  &:active {
    transform: translateY(0);
  }

  /* Estilo para botones deshabilitados */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

// Variantes de botones
export const buttonVariants = {
  // Botón primario (amarillo)
  primary: css`
    background: ${props => props.theme.colors.primary};
  `,
  // Botón secundario (gris)
  secondary: css`
    background: ${props => props.theme.colors.secondaryBackground};
    &:hover::before {
      background: linear-gradient(90deg,
        ${props => props.theme.colors.secondaryBackground},
        ${props => props.theme.colors.accent},
        ${props => props.theme.colors.secondaryBackground}
      );
    }
  `
};

// Estilos globales de la aplicación
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body, #root {
    display: flex;
    flex-direction: column;
    height: 100%; /* Cambiado de min-height */
    margin: 0;
    font-family: ${props => props.theme.fonts.secondary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
}

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    text-align: center;
  }

  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
    }
  }
`;

export default GlobalStyles;