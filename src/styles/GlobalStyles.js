import { createGlobalStyle, keyframes } from 'styled-components';

const shineAnimation = keyframes`
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
`;

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.secondary};
    background-color: #000;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    text-aling: center;
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