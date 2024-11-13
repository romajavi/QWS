import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Card = styled(motion.div)`
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.secondaryBackground};
  border-radius: 15px;
  padding: 1.5rem 1.2rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: visible;
  box-shadow: 0 8px 32px rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 255, 0.2);
    border-color: ${props => props.theme.colors.accent};
  }
`;

const ServiceName = styled.h3`
  color: ${props => props.theme.colors.background};
  font-size: 1.1rem;
  font-family: ${props => props.theme.fonts.secondary};
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.colors.accent};
  padding: 0.6rem 1rem;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 255, 255, 0.2);
`;

const Price = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  width: 100%;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  position: relative;
  color: ${props => props.theme.colors.text};
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.primary};
  margin-right: 0.8rem;
  font-size: 0.8rem;
`;

const FeatureDescription = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  width: 200px;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.colors.accent};
  margin-bottom: 5px;
`;

const ContactButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonText};
  border: none;
  padding: 0.7rem 1.3rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);

  &:hover {
    background: ${props => props.theme.colors.accent};
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Feature = ({ feature }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <FeatureItem>
      <FeatureHeader
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <FeatureIcon icon={faCheck} />
        {feature.name}
      </FeatureHeader>
      <AnimatePresence>
        {showDescription && (
          <FeatureDescription
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {feature.description}
          </FeatureDescription>
        )}
      </AnimatePresence>
    </FeatureItem>
  );
};

const ServiceCard = ({ name, price, features, onContactClick }) => {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <ServiceName>{name}</ServiceName>
      <Price>{price}</Price>
      <FeatureList>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </FeatureList>
      <ContactButton
        onClick={() => onContactClick(name)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Más información
      </ContactButton>
    </Card>
  );
};

export default ServiceCard;