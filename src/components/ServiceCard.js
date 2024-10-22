import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: visible;
`;

const ServiceName = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  border-radius: 5px;
  width: 100%;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  position: relative;
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FeatureDescription = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 100%;
  background: rgba(0, 0, 0, 0.9);
  color: ${props => props.theme.colors.text};
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
  width: 100%;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  white-space: normal;
  word-wrap: break-word;
  margin-bottom: 5px; 
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;


const ContactButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
`;

const Feature = ({ feature }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <FeatureItem>
      <FeatureHeader
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <Icon icon={faCheck} color="green" />
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
      whileHover={{ scale: 1.05 }}
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