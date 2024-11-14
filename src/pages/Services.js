import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard.js';
import StandardPopup from '../components/StandardPopup.js';
import PageAnimation from '../components/PageAnimation.js';
import PageContainer from '../components/PageContainer.js';
import FAQSection from '../components/FAQSection.js';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Button from '../components/Button.js';




const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  padding-bottom: 5rem; // space before the footer
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 1.5rem 0;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;


const services = [
    {
        name: "Landing Pages y Sitios Web",
        image: "/assets/web-development.jpg",
        price: "Desde u$d 149",
        features: [
            {
                name: "Diseño Responsivo",
                included: true,
                description: "Sitio web adaptable a móviles, tablets y computadoras."
            },
            {
                name: "Hasta 5 Secciones",
                included: true,
                description: "Inicio, Acerca de, Servicios, Galería y Contacto."
            },
            {
                name: "Formulario de Contacto",
                included: true,
                description: "Formulario funcional conectado a tu email."
            },
            {
                name: "SEO Básico",
                included: true,
                description: "Optimización básica para buscadores y metadata."
            },
            {
                name: "Enlaces a Redes Sociales",
                included: true,
                description: "Integración con tus perfiles sociales."
            },
            {
                name: "Entrega a convenir",
                included: true,
                description: "Desarrollo y ajustes en tiempo óptimo."
            }
        ]
    },
    {
        name: "Mantenimiento WordPress",
        image: "/assets/wordpress-maintenance.jpg",
        price: "Desde u$d 49/mes",
        features: [
            {
                name: "Actualizaciones de Seguridad",
                included: true,
                description: "Mantenimiento mensual de plugins y WordPress core."
            },
            {
                name: "Backups Regulares",
                included: true,
                description: "Copias de seguridad semanales de tu sitio."
            },
            {
                name: "Actualizaciones de Contenido",
                included: true,
                description: "Hasta 4 actualizaciones mensuales de contenido."
            },
            {
                name: "Monitoreo de Uptime",
                included: true,
                description: "Supervisión del tiempo de actividad del sitio."
            },
            {
                name: "Soporte por Email",
                included: true,
                description: "Respuesta en 24-48 horas hábiles."
            },
            {
                name: "Informes Mensuales",
                included: true,
                description: "Reporte de actualizaciones y estado del sitio."
            }
        ]
    },
    {
        name: "Optimización Web Básica",
        image: "/assets/optimization.jpg",
        price: "Desde u$d 99",
        features: [
            {
                name: "Optimización de Imágenes",
                included: true,
                description: "Mejora del rendimiento de imágenes y tiempo de carga."
            },
            {
                name: "Meta Descripciones",
                included: true,
                description: "Optimización de títulos y descripciones para SEO."
            },
            {
                name: "Mejoras de Velocidad",
                included: true,
                description: "Optimizaciones básicas de rendimiento."
            },
            {
                name: "Implementación de SSL",
                included: true,
                description: "Configuración de certificado de seguridad básico."
            },
            {
                name: "Mobile-Friendly",
                included: true,
                description: "Ajustes para mejor experiencia en móviles."
            },
            {
                name: "Informe de Mejoras",
                included: true,
                description: "Informe detallado de optimizaciones realizadas."
            }
        ]
    }
];

function Services() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleContactClick = (serviceName) => {
        setSelectedService(serviceName);
        setIsPopupOpen(true);
    };

    const handleContact = (type) => {
        if (type === 'schedule') {
            console.log('Redirigir a la página de contacto');
        } else if (type === 'whatsapp') {
            const message = `Hola, estoy interesado en el servicio "${selectedService}". ¿Podrían darme más información?`;
            window.open(`https://wa.me/5491168805604?text=${encodeURIComponent(message)}`, '_blank');
        }
        setIsPopupOpen(false);
    };

    return (
        <PageContainer>
            <ServicesWrapper>
                <Title>
                    <ReactTyped
                        strings={['Servicios de Desarrollo Web']}
                        typeSpeed={50}
                        showCursor={true}
                        cursorChar="|"
                    />
                </Title>
                <ServicesContainer>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            onContactClick={handleContactClick}
                        />
                    ))}
                </ServicesContainer>
                <StandardPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    title="¿Cómo deseas seguir?"
                >
                    <Link to="/contact">
                        <Button
                            variant="primary"
                            onClick={() => handleContact('schedule')}
                        >
                            Agendar cita
                        </Button>
                    </Link>
                    <Button
                        variant="primary"
                        onClick={() => handleContact('whatsapp')}
                    >
                        Contacto Directo
                    </Button>
                </StandardPopup>
                <FAQSection />
            </ServicesWrapper>
        </PageContainer>
    );
}

export default PageAnimation(Services);