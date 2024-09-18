import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner'; // Necesitarás crear este componente



// importacion de pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const theme = {
    colors: {
        primary: '#FFD700', // Amarillo dorado (sin cambios)
        secondary: '#FFA500', // Naranja (sin cambios)
        background: '#000000', // Negro (sin cambios)
        text: '#FFFFFF', // Blanco puro para mejor contraste
        accent: '#00FFFF', // Cyan (sin cambios)
        buttonText: '#000000', // Negro para texto en botones
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
const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
}

function App() {
    const [isExploring, setIsExploring] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <div className="App">
                    {!isExploring && <Header />}
                    <main>
                        <Routes>
                            <Route path="/" element={<Home setIsExploring={setIsExploring} />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    {!isExploring && <Footer />}
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;