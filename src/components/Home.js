import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';
import AnimatedSubtitle from './AnimatedSubtitle.js';
import Button from './Button.js';
import EntanglementBackground from './EntanglementBackground.js';

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 100px;
  z-index: 1;
  perspective: 1000px;

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
  min-height: 550px;
  position: relative;
  overflow: hidden;
  border-radius: 24px;


  @media (max-width: 768px) {
    width: 95%;
    padding: 3rem 1.5rem;
    min-height: 500px;
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
`;

const InnerContent = styled.div`
  position: relative;
  width: 100%;
  margin-top: -50px;
  min-height: 400px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 350px;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  // top: 2rem;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    top: 1rem;
  }
`;

const ShimmerContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 24px;
  
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
  
  .typed-cursor {
    color: ${({ theme }) => theme.colors.primary};
    animation: blink 1s infinite;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 4vw, 3rem);
  }
`;

const SecondaryContent = styled(motion.div)`
  position: absolute;
  top: 45%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    top: 40%;
    padding: 0 1rem;
    gap: 2rem;
  }

  /* Ajuste específico para AnimatedSubtitle */
  & > div:first-child {
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }

  /* Ajuste específico para el botón */
  & > div:last-child {
    margin-top: 1rem;
    
    @media (max-width: 768px) {
      margin-top: 0.5rem;
      
      button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        min-width: 200px;
      }
    }
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

  const handleExploreClick = useCallback(() => {
    const serviceFlow = document.getElementById('serviceflow');
    if (serviceFlow) {
      serviceFlow.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Elemento serviceflow no encontrado'); // Para debugging
    }
  }, []);

  useEffect(() => {
    // Cuando el título termina, esperamos un momento y mostramos el contenido secundario
    if (titleComplete) {
      const timer = setTimeout(() => {
        setShowSecondaryContent(true);
      }, 500); // 500ms después de que termina el título
      return () => clearTimeout(timer);
    }
  }, [titleComplete]);

  return (
    <>
      <EntanglementBackground priority={true} />
      <HomeWrapper>
        <ContentWrapper
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