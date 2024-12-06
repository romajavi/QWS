import { useEffect } from 'react';

export const useScrollEffect = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const header = document.querySelector('header');
            const homeSection = document.getElementById('home');
            const servicesSection = document.getElementById('services');

            if (header) {
                if (scrollPosition > 100) {
                    header.style.background = 'rgba(0, 0, 0, 0.8)';
                    header.style.backdropFilter = 'blur(10px)';
                    header.style.borderBottom = 'none';
                } else {
                    header.style.background = 'rgb(0, 0, 0)';
                    header.style.backdropFilter = 'none';
                    header.style.borderBottom = '2px solid';
                }
            }

            if (homeSection) {
                const homeRect = homeSection.getBoundingClientRect();
                const opacity = 1 - Math.max(0, Math.min(1, -homeRect.top / homeRect.height));
                homeSection.style.opacity = opacity;
                homeSection.style.transform = `scale(${0.8 + (0.2 * opacity)})`;
            }

            if (servicesSection) {
                const servicesRect = servicesSection.getBoundingClientRect();
                if (servicesRect.top < window.innerHeight) {
                    const progress = Math.min(1, (window.innerHeight - servicesRect.top) / window.innerHeight);
                    servicesSection.style.transform = `translateY(${20 * (1 - progress)}px)`;
                    servicesSection.style.opacity = progress;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

export default useScrollEffect;