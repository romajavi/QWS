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
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 1.5rem 0;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.secondaryBackground};
  margin: 2rem 0;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 1.5rem 0;
  }
`;

function Services() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const services = ['landingPages', 'wordpress', 'optimization'];

    const handleContactClick = (serviceKey) => {
        setSelectedService(serviceKey);
        setIsPopupOpen(true);
    };

    const handleContact = (method) => {
        if (method === 'WHATSAPP') {
            // Formatear el mensaje según el servicio seleccionado
            const serviceName = selectedService ? t(`services.services.${selectedService}.name`) : '';
            const message = selectedService
                ? `¡Hola! Me interesa obtener más información sobre el servicio de ${serviceName}.`
                : '¡Hola! Me gustaría obtener más información sobre sus servicios.';

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
                    <ReactTyped
                        strings={[t('services.title')]}
                        typeSpeed={50}
                        showCursor={true}
                        cursorChar="|"
                    />
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