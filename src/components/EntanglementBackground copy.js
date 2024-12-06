import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, 
    rgba(82, 193, 185, 0.1) 0%,
    rgba(0, 0, 0, 0.9) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 0;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const EntanglementBackground = ({ priority = false }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const isActive = useRef(true);
  const lastTime = useRef(0);
  const context = useRef(null);

  const particleCount = useMemo(() => {
    return window.innerWidth < 768 ? 20 : 35;
  }, []);

  const initParticles = useCallback((width, height) => {
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? '#52c1b9' : '#FFD700',
      connections: new Set()
    }));
  }, [particleCount]);

  const setupCanvas = useCallback(() => {
    if (!canvasRef.current) return null;
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.scale(dpr, dpr);
    context.current = ctx;
    return { width: rect.width, height: rect.height };
  }, []);

  const animate = useCallback((timestamp) => {
    if (!isActive.current) return;

    const ctx = context.current;
    if (!ctx || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    particles.current.forEach((particle, i) => {
      particle.x = (particle.x + particle.vx + width) % width;
      particle.y = (particle.y + particle.vy + height) % height;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      for (let j = i + 1; j < particles.current.length; j++) {
        const other = particles.current[j];
        const dx = Math.abs(particle.x - other.x);
        const dy = Math.abs(particle.y - other.y);

        if (dx > 200 || dy > 200) continue;

        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const alpha = 1 - distance / 200;
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
    const dimensions = setupCanvas();
    if (dimensions) {
      initParticles(dimensions.width, dimensions.height);
      animate(performance.now());
    }

    const resizeObserver = new ResizeObserver(() => {
      if (isActive.current) {
        handleResize();
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

  return (
    <CanvasContainer>
      <Canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default React.memo(EntanglementBackground);