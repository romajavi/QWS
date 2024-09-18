import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const TransitionOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 4px solid #000;
  border-top: 4px solid #00ffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const PageTransition = ({ children, location }) => {
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            <AnimatePresence>
                {isTransitioning && (
                    <TransitionOverlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Spinner />
                    </TransitionOverlay>
                )}
            </AnimatePresence>
            {!isTransitioning && children}
        </>
    );
};

export default PageTransition;