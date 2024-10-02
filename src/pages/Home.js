import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import EntanglementBackground from '../components/EntanglementBackground';

const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
`;

const ContentWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; // Añade esta línea
  justify-content: center; // Añade esta línea
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${props => props.theme.colors.text};
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.6;
  text-align: center;
  width: 100%;
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
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
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

const Home = () => {
  const [isAccelerating, setIsAccelerating] = useState(false);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    setIsAccelerating(true);
    setTimeout(() => {
      navigate('/services');
    }, 1000);
  };

  return (
    <>
      <EntanglementBackground isAccelerating={isAccelerating} />
      <HomeWrapper>
        <AnimatePresence>
          {!isAccelerating && (
            <ContentWrapper
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Title variants={itemVariants}>
                Quantum Web Services
              </Title>
              <Subtitle variants={itemVariants}>
                Soluciones innovadoras en Programación Web Full Stack
              </Subtitle>
              <CTAButton
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.7)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreClick}
              >
                Explora Nuestros Servicios
              </CTAButton>
            </ContentWrapper>
          )}
        </AnimatePresence>
      </HomeWrapper>
    </>
  );
};

export default Home;