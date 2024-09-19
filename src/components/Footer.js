import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled(motion.footer)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 2rem;
  text-align: center;
  margin-top: auto; // Esto empujará el footer hacia abajo
`;

const Copyright = styled.p`
  margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const IconLink = styled(motion.a)`
  color: ${props => props.theme.colors.accent};
  font-size: 1.5rem;
`;

const socialLinks = [
  { icon: faFacebookF, url: 'https://facebook.com' },
  { icon: faInstagram, url: 'https://instagram.com' },
  { icon: faYoutube, url: 'https://youtube.com' },
  { icon: faLinkedinIn, url: 'https://linkedin.com' },
  { icon: faTiktok, url: 'https://tiktok.com' },
];

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <FooterWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Copyright>&copy; 2024 Quantum Web Services</Copyright>
      <SocialIcons>
        {socialLinks.map((link, index) => (
          <IconLink
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#FFD700' }}
          >
            <FontAwesomeIcon icon={link.icon} />
          </IconLink>
        ))}
      </SocialIcons>
    </FooterWrapper>
  );
}

export default Footer;