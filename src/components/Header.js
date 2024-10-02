import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logoImage from '../assets/logo.png';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  z-index: 1000;
`;

const Logo = styled(motion.img)`
  height: 100px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  padding: 1rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary};

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
  }
`;

const linkVariants = {
  hover: {
    scale: 1.05
  }
};

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ['home', 'services', 'portfolio', 'blog', 'contact'];

  const renderNavLinks = () => (
    navItems.map((page) => (
      <NavLink
        key={page}
        to={page === 'home' ? '/' : `/${page}`}
        variants={linkVariants}
        whileHover={{
          scale: 1.05,
          color: '#00FFFF'
        }}
        whileFocus={{
          scale: 1.05,
          color: '#DAA520'
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {page}
      </NavLink>
    ))
  );

  return (
    <HeaderWrapper>
      <Link to="/" aria-label="Home">
        <Logo
          src={logoImage}
          alt="QWS Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>
      <Nav aria-label="Main Navigation">
        {renderNavLinks()}
      </Nav>
      <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
        ☰
      </MobileMenuButton>
      <MobileMenu isOpen={isMobileMenuOpen}>
        {renderNavLinks()}
      </MobileMenu>
    </HeaderWrapper>
  );
}

export default Header;