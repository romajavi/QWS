import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import PageAnimation from './components/PageAnimation.js';
import GlobalStyles from './styles/GlobalStyles.js';
import styled from 'styled-components';
import './translations/i18n.js';
import LanguageSelector from './components/LanguageSelector.js';



// Lazy loading para las páginas
const Home = lazy(() => import('./pages/Home.js'));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ './pages/Blog.js'));
const Services = lazy(() => import(/* webpackChunkName: "services" */ './pages/Services.js'));
const Portfolio = lazy(() => import(/* webpackChunkName: "portfolio" */ './pages/Portfolio.js'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact.js'));
const UnderConstruction = lazy(() => import('./components/UnderConstruction.js'));

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


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <LanguageSelector />
                <GlobalStyles />
                <LanguageSelector />
                <Layout>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<UnderConstruction pageName="Blog" />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about-us" element={<UnderConstruction pageName="Sobre Nosotros" />} />
                            <Route path="/faq" element={<UnderConstruction pageName="Preguntas Frecuentes" />} />
                        </Routes>
                    </Suspense>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;

