import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import PageAnimation from '../components/PageAnimation.js';
import PageContainer from '../components/PageContainer.js';

const PortfolioWrapper = styled.div`
  ${({ theme }) => theme.pageContainerStyle}
  min-height: calc(100vh - 120px);
  justify-content: flex-start;
  padding-top: 50px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectReelContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
`;

const ProjectReel = styled(motion.div)`
  display: flex;
  width: fit-content;
`;

const ProjectCard = styled(motion.div)`
  flex: 0 0 250px;
  height: 350px;
  margin: 0 1rem;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.secondaryBackground};
  box-shadow: 0 4px 10px 0 ${props => `${props.theme.colors.secondaryBackground}40`};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const ProjectName = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 0.8rem;
  line-height: 1.4;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const CTAButton = styled.button`
  ${({ theme }) => theme.button}
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  width: fit-content;
  align-self: center;
  margin-top: 1rem;
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

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <PageContainer>
      <PortfolioWrapper>
        <Title>
          <ReactTyped
            strings={['Portafolio de Proyectos Web']}
            typeSpeed={50}
            showCursor={true}
            cursorChar="|"
          />
        </Title>
        <ProjectReelContainer>
          <ProjectReel ref={reelRef} animate={controls}>
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectImage src={`/images/portfolio/${project.image}`} alt={project.name} />
                <ProjectContent>
                  <ProjectName>{project.name}</ProjectName>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <CTAButton
                    onClick={() => handleClick(project.link)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ir al sitio
                  </CTAButton>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectReel>
        </ProjectReelContainer>
      </PortfolioWrapper>
    </PageContainer>
  );
}

export default PageAnimation(Portfolio);