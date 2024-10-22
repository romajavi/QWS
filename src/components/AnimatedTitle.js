import React from 'react';
import styled from 'styled-components';
import { ReactTyped } from 'react-typed';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AnimatedTitle = ({ text, color1, color2 }) => {
    return (
        <TitleWrapper>
            <StyledTitle>
                <ReactTyped
                    strings={[`<span style="color: ${color1};">${text.split(' ')[0]}</span><span style="color: ${color2};">${text.split(' ').slice(1).join(' ')}</span>`]}
                    typeSpeed={50}
                    showCursor={true}
                    cursorChar="|"
                    html={true}
                />
            </StyledTitle>
        </TitleWrapper>
    );
};

export default AnimatedTitle;