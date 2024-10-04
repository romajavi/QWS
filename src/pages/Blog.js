import React from 'react';
import styled from 'styled-components';
import PageAnimation from '../components/PageAnimation';
import BlogPost from '../components/BlogPost';

const PageContainer = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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