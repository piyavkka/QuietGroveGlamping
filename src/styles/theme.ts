import styled from "styled-components";

export const theme = {

    shadow: {
      text: '0 0 10px rgba(0, 0, 0, 0.9)',
      elements: '0 0 20px rgba(0, 0, 0, 0.3)',
    },

    fontColor: {
        main: '#000000',
        accent: '#95b73c',
        light: '#f5f2ec',
        additional: '#8ea076',
    },

    fontSize: {
        logo: 'clamp(1rem, 2vw, 2rem)',
        P: 'clamp(0.8rem, 5vw, 1rem);',
    },

    fontWeight: {
        medium: '400',
        semibold: '500',
        bold: '600',
    },

    padding: {
        small: '16px',
    },

    gap: {
        icons: '12px',
        small: '16px',
    },
};

export const H3Dark = styled.h3`
    color: ${theme.fontColor.main};
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-weight: ${theme.fontWeight.bold};
`
export const H2Light = styled.h2`
    color: ${theme.fontColor.light};
    font-size: clamp(1.5rem, 5vw, 1rem);
    text-align: left;
    font-weight: ${theme.fontWeight.medium};
    text-shadow: ${theme.shadow.text};
`

export const H2Dark = styled.h2`
    color: ${theme.fontColor.main};
    font-size: clamp(1.4rem, 1.8vw, 1.8rem);
    font-weight: ${theme.fontWeight.bold};
    
    @media (max-width: 768px)  {
        text-align: center;
    }
`

export const H4Dark = styled.h4`
    color: ${theme.fontColor.main};
    display: inline-block;
    width: 60%;
    font-size: clamp(1rem, 1.4vw, 1.2rem);
    font-weight: ${theme.fontWeight.medium};
    
    @media (max-width: 768px)  {
        width: 70%;
    }
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
    font-size: ${theme.fontSize.P};
    white-space: pre-line;
`
export const Span = styled.span`
    font-weight: ${theme.fontWeight.bold};
    font-size: 1.2rem;
`