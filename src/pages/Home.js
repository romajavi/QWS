import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import EntanglementBackground from '../components/EntanglementBackground.js';
import AnimatedSubtitle from '../components/AnimatedSubtitle.js';

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
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const CTAButton = styled(motion.button)`
  ${props => props.theme.StyledButton}
  font-size: 1.2rem;
  padding: 1.2rem 2.5rem;
  margin-top: 2rem;
  animation: ${props => props.theme.buttonAnimation} 2s infinite ease-in-out;
  background: linear-gradient(45deg,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.accent}
  );
  border-radius: 12px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 255, 255, 0.4);
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
          <CTAButton
            onClick={handleExploreClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="animated"
          >
            Descubre más
          </CTAButton>
        </ContentWrapper>
      </HomeWrapper>
    </>
  );
};

export default Home;