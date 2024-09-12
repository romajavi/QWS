import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const theme = {
    colors: {
        primary: '#FFD700', // Amarillo dorado
        secondary: '#FFA500', // Naranja
        background: '#000', // Negro
        text: '#F0F0F0', // Gris muy claro
        accent: '#00FFFF', // Cyan (para un toque futurista)
    },
    fonts: {
        main: "'Orbitron', sans-serif",
        secondary: "'Roboto', sans-serif",
    },
    effects: {
        glow: '0 0 5px rgba(0, 255, 255, 0.5)', // Brillo cyan
        gradient: 'linear-gradient(45deg, #FFD700, #00FFFF)', // Gradiente amarillo-cyan
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

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return <Home />;
            case 'services':
                return <Services />;
            case 'portfolio':
                return <Portfolio />;
            case 'blog':
                return <Blog />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="App">
                <Header setCurrentPage={setCurrentPage} />
                <main>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            {renderPage()}
                        </motion.div>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;