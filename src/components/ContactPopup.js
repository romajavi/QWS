import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  position: relative; // Añadido para posicionar el botón de cierre
`;

const PopupTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const Button = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #00FFFF; // Cyan
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

const ContactPopup = ({ isOpen, onClose, onContact }) => {
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
                        <PopupTitle>Contacto</PopupTitle>
                        <Link to="/contact">
                            <Button>Agendar cita</Button>
                        </Link>
                        <Button onClick={() => onContact('whatsapp')}>
                            Contacto Directo
                        </Button>
                    </PopupContent>
                </PopupOverlay>
            )}
        </AnimatePresence>
    );
};

export default ContactPopup;