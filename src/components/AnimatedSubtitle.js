import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SubtitleContainer = styled(motion.div)`
  font-size: clamp(1.1rem, 2.2vw, 1.6rem);
  width: 100%;
  height: auto;
  min-height: 120px; // Reducido para mobile
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  
  @media (max-width: 768px) {
    min-height: 100px;
    padding: 15px 0;
  }
`;

const TextWrapper = styled(motion.p)`
  margin: 0; // Eliminamos márgenes
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.95) 100%
  );
  padding: 2rem;
  border-radius: 12px;
  width: 100%; // Ancho completo
  max-width: 950px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  letter-spacing: 0.3px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.8rem;
  text-align: center;
  font-weight: 700; // Bold weight
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Profundidad
  color: white;
  
  @media (max-width: 768px) {
    width: 85%;
    padding: 1.2rem;
    min-height: 60px;
    font-size: 1.2rem;
    margin: 0 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); // Sombra más sutil para texto pequeño
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