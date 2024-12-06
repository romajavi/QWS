import React from 'react';
import styled from 'styled-components';
import Home from '../components/Home.js';
import Services from '../components/Services.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';
import ServiceFlow from '../components/ServiceFlow.js';
import { motion } from 'framer-motion';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

const Section = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HomeSection = styled(Section)`
  height: 100vh;
`;

const ServicesSection = styled(Section)`
  background: ${props => props.theme.colors.background};
  padding: 2rem 0;
`;

const ContactSection = styled(Section)`
  padding: 4rem 0;
  min-height: auto;
  background: ${props => props.theme.colors.background};
`;

const FooterWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.footerBackground};
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <HomeSection>
        <Home />
      </HomeSection>

      <Section>
        <ServiceFlow />
      </Section>

      <Section>
        <Services />
      </Section>

      <Section>
        <FAQSection />
      </Section>

      <Section>
        <Contact />
      </Section>

      <div>
        <Footer />
      </div>
    </LandingContainer>
  );
};

export default LandingPage;