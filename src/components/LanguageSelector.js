import React, { useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useAnimationController } from '../utils/animationController.js';

const LanguageSelectorContainer = styled.div`
  position: fixed;
  left: 0;
  top: 140px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 1000;
  background: ${props => props.theme.colors.cardBackground};
  padding: 8px;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.colors.secondaryBackground}40;
  transform-origin: left center;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 125px; /* Posición debajo del header */
    left: 53%;
    transform: translateX(-50%) scale(0.84);
    flex-direction: row;
    justify-content: center;
    padding: 8px;
    gap: 12px;
    border-radius: 8px;
    width: fit-content;
    margin: 0 auto;
  }
`;

const LanguageButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  background: transparent;
  opacity: ${props => props.$isActive ? 1 : 0.3};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  outline: none;
  
  &:focus-visible {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent}40;
  }
  
  &:hover {
    transform: scale(1.3);
    opacity: 1;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transform: translateZ(0);
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    padding: 3px;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`;


// Configuración de idiomas
const LANGUAGES = {
  es: {
    flag: "/images/flags/es.png",
    label: "Español"
  },
  en: {
    flag: "/images/flags/gb.png",
    label: "English"
  },
  pt: {
    flag: "/images/flags/br.png",
    label: "Português"
  }
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para manejar la visibilidad inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Función optimizada para cambio de idioma
  const changeLanguage = useCallback((lng) => {
    // Prevenimos cambios innecesarios
    if (i18n.language === lng) return;

    // Actualizamos el idioma
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    localStorage.setItem('i18nextLng', lng);

    // Efecto de retroalimentación táctil en dispositivos móviles si está disponible
    if (window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  }, [i18n]);

  // Optimización de renderizado para las banderas
  const renderLanguageButtons = useCallback(() => {
    return Object.entries(LANGUAGES).map(([code, { flag, label }]) => {
      const isActive = i18n.language === code;

      return (
        <LanguageButton
          key={code}
          onClick={() => changeLanguage(code)}
          $isActive={isActive}
          title={label}
          aria-label={`Cambiar idioma a ${label}`}
          role="button"
          tabIndex={0}
        >
          <img
            src={flag}
            alt={`${label} flag`}
            loading="lazy"
            width="40"
            height="40"
          />
        </LanguageButton>
      );
    });
  }, [i18n.language, changeLanguage]);

  // Solo renderizamos si es visible
  if (!isVisible) return null;

  return (
    <LanguageSelectorContainer
      role="region"
      aria-label="Selector de idioma"
    >
      {renderLanguageButtons()}
    </LanguageSelectorContainer>
  );
};

// Exportamos el componente memorizado
export default React.memo(LanguageSelector);