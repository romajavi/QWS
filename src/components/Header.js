import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.png';
import logoImage2 from '../assets/logor.png';

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

const Logo = styled(motion.img)`
  height: 120px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    height: 100px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 1rem;
    z-index: 1;
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
  font-size: 1.3rem;
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
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  padding: 1rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Overlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const linkVariants = {
  hover: {
    scale: 1.05
  }
};

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logoImage); // Estado para el logo
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ['home', 'services', 'portfolio', 'contact']; ///// + 'blog', cuandom se complete la página.

  const handleNavClick = (page) => {
    setIsMobileMenuOpen(false);
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  const renderNavLinks = () => (
    navItems.map((page) => (
      <NavLink
        key={page}
        variants={linkVariants}
        whileHover="hover"
        className={location.pathname === (page === 'home' ? '/' : `/${page}`) ? 'active' : ''}
        onClick={() => handleNavClick(page)}
      >
        {page}
      </NavLink>
    ))
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setLogoSrc(logoImage2); // Usamos logo2 en pantallas pequeñas
      } else {
        setLogoSrc(logoImage); // Usamos logo original en pantallas grandes
      }
    };

    // Ejecutamos la función inmediatamente para detectar el tamaño de pantalla al cargar
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderWrapper>
      <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
        {isMobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      <Link to="/" aria-label="Home">
        <Logo
          src={logoSrc} // Mostramos el logo dependiendo del tamaño de la pantalla
          alt="QWS Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>
      <Nav aria-label="Main Navigation">
        {renderNavLinks()}
      </Nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileMenu
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderNavLinks()}
            </MobileMenu>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileMenu}
            />
          </>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
}

export default Header;
