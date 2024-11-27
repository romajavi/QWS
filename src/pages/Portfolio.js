import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageAnimation from '../components/PageAnimation.js';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import { portfolioProjects } from '../data/portfolioData.js';

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
  height: 400px;
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
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.4;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechnologyTag = styled.span`
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.accent};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const PortfolioButton = styled(Button)`
  margin-top: auto;
`;

function Portfolio() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const reelRef = useRef(null);

  const getTranslatedProject = (project) => {
    const baseKey = `portfolio.projects.${project.id}`;
    return {
      name: t(`${baseKey}.name`, { defaultValue: project.name }),
      description: t(`${baseKey}.description`, { defaultValue: project.description }),
      technologies: project.technologies.map(tech =>
        t(`portfolio.technologies.${tech}`, { defaultValue: tech })
      )
    };
  };

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
    moveReel();
  }, [controls]);

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <PageContainer>
      <PortfolioWrapper>
        <Title>
          <ReactTyped
            strings={[t('portfolio.title')]}
            typeSpeed={50}
            showCursor={true}
            cursorChar="|"
          />
        </Title>
        <ProjectReelContainer>
          <ProjectReel ref={reelRef} animate={controls}>
            {[...portfolioProjects, ...portfolioProjects].map((project, index) => {
              const translatedProject = getTranslatedProject(project);

              return (
                <ProjectCard
                  key={`${project.id}-${index}`}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectImage
                    src={`/images/portfolio/${project.image}`}
                    alt={translatedProject.name}
                  />
                  <ProjectContent>
                    <ProjectName>{translatedProject.name}</ProjectName>
                    <ProjectDescription>{translatedProject.description}</ProjectDescription>
                    <TechnologiesList>
                      {translatedProject.technologies.map((tech, i) => (
                        <TechnologyTag key={i}>{tech}</TechnologyTag>
                      ))}
                    </TechnologiesList>
                    <PortfolioButton
                      variant="portfolio"
                      size="small"
                      onClick={() => handleClick(project.link)}
                    >
                      {t('portfolio.viewProject')}
                    </PortfolioButton>
                  </ProjectContent>
                </ProjectCard>
              );
            })}
          </ProjectReel>
        </ProjectReelContainer>
      </PortfolioWrapper>
    </PageContainer>
  );
}

export default PageAnimation(Portfolio);