import { createGlobalStyle } from 'styled-components';

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
    display: flex;
    flex-direction: column;
  }

button {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00FFFF, #a5aa9a, #FFD700);
    z-index: -1;
    border-radius: 7px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    border-radius: 5px;
  }

  &:hover::before {
    opacity: 0.8;
  }
}

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-left: 2rem;
    padding-rigth: 2rem;
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