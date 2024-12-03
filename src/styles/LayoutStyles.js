import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: #000;
`;

export const MainContent = styled.main`
  flex: 1 0 auto;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /* Asegura que el contenido principal tenga padding inferior para el footer */
  padding-bottom: 60px; /* Ajusta este valor según la altura de tu footer */
`;

export const FooterWrapper = styled.footer`
  flex-shrink: 0;
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  margin-top: auto;
`;