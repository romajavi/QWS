import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  position: relative;
`;

const PopupTitle = styled.h2`
  color: ${props => props.theme.colors.secondaryBackground};
  margin-bottom: 1rem;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #00FFFF;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

const StandardPopup = ({ isOpen, onClose, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <PopupOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <PopupContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={onClose}>×</CloseButton>
                        <PopupTitle>{title}</PopupTitle>
                        {children}
                    </PopupContent>
                </PopupOverlay>
            )}
        </AnimatePresence>
    );
};

export default StandardPopup;