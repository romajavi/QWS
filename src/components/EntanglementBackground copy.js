import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: radial-gradient(circle at center, 
    rgba(82, 193, 185, 0.1) 0%,
    rgba(0, 0, 0, 0.9) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 0;
  contain: layout size paint;
  will-change: transform;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  contain: layout size;
  will-change: transform;
`;

const EntanglementBackground = ({ priority = false }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const isActive = useRef(true);
  const lastTime = useRef(0);
  const context = useRef(null);
  const isInitialized = useRef(false);

  const particleCount = useMemo(() => {
    return window.innerWidth < 768 ? 10 : 15; // Reducido aún más para mejor rendimiento inicial
  }, []);

  const initParticles = useCallback((width, height) => {
    if (!width || !height) return;

    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.2, // Velocidad reducida
      vy: (Math.random() - 0.5) * 0.2, // Velocidad reducida
      color: Math.random() > 0.5 ? '#52c1b9' : '#FFD700',
      connections: new Set()
    }));
  }, [particleCount]);

  const setupCanvas = useCallback(() => {
    if (!canvasRef.current || isInitialized.current) return null;

    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Establecer dimensiones iniciales
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d', {
      alpha: false,
      desynchronized: true
    });

    if (!ctx) return null;

    ctx.scale(dpr, dpr);
    context.current = ctx;
    isInitialized.current = true;

    return { width: rect.width, height: rect.height };
  }, []);

  const animate = useCallback((timestamp) => {
    if (!isActive.current || !context.current || !canvasRef.current) return;

    const ctx = context.current;
    const rect = canvasRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Limitar FPS para mejor rendimiento
    const elapsed = timestamp - lastTime.current;
    if (elapsed < 1000 / 30) { // 30 FPS
      animationFrameId.current = requestAnimationFrame(animate);
      return;
    }

    lastTime.current = timestamp;
    ctx.clearRect(0, 0, width, height);

    particles.current.forEach((particle, i) => {
      particle.x = (particle.x + particle.vx + width) % width;
      particle.y = (particle.y + particle.vy + height) % height;

      // Optimización del dibujado
      if (particle.x < 0 || particle.x > width || particle.y < 0 || particle.y > height) return;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Optimización de conexiones
      const maxConnections = 3;
      let connections = 0;

      for (let j = i + 1; j < particles.current.length && connections < maxConnections; j++) {
        const other = particles.current[j];
        const dx = Math.abs(particle.x - other.x);
        const dy = Math.abs(particle.y - other.y);

        if (dx > 150 || dy > 150) continue; // Distancia reducida para mejor rendimiento

        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          connections++;
          const alpha = 1 - distance / 150;
          if (alpha <= 0.1) continue;

          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y, other.x, other.y
          );
          gradient.addColorStop(0, `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, `${other.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    isActive.current = true;

    // Configuración inicial diferida para mejorar LCP
    const timer = setTimeout(() => {
      const dimensions = setupCanvas();
      if (dimensions) {
        initParticles(dimensions.width, dimensions.height);
        animate(performance.now());
      }
    }, 100);

    const debouncedResize = debounce(() => {
      if (isActive.current) {
        handleResize();
      }
    }, 250);

    window.addEventListener('resize', debouncedResize);

    return () => {
      isActive.current = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timer);
    };
  }, [animate, initParticles, setupCanvas]);

  const handleResize = useCallback(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    const dimensions = setupCanvas();
    if (dimensions) {
      initParticles(dimensions.width, dimensions.height);
      animate(performance.now());
    }
  }, [animate, initParticles, setupCanvas]);

  // Función debounce para optimizar el resize
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  return (
    <CanvasContainer>
      <Canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default React.memo(EntanglementBackground);