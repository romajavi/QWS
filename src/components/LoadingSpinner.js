import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.fullScreen ? '100vh' : 'auto'};
  min-height: ${props => props.height || '100px'};
  background-color: ${props => props.fullScreen ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  position: ${props => props.fullScreen ? 'fixed' : 'relative'};
  top: ${props => props.fullScreen ? '0' : 'auto'};
  left: ${props => props.fullScreen ? '0' : 'auto'};
  right: ${props => props.fullScreen ? '0' : 'auto'};
  bottom: ${props => props.fullScreen ? '0' : 'auto'};
  z-index: ${props => props.fullScreen ? '9999' : '1'};
`;

const Spinner = styled(motion.div)`
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
  border: ${props => props.borderWidth || '5px'} solid transparent;
  border-top: ${props => props.borderWidth || '5px'} solid #00FFFF;
  border-right: ${props => props.borderWidth || '5px'} solid #a5aa9a;
  border-bottom: ${props => props.borderWidth || '5px'} solid #FFD700;
  border-radius: 50%;
`;

const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
};

function LoadingSpinner({
    size = '50px',
    borderWidth = '5px',
    fullScreen = true,
    height = '100px'
}) {
    return (
        <SpinnerWrapper fullScreen={fullScreen} height={height}>
            <Spinner
                size={size}
                borderWidth={borderWidth}
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </SpinnerWrapper>
    );
}

export default LoadingSpinner;