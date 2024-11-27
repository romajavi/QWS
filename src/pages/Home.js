import React, { useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import EntanglementBackground from '../components/EntanglementBackground.js';
import AnimatedSubtitle from '../components/AnimatedSubtitle.js';
import Button from '../components/Button.js';
import { useAnimationController } from '../utils/animationController.js';

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.background}99 0%,
    ${(props) => props.theme.colors.background}80 100%
  );
`;

const HomeWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1.5rem;
    align-items: center;
  }
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%; // Cambiado para mejor control del ancho
  max-width: 1200px; // Límite máximo para pantallas grandes
  margin: 0 auto; // Centrado automático
  margin-top: -120px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem; // Padding fijo para mejor simetría
  justify-content: space-between;
  gap: 2rem;
  min-height: 60vh; // Altura mínima consistente

  // Proporciones más controladas
  @media (min-width: 769px) {
    aspect-ratio: 16/9; // Proporción más estándar
    min-height: auto; // Se elimina en pantallas grandes
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem;
    margin-top: -10px;
    aspect-ratio: auto;
    gap: 1.5rem;
  }
`;


const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  text-align: center;
  margin: 0;
  padding: 0;
  
  .company-name {
    background: linear-gradient(45deg, #a5aa9a, #d4d6d1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const gradientAnimation = css`
  animation: ${gradientMove} 3s linear infinite;
`;

const StyledButton = styled(Button)`
  width: min(100%, 300px);
  padding: 0.85em 2em;
  font-size: clamp(0.875rem, 2vw, 1rem);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(90deg,
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.accent}
    );
    background-size: 200% 200%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    ${gradientAnimation}
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 10px 20px rgba(0, 255, 255, 0.2),
      0 6px 6px rgba(0, 255, 255, 0.1),
      0 0 100px -20px ${props => props.theme.colors.primary};
  }
`;

const SubtitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 0;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
`;


const containerVariants = {
  initial: {
    opacity: 0,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.3
    }
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.5
    }
  }
};

const itemVariants = {
  initial: {
    y: 30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    shouldAnimate,
    animationLevel,
    completeAnimation
  } = useAnimationController();

  const handleExploreClick = useCallback(() => {
    const button = document.activeElement;
    if (button) button.blur();
    requestAnimationFrame(() => {
      navigate('/services', { state: { fromHome: true } });
    });
  }, [navigate]);

  const getAnimationVariants = () => {
    if (!shouldAnimate || animationLevel === 'minimal') {
      return {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: { duration: 0.3 }
        },
        exit: { opacity: 0 }
      };
    }

    if (animationLevel === 'reduced') {
      return {
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        },
        exit: { opacity: 0, y: -20 }
      };
    }

    return {
      initial: { opacity: 0, scale: 0.98, y: 30 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      },
      exit: {
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.5 }
      }
    };
  };

  const currentVariants = getAnimationVariants();

  return (
    <HomeContainer>
      <EntanglementBackground priority={false} />
      <AnimatePresence mode="wait">
        <HomeWrapper
          variants={currentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationComplete={completeAnimation}
        >
          <ContentWrapper>
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
            <SubtitleContainer>
              <AnimatedSubtitle />
            </SubtitleContainer>
            <StyledButton
              variant="primary"
              glow
              size="large"
              onClick={handleExploreClick}
              glowIntensity={1.5}
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