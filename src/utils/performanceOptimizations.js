import { useEffect } from 'react';

// Función para cargar recursos de forma diferida
export const usePreloadResources = () => {
    useEffect(() => {
        // Precargar fuentes
        const fontUrls = [
            'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap',
            'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
        ];

        fontUrls.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = url;
            document.head.appendChild(link);
        });

        // Precargar imágenes críticas
        const preloadImages = [
            '/images/logo.png',
            '/images/favicon.ico'
        ];

        preloadImages.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = url;
            document.head.appendChild(link);
        });
    }, []);
};

// Optimización de re-renderizado
export const shouldComponentUpdate = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) !== JSON.stringify(nextProps);
};

// Control de memoria
export const useMemoryCleanup = (cleanup) => {
    useEffect(() => {
        return () => {
            if (typeof cleanup === 'function') {
                cleanup();
            }
        };
    }, [cleanup]);
};