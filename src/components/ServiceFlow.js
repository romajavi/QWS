import React, { useCallback, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TitlePages from './TitlePages.js';

const ServiceFlowContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding-top: 80px;
  scroll-margin-top: 80px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 0%,
    ${({ theme }) => `${theme.colors.accent}15`} 0%,
    ${({ theme }) => `${theme.colors.primary}10`} 30%,
    transparent 70%
  );
  pointer-events: none;
`;

const FlowWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  flex-wrap: nowrap;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Card = styled(motion.div)`
  padding: 2rem;
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: visible;
  backdrop-filter: blur(10px);
  justify-content: space-between;
  isolation: isolate;


`;

const StepImage = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
  object-fit: contain;
  filter: drop-shadow(0 0 10px ${({ theme }) => `${theme.colors.accent}30`});
`;

const StepTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, 
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StepDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
  opacity: 0.9;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const Connector = styled(motion.div)`
  height: 2px;
  width: 100px;
  background: linear-gradient(90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: -5px;
    top: -4px;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 1024px) {
    width: 2px;
    height: 50px;
    margin: 0 auto;

    &::after {
      right: -4px;
      top: auto;
      bottom: -5px;
    }
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 10rem;
  cursor: pointer;
  padding: 20px;
  
  &:hover {
    .arrow {
      border-color: ${({ theme }) => theme.colors.primary};
      
      &::before {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .arrow {
    width: 80px;
    height: 80px;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    position: relative;
    
    &::before {
      content: '';
      width: 12px;
      height: 12px;
      border-right: 2px solid ${({ theme }) => theme.colors.accent};
      border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;

const ServiceFlow = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true, // Evita repeticiones
    });

    const handleScrollToServices = useCallback(() => {
        setTimeout(() => { // Añadimos un pequeño delay
            const servicesElement = document.getElementById('services');
            if (servicesElement) {
                servicesElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Alternativa por si scrollIntoView no funciona
                window.scrollTo({
                    top: servicesElement.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error('Elemento services no encontrado');
            }
        }, 100);
    }, []);

    const ServiceCard = ({ imageNumber, stepKey, index, isLast }) => {
        const controls = useAnimation();

        useEffect(() => {
            const animate = async () => {
                if (inView) {
                    await controls.start("visible");
                } else {
                    await controls.start("hidden");
                }
            };
            animate();
        }, [controls]); // Removida la dependencia inView

        return (
            <>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 50, scale: 0.9 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                delay: index * 0.3,
                                duration: isLast ? 1.2 : 0.75,
                                ease: "easeOut"
                            }
                        }
                    }}
                    initial="hidden"
                    animate={controls}
                >
                    <Card
                        isLast={isLast}
                        whileHover={{
                            scale: isLast ? 1.15 : 1.05,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut"
                            }
                        }}
                        animate={isLast ? {
                            scale: [1, 1.02, 1],
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        } : {}}
                    >
                        <StepImage
                            src={`/images/serviceFlow/${imageNumber}.png`}
                            alt={t(`serviceFlow.steps.${stepKey}.title`)}
                        />
                        <StepTitle>{t(`serviceFlow.steps.${stepKey}.title`)}</StepTitle>
                        <StepDescription>
                            {t(`serviceFlow.steps.${stepKey}.description`)}
                        </StepDescription>
                    </Card>
                </motion.div>
                {!isLast && (
                    <Connector
                        initial={{ scale: 0, opacity: 0 }}
                        animate={controls}
                        variants={{
                            hidden: { scale: 0, opacity: 0 },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: index * 0.3 + 0.15,
                                    duration: 0.75
                                }
                            }
                        }}
                    />
                )}
            </>
        );
    };

    const steps = [
        { imageNumber: "1", stepKey: "step1" },
        { imageNumber: "2", stepKey: "step2" },
        { imageNumber: "3", stepKey: "step3" },
        { imageNumber: "4", stepKey: "step4" },
        { imageNumber: "5", stepKey: "step5" }
    ];

    return (
        <ServiceFlowContainer id="serviceflow">
            <GradientOverlay />
            <FlowWrapper>
                <TitlePages text={t('serviceFlow.title')} />
                <CardsContainer ref={ref}>
                    {steps.map((step, index) => (
                        <ServiceCard
                            key={step.stepKey}
                            imageNumber={step.imageNumber}
                            stepKey={step.stepKey}
                            index={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </CardsContainer>

                <ScrollIndicator
                    onClick={handleScrollToServices}
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                    }}
                >
                    <div className="arrow" />
                </ScrollIndicator>
            </FlowWrapper>
        </ServiceFlowContainer>
    );
};

export default ServiceFlow;