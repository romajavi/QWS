import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: -1;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const EntanglementBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);

  const initParticles = (width, height) => {
    const particleCount = 50;
    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    initParticles(displayWidth, displayHeight);
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const maxDistance = 150;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      particles.current.forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
          ctx.lineWidth = 0.2;
          ctx.stroke();
        }
      });
    });

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    let isComponentMounted = true;

    const handleResize = () => {
      if (!isComponentMounted) return;

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeCanvas();
      animate();
    };

    // Pequeño retraso para asegurar que el canvas esté montado
    setTimeout(() => {
      if (isComponentMounted) {
        resizeCanvas();
        animate();
      }
    }, 0);

    window.addEventListener('resize', handleResize);

    return () => {
      isComponentMounted = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BackgroundWrapper>
      <Canvas ref={canvasRef} />
    </BackgroundWrapper>
  );
};

export default EntanglementBackground;