import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SubtitleContainer = styled(motion.div)`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondaryBackground};
  line-height: 1.8;
  max-width: 1200px;
  margin: 3rem auto; // Aumentamos el margen vertical
  padding: 2rem;
  height: 100px; // Reducimos un poco la altura
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1.5rem;
    height: 120px;
    margin: 2rem auto;
  }
`;

const TextWrapper = styled(motion.p)`
  margin: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3rem 3rem;
  border-radius: 12px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.secondaryBackground};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`;

const subtitleTexts = [
    "🎯 Desarrollo de sitios web modernos y accesibles para pequeños y medianos negocios",
    "💻 Desarrollo y diseño de landing pages atractivas y optimizadas",
    "⚡ Mantenimiento y actualizaciones de sitios web WordPress",
    "📱 Diseño responsivo para una experiencia perfecta en todos los dispositivos",
    "🔍 Implementación de SEO para mejorar tu visibilidad online"
];


const AnimatedSubtitle = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % subtitleTexts.length);
        }, 5000); // Aumentamos el tiempo a 5 segundos

        return () => clearInterval(timer);
    }, []);

    return (
        <SubtitleContainer>
            <AnimatePresence mode="wait">
                <TextWrapper
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8 }} // Cambiamos la animación inicial
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.7,
                            ease: "easeOut"
                        }
                    }}
                    exit={{
                        opacity: 0,
                        scale: 1.1, // Efecto de zoom out al salir
                        transition: {
                            duration: 0.5,
                            ease: "easeIn"
                        }
                    }}
                >
                    {subtitleTexts[currentIndex]}
                </TextWrapper>
            </AnimatePresence>
        </SubtitleContainer>
    );
};

export default AnimatedSubtitle;