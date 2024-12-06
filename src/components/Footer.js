import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Facebook, Twitter, Instagram, Linkedin, Clock, Mail, Phone, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FooterWrapper = styled.footer`
  position: relative; // Cambiado de fixed a relative
  width: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 2rem 1rem;
  margin-top: auto; // Empuja el footer al final del contenido
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.primary}
    );
    background-size: 200% 200%;
    animation: ${gradientAnimation} 3s linear infinite;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 0 5rem;

  @media (max-width: 768px) {
    text-align: center;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props.$alignment === 'right' ? 'flex-end' :
      props.$alignment === 'center' ? 'center' :
        'flex-start'
  };

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    text-align: ${props => props.$alignment || 'left'};
    padding-bottom: 15px;
  }

  h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 40px;
    background: ${props => props.theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LanguageButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  justify-content: center; 
  margin-top: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LanguageButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  padding: 0.6rem;
  cursor: pointer;
  background: ${props => props.theme.colors.primaryBackground};
  opacity: ${props => props.$isActive ? 1 : 0.7};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: ${props => props.theme.colors.accent};
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  margin-bottom: 0.5rem; // Reducido de 0.75rem a 0.5rem
  transition: all 0.3s ease;
  cursor: pointer;
  justify-content: ${props =>
    props.$alignment === 'center' ? 'center' : 'center'
  };

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0.4rem; // Aún más reducido en móvil
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: translateX(10px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: ${props =>
    props.$alignment === 'right' ? 'center' :
      props.$alignment === 'center' ? 'center' :
        'center'
  };
  margin-top: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.primaryBackground};
  padding: 0.6rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.accent};
    transform: translateY(-5px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.primary}40;
  color: ${props => props.theme.colors.text}80;
  font-size: 0.9rem;
`;

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@axiondev.tech';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491168805604', '_blank');
  };

  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterSection $alignment="center">
          <h3>{t('footer.sections.language.title')}</h3>
          <LanguageButtons>
            {Object.entries(LANGUAGES).map(([code, { flag, label }]) => (
              <LanguageButton
                key={code}
                onClick={() => changeLanguage(code)}
                $isActive={i18n.language === code}
                title={label}
              >
                <img src={flag} alt={`${label} flag`} />
              </LanguageButton>
            ))}
          </LanguageButtons>
        </FooterSection>

        <FooterSection $alignment="center">
          <h3>{t('footer.sections.company.title')}</h3>
          <FooterLink onClick={() => scrollToSection('home')}>
            <ExternalLink size={16} />
            {t('footer.sections.company.links.home')}
          </FooterLink>
          <FooterLink onClick={() => scrollToSection('services')}>
            <ExternalLink size={16} />
            {t('footer.sections.company.links.services')}
          </FooterLink>
          <FooterLink onClick={() => scrollToSection('contact')}>
            <Mail size={16} />
            {t('footer.sections.company.links.contact')}
          </FooterLink>
        </FooterSection>

        <FooterSection $alignment="center">
          <h3>{t('footer.sections.contact.title')}</h3>
          <FooterLink onClick={handleWhatsAppClick}>
            <Phone size={16} />
            {t('footer.sections.contact.links.whatsapp')}
          </FooterLink>
          <FooterLink onClick={handleEmailClick}>
            <Mail size={16} />
            {t('footer.sections.contact.links.email')}
          </FooterLink>
          <FooterLink onClick={() => scrollToSection('contact')}>
            <Clock size={16} />
            {t('footer.sections.contact.links.schedule')}
          </FooterLink>
        </FooterSection>

        <FooterSection $alignment="center">
          <h3>{t('footer.sections.social.title')}</h3>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com/axiondev" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterGrid>

      <Copyright>
        {t('footer.copyright')}
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;