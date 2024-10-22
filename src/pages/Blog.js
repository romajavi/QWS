import React from 'react';
import styled from 'styled-components';
import PageAnimation from '../components/PageAnimation.js';
import BlogPost from '../components/BlogPost.js';
import PageContainer from '../components/PageContainer.js';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-top: 50px;
`;

const BlogContent = styled.div`
  flex: 1 0 auto;
  padding: 2rem 0;
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
                <BlogContent>
                    <BlogTitle>Blog</BlogTitle>
                    {blogPosts.map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))}
                </BlogContent>
            </BlogWrapper>
        </PageContainer>
    );
}

export default PageAnimation(Blog);