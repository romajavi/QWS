import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import ServiceCard from '../components/ServiceCard.js';
import StandardPopup from '../components/StandardPopup.js';
import FAQSection from '../components/FAQSection.js';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';

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
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const services = ['landingPages', 'wordpress', 'optimization'];

    const handleContactClick = (serviceKey) => {
        setSelectedService(serviceKey);
        setIsPopupOpen(true);
    };

    const handleContact = (type) => {
        if (type === 'whatsapp') {
            const message = t('services.contactMessage', {
                service: t(`services.services.${selectedService}.name`)
            });
            window.open(`https://wa.me/5491168805604?text=${encodeURIComponent(message)}`, '_blank');
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
                        onClick={() => handleContact('whatsapp')}
                    >
                        {t('services.contactPopup.directContact')}
                    </Button>
                </StandardPopup>

                <FAQSection />
            </ServicesWrapper>
        </PageContainer>
    );
}

export default Services;