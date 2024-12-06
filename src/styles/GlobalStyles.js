import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  body, #root {
    height: 100%;
    margin: 0;
    font-family: ${props => props.theme.fonts.secondary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    perspective: 1px;
    transform-style: preserve-3d;
  }

  section {
    position: relative;
    transform-style: preserve-3d;
    will-change: transform;
  }

  h1, h2, h3, h4, h5, h6 {
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;
  opacity: 1;
  transform: none;
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.animate {
    opacity: 0;
    transform: translateY(20px);
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .section-content {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s;

    &.visible {
      opacity: 1;
      transform: translateY(0);
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