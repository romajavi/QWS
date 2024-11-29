import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import ServiceCard from '../components/ServiceCard.js';
import StandardPopup from '../components/StandardPopup.js';
import FAQSection from '../components/FAQSection.js';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import { useNavigate } from 'react-router-dom';



const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  padding-bottom: 5rem;
  position: relative; // Add this
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 2.5rem;
  margin: 1.5rem auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    overflow-x: visible;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.secondaryBackground};
  margin: 2rem 0;
  font-size: 2.5rem;
  
  @media (max-width: 968px) {
    margin: 1.5rem 0; // Reducimos el margen en móvil
    font-size: 1.5rem; // Reducimos el tamaño de fuente
  }
`;


function Services() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const services = ['landingPages', 'onlineStorePhotos', 'wordpress', 'optimization'];


    const handleContactClick = (serviceKey) => {
        setSelectedService(serviceKey);
        setIsPopupOpen(true);
    };

    const SERVICE_NAMES_ES = {
        landingPages: 'Landing Pages',
        wordpress: 'WordPress',
        optimization: 'Optimización Web',
        onlineStorePhotos: 'Tienda Oline + Fotos Profesionales'
    };



    const handleContact = (method) => {
        if (method === 'WHATSAPP') {
            // Obtenemos el nombre del servicio en español del objeto
            const serviceNameES = selectedService ? SERVICE_NAMES_ES[selectedService] : '';

            // Construimos el mensaje base
            let message = '¡Hola! ';

            // Agregamos la información del servicio si hay uno seleccionado
            if (selectedService) {
                message += `Me interesa obtener más información sobre el servicio de ${serviceNameES}.`;
            } else {
                message += 'Me gustaría obtener más información sobre sus servicios.';
            }

            const whatsappUrl = `https://wa.me/5491168805604?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        } else if (method === 'EMAIL') {
            setIsPopupOpen(false);
            navigate('/contact');

            setTimeout(() => {
                const calendarSection = document.querySelector('#calendar-section');
                if (calendarSection) {
                    calendarSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        setIsPopupOpen(false);
    };

    return (
        <PageContainer>
            <ServicesWrapper>
                <Title>
                    <div style={{ minHeight: '1em' }}>
                        <ReactTyped
                            strings={[t('services.title')]}
                            typeSpeed={50}
                            showCursor={true}
                            cursorChar="|"
                        />
                    </div>
                </Title>
                <ServicesContainer>
                    {services.map((serviceKey) => (
                        <ServiceCard
                            key={serviceKey}
                            serviceKey={serviceKey}
                            onContactClick={handleContactClick}
                        />
                    ))}
                </ServicesContainer>

                <StandardPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    titleKey="services.contactPopup.title"
                >
                    <Button
                        variant="primary"
                        size="small"
                        glow={true}
                        onClick={() => handleContact('WHATSAPP')}
                    >
                        {t('services.contactPopup.directContact')}
                    </Button>

                    <Button
                        variant="primary"
                        size="small"
                        glow={true}
                        onClick={() => handleContact('EMAIL')}
                    >
                        {t('services.contactPopup.schedule')}
                    </Button>
                </StandardPopup>

                <FAQSection />
            </ServicesWrapper>
        </PageContainer>
    );
}

export default Services;