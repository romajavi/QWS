import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logoImage from '../assets/logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';





// Animaciones
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
  z-index: 1000; // Aseguramos que esté por encima del contenido
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

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background}F2;
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  z-index: 999;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  margin: 0.3rem 0;
`;

function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map(({ key, id }) => (
              <MobileNavLink
                key={key}
                onClick={() => scrollToSection(id)}
                className={activeSection === id ? 'active' : ''}
              >
                {t(`header.${key}`)}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
}

export default Header;