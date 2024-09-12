import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

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
`;

const ServiceName = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
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

const Feature = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const ServiceCard = ({ name, image, price, features }) => (
    <Card
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <ServiceName>{name}</ServiceName>
        <ServiceImage src={image} alt={name} />
        <Price>Desde ${price}</Price>
        <FeatureList>
            {features.map((feature, index) => (
                <Feature key={index}>
                    <Icon icon={feature.included ? faCheck : faTimes} color={feature.included ? "green" : "red"} />
                    {feature.name}
                </Feature>
            ))}
        </FeatureList>
    </Card>
);

export default ServiceCard;