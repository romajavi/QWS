import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import PageAnimation from '../components/PageAnimation';

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  color: ${props => props.theme.colors.text};
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectReelContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  position: relative;
`;

const ProjectReel = styled(motion.div)`
  display: flex;
  width: fit-content;
`;

const ProjectCard = styled(motion.div)`
  flex: 0 0 400px;
  height: 225px;
  margin: 0 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    z-index: 10;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectName = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${props => props.theme.colors.primary};
  margin: 0;
  font-size: 1.1rem;
  text-align: center;
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
`;

const ProjectInfo = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.9);
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;

const CTAButton = styled(motion.button)`
  font-family: ${props => props.theme.fonts.main};
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  background: ${props => props.theme.effects.gradient};
  color: ${props => props.theme.colors.background};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const controls = useAnimation();
    const reelRef = useRef(null);

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error loading projects:", error));
    }, []);

    useEffect(() => {
        const moveReel = async () => {
            if (reelRef.current) {
                const reelWidth = reelRef.current.scrollWidth;
                const moveDistance = reelWidth / 2;

                await controls.start({
                    x: [-moveDistance, 0],
                    transition: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear"
                    }
                });
            }
        };

        if (projects.length > 0) {
            moveReel();
        }
    }, [controls, projects]);

    const loopedProjects = [...projects, ...projects];

    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <PortfolioWrapper>
            <Title>Nuestro Portfolio</Title>
            <ProjectReelContainer>
                <ProjectReel ref={reelRef} animate={controls}>
                    {loopedProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.id}-${index}`}
                            whileHover={{
                                scale: 1.4,
                                zIndex: 20,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <ProjectImage src={`/images/portfolio/${project.image}`} alt={project.name} />
                            <ProjectName>{project.name}</ProjectName>
                            <ProjectInfo
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3>{project.name}</h3>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                <CTAButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClick(project.link);
                                    }}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 1.05 }}
                                    animate={{
                                        boxShadow: [
                                            '0 0 1px rgba(255, 215, 0, 0.2)',
                                            '0 0 4px rgba(255, 215, 0, 0.4), 0 0 6px rgba(255, 165, 0, 0.2)',
                                            '0 0 1px rgba(255, 215, 0, 0.2)'
                                        ],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    Ver Proyecto
                                </CTAButton>
                            </ProjectInfo>
                        </ProjectCard>
                    ))}
                </ProjectReel>
            </ProjectReelContainer>
        </PortfolioWrapper>
    );
}

export default PageAnimation(Portfolio);