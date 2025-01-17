import React, { useState, useEffect, useReff } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import TitlePages from './TitlePages.js';
import { ScrollIndicator } from './ServiceFlow.js';



const FAQContainer = styled.section`
  min-height: calc(100vh - 80px);
  width: 100%;
  padding-top: 80px;
  margin: 0 auto;
  max-width: 800px;
  scroll-margin-top: 80px;
  // padding-bottom: 100px; 
  position: relative; 
`;


const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.accent}30;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
  }
`;

const Question = styled(motion.div)`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  transition: background 0.3s ease;
  background: ${props => props.$isOpen ? `${props.theme.colors.accent}10` : 'transparent'};
  
  &:hover {
    background: ${props => `${props.theme.colors.accent}10`};
  }
`;

const Answer = styled(motion.div)`
  padding: 1.5rem;
  color: ${props => props.theme.colors.text}CC;
  line-height: 1.6;
  background: ${props => props.theme.colors.background}40;
  width: 100%;
  max-width: 100%;
  overflow-wrap: break-word;
  border-top: 1px solid ${props => props.theme.colors.accent}20;
  overflow: hidden;
`;

const CategoryTitle = styled.h3`
  color: ${props => props.theme.colors.accent};
  margin: 2rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.accent}30;
  font-size: 1.5rem;
  text-transform: capitalize;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 1.5rem 0 1rem;
  }
`;

const ArrowIcon = styled(motion.span)`
  color: ${props => props.theme.colors.accent};
  font-size: 1.2rem;
`;

const CategorySection = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;


const FAQSection = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState({});

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await controls.start("titleVisible");
        await new Promise(resolve => setTimeout(resolve, 600));
        await controls.start("contentVisible");
      };
      sequence();
    }
  }, [inView, controls]);
  const categories = t('faq.categories', { returnObjects: true });

  const toggleItem = (categoryKey, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${categoryKey}-${index}`]: !prev[`${categoryKey}-${index}`]
    }));
  };

  if (!categories || Object.keys(categories).length === 0) {
    return null;
  }

  return (
    <FAQContainer id="faq" ref={ref}>
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
        <TitlePages text={t('faq.title')} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          contentVisible: {
            opacity: 1,
            transition: { duration: 0.6 }
          }
        }}
      >
        {Object.entries(categories).map(([categoryKey, category]) => (
          <CategorySection key={categoryKey}>
            <CategoryTitle>{category.title}</CategoryTitle>
            {Array.isArray(category.items) &&
              category.items.map((item, index) => (
                <FAQItem key={`${categoryKey}-${index}`}>
                  <Question
                    onClick={() => toggleItem(categoryKey, index)}
                    $isOpen={openItems[`${categoryKey}-${index}`]}
                  >
                    <span>{item.question}</span>
                    <ArrowIcon>
                      {openItems[`${categoryKey}-${index}`] ? '−' : '+'}
                    </ArrowIcon>
                  </Question>
                  <AnimatePresence>
                    {openItems[`${categoryKey}-${index}`] && (
                      <Answer
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.answer}
                      </Answer>
                    )}
                  </AnimatePresence>
                </FAQItem>
              ))}
          </CategorySection>
        ))}
      </motion.div>

      <ScrollIndicator
        onClick={() => {
          const contactElement = document.getElementById('contact');
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
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
    </FAQContainer>
  );
};

export default FAQSection;



/*
PD: Literalmente todo el mundo con Edmundo!  
Fin! 
*/






