import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 2rem 0;
  width: 100%;
  position: relative; // Asegura que el footer se posicione correctamente
  bottom: 0; // Forzar que esté en la parte inferior de la página
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  margin: 1rem 0;
`;

const FooterTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  margin: 0.5rem 0;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: scale(1.2);
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Quantum Web Services</FooterTitle>
          <FooterLink href="/about">Sobre Nosotros</FooterLink>
          <FooterLink href="/services">Servicios</FooterLink>
          <FooterLink href="/contact">Contacto</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Recursos</FooterTitle>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/support">Soporte</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Síguenos</FooterTitle>
          <SocialIcons>
            <IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </IconLink>
            <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </IconLink>
            <IconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </IconLink>
            <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </IconLink>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Quantum Web Services. Todos los derechos reservados.
      </Copyright>
    </FooterWrapper>
  );
}

export default Footer;