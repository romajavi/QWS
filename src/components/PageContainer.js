import React, { Suspense } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Footer from './Footer.js';
import LoadingSpinner from './LoadingSpinner.js';

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  width: 100%; // Cambiado de 100vw a 100%
  margin: 0;
  padding: 0;
  overflow-x: hidden;

    @media (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
  }
`;


const ContentWrapper = styled.main`
  flex: 1;
  width: 100%; // Cambiado de 100vw a 100%
  min-height: ${props => props.isHome ? '100vh' : 'calc(100vh - 120px)'};
  padding-top: 100px;
  padding-bottom: ${props => props.showFooter ? '2rem' : '0'};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 968px) {
    padding-top: 80px;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 1rem;
  }

  @media (max-width: 480px) {
    padding-top: 50px;
    min-height: calc(100vh - 80px);
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem; // Reducido el padding
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const PageContainer = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <PageWrapper>
      <ContentWrapper isHome={isHome} showFooter={!isHome}>
        <Suspense fallback={<LoadingSpinner />}>
          <MainContent>
            {children}
          </MainContent>
        </Suspense>
      </ContentWrapper>
      {!isHome && <Footer />}
    </PageWrapper>
  );
};

export default PageContainer;