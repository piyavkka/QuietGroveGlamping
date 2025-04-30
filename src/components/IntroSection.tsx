import styled from "styled-components";
import React from "react";
import {H1Light, H2Light} from "../styles/theme.ts";

interface IntroSectionProps {
    src: string;
    alt?: string;
    title: string;
    description: string;
}

const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: clamp(15px, 5vw, 80px);
    color: var(--light-text-color);
    z-index: 1;
`;

export const IntroSection: React.FC<IntroSectionProps> = ({src, alt, title, description}) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img src={src} alt={alt}/>
                <Content>
                    <H1Light>{title}</H1Light>
                    <StyledH2>{description}</StyledH2>
                </Content>
            </ImageWrapper>
        </Wrapper>
    );
};

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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

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

const StyledH2 = styled(H2Light)`
    display: inline-block;
    max-width: 1000px;
    margin-top: 1rem;
`