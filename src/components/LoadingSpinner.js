import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.$fullScreen ? '100vh' : props.height || '100px'};
  width: 100%;
  position: ${props => props.$fullScreen ? 'fixed' : 'relative'};
  top: ${props => props.$fullScreen ? '0' : 'auto'};
  left: ${props => props.$fullScreen ? '0' : 'auto'};
  z-index: ${props => props.$fullScreen ? '9999' : '1'};
  background: ${props => props.$fullScreen ? props.theme.colors.background : 'transparent'};
`;

const Spinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border-radius: 50%;
  position: relative;
  border: 3px solid ${props => props.theme.colors.accent};
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;

  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${props => props.theme.colors.primary};
    animation: ${rotate} 2s linear infinite reverse;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    animation: ${pulse} 1s ease-in-out infinite;
  }
`;

const LoadingSpinner = ({ size, fullScreen, height }) => {
    return (
        <SpinnerWrapper fullScreen={fullScreen} height={height}>
            <Spinner size={size} />
        </SpinnerWrapper>
    );
};

export default LoadingSpinner;