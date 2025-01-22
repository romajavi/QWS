import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageContainer from './PageContainer.js';
import ServiceCard from './ServiceCard.js';
import TitlePages from './TitlePages.js';
import { ScrollIndicator } from './ServiceFlow.js';

const ServicesWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 2rem;
`;

const ServicesContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: nowrap;
  margin: 2rem 0;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const ServicesSection = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  scroll-margin-top: 80px;
  position: relative;
  overflow: hidden;
`;

const Services = () => {
    const { t } = useTranslation();
    const services = ['landingPages', 'onlineStorePhotos', 'wordpress', 'optimization'];
    const [containerRef, containerInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const controls = useAnimation();

    useEffect(() => {
        if (containerInView) {
            const sequence = async () => {
                await controls.start('titleVisible');
                await new Promise(resolve => setTimeout(resolve, 100));
                await controls.start('contentVisible');
            };
            sequence();
        }
    }, [containerInView, controls]);

    return (
        <ServicesSection id="services" ref={containerRef}>
            <PageContainer>
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
                                    <ServiceCard serviceKey={serviceKey} />
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
                </ServicesWrapper>
            </PageContainer>
        </ServicesSection>
    );
};

export default Services;