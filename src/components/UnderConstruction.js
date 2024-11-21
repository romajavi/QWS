import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  font-family: ${props => props.theme.fonts.main};
`;

const GearsContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainGear = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${spin} 10s linear infinite;

  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.primary};
  }
`;

const SmallGear = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  animation: ${spin} 10s linear infinite reverse;

  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.accent};
  }

  &.top-right {
    top: 20px;
    right: 20px;
  }

  &.bottom-left {
    bottom: 20px;
    left: 20px;
  }
`;

const Message = styled.div`
  text-align: center;
  margin-top: 3rem;
  
  p {
    font-size: 1.5rem;
    margin: 1rem 0;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    
    &.subtitle {
      font-size: 1.1rem;
      color: ${props => props.theme.colors.primary};
      opacity: 0.8;
    }
  }
`;

const UnderConstruction = ({ pageName }) => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Title>{pageName}</Title>
      <GearsContainer>
        <MainGear>
          <Settings />
        </MainGear>
        <SmallGear className="top-right">
          <Settings />
        </SmallGear>
        <SmallGear className="bottom-left">
          <Settings />
        </SmallGear>
      </GearsContainer>
      <Message>
        <p>{t('underConstruction.message')}</p>
        <p className="subtitle">{t('underConstruction.subtitle')}</p>
      </Message>
    </PageWrapper>
  );
};

export default UnderConstruction;