import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem;
  position: relative;
  overflow: hidden;
`;

const ServiceName = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  border-radius: 5px;
  width: 100%;
`;

const ServiceImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
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
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
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
  margin-top: 1rem;
`;

const FeatureDescription = styled(motion.div)`
  position: absolute;
  right: 100%; //// Cambiado de left a right
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: ${props => props.theme.colors.text};
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
  max-width: 200px;
  z-index: 10;
  margin-right: 10px; // Añadido para dar un poco de espacio
`;

const InfoIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  cursor: help;
`;

const Feature = ({ feature, index, activeDescription, setActiveDescription }) => (
  <FeatureItem>
    <Icon icon={feature.included ? faCheck : faTimes} color={feature.included ? "green" : "red"} />
    {feature.name}
    {feature.description && (
      <InfoIcon
        icon={faInfoCircle}
        onMouseEnter={() => setActiveDescription(index)}
        onMouseLeave={() => setActiveDescription(null)}
      />
    )}
    <AnimatePresence>
      {activeDescription === index && feature.description && (
        <FeatureDescription
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
        >
          {feature.description}
        </FeatureDescription>
      )}
    </AnimatePresence>
  </FeatureItem>
);

const ServiceCard = ({ name, image, price, features, onContactClick }) => {
  const [activeDescription, setActiveDescription] = useState(null);

  return (
    <Card
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <ServiceName>{name}</ServiceName>
      {/* <ServiceImage src={image} alt={name} /> */}
      <Price>Desde ${price}</Price>
      <FeatureList>
        {features.map((feature, index) => (
          <Feature
            key={index}
            feature={feature}
            index={index}
            activeDescription={activeDescription}
            setActiveDescription={setActiveDescription}
          />
        ))}
      </FeatureList>
      <ContactButton
        onClick={() => onContactClick(name)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Mas información
      </ContactButton>
    </Card>
  );
};

export default ServiceCard;