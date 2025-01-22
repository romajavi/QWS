import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SubtitleContainer = styled(motion.div)`
  font-size: clamp(1.1rem, 2.2vw, 1.6rem);
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.text};
  line-height: 1.4;
  max-width: min(1000px, 85vw);
  height: auto;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    min-height: 100px;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
  }
`;

const TextWrapper = styled(motion.p)`
  margin: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.95) 100%
  );
  padding: 1.5rem;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    padding: 1rem;
    letter-spacing: 0.3px;
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