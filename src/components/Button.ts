import styled from "styled-components";
import {theme} from "../styles/theme";

export const Button = styled.button`
    background-color: var(--main-color);
    color: var(--light-text-color);
    padding: 12px 24px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.semibold};
    width: 300px;
    transition: 0.2s;
    
    &:hover {
        background-color: var(--accent-color);
    }
`