import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(82, 193, 185, 0.5);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(82, 193, 185, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(82, 193, 185, 0);
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50px;
  z-index: 1000;
  transform: scale(${props => props.show ? 1 : 0.8});
  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'all' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    bottom: 25px;
    left: 30px;
  }
`;

const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 30px;
  left: 50px;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  pointer-events: none;

  &.visible {
    opacity: 1;
    pointer-events: all;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 25px;
    left: 30px;
  }

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

const HomeNavButton = () => {
    const [showButton, setShowButton] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const rect = homeSection.getBoundingClientRect();
                setShowButton(rect.bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToHome = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ButtonContainer show={showButton} className="home-nav-button">
            <HomeButton onClick={scrollToHome} aria-label="Go to home">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            </HomeButton>
        </ButtonContainer>
    );
};

export default HomeNavButton;