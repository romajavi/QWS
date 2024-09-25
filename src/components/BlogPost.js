import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogPostWrapper = styled(motion.article)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const Banner = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Date = styled.p`
  color: #a5aa9a;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const Excerpt = styled.p`
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CommentSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledButton = styled(motion.button)`
  // Si necesitas estilos adicionales específicos para este botón, 
  // puedes agregarlos aquí. De lo contrario, heredará los estilos 
  // globales definidos en GlobalStyles.js
`;

const BlogPost = ({ title, date, excerpt, content, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <BlogPostWrapper>
            <Banner src={image} alt={title} />
            <Content>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Excerpt>{isExpanded ? content : excerpt}</Excerpt>
                <ButtonContainer>
                    <StyledButton onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? 'Cerrar' : 'Leer más'}
                    </StyledButton>
                </ButtonContainer>
                <CommentSection>
                    <h3>Comentarios</h3>
                    {/* Aquí puedes agregar un componente de comentarios */}
                </CommentSection>
            </Content>
        </BlogPostWrapper>
    );
};
export default BlogPost;