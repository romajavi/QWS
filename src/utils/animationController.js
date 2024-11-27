import { useEffect, useState } from 'react';

export const useAnimationController = () => {
    // Añadimos el estado para controlar si la animación ya ocurrió
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isReducedMotion, setIsReducedMotion] = useState(false);
    const [devicePerformance, setDevicePerformance] = useState('high');

    useEffect(() => {
        // Detectar preferencias de reducción de movimiento
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setIsReducedMotion(mediaQuery.matches);

        // Evaluar performance del dispositivo
        const evaluatePerformance = () => {
            const memory = navigator?.deviceMemory || 4;
            const cores = navigator?.hardwareConcurrency || 4;
            
            if (memory <= 2 || cores <= 2) return 'low';
            if (memory <= 4 || cores <= 4) return 'medium';
            return 'high';
        };

        setDevicePerformance(evaluatePerformance());

        // Activar animaciones solo después de la carga inicial
        const timer = setTimeout(() => {
            setShouldAnimate(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Función para marcar que una animación se ha completado
    const completeAnimation = () => {
        setHasAnimated(true);
    };

    // Determinar qué nivel de animaciones usar
    const getAnimationConfig = () => {
        if (isReducedMotion) return 'minimal';
        if (devicePerformance === 'low') return 'reduced';
        if (devicePerformance === 'medium') return 'balanced';
        return 'full';
    };

    return {
        shouldAnimate,
        hasAnimated,
        completeAnimation,
        animationLevel: getAnimationConfig(),
        isReducedMotion,
        devicePerformance
    };
};