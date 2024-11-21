import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import EntanglementBackground from '../components/EntanglementBackground.js';
import AnimatedSubtitle from '../components/AnimatedSubtitle.js';
import Button from '../components/Button.js';





const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const HomeWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem 20px;
  box-sizing: border-box;
  z-index: 1;
  will-change: transform;
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  margin: 2rem 0 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  will-change: transform;
  
  .company-name {
    color: #a5aa9a;
  }
  
  .separator {
    color: #00FFFF;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 0.5rem;
  }
`;


const StyledButton = styled(Button)`
  transition: transform 0.3s ease;
  will-change: transform;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleExploreClick = useCallback(() => {
    const button = document.activeElement;
    if (button) button.blur();
    requestAnimationFrame(() => {
      navigate('/services', { state: { fromHome: true } });
    });
  }, [navigate]);

  return (
    <HomeContainer>
      <EntanglementBackground priority={false} />
      <AnimatePresence mode="wait">
        <HomeWrapper
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <ContentWrapper variants={itemVariants}>
            <Title>
              <ReactTyped
                strings={[
                  '<span style="color: #a5aa9a;">Axion</span><span style="color: #00FFFF;">Dev</span>'
                ]}
                typeSpeed={100}
                showCursor={true}
                cursorChar="|"
                html={true}
              />
            </Title>
            <AnimatedSubtitle />
            <StyledButton
              animated
              size="large"
              onClick={handleExploreClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('home.exploreButton')}
            </StyledButton>
          </ContentWrapper>
        </HomeWrapper>
      </AnimatePresence>
    </HomeContainer>
  );
};

export default React.memo(Home);