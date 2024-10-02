import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 1rem;
  text-align: center;
  width: 100%;
  margin-top: auto;
`;

const Copyright = styled.p`
  margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: ${props => props.theme.colors.accent};
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #FFD700;
    transform: scale(1.2);
  }
`;

const socialLinks = [
  { icon: faFacebookF, url: 'https://facebook.com' },
  { icon: faInstagram, url: 'https://instagram.com' },
  { icon: faYoutube, url: 'https://youtube.com' },
  { icon: faLinkedinIn, url: 'https://linkedin.com' },
  { icon: faTiktok, url: 'https://tiktok.com' },
];

function Footer() {
  return (
    <FooterWrapper>
      <Copyright>&copy; 2024 Quantum Web Services</Copyright>
      <SocialIcons>
        {socialLinks.map((link, index) => (
          <IconLink
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={link.icon} />
          </IconLink>
        ))}
      </SocialIcons>
    </FooterWrapper>
  );
}

export default Footer;