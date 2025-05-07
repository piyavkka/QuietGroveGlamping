import styled from "styled-components";
import { Button } from "../Button";
import { theme } from "../../styles/theme";
import {FlexWrapper} from "../FlexWrapper.ts";

export default function Reservation() {
        return (
            <Form align="center" justify="space-between" wrap="wrap" gap="12px">
                    <Input placeholder="заезд"/>
                    <Input placeholder="выезд"/>
                    <Input placeholder="гости"/>
                    <Button>найти</Button>
            </Form>
        );
}

const Form = styled(FlexWrapper)`
        background-color: var(--elem-color);
        border-radius: 10px;
        padding: 24px 36px;
        box-shadow: ${theme.shadow.elements};

        @media (max-width: 768px) {
                gap: 24px;
                justify-content: center;
        }
`;

const Input = styled.input`
        border: 2px solid transparent;
        border-radius: 5px;
        text-transform: uppercase;
        padding: 12px;
        font-size: ${theme.fontSize.button};
        font-weight: ${theme.fontWeight.semibold};
        transition: 0.2s ease;

        &:hover {
                border: 2px solid var(--main-color);
        }

        &:focus {
                outline: none;
                border: 2px solid var(--main-color);
        }
`;