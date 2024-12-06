import { useEffect } from 'react';

const useScrollEffect = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const header = document.querySelector('header');
            const homeSection = document.getElementById('home');
            const servicesSection = document.getElementById('services');

            // Header effect
            if (header) {
                if (scrollPosition > 100) {
                    header.style.background = 'rgba(0, 0, 0, 0.8)';
                    header.style.backdropFilter = 'blur(10px)';
                    header.style.borderBottom = 'none';
                } else {
                    header.style.background = 'rgb(0, 0, 0)';
                    header.style.backdropFilter = 'none';
                    header.style.borderBottom = '2px solid rgba(82, 193, 185, 0.5)';
                }
            }

            // Home fade effect
            if (homeSection) {
                const opacity = Math.max(0, 1 - (scrollPosition / (window.innerHeight * 0.5)));
                const translateY = scrollPosition * 0.3;
                homeSection.style.opacity = opacity;
                homeSection.style.transform = `translateY(${translateY}px)`;
            }

            // Services effect
            if (servicesSection) {
                const serviceBounds = servicesSection.getBoundingClientRect();
                const triggerPoint = window.innerHeight * 0.75;

                if (serviceBounds.top <= triggerPoint) {
                    servicesSection.style.opacity = '1';
                    servicesSection.style.transform = 'translateY(0)';
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

export default useScrollEffect;