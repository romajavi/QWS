import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  body {
    font-family: ${props => props.theme.fonts.secondary};
    background-color: #000;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
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