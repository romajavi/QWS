import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import GlobalStyles from './styles/GlobalStyles.js';
import './translations/i18n.js';
import LanguageSelector from './components/LanguageSelector.js';
import WhatsAppButton from './components/WhatsAppButton.js';

// Implementamos un componente de carga inicial
const InitialLoadingScreen = () => (
    <div style={{
        position: 'fixed',
        inset: 0,
        background: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out'
    }}>
        <LoadingSpinner />
    </div>
);

// Modificamos el lazy loading para incluir preload
const preloadComponent = (importFn) => {
    const Component = lazy(importFn);
    Component.preload = importFn;
    return Component;
};

// Implementamos lazy loading con preload
const Home = preloadComponent(() => import('./pages/Home.js'));
const Blog = preloadComponent(() => import('./pages/Blog.js'));
const Services = preloadComponent(() => import('./pages/Services.js'));
const Portfolio = preloadComponent(() => import('./pages/Portfolio.js'));
const Contact = preloadComponent(() => import('./pages/Contact.js'));
const UnderConstruction = preloadComponent(() => import('./components/UnderConstruction.js'));
export const theme = {
    colors: {
        primary: '#FFD700', // Dorado: un tono vibrante que destaca como color principal.
        secondary: '#FFA500', // Naranja: un color cálido para destacar elementos secundarios.
        background: '#000000', // Negro: usado para el fondo general, proporciona un contraste fuerte.
        text: '#FFFFFF', // Blanco: ideal para el texto, asegura una buena legibilidad sobre fondos oscuros.
        accent: '#00FFFF', // Cian: un color fresco que actúa como acento en detalles importantes.
        buttonText: '#000000', // Negro: usado en el texto de botones para facilitar la lectura.
        primaryBackground: '#333333', // Gris oscuro: adecuado para fondos alternativos que aún mantienen contraste.
        secondaryBackground: '#a5aa9a', // Gris claro con tono verde: un fondo suave para áreas secundarias.
        footerBackground: '#000000', // Negro: usado en el footer para coherencia con el fondo principal.
        cardBackground: 'rgba(51, 51, 51, 0.95)', // Gris oscuro translúcido: un fondo para las tarjetas con opacidad.
    },
    fonts: {
        main: "'Orbitron', sans-serif",
        secondary: "'Roboto', sans-serif",
    },
    effects: {
        glow: '0 0 5px rgba(0, 255, 255, 0.5)',
        gradient: 'linear-gradient(45deg, #FFD700, #00FFFF)',
    }
};


// Componente para manejar la precarga
const PreloadManager = ({ children }) => {
    useEffect(() => {
        // Precargamos las rutas principales inmediatamente
        Home.preload();

        // Precargamos el resto después de que la página principal esté lista
        const timer = setTimeout(() => {
            Contact.preload();
            Services.preload();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return children;
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
            <Router>
                <PreloadManager>
                    <LanguageSelector />
                    <GlobalStyles />
                    {isInitialLoad && <InitialLoadingScreen />}
                    <Layout>
                        <Suspense fallback={<LoadingSpinner />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/blog" element={<UnderConstruction pageName="Blog" />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/portfolio" element={
                                    <UnderConstruction pageName="Portfolio" />
                                } />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/about-us" element={
                                    <UnderConstruction pageName="Sobre Nosotros" />
                                } />
                            </Routes>
                        </Suspense>
                    </Layout>
                    <WhatsAppButton phoneNumber="5491168805604" />
                </PreloadManager>
            </Router>
        </ThemeProvider>
    );
}

export default App;