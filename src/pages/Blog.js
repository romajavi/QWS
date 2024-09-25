import React from 'react';
import styled from 'styled-components';
import PageAnimation from '../components/PageAnimation';
import BlogPost from '../components/BlogPost';

const BlogWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
        <BlogWrapper>
            <h1>Blog</h1>
            {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
            ))}
        </BlogWrapper>
    );
}

export default PageAnimation(Blog);