import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`;

const services = [
    {
        name: "Plan Silver",
        image: "/assets/silver-plan.jpg", // Actualiza la ruta de la imagen según donde esté almacenada
        price: 99,
        features: [
            { name: "Diseño Responsivo", included: true },
            { name: "SEO Básico", included: true },
            { name: "Soporte 24/7", included: false },
            { name: "Dominio Personalizado", included: false },
        ]
    },
    {
        name: "Plan Gold",
        image: "/assets/gold-plan.jpg", // Actualiza la ruta de la imagen según donde esté almacenada
        price: 199,
        features: [
            { name: "Diseño Responsivo", included: true },
            { name: "SEO Avanzado", included: true },
            { name: "Soporte 24/7", included: true },
            { name: "Dominio Personalizado", included: false },
        ]
    },
    {
        name: "Plan Platinum",
        image: "/assets/platinum-plan.jpg", // Actualiza la ruta de la imagen según donde esté almacenada
        price: 299,
        features: [
            { name: "Diseño Responsivo", included: true },
            { name: "SEO Premium", included: true },
            { name: "Soporte 24/7", included: true },
            { name: "Dominio Personalizado", included: true },
        ]
    },
    // Puedes agregar más planes si es necesario
];

function Services() {
    return (
        <ServicesWrapper>
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </ServicesWrapper>
    );
}

export default Services;
