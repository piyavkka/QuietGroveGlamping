import styled from "styled-components";
import {theme} from "../styles/theme";

export const Button = styled.button`
    background-color: var(--main-color);
    color: var(--light-text-color);
    padding: 14px 24px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.semibold};
    width: 260px;
    transition: 0.2s;
    font-size: ${theme.fontSize.button};
    
    &:hover {
        background-color: var(--accent-color);
    }

    @media (max-width: 768px) {
        margin: 10px auto;
    }
`