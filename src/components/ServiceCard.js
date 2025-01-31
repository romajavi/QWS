import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Button from './Button.js';

const Card = styled(motion.div)`
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.secondaryBackground};
  border-radius: 15px;
  padding: 1.2rem;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: visible;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  margin-bottom: 2rem; 

  @media (max-width: 768px) {
    width: 100%; 
    max-width: 340px; 
    min-width: 340px; 
    margin: 1rem auto; 
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-5px);
  }
`;

const ServiceName = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-size: 1.1rem;
  font-family: ${props => props.theme.fonts.secondary};
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  background: ${props => props.theme.effects.accent};
  padding: 0.8rem 1rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.effects.glow};
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0 2rem;
  text-align: left;
  width: 120%;
  margin: 1.2rem 0;
  font-size: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
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
  width: auto;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.colors.accent};
  margin-bottom: 5px;
`;

const StyledCard = styled(Card)`
  & > ${FeatureList} {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

// Componente Feature
const Feature = ({ feature, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <FeatureItem>
      <FeatureHeader
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <FeatureIcon icon={faCheck} />
        {feature}
      </FeatureHeader>
      <AnimatePresence>
        {showDescription && (
          <FeatureDescription
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </FeatureDescription>
        )}
      </AnimatePresence>
    </FeatureItem>
  );
};

// Componente ServiceCard
const ServiceCard = ({ serviceKey }) => {
  const { t } = useTranslation();

  const handleMoreInfo = () => {
    // Scroll suave hacia la sección de contacto
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <StyledCard>
      <ServiceName>
        {t(`services.categories.${serviceKey}.name`)}
      </ServiceName>
      <FeatureList>
        {t(`services.categories.${serviceKey}.features`, { returnObjects: true })
          .map((feature, index) => (
            <Feature
              key={index}
              feature={feature.title}
              description={feature.description}
            />
          ))}
      </FeatureList>
      <Button
        variant="primary"
        size="small"
        glow={true}
        onClick={handleMoreInfo}
        glowIntensity={0.5}
      >
        {t('services.moreInfo')}
      </Button>
    </StyledCard>
  );
};

export default ServiceCard;