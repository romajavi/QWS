import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import EntanglementBackground from '../components/EntanglementBackground';
import PageContainer from '../components/PageContainer';
import { pageContainerStyle } from '../styles/GlobalStyles';


const HomeWrapper = styled(motion.div)`
  ${pageContainerStyle}
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  width: 100%;
  max-width: 100vw; // Asegura que no exceda el ancho de la ventana
  overflow-x: hidden; // Previene scroll horizontal
`;

const ContentWrapper = styled(motion.div)`
  position: relative; // Cambiado de absolute a relative
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; // Asegura que el padding no añada al ancho total
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  text-shadow: 0 0 5px rgba(127, 255, 212, 0.5),
               0 0 10px rgba(127, 255, 212, 0.3);
  animation: gentleGlow 3s ease-in-out infinite alternate;

  @keyframes gentleGlow {
    from {
      text-shadow: 0 0 5px rgba(127, 255, 212, 0.5),
                   0 0 10px rgba(127, 255, 212, 0.3);
    }
    to {
      text-shadow: 0 0 7px rgba(127, 255, 212, 0.6),
                   0 0 14px rgba(127, 255, 212, 0.4);
    }
  }

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
  text-transform: uppercase;
  letter-spacing: 2px;
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
    <PageContainer>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreClick}
              >
                Explorar Servicios
              </CTAButton>
            </ContentWrapper>
          )}
        </AnimatePresence>
      </HomeWrapper>
    </PageContainer>
  );
};

export default Home;