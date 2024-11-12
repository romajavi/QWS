import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid transparent;
  border-top: 5px solid #00FFFF;
  border-right: 5px solid #a5aa9a;
  border-bottom: 5px solid #FFD700;
  border-radius: 50%;
`;

const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
};

function LoadingSpinner() {
    return (
        <SpinnerWrapper>
            <Spinner
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </SpinnerWrapper>
    );
}

export default LoadingSpinner;