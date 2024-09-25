import React, { useEffect, useRef, useState } from 'react';
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

const SpaceBackground = ({ isAccelerating }) => {
    const canvasRef = useRef(null);
    const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let lastTime = 0;
        const fps = 30; // Limit to 30 FPS
        const fpsInterval = 1000 / fps;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Check if it's a low performance device
        const checkPerformance = () => {
            const performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
            if (performance.memory) {
                setIsLowPerfDevice(performance.memory.jsHeapSizeLimit < 512 * 1024 * 1024); // Less than 512MB
            } else {
                setIsLowPerfDevice(false); // Assume it's not a low performance device if we can't check
            }
        };
        checkPerformance();

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * canvas.width;
                this.size = Math.random() * 0.5 + 0.1;
                this.baseSpeed = 0.3; // Increased base speed by 50%
                this.speed = this.baseSpeed;
            }

            update(isAccelerating) {
                this.speed = isAccelerating ? this.baseSpeed * 5 : this.baseSpeed;
                this.z = this.z - this.speed;
                if (this.z <= 0) {
                    this.z = canvas.width;
                }
            }

            draw() {
                let x = (this.x - canvas.width / 2) * (canvas.width / this.z);
                x = x + canvas.width / 2;

                let y = (this.y - canvas.height / 2) * (canvas.width / this.z);
                y = y + canvas.height / 2;

                let s = this.size * (canvas.width / this.z);

                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(x, y, s, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const starCount = isLowPerfDevice ? 80 : 120; // Reduce star count for low performance devices
        const stars = Array(starCount).fill().map(() => new Star());

        const animate = (currentTime) => {
            animationFrameId = requestAnimationFrame(animate);

            const elapsed = currentTime - lastTime;

            if (elapsed > fpsInterval) {
                lastTime = currentTime - (elapsed % fpsInterval);

                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                stars.forEach(star => {
                    star.update(isAccelerating);
                    star.draw();
                });
            }
        };

        animate(0);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isLowPerfDevice, isAccelerating]);

    return (
        <SpaceWrapper>
            <Canvas ref={canvasRef} />
        </SpaceWrapper>
    );
};

export default SpaceBackground;