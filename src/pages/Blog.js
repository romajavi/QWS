import React from 'react';
import styled from 'styled-components';
import BlogPost from '../components/BlogPost.js';
import Button from '../components/Button.js';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const BlogContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogTitle = styled.h1`
  color: ${props => props.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Blog = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <BlogContainer>
            <BlogTitle>Blog</BlogTitle>
            <BlogGrid>
                <BlogPost
                    title="Título del Post 1"
                    date="22 de noviembre, 2024"
                    excerpt="Lorem ipsum dolor sit amet..."
                />
                <BlogPost
                    title="Título del Post 2"
                    date="22 de noviembre, 2024"
                    excerpt="Lorem ipsum dolor sit amet..."
                />                <BlogPost
                    title="Título del Post 1"
                    date="22 de noviembre, 2024"
                    excerpt="Lorem ipsum dolor sit amet..."
                />
                <BlogPost
                    title="Título del Post 2"
                    date="22 de noviembre, 2024"
                    excerpt="Lorem ipsum dolor sit amet..."
                />                <BlogPost
                    title="Título del Post 1"
                    date="22 de noviembre, 2024"
                    excerpt="Lorem ipsum dolor sit amet..."
                />
                <BlogPost
                    title="Título del Post 2"
                    date="22 de noviembre, 2024"
                    excerpt="Lorem ipsum dolor sit amet..."
                />
                {/* Más BlogPosts aquí */}
            </BlogGrid>
        </BlogContainer>
    );
};

export default Blog;