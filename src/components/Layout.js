import React from 'react';
import styled from 'styled-components';
import Header from './Header.js';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  padding-top: 120px;
  min-height: calc(100vh - 120px);
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;