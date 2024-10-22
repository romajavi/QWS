import React, { useState } from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard.js';
import StandardPopup from '../components/StandardPopup.js';
import PageAnimation from '../components/PageAnimation.js';
import PageContainer from '../components/PageContainer.js';
import pageContainerStyle from '../styles/GlobalStyles.js';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';




const ServicesWrapper = styled.div`
  ${pageContainerStyle}
  min-height: calc(100vh - 120px);
  justify-content: flex-start;
  padding-top: 100px;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  width: 100%;
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

const Button = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  border-radius: 5px;
  padding: 0.6rem 1.3rem;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }
`;

const services = [
    {
        name: "Creación y Diseño de Páginas Web Personalizadas",
        image: "/assets/web-development.jpg",
        price: "10",
        features: [
            {
                name: "Diseño Responsivo",
                included: true,
                description: "Tu sitio se verá perfecto en todos los dispositivos, desde móviles hasta computadoras de escritorio."
            },
            {
                name: "Personalización Total",
                included: true,
                description: "Diseño a medida que refleja la identidad única de tu marca o proyecto."
            },
            {
                name: "SEO Básico",
                included: true,
                description: "Optimización inicial para motores de búsqueda para mejorar tu visibilidad online."
            },
            {
                name: "Integración de Redes Sociales",
                included: true,
                description: "Conexión seamless con tus perfiles en redes sociales para ampliar tu alcance."
            },
            {
                name: "Formulario de Contacto",
                included: true,
                description: "Facilita la comunicación con tus clientes o visitantes."
            },
            {
                name: "Galería de Imágenes",
                included: true,
                description: "Muestra tus productos o servicios de manera atractiva."
            }
        ]
    },
    {
        name: "Mantenimiento y Soporte Web Integral",
        image: "/assets/web-maintenance.jpg",
        price: "10",
        features: [
            {
                name: "Actualizaciones de Seguridad",
                included: true,
                description: "Mantenemos tu sitio protegido contra las últimas amenazas y vulnerabilidades."
            },
            {
                name: "Backups Regulares",
                included: true,
                description: "Copias de seguridad programadas para proteger tu contenido y datos."
            },
            {
                name: "Monitoreo de Rendimiento",
                included: true,
                description: "Seguimiento constante para asegurar que tu sitio funcione de manera óptima."
            },
            {
                name: "Actualizaciones de Contenido",
                included: true,
                description: "Mantén tu sitio fresco y relevante con actualizaciones periódicas."
            },
            {
                name: "Soporte Técnico",
                included: true,
                description: "Asistencia rápida y eficiente para resolver cualquier problema."
            },
            {
                name: "Informes Mensuales",
                included: true,
                description: "Recibe informes detallados sobre el estado y rendimiento de tu sitio."
            }
        ]
    },
    {
        name: "Optimización Web para SEO y Velocidad de Carga",
        image: "/assets/performance-optimization.jpg",
        price: "10",
        features: [
            {
                name: "Mejora de Velocidad de Carga",
                included: true,
                description: "Optimizamos tu sitio para que cargue rápidamente, mejorando la experiencia del usuario."
            },
            {
                name: "Optimización de Imágenes",
                included: true,
                description: "Reducimos el tamaño de las imágenes sin perder calidad para mejorar el rendimiento."
            },
            {
                name: "Minificación de Código",
                included: true,
                description: "Optimizamos tu código HTML, CSS y JavaScript para una carga más rápida."
            },
            {
                name: "Implementación de CDN",
                included: true,
                description: "Utilizamos redes de distribución de contenido para mejorar la velocidad global."
            },
            {
                name: "Optimización para Móviles",
                included: true,
                description: "Aseguramos que tu sitio esté perfectamente optimizado para dispositivos móviles."
            },
            {
                name: "Análisis de Rendimiento",
                included: true,
                description: "Realizamos pruebas exhaustivas y proporcionamos informes detallados de mejoras."
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
            window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
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
                        <Button onClick={() => handleContact('schedule')}>Agendar cita</Button>
                    </Link>
                    <Button onClick={() => handleContact('whatsapp')}>
                        Contacto Directo
                    </Button>
                </StandardPopup>
            </ServicesWrapper>
        </PageContainer>
    );
}

export default PageAnimation(Services);