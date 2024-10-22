import { createGlobalStyle, css, keyframes } from 'styled-components';

const shineAnimation = keyframes`
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
`;

export const pageContainerStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: calc(100vh - 120px); // Ajuste para considerar el header fijo
`;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.secondary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex-grow: 1; // Añadido para asegurar que crezca y ocupe todo el espacio
  }

  main {
    flex-grow: 1; // Asegura que el contenido principal crezca para llenar el espacio disponible
  }

  footer {
    flex-shrink: 0;
    width: 100%;
    position: relative;
    background-color: ${props => props.theme.colors.footerBackground};
    padding: 1rem 0;
    text-align: center;
  }

  button {
    background-color: #FFD700;
    color: #000;
    border: none;
    border-radius: 5px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(90deg, #00FFFF, #FFD700, #00FFFF);
      background-size: 400% 400%;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::before {
      opacity: 1;
      animation: ${shineAnimation} 3s linear infinite;
    }

    &:hover {
      color: #000;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }

  /* Responsive design */
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