import styled from "styled-components";
import { Button } from "../../components/common/Button.tsx";
import React, { useCallback, useMemo, useState } from "react";
import TextField from "@mui/material/TextField";

function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    let result = "+7";
    if (digits.length > 1) result += " (" + digits.slice(1, 4);
    if (digits.length >= 4) result += ") " + digits.slice(4, 7);
    if (digits.length >= 7) result += "-" + digits.slice(7, 9);
    if (digits.length >= 9) result += "-" + digits.slice(9, 11);
    return result;
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface FormEventsProps {
    onSubmitted?: () => void;
}

export default function ContactSection({ onSubmitted }: FormEventsProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const isFormValid = useMemo(() => {
        return (
            name.trim() !== "" &&
            phone.replace(/\D/g, "").length === 11 &&
            isValidEmail(email)
        );
    }, [name, phone, email]);

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            if (!isFormValid) return;

            console.log({
                name,
                phone: phone.replace(/\D/g, ""),
                email
            });

            onSubmitted?.();
        },
        [name, phone, email, isFormValid, onSubmitted]
    );

    return (
        <Form onSubmit={handleSubmit}>
            <StyledTextField
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                required
            />

            <StyledTextField
                placeholder="+7 (999) 999-99-99"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                variant="outlined"
                required
            />

            <StyledTextField
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                required
                type="email"
            />

            <Button type="submit">
                Подтвердить
            </Button>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 480px;
`;

const StyledTextField = styled(TextField)`
    & .MuiInputBase-root {
        background-color: var(--white-color);
    }
    & .MuiOutlinedInput-input {
        padding: 14px 24px;
    }
`;