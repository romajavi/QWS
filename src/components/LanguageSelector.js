import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageSelectorContainer = styled.div`
  position: fixed;
  right: 20px; // Cambiado de left a right
  top: 140px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
  background: ${props => props.theme.colors.cardBackground};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.colors.secondaryBackground}40;

@media (max-width: 768px) {
 top: auto;
 bottom: 20px;
 left: 50%;
 transform: translateX(-50%);
 flex-direction: row;
 width: auto;
 justify-content: center;
 align-items: center;
 padding: 15px 20px;
 gap: 20px;
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
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
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