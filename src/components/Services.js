import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion'; // Añadimos useAnimation
import { useInView } from 'react-intersection-observer';
import PageContainer from './PageContainer.js';
import ServiceCard from './ServiceCard.js';
import StandardPopup from './StandardPopup.js';
import Button from './Button.js';
import TitlePages from './TitlePages.js';
import { ScrollIndicator } from './ServiceFlow.js'

const ServicesWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1600px;
  margin-top: -7rem; // Agregar margen superior
`;



const ServicesContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: nowrap;
  margin-top: 2rem; // Agregar margen superior

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const ServicesSection = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  padding-top: 80px;
  scroll-margin-top: 80px;
`;


const Services = () => {
    const { t } = useTranslation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const services = ['landingPages', 'onlineStorePhotos', 'wordpress', 'optimization'];

    const SERVICE_NAMES_ES = {
        landingPages: 'Landing Pages',
        wordpress: 'WordPress',
        optimization: 'Optimización Web',
        onlineStorePhotos: 'Tienda Online + Fotos Profesionales'
    };

    const [containerRef, containerInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const controls = useAnimation();

    useEffect(() => {
        if (containerInView) {
            const sequence = async () => {
                // Primero hacemos visible el título
                await controls.start('titleVisible');
                // Esperamos 600ms
                await new Promise(resolve => setTimeout(resolve, 100));
                // Luego mostramos las tarjetas
                await controls.start('contentVisible');
            };
            sequence();
        }
    }, [containerInView, controls]);

    const handleContactClick = (serviceKey) => {
        setSelectedService(serviceKey);
        setIsPopupOpen(true);
    };

    const handleContact = (method) => {
        if (method === 'WHATSAPP') {
            const serviceNameES = selectedService ? SERVICE_NAMES_ES[selectedService] : '';
            let message = '¡Hola! ';
            message += selectedService ?
                `Me interesa obtener más información sobre el servicio de ${serviceNameES}.` :
                'Me gustaría obtener más información sobre sus servicios.';
            window.open(`https://wa.me/5491168805604?text=${encodeURIComponent(message)}`, '_blank');
        } else if (method === 'EMAIL') {
            setIsPopupOpen(false);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsPopupOpen(false);
    };

    return (
        <ServicesSection id="services" ref={containerRef}>
            <PageContainer isLoading={isLoading}>
                <ServicesWrapper>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            titleVisible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" }
                            }
                        }}
                    >
                        <TitlePages text={t('services.title')} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={controls}
                        variants={{
                            contentVisible: {
                                opacity: 1,
                                transition: {
                                    duration: 0.6,
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <ServicesContainer>
                            {services.map((serviceKey, index) => (
                                <motion.div
                                    key={serviceKey}
                                    variants={{
                                        contentVisible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.72,
                                                ease: "easeOut"
                                            }
                                        }
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                >
                                    <ServiceCard
                                        serviceKey={serviceKey}
                                        onContactClick={handleContactClick}
                                    />
                                </motion.div>
                            ))}
                        </ServicesContainer>
                    </motion.div>

                    <ScrollIndicator
                        onClick={() => {
                            const faqElement = document.getElementById('faq');
                            faqElement?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="arrow" />
                    </ScrollIndicator>

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
                </ServicesWrapper>
            </PageContainer>
        </ServicesSection>
    );
};


export default Services;