import { createGlobalStyle, css, keyframes } from 'styled-components';

const shineAnimation = keyframes`
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
`;

export const pageContainerStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  body, #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    font-family: ${props => props.theme.fonts.secondary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
  }

  .main-container {
  flex: 1;
}

  button {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.buttonText};
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
      color: ${props => props.theme.colors.buttonText};
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
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