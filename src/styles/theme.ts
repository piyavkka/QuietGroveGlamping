import styled from "styled-components";

export const theme = {

    shadow: {
      text: '0 0 10px rgba(0, 0, 0, 0.9)',
      elements: '',
    },

    fontColor: {
        main: '#000000',
        accent: '#95b73c',
        light: '#f5f2ec',
    },

    fontSize: {},

    fontWeight: {
        medium: '400',
        semibold: '500',
        bold: '600',
    },
};

export const H3Dark = styled.h3`
    color: ${theme.fontColor.main};
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-weight: ${theme.fontWeight.bold};
`
export const H2Light = styled.h2`
    color: ${theme.fontColor.light};
    font-size: clamp(1.5rem, 5vw, 2rem);
    text-align: left;
    font-weight: ${theme.fontWeight.medium};
    text-shadow: ${theme.shadow.text};
`
export const H1Light = styled.h1`
    color: ${theme.fontColor.light};
    font-size: clamp(2rem, 5vw, 2.5rem);
    text-align: left;
    font-weight: ${theme.fontWeight.bold};
    text-transform: uppercase;
    text-shadow: ${theme.shadow.text};
`
export const P = styled.p`
    color: ${theme.fontColor.main};
    hyphens: auto;
    font-weight: ${theme.fontWeight.medium};
    line-height: 140%;
    text-align: justify;
    font-size: clamp(0.8rem, 5vw, 1rem);
`
export const Span = styled.span`
    font-weight: ${theme.fontWeight.bold};
`