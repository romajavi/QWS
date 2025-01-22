import React from 'react';
import styled from 'styled-components';

const PreloadContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
`;

const PreloadContent = () => {
    return (
        <PreloadContainer>
            <link rel="preload" href="/static/media/logo.7d88756d3ee202b5a614.png" as="image" />
            <link rel="preload" href="/images/favicon.ico" as="image" />
            <div style={{ fontFamily: 'your-font-family', visibility: 'hidden' }}>AxionDev</div>
        </PreloadContainer>
    );
};

export default PreloadContent;