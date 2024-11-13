import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import PageTransition from './components/PageTransition.js';
import GlobalStyles from './styles/GlobalStyles.js';
import styled from 'styled-components';

// Lazy loading para las páginas
const Home = lazy(() => import('./pages/Home.js'));
const Services = lazy(() => import('./pages/Services.js'));
const Portfolio = lazy(() => import('./pages/Portfolio.js'));
const Blog = lazy(() => import('./pages/Blog.js'));
const Contact = lazy(() => import('./pages/Contact.js'));
const UnderConstruction = lazy(() => import('./components/UnderConstruction.js'));

export const theme = {
    colors: {
        primary: '#FFD700',
        secondary: '#FFA500',
        background: '#000000',
        text: '#FFFFFF',
        accent: '#00FFFF',
        buttonText: '#000000',
        primaryBackground: '#333333',
        secondaryBackground: '#a5aa9a',
        footerBackground: '#000000',
        cardBackground: 'rgba(51, 51, 51, 0.95)', // Color cards
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

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

const AppContent = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <Layout hideFooter={isHome}>
            <PageTransition>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<UnderConstruction pageName="Blog" />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about-us" element={<UnderConstruction pageName="Sobre Nosotros" />} />
                    <Route path="/faq" element={<UnderConstruction pageName="Preguntas Frecuentes" />} />
                </Routes>
            </PageTransition>
        </Layout>
    );
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyles />
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