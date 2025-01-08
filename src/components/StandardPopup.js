import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PopupOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  class-name: popup-overlay;

  // Aseguramos que el popup sea visible en el viewport actual
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const PopupContainer = styled(motion.div)`
  background: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.text};
  padding: 2.5rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  border: 1px solid ${props => props.theme.colors.accent};
  margin: auto;
  
  // Aseguramos que el contenido esté centrado
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 0;
  background: none;
  border: none;
  color: ${props => props.theme.colors.accent};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    color: ${props => props.theme.colors.primary};
    transform: rotate(90deg);
  }
`;

const PopupTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-shadow: 0 0 1px rgba(0, 255, 255, 0.3);
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const PopupButton = styled.div`
  flex: 1;
  min-width: 120px;

  > button {
    width: 100%;
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 0.75rem;
    font-size: 0.9rem;
  }
`;

const StandardPopup = ({ isOpen, onClose, titleKey, children }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Deshabilitar scroll en la página
    }
    return () => {
      document.body.style.overflow = 'unset'; // Rehabilitar scroll al cerrar
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const wrappedChildren = React.Children.map(children, child => (
    <PopupButton>{child}</PopupButton>
  ));

  return (
    <AnimatePresence>
      <PopupOverlay
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PopupContainer
          onClick={e => e.stopPropagation()}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
        >
          <CloseButton onClick={onClose}>×</CloseButton>
          <PopupTitle>{t(titleKey)}</PopupTitle>
          <ButtonContainer>{wrappedChildren}</ButtonContainer>
        </PopupContainer>
      </PopupOverlay>
    </AnimatePresence>
  );
};

export default StandardPopup;
