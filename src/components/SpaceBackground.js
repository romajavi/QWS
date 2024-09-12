import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SpaceWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: -1;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const SpaceBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * canvas.width;
                this.size = Math.random() * 0.5 + 0.1; // Reduced size
                this.blinkSpeed = Math.random() * 0.05 + 0.002;
                this.brightness = Math.random();
            }

            update() {
                this.z = this.z - 1;
                if (this.z <= 0) {
                    this.z = canvas.width;
                }
                this.brightness += Math.sin(Date.now() * this.blinkSpeed) * 0.05;
                this.brightness = Math.max(0, Math.min(1, this.brightness));
            }

            draw() {
                let x = (this.x - canvas.width / 2) * (canvas.width / this.z);
                x = x + canvas.width / 2;

                let y = (this.y - canvas.height / 2) * (canvas.width / this.z);
                y = y + canvas.height / 2;

                let s = this.size * (canvas.width / this.z);

                ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
                ctx.beginPath();
                ctx.arc(x, y, s, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const stars = Array(400).fill().map(() => new Star());

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.update();
                star.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <SpaceWrapper>
            <Canvas ref={canvasRef} />
        </SpaceWrapper>
    );
};

export default SpaceBackground;