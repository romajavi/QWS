import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';
import AnimatedSubtitle from './AnimatedSubtitle.js';
import Button from './Button.js';
import EntanglementBackground from './EntanglementBackground.js';
import PreloadContent from './PreloadContent.js';

const StaticContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 1;
  transition: opacity 0.3s ease-out;
  
  &.loaded {
    opacity: 0;
    pointer-events: none;
  }
`;

const StaticTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #a5aa9a;
  margin: 0;
  padding: 0;
  
  span {
    color: #52c1b9;
  }
`;

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(80vh - 120px);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 100px;
  z-index: 1;
  perspective: 1000px;
  contain: layout style;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 100px;
  }
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1200px;
  height: 720px; // 20% más alto que 600px
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  will-change: opacity, transform;

  @media (max-width: 768px) {
    width: 95%;
    height: 600px; // 20% más alto que 500px
    padding: 1rem;
  }
`;


const BorderContainer = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: rgba(0, 0, 0, 0.97);
  border: 1px solid rgba(82, 193, 185, 0.3);
  box-shadow: 0 0 20px rgba(82, 193, 185, 0.2);
  backdrop-filter: blur(10px);
  will-change: opacity;
`;

const InnerContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  padding: 20px;
  z-index: 1;
`;

const TitleContainer = styled.div`
 width: 100%;
 height: 80px;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 margin-top: 20px;
`;

const ShimmerContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 24px;
  contain: layout style paint;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(82, 193, 185, 0.1) 45%,
      rgba(82, 193, 185, 0.1) 55%,
      rgba(0, 0, 0, 1) 100%
    );
    animation: shimmer 3s infinite;
    border-radius: inherit;
    will-change: transform;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-top: 0;
  z-index: 1;
  will-change: transform;
  transform: translateZ(0);
  
  &::before {
    content: 'AxionDev';
    visibility: hidden;
    display: block;
    height: 0;
    position: absolute;
  }
  
  .typed-cursor {
    color: ${({ theme }) => theme.colors.primary};
    animation: blink 1s infinite;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 4vw, 3rem);
  }
`;

const SecondaryContent = styled(motion.div)`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 20px;
  width: 100%;
  height: 100%;

  & > div:first-child {
    overflow: visible; // Elimina el scroll
    display: flex;
    align-items: center;
  }

  & > div:last-child {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const buttonStyle = {
  background: 'linear-gradient(45deg, #52c1b9, #FFD700)',
  minWidth: '150px',
  '@media (max-width: 768px)': {
    minWidth: '150px'
  }
};

const Home = () => {
  const { t } = useTranslation();
  const [titleComplete, setTitleComplete] = useState(false);
  const [showSecondaryContent, setShowSecondaryContent] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  const handleExploreClick = useCallback(() => {
    const serviceFlow = document.getElementById('serviceflow');
    if (serviceFlow) {
      serviceFlow.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  useEffect(() => {
    const loadCriticalResources = async () => {
      const contentWrapper = document.querySelector('.content-wrapper');
      if (contentWrapper) {
        contentWrapper.style.opacity = '1';
      }

      const titleElement = document.querySelector('h1');
      if (titleElement) {
        titleElement.style.visibility = 'visible';
      }

      // Simular tiempo de carga para el contenido estático
      setTimeout(() => {
        setIsContentLoaded(true);
      }, 500);
    };

    loadCriticalResources();
  }, []);

  useEffect(() => {
    if (titleComplete && isContentLoaded) {
      const timer = setTimeout(() => {
        setShowSecondaryContent(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [titleComplete, isContentLoaded]);

  return (
    <>
      <PreloadContent />
      <StaticContent className={isContentLoaded ? 'loaded' : ''}>
        <StaticTitle>
          Axion<span>Dev</span>
        </StaticTitle>
      </StaticContent>
      <EntanglementBackground priority={false} />
      <HomeWrapper>
        <ContentWrapper
          className="content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <BorderContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: titleComplete ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <ShimmerContainer />

          <InnerContent>
            <TitleContainer>
              <Title>
                <ReactTyped
                  strings={[
                    '<span style="color: #a5aa9a;">Axion</span><span style="color: #52c1b9;">Dev</span>'
                  ]}
                  typeSpeed={100}
                  showCursor={true}
                  cursorChar="|"
                  html={true}
                  onComplete={() => setTitleComplete(true)}
                />
              </Title>
            </TitleContainer>

            <AnimatePresence>
              {titleComplete && showSecondaryContent && (
                <SecondaryContent
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <AnimatedSubtitle />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Button
                      size="medium"
                      glow={true}
                      glowIntensity={1.2}
                      variant="primary"
                      onClick={handleExploreClick}
                      style={buttonStyle}
                    >
                      {t('home.exploreButton')}
                    </Button>
                  </motion.div>
                </SecondaryContent>
              )}
            </AnimatePresence>
          </InnerContent>
        </ContentWrapper>
      </HomeWrapper>
    </>
  );
};

export default Home;