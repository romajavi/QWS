import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';
import DiscountPopup from '../components/DiscountPopup';
import ContactPopup from '../components/ContactPopup';
import PageAnimation from '../components/PageAnimation';

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

//// Para definir la lista de servicios
const services = [
    {
        name: "Plan Silver",
        image: "/assets/silver-plan.jpg",
        price: 99,
        features: [
            {
                name: "Diseño Responsivo",
                included: true,
                description: "Tu sitio web se verá genial en cualquier dispositivo, ya sea un celular, una tableta o una computadora."
            },
            {
                name: "SEO Básico",
                included: true,
                description: "Optimizamos tu sitio para que los motores de búsqueda como Google puedan encontrarlo más fácilmente."
            },
            {
                name: "Soporte 24/7",
                included: false,
                description: "Atención al cliente disponible todo el día, todos los días de la semana."
            },
            {
                name: "Dominio Personalizado",
                included: false,
                description: "Un nombre único para tu sitio web, como www.tuempresa.com."
            },
        ]
    },
    {
        name: "Plan Gold",
        image: "/assets/gold-plan.jpg",
        price: 199,
        features: [
            {
                name: "Diseño Responsivo Premium",
                included: true,
                description: "Diseño personalizado y avanzado para cualquier dispositivo."
            },
            {
                name: "SEO Avanzado",
                included: true,
                description: "Posicionamos tu sitio en los primeros lugares de los motores de búsqueda."
            },
            {
                name: "Soporte 24/7",
                included: true,
                description: "Soporte técnico continuo sin límites."
            },
            {
                name: "Dominio Personalizado",
                included: true,
                description: "Obtén tu propio dominio único sin costo adicional."
            },
        ]
    },
    //// para gregar otros planes aquí según sea necesario
];

function Services() {
    const [isDiscountPopupOpen, setIsDiscountPopupOpen] = useState(false);
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDiscountPopupOpen(true);  
        }, 1000); //1. segundos
        
    }, []);

    const handleContactClick = (serviceName) => {
        setSelectedService(serviceName);
        setIsContactPopupOpen(true);
    };

    const handleContact = (type) => {
        if (type === 'schedule') {
            // Redirigir a la página de contacto
            console.log('Redirigir a la página de contacto');
        } else if (type === 'whatsapp') {
            // Abrir WhatsApp con un mensaje predefinido
            const message = `Hola, estoy interesado en el servicio "${selectedService}". ¿Podrían darme más información?`;
            window.open(`https://wa.me/+541164762132?text=${encodeURIComponent(message)}`, '_blank');
        }
        setIsContactPopupOpen(false);
    };

    return (
        <>
            <ServicesWrapper>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        {...service}
                        onContactClick={handleContactClick}
                    />
                ))}
            </ServicesWrapper>
            <DiscountPopup
                isOpen={isDiscountPopupOpen}
                onClose={() => setIsDiscountPopupOpen(false)}
            />
            <ContactPopup
                isOpen={isContactPopupOpen}
                onClose={() => setIsContactPopupOpen(false)}
                onContact={handleContact}
            />
        </>
    );
}

export default PageAnimation(Services);
