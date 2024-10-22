import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Añadir esto para que el contenido y el footer estén distribuidos
  min-height: 100vh;
  padding-top: 120px; // Para el header fijo
  padding-bottom: 2rem; // Mantén esto si necesitas espacio adicional abajo
`;

export default PageContainer;