import React, { useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';



const slideIn = keyframes`
  from {
    transform: translateX(-100%) scale(1);
  }
  to {
    transform: translateX(0) scale(1);
  }
`;

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
  animation: ${slideIn} 0.6s ease-out forwards;

  @media (max-width: 768px) {
    top: 150px;
    transform: scale(0.7); // 30% más pequeño en móvil
    padding: 6px;
    gap: 3px;
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
  opacity: ${props => props.isActive ? 1 : 0.3};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.3);
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 28px; // 30% más pequeño que 40px
    height: 28px;
    padding: 3px;
    
    &:hover {
      transform: scale(1.2); // Reducimos el hover en móvil
    }
  }
`;

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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Marcamos que la animación ya se ejecutó
    setHasAnimated(true);
  }, []);

  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    localStorage.setItem('i18nextLng', lng);
  }, [i18n]);

  return (
    <LanguageSelectorContainer>
      {Object.entries(LANGUAGES).map(([code, { flag, label }]) => (
        <LanguageButton
          key={code}
          onClick={() => changeLanguage(code)}
          isActive={i18n.language === code}
          title={label}
          aria-label={`Cambiar idioma a ${label}`}
        >
          <img src={flag} alt={`${label} flag`} />
        </LanguageButton>
      ))}
    </LanguageSelectorContainer>
  );
};

export default React.memo(LanguageSelector);