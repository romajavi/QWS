import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import EntanglementBackground from '../components/EntanglementBackground.js';
import AnimatedSubtitle from '../components/AnimatedSubtitle.js';
import Button from '../components/Button.js';

const HomeWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem 20px;
  box-sizing: border-box;
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
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;


const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
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
      <BackgroundWrapper>
        <EntanglementBackground />
      </BackgroundWrapper>
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
          <Button
            animated
            onClick={handleExploreClick}
            className="home-button" 
          >
            Descubre más
          </Button>
        </ContentWrapper>
      </HomeWrapper>
    </>
  );
};

export default Home;