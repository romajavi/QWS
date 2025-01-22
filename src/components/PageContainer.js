import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner.js';

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  padding-top: 120px; // Altura del header
`;

const ContentWrapper = styled.main`
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px); // Altura total menos el header

  @media (max-width: 968px) {
    width: 100%;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const PageContainer = ({ children, isLoading, isHome = false }) => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <MainContent>
          {isLoading ? <LoadingSpinner /> : children}
        </MainContent>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PageContainer;