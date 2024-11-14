import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.png';
import logoImage2 from '../assets/logor.png';

// Animaciones
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Estilos actualizados
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

const Logo = styled(motion.img)`
  height: 120px;
  cursor: pointer;
  z-index: 1001;
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

// Menú móvil actualizado
const MobileMenuButton = styled.button`
  all: unset;
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.3s ease;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  // Deshabilitar animaciones heredadas
  animation: none !important;
  &::before {
    display: none;
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
  -webkit-backdrop-filter: blur(10px);
  padding: 0.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  z-index: 999;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileNavLink = styled(motion.div)`
  width: 100%;
  padding: 0.8rem;
  margin: 0.3rem 0;
  text-align: center;
  background: ${props => props.theme.colors.primaryBackground}20;
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.main};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &.active {
    background: ${props => props.theme.colors.accent}20;
    color: ${props => props.theme.colors.accent};
  }

  &:hover {
    background: ${props => props.theme.colors.accent}20;
    color: ${props => props.theme.colors.accent};
  }
`;

const Overlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 998;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logoImage);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const navItems = ['home', 'services', 'portfolio', 'contact'];

  const handleNavClick = (page) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  // Componente de enlaces de navegación actualizado
  const renderNavLinks = (isMobile = false) => (
    navItems.map((page) => {
      const isActive = location.pathname === (page === 'home' ? '/' : `/${page}`);
      const Component = isMobile ? MobileNavLink : NavLink;

      return (
        <Component
          key={page}
          onClick={() => handleNavClick(page)}
          className={isActive ? 'active' : ''}
          whileHover={isMobile ? { scale: 1.1 } : { scale: 1.1 }} // Cambiado a una escala muy sutil
          whileTap={{ scale: 0.98 }}
        >
          {page}
        </Component>
      );
    })
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setLogoSrc(logoImage2);
      } else {
        setLogoSrc(logoImage);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <HeaderWrapper>
      <MobileMenuButton
        onClick={toggleMobileMenu}
        className="mobile-menu-button"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>

      <Link to="/" aria-label="Home">
        <Logo
          src={logoSrc}
          alt="QWS Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>

      <Nav>
        {renderNavLinks(false)}
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileMenu
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {renderNavLinks(true)}
            </MobileMenu>

            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleMobileMenu}
            />
          </>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
}

export default Header;