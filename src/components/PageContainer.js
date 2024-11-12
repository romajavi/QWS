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
`;

const ContentWrapper = styled.main`
  flex: 1;
  width: 100%;
  min-height: ${props => props.isHome ? '100vh' : 'calc(100vh - 120px)'};
  padding-top: 100px;
  padding-bottom: ${props => props.showFooter ? '2rem' : '0'};
  position: relative;
  z-index: 1;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
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