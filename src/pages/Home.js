import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import SpaceBackground from '../components/SpaceBackground';
import PageAnimation from '../components/PageAnimation';

const HomeWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; // Asegura que el contenido ocupe al menos toda la altura de la pantalla
  text-align: center;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
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
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
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
  
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
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
  },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};



const Home = () => {
  const [isAccelerating, setIsAccelerating] = useState(false);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    setIsAccelerating(true);
    setTimeout(() => {
      navigate('/services');
    }, 1000); // Cambiado de 2000 a 1000
  };

  return (
    <>
      <SpaceBackground isAccelerating={isAccelerating} />
      <AnimatePresence>
        {!isAccelerating && (
          <HomeWrapper
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Title variants={itemVariants}>
              Quantum Web Services
            </Title>
            <Subtitle variants={itemVariants}>
              Especialista en Programción Web
            </Subtitle>
            <CTAButton
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreClick}
            >
              Explora Nuestros Servicios
            </CTAButton>
          </HomeWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;