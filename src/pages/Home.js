import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import EntanglementBackground from '../components/EntanglementBackground.js';
import AnimatedSubtitle from '../components/AnimatedSubtitle.js';

const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3.5rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
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
    <>
      <EntanglementBackground />
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
          <AnimatedSubtitle />
          <CTAButton
            onClick={handleExploreClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descubre más
          </CTAButton>
        </ContentWrapper>
      </HomeWrapper>
    </>
  );
};

export default Home;