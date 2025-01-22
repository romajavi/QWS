import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TitlePages from './TitlePages.js';

const ServiceFlowContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.85) 20%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(50, 50, 0, 0.36) 100%,
    rgba(50, 50, 0, 0.36) 100%
  );
  pointer-events: none;
  z-index: 0;
`;

const FlowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 170px 2rem 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 150px 1rem 1rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 400px;
  margin: 0.5rem 0;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    overflow-x: hidden;
    margin: 0.5rem 0;
    width: 100vw;
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  isolation: isolate;
  min-width: fit-content;
  margin-right: 2rem;
  
  &:last-child {
    margin-right: 0;
  }
`;

const CardsReel = styled(motion.div)`
  display: flex;
  width: fit-content;
  touch-action: pan-y pinch-zoom;
  padding: 2rem 0;
  max-width: 100%;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    gap: 1rem;
    padding-left: 1.5rem;
    padding-right: calc(100vw - 200px);
    will-change: transform;
  }

  @media (min-width: 1025px) {
    justify-content: center;
    gap: 0;
  }
`;

const Card = styled(motion.div)`
  padding: 2rem;
  width: 260px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  justify-content: space-between;
  background: transparent;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 300px;
    height: 320px;
    padding: 1.5rem;
  }
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  @media (max-width: 1024px) {
    white-space: normal;
  }
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

export const ScrollIndicator = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  
  .arrow {
    width: 80px;
    height: 80px;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    
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
      transition: all 0.3s ease;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      
      &::before {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const Connector = styled(motion.div)`
  height: 2px;
  width: 60px;
  background: linear-gradient(90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  position: relative;
  flex-shrink: 0;
  margin: 0 1rem;

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
    transform: rotate(90deg);
    width: 50px;
    margin: 1rem 0;
  }
`;

const ServiceFlow = () => {
  const { t } = useTranslation();
  const reelRef = useRef(null);
  const [containerRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleScrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const calculateDragConstraints = () => {
    if (!reelRef.current || window.innerWidth > 1024) return { left: 0, right: 0 };

    const scrollWidth = reelRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const paddingOffset = 200; // Match the padding-right calculation

    return {
      left: -(scrollWidth - viewportWidth + paddingOffset),
      right: 0
    };
  };

  const ServiceCard = ({ imageNumber, stepKey, index, isLast }) => (
    <CardWrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.2,
            duration: 0.5,
            ease: "easeOut"
          }
        }}
      >
        <Card
          whileHover={{
            scale: !isLast ? 1.05 : 1,
            transition: {
              duration: 0.2,
              ease: "easeOut"
            }
          }}
          animate={isLast ? {
            scale: [1, 1.3, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          } : undefined}
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
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              delay: index * 0.3 + 0.15,
              duration: 0.75
            }
          }}
        />
      )}
    </CardWrapper>
  );

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
        <CardsContainer ref={containerRef}>
          <CardsReel
            ref={reelRef}
            drag={window.innerWidth <= 1024 ? "x" : false}
            dragConstraints={calculateDragConstraints()}
            dragElastic={0.05}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragMomentum={false}
            initial={{ x: 0 }}
          >
            {steps.map((step, index) => (
              <ServiceCard
                key={step.stepKey}
                imageNumber={step.imageNumber}
                stepKey={step.stepKey}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </CardsReel>
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