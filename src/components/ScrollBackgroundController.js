import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: 
    radial-gradient(circle at top left, rgba(82, 193, 185, 0.1) 0%, transparent 50%),
    radial-gradient(circle at top right, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
    radial-gradient(at center, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 1) 100%);
  background-size: 200% 200%;
  animation: ${gradientMove} 15s ease infinite;
`;

const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const ScrollBackgroundController = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);

            // Header effect
            const header = document.querySelector('header');
            if (header) {
                if (position > 100) {
                    header.style.borderBottom = 'none';
                    header.style.background = 'rgba(0, 0, 0, 0.8)';
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.borderBottom = '2px solid';
                    header.style.background = 'rgb(0, 0, 0)';
                    header.style.backdropFilter = 'none';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <BackgroundContainer />
            <ScrollContainer style={{
                transform: `translateZ(${scrollPosition * 0.1}px)`,
            }}>
                {children}
            </ScrollContainer>
        </>
    );
};

export default ScrollBackgroundController;