import styled from "styled-components";
import React from "react";

interface IntroSectionProps {
    src: string;
    alt?: string;
    title: string;
    description: string;
}

const Wrapper = styled.section`
    background-color: var(--main-color);
    width: 100%;
`;

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    height: 670px;
    overflow: hidden;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
        z-index: 0;
        pointer-events: none;
    }
`;

const Content = styled.div`
    max-width: 1440px;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: min(8vw, 100px);
    color: var(--light-text-color);
    z-index: 1;
`;

const Title = styled.h2`
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
`;

const Description = styled.p`
    font-size: 28px;
    margin-top: 16px;
`;

export const IntroSection: React.FC<IntroSectionProps> = ({src, alt, title, description}) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img src={src} alt={alt}/>
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Content>
            </ImageWrapper>
        </Wrapper>
    );
};