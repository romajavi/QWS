import React, { useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.js';
import styled from 'styled-components';
import './translations/i18n.js';
import WhatsAppButton from './components/WhatsAppButton.js';
import HomeNavButton from './components/HomeNavButton.js';
import Home from './components/Home.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import ServiceFlow from './components/ServiceFlow.js';
import FAQSection from './components/FAQSection.js';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  overflow-x: hidden;
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  &#home {
    background: transparent;
  }

  &#services {
    background: rgba(0, 0, 0, 0.9);
    position: relative;
    z-index: 2;
  }

  &#contact {
    background: rgba(0, 0, 0, 0.9);
    position: relative;
    z-index: 2;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const LoadingScreen = styled.div`
  position: fixed;
  inset: 0;
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  z-index: 9999;
`;

const theme = {
    colors: {
        primary: '#FFD700', // Dorado: un tono vibrante que destaca como color principal.
        secondary: '#FFA500', // Naranja: un color cálido para destacar elementos secundarios.
        background: '#000000', // Negro: usado para el fondo general, proporciona un contraste fuerte.
        text: '#FFFFFF', // Blanco: ideal para el texto, asegura una buena legibilidad sobre fondos oscuros.
        accent: '#52c1b9',
        buttonText: '#000000', // Negro: usado en el texto de botones para facilitar la lectura.
        primaryBackground: '#333333', // Gris oscuro: adecuado para fondos alternativos que aún mantienen contraste.
        secondaryBackground: '#a5aa9a', // Gris claro con tono verde: un fondo suave para áreas secundarias.
        footerBackground: '#000000', // Negro: usado en el footer para coherencia con el fondo principal.
        cardBackground: 'rgba(51, 51, 51, 0.95)', // Gris oscuro translúcido: un fondo para las tarjetas con opacidad.
    },
    fonts: {
        main: "'Orbitron', sans-serif",
        secondary: "'Roboto', sans-serif",
        mono: "'Share Tech Mono', 'Courier New', monospace",
    },
    effects: {
        glow: '0 0 5px rgba(0, 255, 255, 0.5)',
        gradient: 'linear-gradient(45deg, #FFD700, #00FFFF)',
    }
};

function App() {
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsInitialLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainContainer>
                <Header />
                <ContentContainer>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Section id="home">
                            <Home />
                        </Section>
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
                    </Suspense>
                </ContentContainer>
                <Footer />
                <WhatsAppButton phoneNumber="5491168805604" />
                <HomeNavButton />
                {isInitialLoad && (
                    <LoadingScreen>
                        <LoadingSpinner />
                    </LoadingScreen>
                )}
            </MainContainer>
        </ThemeProvider>
    );
}

export default App;