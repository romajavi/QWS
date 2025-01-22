import React, { useEffect, useState } from 'react';
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
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled(motion.div)`
  background: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.text};
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  border: 1px solid ${props => props.theme.colors.accent};
  margin: auto;
  position: relative;
  z-index: 1001; // Aseguramos que esté por encima del formulario

  @media (max-width: 768px) {
    position: absolute;
    width: 85%;
    padding: 1.5rem;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
  }
`;

const CloseButton = styled(motion.button)`
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
  z-index: 1;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    color: ${props => props.theme.colors.primary};
  }
`;

const PopupTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  padding-right: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const StandardPopup = ({ isOpen, onClose, titleKey, children, triggerElement }) => {
  const { t } = useTranslation();
  const [popupStyle, setPopupStyle] = useState({});

  useEffect(() => {
    const updatePosition = () => {
      if (isOpen && triggerElement && window.innerWidth <= 768) {
        const element = triggerElement.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const windowHeight = window.innerHeight;
        const popupHeight = 200; // Altura estimada del popup

        let topPosition;

        // Si el elemento está en la mitad superior de la pantalla
        if (rect.top < windowHeight / 2) {
          topPosition = elementTop + rect.height + 16;
        } else {
          // Si está en la mitad inferior
          topPosition = elementTop - popupHeight - 16;
        }

        setPopupStyle({ top: `${Math.max(20, topPosition)}px` });

        // Scroll suave al popup
        const scrollTarget = Math.max(0, topPosition - (windowHeight / 3));
        window.scrollTo({
          top: scrollTarget,
          behavior: 'smooth'
        });
      } else {
        setPopupStyle({});
      }
    };

    if (isOpen) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
    }

    return () => window.removeEventListener('resize', updatePosition);
  }, [isOpen, triggerElement]);

  return (
    <AnimatePresence>
      {isOpen && (
        <PopupOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <PopupContainer
            style={popupStyle}
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <CloseButton onClick={onClose}>×</CloseButton>
            <PopupTitle>{t(titleKey)}</PopupTitle>
            <ButtonContainer>{children}</ButtonContainer>
          </PopupContainer>
        </PopupOverlay>
      )}
    </AnimatePresence>
  );
};

export default StandardPopup;