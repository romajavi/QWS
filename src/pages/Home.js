import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import SpaceBackground from '../components/SpaceBackground';

const HomeWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
`;

const blinkingEffect = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
`;

const BlinkingTitle = styled(Title)`
  animation: ${blinkingEffect} 2s linear infinite;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text};
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  font-family: ${props => props.theme.fonts.main};
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.theme.effects.gradient};
  color: ${props => props.theme.colors.background};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

function Home() {
  return (
    <>
      <SpaceBackground />
      <HomeWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <BlinkingTitle variants={itemVariants}>
          Quantum Web Services
        </BlinkingTitle>
        <Subtitle variants={itemVariants}>
        Inteligencia Digital, Innovación sin Límites
        </Subtitle>
        <CTAButton
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 2px rgba(255, 215, 0, 0.3)',
              '0 0 8px rgba(255, 215, 0, 0.5), 0 0 12px rgba(255, 165, 0, 0.3)',
              '0 0 2px rgba(255, 215, 0, 0.3)'
            ],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          Explora Nuestros Servicios
        </CTAButton>
      </HomeWrapper>
    </>
  );
}

export default Home;
