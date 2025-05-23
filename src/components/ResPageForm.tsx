import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru as ruLocale } from "date-fns/locale/ru";
import { P } from "../styles/theme.ts";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { addDays, isAfter, parse } from "date-fns";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "./common/Button.tsx";

const StyledTextField = styled(TextField)`
    & .MuiInputBase-root {
        background-color: var(--white-color);
    }

    & .MuiOutlinedInput-input {
        padding: 12px 24px;
    }
`;

const datePickerCommon = {
    enableAccessibleFieldDOMStructure: false as const,
    slots: { textField: StyledTextField },
    slotProps: { textField: { fullWidth: true, required: true } },
};

type ResPageFormProps = {
    onSubmit: (data: { checkIn: Date | null; checkOut: Date | null; guests: number }) => void;
};

export default function ResPageForm({ onSubmit }: ResPageFormProps) {
    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const checkInQuery = query.get("checkIn");
    const checkOutQuery = query.get("checkOut");
    const guestsQuery = query.get("guests");

    const [checkIn, setCheckIn] = useState<Date | null>(
        checkInQuery ? parse(checkInQuery, "yyyy-MM-dd", new Date()) : null
    );
    const [checkOut, setCheckOut] = useState<Date | null>(
        checkOutQuery ? parse(checkOutQuery, "yyyy-MM-dd", new Date()) : null
    );
    const [guests, setGuests] = useState<number>(
        guestsQuery ? +guestsQuery : 2
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("🔍 Отправлено из формы:", { checkIn, checkOut, guests });
        onSubmit({ checkIn, checkOut, guests });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
            <Form onSubmit={handleSubmit}>
                <FieldGroup>
                    <P>Дата заезда</P>
                    <DatePicker
                        value={checkIn}
                        onChange={(newDate) => {
                            setCheckIn(newDate);
                            if (checkOut && newDate && !isAfter(checkOut, newDate)) {
                                setCheckOut(null);
                            }
                        }}
                        disablePast
                        {...datePickerCommon}
                    />
                </FieldGroup>

                <FieldGroup>
                    <P>Дата выезда</P>
                    <DatePicker
                        value={checkOut}
                        onChange={setCheckOut}
                        minDate={checkIn ? addDays(checkIn, 1) : addDays(new Date(), 1)}
                        disabled={!checkIn}
                        {...datePickerCommon}
                    />
                </FieldGroup>

                <FieldGroup style={{ width: 160 }}>
                    <P>Количество гостей</P>
                    <StyledTextField
                        value={guests}
                        type="number"
                        onChange={(e) =>
                            setGuests(Math.max(1, Math.min(30, parseInt(e.target.value || "1", 10))))
                        }
                        required
                    />
                </FieldGroup>

                <Button type="submit" style={{ width: 160 }}>
                    найти
                </Button>
            </Form>
        </LocalizationProvider>
    );
}

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-end;
    gap: 24px;

    background-color: var(--light-text-color);
    border: 1px solid var(--elem-color);
    border-radius: 10px;
    padding: 24px 56px;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const FieldGroup = styled.div`
    max-width: 280px;
`;
