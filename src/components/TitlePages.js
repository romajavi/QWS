import React from 'react';
import styled from 'styled-components';
import { ReactTyped } from 'react-typed';

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #FFD700, #52c1b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 1;
  transform: none;
`;

const Title = ({ text }) => (
    <SectionTitle>
        <ReactTyped
            strings={[text]}
            typeSpeed={50}
            showCursor={true}
            cursorChar="|"
        />
    </SectionTitle>
);

export default Title;