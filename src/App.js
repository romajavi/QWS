import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import PageTransition from './components/PageTransition';

// Lazy loading for pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

const theme = {
    colors: {
        primary: '#FFD700',    // Amarillo dorado
        secondary: '#FFA500',  // Naranja
        background: '#000000', // Negro
        text: '#FFFFFF',       // Blanco
        accent: '#00FFFF',     // Cian
        buttonText: '#000000', // Negro
        primaryBackground: '#333333', // Gris oscuro
        secondaryBackground: '#a5aa9a', // Gris medio vizon
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


function AnimatedRoutes({ setIsExploring }) {
    return (
        <PageTransition>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path="/" element={<Home setIsExploring={setIsExploring} />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </PageTransition>
    );
}

function App() {
    const [isExploring, setIsExploring] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <AppWrapper>
                    {!isExploring && <Header />}
                    <MainContent>
                        <AnimatedRoutes setIsExploring={setIsExploring} />
                    </MainContent>
                    <Footer />
                </AppWrapper>
            </Router>
        </ThemeProvider>
    );
}
export default App;