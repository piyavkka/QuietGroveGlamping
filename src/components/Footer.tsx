import styled from "styled-components";
import { P } from "../styles/theme";
import {SectionWrapper} from "./common/SectionWrapper.ts";


function Footer() {
    return (
        <FooterWrapper>
            <SectionWrapper>
                <P style={{textAlign: "center"}}>© 2025 Quiet Grove. Все права защищены.</P>
            </SectionWrapper>
        </FooterWrapper>
    );
}

export default Footer;

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: var(--light-text-color);
`