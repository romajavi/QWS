import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Clock, Mail, Phone, ExternalLink } from 'lucide-react';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FooterWrapper = styled.footer`
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.background},
    ${props => props.theme.colors.primaryBackground}
  );
  color: ${props => props.theme.colors.text};
  padding: 2rem 2rem 1.5rem; // Reducido de 4rem 2rem 2rem
  position: relative;
  overflow: hidden;

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
  gap: 2rem; // Reducido de 3rem
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem; // Reducido de 1.5rem
    margin-bottom: 1rem; // Reducido de 1.5rem
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px; // Reducido de 50px
      height: 2px;
      background: ${props => props.theme.colors.accent};
    }
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  margin-bottom: 0.75rem; // Reducido de 1rem
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: translateX(10px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem; // Reducido de 1.5rem
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.primaryBackground};
  padding: 0.6rem; // Reducido de 0.8rem
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
    width: 18px; // Reducido de 20px
    height: 18px; // Reducido de 20px
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem; // Reducido de 3rem
  padding-top: 1.5rem; // Reducido de 2rem
  border-top: 1px solid ${props => props.theme.colors.primary}40;
  color: ${props => props.theme.colors.text}80;
  font-size: 0.9rem; // Añadido para reducir tamaño del texto
`;

const Footer = () => {
  const navigate = useNavigate();
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491168805604', '_blank');
  };

  const handleFAQClick = (e) => {
    e.preventDefault();
    navigate('/services#faq');
  };

  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterSection>
          <h3>Axion Dev</h3>
          <nav>
            <NavLink to="/about-us">
              <ExternalLink size={16} />
              Sobre Nosotros
            </NavLink>
            <NavLink to="/services">
              <ExternalLink size={16} />
              Servicios
            </NavLink>
            <NavLink to="/contact">
              <Mail size={16} />
              Contacto
            </NavLink>
          </nav>
        </FooterSection>

        <FooterSection>
          <h3>Recursos</h3>
          <nav>
            <NavLink to="/blog">
              <ExternalLink size={16} />
              Blog
            </NavLink>
            <NavLink to="#" onClick={handleFAQClick}>
              <ExternalLink size={16} />
              Preguntas Frecuentes
            </NavLink>
            <NavLink to="#" onClick={handleWhatsAppClick}>
              <Phone size={16} />
              Soporte
            </NavLink>
          </nav>
        </FooterSection>

        <FooterSection>
          <h3>Contacto</h3>
          <nav>
            <NavLink to="#" onClick={handleWhatsAppClick}>
              <Phone size={16} />
              WhatsApp
            </NavLink>
            <NavLink to="mailto:contact@axiondev.tech">
              <Mail size={16} />
              contact@axiondev.tech
            </NavLink>
            <NavLink to="#">
              <Clock size={16} />
              Lun - Vie: 9:00 - 18:00
            </NavLink>
          </nav>
        </FooterSection>

        <FooterSection>
          <h3>Síguenos</h3>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterGrid>

      <Copyright>
        © {new Date().getFullYear()} AxionDev. Todos los derechos reservados.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;