import styled from "styled-components";
import { Button } from "../common/Button.tsx";
import {Input, theme } from "../../styles/theme";
import {FlexWrapper} from "../common/FlexWrapper.ts";

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