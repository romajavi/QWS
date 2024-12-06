import React, { useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, 
    rgba(165, 170, 154, 0.1) 0%,
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
  const context = useRef(null);

  const particleCount = useMemo(() => {
    return window.innerWidth < 768 ? 30 : 50;
  }, []);

  const initParticles = (width, height) => {
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 2 + 1,
      length: Math.random() * 20 + 10,
      color: '#52c1b9',
      opacity: Math.random()
    }));
  };

  const setupCanvas = () => {
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
  };

  const animate = () => {
    if (!isActive.current || !context.current || !canvasRef.current) return;
    const ctx = context.current;
    const rect = canvasRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Reducir opacidad del efecto sombra
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Aumentado de 0.1 a 0.3 para borrar más rápido
    ctx.fillRect(0, 0, width, height);

    particles.current.forEach(particle => {
      ctx.beginPath();
      // Actualizar color
      ctx.strokeStyle = `rgba(165, 170, 154, ${particle.opacity})`;
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(particle.x, particle.y + particle.length);
      ctx.stroke();

      particle.y += particle.speed;
      if (particle.y > height) {
        particle.y = -particle.length;
        particle.x = Math.random() * width;
        particle.opacity = Math.random();
      }
    });

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    isActive.current = true;
    const dimensions = setupCanvas();
    if (dimensions) {
      initParticles(dimensions.width, dimensions.height);
      animate();
    }

    const resizeObserver = new ResizeObserver(() => {
      if (isActive.current) {
        const dimensions = setupCanvas();
        if (dimensions) {
          initParticles(dimensions.width, dimensions.height);
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
  }, []);

  return (
    <CanvasContainer>
      <Canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default React.memo(EntanglementBackground);