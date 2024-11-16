import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import PageAnimation from '../components/PageAnimation.js';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: calc(100vh - 120px);
  justify-content: flex-start;
  padding-bottom: 5rem;
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
  width: 100vw;
  overflow: hidden;
  padding: 2rem 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`;

const ProjectReel = styled(motion.div)`
  display: flex;
  width: fit-content;
  padding: 0;
  margin: 0;
`;

const ProjectCard = styled(motion.div)`
  flex: 0 0 300px;
  height: 350px;
  margin: 0 1rem;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.secondaryBackground};
  box-shadow: 0 8px 32px rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
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

const PortfolioButton = styled(Button)`
  margin-top: auto;
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
        await controls.start({
          x: [-reelWidth / 2, 0],
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
                  <PortfolioButton
                    variant="portfolio"
                    size="small"
                    onClick={() => handleClick(project.link)}
                  >
                    Ir a Sitio
                  </PortfolioButton>
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