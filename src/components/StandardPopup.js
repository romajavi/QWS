import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 1rem;
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

  // Mantenemos la dirección en row incluso en móvil
  flex-direction: row;
`;

const PopupButton = styled.div`
  flex: 1;
  min-width: 120px; // Reducimos el ancho mínimo para móvil
  max-width: 200px;

  @media (max-width: 479px) {
    min-width: 100px; // Ajustamos el ancho mínimo para móvil
    max-width: 150px; // Limitamos el ancho máximo en móvil
  }

  > button {
    width: 100%;
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 0.75rem; // Reducimos el padding en móvil
    font-size: 0.9rem; // Reducimos ligeramente el tamaño de la fuente en móvil
  }
`;

const StandardPopup = ({ isOpen, onClose, titleKey, children }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Función auxiliar para envolver los children con PopupButton
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
          <ButtonContainer>
            {wrappedChildren}
          </ButtonContainer>
        </PopupContainer>
      </PopupOverlay>
    </AnimatePresence>
  );
};

export default StandardPopup;