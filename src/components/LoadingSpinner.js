import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid ${props => props.theme.colors.primary};
  border-top: 5px solid ${props => props.theme.colors.accent};
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