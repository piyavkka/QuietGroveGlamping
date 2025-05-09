import {H2Dark, Input, P} from "../styles/theme.ts";
import styled from "styled-components";
import {Button} from "./common/Button.tsx";
import {FlexWrapper} from "./common/FlexWrapper.ts";

export default function FormEvents(){
    return (
        <FormCard>
            <H2Dark>Отдохните от быстрого ритма жизни в глэмпинге "Тихая роща"</H2Dark>
            <StyledP>Заполните форму, мы свяжемся в течении 15 минут и поможем забронировать отдых</StyledP>
            <Input
                type="text"
                placeholder="Name"
            />
            <Input
                type="number"
                placeholder="phone"
            />
            <StyledP>Когда планируете приехать?</StyledP>
            <Input
                type="date"
            />
            <FlexWrapper align="center" gap="10px">
                <Input type="checkbox"/>
                <StyledP>Я соглашаюсь с политикой конфиденциальности</StyledP>
            </FlexWrapper>

            <StyledP>Количество человек</StyledP>
            <Input
                type="number"
                min={1}
            />

            <Button type="submit">Отправить</Button>
        </FormCard>
    );
}

const FormCard = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 600px;
    background-color: var(--light-text-color);
    padding: 24px;
    border-radius: 10px;
`;

const StyledP = styled(P)`
    @media (max-width: 768px)  {
        text-align: center;
    }
`