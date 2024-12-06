import { useEffect, useCallback, useState } from 'react';

const useScrollAnimation = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = useCallback(() => {
        const position = window.scrollY;
        setScrollPosition(position);

        // Header animation
        const header = document.querySelector('header');
        if (header) {
            const shouldBeTransparent = position > 100;
            header.style.background = shouldBeTransparent
                ? 'rgba(0, 0, 0, 0.8)'
                : 'rgb(0, 0, 0)';
            header.style.backdropFilter = shouldBeTransparent ? 'blur(10px)' : 'none';
            header.style.borderBottom = shouldBeTransparent ? 'none' : '2px solid';
            header.style.transition = 'all 0.3s ease';
        }

        // Home section parallax and fade
        const homeSection = document.getElementById('home');
        if (homeSection) {
            const rect = homeSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const opacity = Math.max(0, Math.min(1, 1 - (Math.abs(rect.top) / viewportHeight)));
            const scale = 0.8 + (0.2 * opacity);

            homeSection.style.opacity = opacity;
            homeSection.style.transform = `scale(${scale})`;
            homeSection.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
        }

        // Services section fade in and slide up
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            const rect = servicesSection.getBoundingClientRect();
            const inView = rect.top < window.innerHeight;

            if (inView) {
                const progress = Math.min(1, (window.innerHeight - rect.top) / window.innerHeight);
                servicesSection.style.transform = `translateY(${20 * (1 - progress)}px)`;
                servicesSection.style.opacity = progress;
                servicesSection.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
            }
        }

        // Contact section fade in
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const rect = contactSection.getBoundingClientRect();
            const inView = rect.top < window.innerHeight;

            if (inView) {
                const progress = Math.min(1, (window.innerHeight - rect.top) / window.innerHeight);
                contactSection.style.opacity = progress;
                contactSection.style.transform = `translateY(${15 * (1 - progress)}px)`;
                contactSection.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
            }
        }
    }, []);

    useEffect(() => {
        // Initial call to set initial states
        handleScroll();

        // Throttled scroll event listener
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollListener);
        // Also listen for resize to recalculate positions
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', scrollListener);
            window.removeEventListener('resize', handleScroll);
        };
    }, [handleScroll]);

    return scrollPosition;
};

export default useScrollAnimation;