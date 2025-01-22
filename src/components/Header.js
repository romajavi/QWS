import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Clock, Mail, Phone, ExternalLink } from 'lucide-react';
import logoImage from '../assets/logo.png';
import 'react-lazy-load-image-component/src/effects/blur.css';

const gradientAnimation = keyframes`
 0% { background-position: 0% 50%; }
 50% { background-position: 100% 50%; }
 100% { background-position: 0% 50%; }
`;

const HeaderWrapper = styled.header`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 120px;
 background-color: ${props => props.theme.colors.background};
 padding: 0 1rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 z-index: 1000;
 
 &::after {
   content: '';
   position: absolute;
   bottom: 0;
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

const Logo = styled(motion.div)`
 height: 120px;
 width: auto;
 cursor: pointer;
 
 .lazy-load-image-background {
   height: 100%;
   
   img {
     height: 100%;
     width: auto;
     object-fit: contain;
   }
 }

 @media (max-width: 768px) {
   height: 100px;
   position: absolute;
   top: 1rem;
   right: 1rem;
   padding: 1rem;
   z-index: 1001;
 }
`;

const Nav = styled.nav`
 display: flex;
 gap: 1.5rem;
 margin-right: 2rem;
 @media (max-width: 768px) {
   display: none;
 }
`;

const NavLink = styled(motion.div)`
 font-family: ${props => props.theme.fonts.main};
 color: ${props => props.theme.colors.text};
 cursor: pointer;
 font-size: 1rem;
 text-transform: uppercase;
 letter-spacing: 1px;
 padding: 0.5rem 1rem;
 border-radius: 5px;
 transition: all 0.3s ease;
 
 &:hover, &.active {
   background-color: rgba(255, 255, 255, 0.1);
   color: ${props => props.theme.colors.accent};
 }
`;

const MobileMenuButton = styled.button`
 position: absolute;
 left: 1rem;
 top: 50%;
 transform: translateY(-50%);
 width: 40px;
 height: 40px;
 padding: 0;
 background: none;
 border: none;
 color: ${props => props.theme.colors.accent};
 font-size: 1.8rem;
 cursor: pointer;
 display: none;
 align-items: center;
 justify-content: center;
 border-radius: 50%;
 transition: all 0.3s ease;
 z-index: 1001;
 
 @media (max-width: 768px) {
   display: flex;
 }
`;

const FooterSection = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 padding: 1rem 0;
 width: 100%;

 h3 {
   color: ${props => props.theme.colors.primary};
   font-size: 1.2rem;
   margin-bottom: 1rem;
   position: relative;
   padding-bottom: 15px;
   
   &::after {
     content: '';
     position: absolute;
     bottom: 0;
     left: 50%;
     transform: translateX(-50%);
     height: 2px;
     width: 40px;
     background: ${props => props.theme.colors.accent};
   }
 }
`;

const FooterLink = styled.a`
 display: flex;
 align-items: center;
 gap: 0.5rem;
 color: ${props => props.theme.colors.text};
 text-decoration: none;
 margin-bottom: 0.5rem;
 transition: all 0.3s ease;
 cursor: pointer;
 justify-content: center;

 &:hover {
   color: ${props => props.theme.colors.accent};
   transform: translateX(10px);
 }
`;

const LanguageButtons = styled.div`
 display: flex;
 gap: 1rem;
 justify-content: center;
 margin-top: 1rem;
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

const SocialLinks = styled.div`
 display: flex;
 gap: 1rem;
 justify-content: center;
 margin-top: 1rem;
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

const MobileMenu = styled(motion.div)`
 display: none;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0, 0, 0, 0.95);
 backdrop-filter: blur(10px);
 overflow-y: auto;
 z-index: 999;
 padding-top: 120px;

 @media (max-width: 768px) {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
`;

const GradientLine = styled.div`
 width: 100%;
 height: 2px;
 background: linear-gradient(90deg,
   ${props => props.theme.colors.primary},
   ${props => props.theme.colors.accent},
   ${props => props.theme.colors.primary}
 );
 background-size: 200% 200%;
 animation: ${gradientAnimation} 3s linear infinite;
 margin-bottom: 2rem;
`;

function Header() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491168805604', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@axiondev.tech';
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { key: 'home', id: 'home' },
    { key: 'services', id: 'services' },
    { key: 'contact', id: 'contact' }
  ];

  return (
    <HeaderWrapper>
      <MobileMenuButton
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? '×' : '☰'}
      </MobileMenuButton>

      <Logo
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <LazyLoadImage
          src={logoImage}
          alt="Logo"
          width="120"
          height="120"
          effect="blur"
          threshold={100}
        />
      </Logo>

      <Nav>
        {navItems.map(({ key, id }) => (
          <NavLink
            key={key}
            onClick={() => scrollToSection(id)}
            className={activeSection === id ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t(`header.${key}`)}
          </NavLink>
        ))}
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GradientLine />
            {/* Idiomas */}
            <FooterSection>
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

            {/* Navegación */}
            <FooterSection>
              <h3>{t('footer.sections.company.title')}</h3>
              {navItems.map(({ key, id }) => (
                <FooterLink
                  key={key}
                  onClick={() => scrollToSection(id)}
                >
                  <ExternalLink size={16} />
                  {t(`header.${key}`)}
                </FooterLink>
              ))}
            </FooterSection>

            {/* Contacto */}
            <FooterSection>
              <h3>{t('footer.sections.contact.title')}</h3>
              <FooterLink onClick={handleWhatsAppClick}>
                <Phone size={16} />
                {t('footer.sections.contact.links.whatsapp')}
              </FooterLink>
              <FooterLink onClick={handleEmailClick}>
                <Mail size={16} />
                {t('footer.sections.contact.links.email')}
              </FooterLink>
              <FooterLink>
                <Clock size={16} />
                {t('footer.sections.contact.links.schedule')}
              </FooterLink>
            </FooterSection>

            {/* Redes Sociales */}
            <FooterSection>
              <h3>{t('footer.sections.social.title')}</h3>
              <SocialLinks>
                <SocialIcon href="https://facebook.com" target="_blank">
                  <Facebook />
                </SocialIcon>
                <SocialIcon href="https://twitter.com" target="_blank">
                  <Twitter />
                </SocialIcon>
                <SocialIcon href="https://instagram.com/axiondev" target="_blank">
                  <Instagram />
                </SocialIcon>
                <SocialIcon href="https://linkedin.com" target="_blank">
                  <Linkedin />
                </SocialIcon>
              </SocialLinks>
            </FooterSection>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
}

export default Header;