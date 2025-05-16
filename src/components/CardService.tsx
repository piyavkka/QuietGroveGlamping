import styled from "styled-components";
import {H3Dark, P, Span, theme} from "../styles/theme.ts";
import {FlexWrapper} from "./common/FlexWrapper.ts";

interface CardServiceProps {
    title: string;
    description: string;
    icon: string;
    price: string;
}

export const CardService = ({ title, description, icon, price }: CardServiceProps) => {
    return (
        <Card direction="column" gap="12px">
            <FlexWrapper gap="12px" align="center">
                <Icon src={icon} alt={title} />
                <H3Dark>{title}</H3Dark>
            </FlexWrapper>
            <P>{description}</P>
            <Span>{price}</Span>
        </Card>
    );
};

const Card = styled(FlexWrapper)`
  background-color: ${theme.fontColor.light};
  padding: 14px 24px;
  border-radius: 10px;
  width: 100%;
  max-width: 410px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;