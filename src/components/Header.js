import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logoImage from '../assets/logo.png'; // Asegúrate de tener esta imagen




const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`;

const Logo = styled(motion.img)`
  height: 40px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(motion.a)`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const linkVariants = {
  hover: {
    scale: 1.05,
  }
};

function Header({ setCurrentPage }) {
  return (
    <HeaderWrapper>
      <Logo
        src={logoImage}
        alt="QWS Logo"
        onClick={() => setCurrentPage('home')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
      <Nav>
        {['home', 'services', 'portfolio', 'blog', 'contact'].map((page) => (
          <NavLink
            key={page}
            as={motion.a}
            variants={linkVariants}
            whileHover={{
              scale: 1.05,
              color: '#DAA520'
            }}
            onClick={() => setCurrentPage(page)}
            style={{ color: '#F0F0F0' }}
          >
            {page}
          </NavLink>
        ))}
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;