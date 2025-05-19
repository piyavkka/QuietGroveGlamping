import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import styled from "styled-components";
import {useState} from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru as ruLocale } from "date-fns/locale";
import TextField from "@mui/material/TextField";
import { addDays, isAfter } from "date-fns";
import {P, Span, theme} from "../styles/theme.ts";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {housesData} from "../components/Data/housesData.ts";
import {SliderComponent} from "../components/common/SliderComponent.tsx";

const StyledTextField = styled(TextField)`
    & .MuiInputBase-root {
        background-color: var(--white-color);
    }

    & .MuiOutlinedInput-input {
        padding: 14px 24px;
    }
`;

const datePickerCommon = {
    enableAccessibleFieldDOMStructure: false as const,
    slots: { textField: StyledTextField },
    slotProps: { textField: { fullWidth: true, required: true } },
};

export default function Reservation(){

    const [checkIn, setCheckIn]   = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const [guests, setGuests] = useState<number>(2);

    return(
        <>
            <SectionWrapper>
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ruLocale}
                >
                    <Form justify="center" align="center" wrap="wrap" gap="24px">
                        <FieldGroup>
                            <Label htmlFor="check-in">Дата заезда</Label>
                            <DatePicker
                                value={checkIn}
                                onChange={newDate => {
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
                            <Label htmlFor="check-out">Дата выезда</Label>
                            <DatePicker
                                value={checkOut}
                                onChange={setCheckOut}
                                minDate={checkIn ? addDays(checkIn, 1) : addDays(new Date(), 1)}
                                disabled={!checkIn}
                                {...datePickerCommon}
                            />
                        </FieldGroup>

                        <FieldGroup style={{width: 160}}>
                            <Label htmlFor="guests">Количество гостей</Label>
                            <StyledTextField
                                value={guests}
                                type="number"
                                onChange={(e) =>
                                    setGuests(
                                        Math.max(1, Math.min(30, parseInt(e.target.value || "1", 10)))
                                    )
                                }
                                required
                            />
                        </FieldGroup>
                    </Form>
                </LocalizationProvider>

                <Wrapper>
                    <FlexWrapper justify="space-between" gap="24px">
                        <button>
                            <ArrowBackIosNewIcon/>
                            назад
                        </button>
                        <Label>Выберите номер</Label>
                        <button>
                            вперед
                            <ArrowForwardIosIcon/>
                        </button>
                    </FlexWrapper>

                    <FlexWrapper justify="space-between" gap="24px" wrap="wrap" style={{marginTop: 14}}>
                        {housesData.map(({ id, title, images, timeFirst, timeSecond, people, cost }) => (
                            <CardHouse key={id}>
                                <Label>{title}</Label>
                                <SliderComponent images={images} autoplay={false} height="250px"/>
                                <P>
                                    Заезд после {timeFirst}
                                    <br />
                                    Выезд до {timeSecond}
                                </P>
                                <P>Вместимость до {people} человек</P>
                                <Span>от {cost} / в сутки</Span>
                            </CardHouse>
                        ))}
                    </FlexWrapper>

                </Wrapper>
            </SectionWrapper>
        </>
    );
}

const Form = styled(FlexWrapper)`
    background-color: var(--light-text-color);
    border: 1px solid var(--elem-color);
    border-radius: 10px;
    padding: 24px 56px;
    width: 100%;

    @media (max-width: 768px) {
        gap: 24px;
        justify-content: center;
    }
`;

const FieldGroup = styled.div`
    max-width: 280px;
`;

const Label = styled.label`
    font-weight: ${theme.fontWeight.medium};
`;

const Wrapper = styled.div`
    width: 100%;
    margin-top: 12px;
    padding: 14px 24px;
    border-radius: 10px;
    background-color: var(--light-elem-color);
    border: 1px solid var(--light-text-color);
`;

const CardHouse = styled.div`
    max-width: 380px;
    border-radius: 10px;
    border: 1px solid var(--light-text-color);
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s ease;
    background-color: white;

    &:hover {
        transform: scale(1.02);
    }
`;