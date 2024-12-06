import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SubtitleContainer = styled(motion.div)`
  font-size: clamp(1.2rem, 3vw, 2.2rem);
  color: ${props => props.theme.colors.secondaryBackground};
  line-height: 1.6;
  max-width: min(1200px, 90vw);
  height: 150px; // Altura fija
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden; // Previene overflow
`;

const TextWrapper = styled(motion.p)`
  margin: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  
  // Efecto de brillo en los bordes
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: 0.8s;
    animation: shine 8s infinite;
  }
  
  @keyframes shine {
    0% {
      left: -100%;
    }
    20% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`;

const AnimatedSubtitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const subtitleTexts = [
    t('home.subtitle.1'),
    t('home.subtitle.2'),
    t('home.subtitle.3'),
    t('home.subtitle.4'),
    t('home.subtitle.5')
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitleTexts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [subtitleTexts.length]);

  return (
    <SubtitleContainer>
      <AnimatePresence mode="wait">
        <TextWrapper
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: -20,
            transition: {
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
        >
          {subtitleTexts[currentIndex]}
        </TextWrapper>
      </AnimatePresence>
    </SubtitleContainer>
  );
};

export default AnimatedSubtitle;