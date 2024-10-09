import React from 'react';
import styled from 'styled-components';
import PageAnimation from '../components/PageAnimation';
import BlogPost from '../components/BlogPost';
import PageContainer from '../components/PageContainer';
import pageContainerStyle from '../styles/GlobalStyles'; //

const BlogWrapper = styled.div`
  ${pageContainerStyle}
  min-height: calc(100vh - 120px);
  justify-content: flex-start;
  padding-top: 100px; // Ajustado para dar espacio al título
`;

const BlogTitle = styled.h1`
  color: ${props => props.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const blogPosts = [
    {
        title: 'Título del Post 1',
        date: '20 de septiembre, 2024 - 14:30',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        image: '/path/to/image1.jpg'
    },
    {
        title: 'Título del Post 1',
        date: '20 de septiembre, 2024 - 14:30',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        image: '/path/to/image1.jpg'
    },
    {
        title: 'Título del Post 1',
        date: '20 de septiembre, 2024 - 14:30',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        image: '/path/to/image1.jpg'
    },
    {
        title: 'Título del Post 1',
        date: '20 de septiembre, 2024 - 14:30',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        image: '/path/to/image1.jpg'
    },
    {
        title: 'Título del Post 1',
        date: '20 de septiembre, 2024 - 14:30',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        image: '/path/to/image1.jpg'
    },
    // Añade más posts aquí
];

function Blog() {
    return (
        <PageContainer>
            <BlogWrapper>
                <BlogTitle>Blog</BlogTitle>
                {blogPosts.map((post, index) => (
                    <BlogPost key={index} {...post} />
                ))}
            </BlogWrapper>
        </PageContainer>
    );
}

export default PageAnimation(Blog);