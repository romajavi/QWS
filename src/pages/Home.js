import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import EntanglementBackground from '../components/EntanglementBackground.js';
import PageContainer from '../components/PageContainer.js';

const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.div)`
  font-size: 1.5rem;
  line-height: 1.6;
  max-width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.button)`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
`;

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
        <ContentWrapper>
          <Title>
            <ReactTyped
              strings={['<span style="color: #a5aa9a;">Axion</span><span style="color: #00FFFF;">Dev</span>']}
              typeSpeed={100}
              showCursor={true}
              cursorChar="|"
              html={true}
            />
          </Title>
          <Subtitle>
            Soluciones integrales para tus proyectos de desarrollo web.
            Impulsamos tu presencia online y te ayudamos a alcanzar tus objetivos digitales.
          </Subtitle>
          <CTAButton
            onClick={handleExploreClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descubre más
          </CTAButton>
        </ContentWrapper>
      </HomeWrapper>
    </PageContainer>
  );
};

export default Home;