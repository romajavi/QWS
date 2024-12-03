import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: 0;
  will-change: transform;
  transform: translateZ(0);
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateZ(0);
  image-rendering: optimizeSpeed;
`;

const EntanglementBackground = ({ priority = false }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const isActive = useRef(true);
  const lastTime = useRef(0);
  const context = useRef(null);

  const FPS = 30; // Reducido para mejor rendimiento
  const frameDelay = 1000 / FPS;

  const particleCount = useMemo(() => {
    const isMobile = window.innerWidth < 768;
    return isMobile ? 15 : 25; // Reducido para mejor rendimiento
  }, []);

  const initParticles = useCallback((width, height) => {
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      connections: new Set(),
    }));
  }, [particleCount]);

  const setupCanvas = useCallback(() => {
    if (!canvasRef.current) return null;

    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d', {
      alpha: false,
      desynchronized: true,
      willReadFrequently: false,
    });

    if (!ctx) return null;

    ctx.scale(dpr, dpr);
    context.current = ctx;

    return { width: rect.width, height: rect.height };
  }, []);

  const animate = useCallback((timestamp) => {
    if (!isActive.current) return;

    const elapsed = timestamp - lastTime.current;
    if (elapsed < frameDelay) {
      animationFrameId.current = requestAnimationFrame(animate);
      return;
    }

    lastTime.current = timestamp - (elapsed % frameDelay);
    const ctx = context.current;
    if (!ctx || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 0.5;

    particles.current.forEach((particle, i) => {
      particle.x = (particle.x + particle.vx + width) % width;
      particle.y = (particle.y + particle.vy + height) % height;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();

      particle.connections.clear();

      for (let j = i + 1; j < particles.current.length; j++) {
        const other = particles.current[j];
        const dx = Math.abs(particle.x - other.x);
        const dy = Math.abs(particle.y - other.y);

        if (dx > 150 || dy > 150) continue;

        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          particle.connections.add(j);
          const alpha = 1 - distance / 150;
          if (alpha <= 0.1) continue;

          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.stroke();
        }
      }
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, [frameDelay]);

  const handleResize = useCallback(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const dimensions = setupCanvas();
    if (dimensions) {
      const { width, height } = dimensions;
      initParticles(width, height);
      lastTime.current = performance.now();
      animate(lastTime.current);
    }
  }, [setupCanvas, initParticles, animate]);

  useEffect(() => {
    isActive.current = true;

    const startAnimation = () => {
      if (priority) {
        handleResize();
      } else {
        requestIdleCallback(() => handleResize());
      }
    };

    startAnimation();

    const resizeObserver = new ResizeObserver(() => {
      if (isActive.current) {
        if (priority) {
          handleResize();
        } else {
          requestIdleCallback(() => handleResize());
        }
      }
    });

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      isActive.current = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
    };
  }, [handleResize, priority]);

  return (
    <CanvasContainer>
      <Canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default React.memo(EntanglementBackground);