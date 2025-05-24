import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import styled, { css } from "styled-components";
import {useState} from "react";
import {H3Dark, P, Span, theme} from "../styles/theme.ts";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {housesData} from "../components/Data/housesData.ts";
import {SliderComponent} from "../components/common/SliderComponent.tsx";
import {Button} from "../components/common/Button.tsx";
import ResPageForm from "../components/ResPageForm.tsx";

import { format } from "date-fns";
import { ru as ruLocale } from "date-fns/locale";
import {fillOptions, Sauna} from "../components/Data/BathData.ts";
import {FillDropdown} from "../components/common/FillDropdown.tsx";
import { Checkbox, FormControlLabel } from "@mui/material";
import { differenceInCalendarDays } from "date-fns";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Reservation(){
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const [page, setPage] = useState<number>(0);
    const [selectedHouse, setSelectedHouse] = useState<number | null>(null);

    const [selectedSaunaSlots, setSelectedSaunaSlots] = useState<
        Record<string, Set<string>>
    >({});

    const [addTub, setAddTub] = useState(false);
    const [selectedFillId, setSelectedFillId] = useState<number>(0);

    const [showAlert, setShowAlert] = useState(false);

    const handlePrev = () => setPage((p) => Math.max(0, p - 1));
    const handleNext = () => {
        if (page === 0 && selectedHouse === null) {
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        setPage((p) => Math.min(2, p + 1));
    };

    const pageTitles = [
        "Выберите домик",
        "Баня и чан",
        "Контакты",
    ];

    const saunaSlotsData: { date: Date; slots: string[] }[] = [
        { date: new Date(2025, 4, 21), slots: ["12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00", "20:00-22:00", "22:00-00:00"] },
        { date: new Date(2025, 4, 22), slots: ["18:00-20:00", "20:00-22:00"] },
        { date: new Date(2025, 4, 23), slots: ["16:00-18:00", "18:00-20:00"] },
        { date: new Date(2025, 4, 24), slots: ["20:00-22:00", "22:00-00:00"] },
        { date: new Date(2025, 4, 25), slots: ["18:00-20:00", "20:00-22:00"] },
        { date: new Date(2025, 4, 26), slots: ["16:00-18:00", "18:00-20:00"] },
    ];

    const toggleSlot = (dateKey: string, slot: string) => {
        setSelectedSaunaSlots((prev) => {
            const daySet = new Set(prev[dateKey] ?? []);
            if (daySet.has(slot)) daySet.delete(slot);
            else daySet.add(slot);
            return { ...prev, [dateKey]: daySet };
        });
    };

    const extendedFillOptions = [
        ...fillOptions,
        {
            id: Math.max(...fillOptions.map(o => o.id)) + 1,
            label: "Без наполнения",
            price: null,
        },
    ];

    const handleSubmit = ({ checkIn, checkOut }: { checkIn: Date | null; checkOut: Date | null }) => {
        setCheckIn(checkIn);
        setCheckOut(checkOut);
        console.log("📥 Получено в Reservation", checkIn, checkOut);
    };

    const calculateTotal = () => {
        let total = 0;

        const selectedDays =
            checkIn && checkOut ? Math.max(1, differenceInCalendarDays(checkOut, checkIn)) : 0;

        if (selectedHouse !== null) {
            const house = housesData.find(h => h.id === selectedHouse);
            if (house) total += house.cost * selectedDays;
        }

        const saunaCount = Object.values(selectedSaunaSlots).reduce((sum, set) => sum + set.size, 0);
        total += saunaCount * Sauna.price;

        if (addTub) {
            const selectedFill = fillOptions.find(f => f.id === selectedFillId);
            if (selectedFill?.price) total += selectedFill.price;
        }

        return total;
    };

    return(
        <>
            <SectionWrapper style={{padding: 'clamp(40px, 5vw, 60px) clamp(15px, 5vw, 80px)'}}>
                <ResPageForm onSubmit={handleSubmit} />
                <Wrapper>
                    <FlexWrapper justify="space-between" gap="24px" align="center">
                        <NavArrowButton onClick={handlePrev} disabled={page === 0}>
                            <ArrowBackIosNewIcon /> Назад
                        </NavArrowButton>

                        <P>{pageTitles[page]}</P>

                        <NavArrowButton onClick={handleNext} disabled={page === pageTitles.length - 1}>
                            Вперёд <ArrowForwardIosIcon />
                        </NavArrowButton>

                        <Snackbar
                            open={showAlert}
                            autoHideDuration={6000}
                            onClose={() => setShowAlert(false)}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        >
                            <Alert
                                elevation={6}
                                variant="filled"
                                onClose={() => setShowAlert(false)}
                                severity="warning"
                                sx={{ width: "100%" }}
                            >
                                Пожалуйста, выберите домик перед переходом.
                            </Alert>
                        </Snackbar>
                    </FlexWrapper>

                    <ContentWrapper>
                        {page === 0 && (
                            <FlexWrapper
                                justify="space-between"
                                gap="24px"
                                wrap="wrap"
                            >
                                {housesData.map(
                                    ({ id, title, images, timeFirst, timeSecond, people, cost }) => (
                                        <CardHouse
                                            key={id}
                                            direction="column"
                                            gap="14px"
                                            align="center"
                                            selected={selectedHouse === id}
                                        >
                                            <H3Dark>{title}</H3Dark>
                                            <SliderComponent
                                                images={images}
                                                autoplay={false}
                                                height="250px"
                                            />
                                            <List>
                                                <li>Заезд после {timeFirst}</li>
                                                <li>Выезд до {timeSecond}</li>
                                                <li>Вместимость до {people} человек</li>
                                            </List>
                                            <Span>от {cost} / в сутки</Span>
                                            {selectedHouse !== id && (
                                                <Button onClick={() => setSelectedHouse(id)}>
                                                    выбрать
                                                </Button>
                                            )}
                                        </CardHouse>
                                    )
                                )}
                            </FlexWrapper>
                        )}

                        {page === 1 && (
                            <>
                                <SaunaContainer>
                                    {saunaSlotsData.map(({date, slots}) => {
                                        const dateKey = format(date, "yyyy-MM-dd");
                                        return (
                                            <div style={{marginBottom: 24}} key={dateKey}>
                                                <P style={{marginBottom: 8, fontWeight: '600'}}>
                                                    {format(date, "d MMMM, EEEE", {locale: ruLocale})}
                                                </P>
                                                <FlexWrapper wrap="wrap" gap="8px">
                                                    {slots.map((slot) => {
                                                        const isSel =
                                                            selectedSaunaSlots[dateKey]?.has(slot) ?? false;
                                                        return (
                                                            <SlotButton
                                                                key={slot}
                                                                selected={isSel}
                                                                onClick={() => toggleSlot(dateKey, slot)}
                                                            >
                                                                {slot}
                                                            </SlotButton>
                                                        );
                                                    })}
                                                </FlexWrapper>
                                            </div>
                                        );
                                    })}
                                </SaunaContainer>
                                <TubSection>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={addTub}
                                                onChange={() => setAddTub((v) => !v)}
                                            />
                                        }
                                        label={<P style={{fontWeight: '500'}}>Добавить чан</P>}
                                    />
                                    {addTub && (
                                        <CustomDropdownWrapper>
                                            <FillDropdown
                                                fillOptions={extendedFillOptions}
                                                selectedId={selectedFillId}
                                                setSelectedId={setSelectedFillId}
                                                renderOptionExtra={(option) =>
                                                    option.price ? `+${option.price}₽ ` : null
                                                }
                                            />
                                        </CustomDropdownWrapper>
                                    )}
                                </TubSection>
                            </>
                        )}

                        {page === 2 && (
                            <FlexWrapper>
                                <FlexWrapper direction="column" gap="16px">
                                    <P>Здесь будут контактные данные</P>
                                    <P style={{ fontWeight: '600' }}>Итоговая стоимость: {calculateTotal()} ₽</P>
                                </FlexWrapper>
                            </FlexWrapper>
                        )}
                    </ContentWrapper>
                </Wrapper>
            </SectionWrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 12px;
    padding: 24px;
    border-radius: 10px;
    background-color: var(--light-elem-color);
    border: 1px solid var(--add-color);
`;

const ContentWrapper = styled.div`
  margin-top: 24px;
`;

const CardHouse = styled(FlexWrapper)<{ selected?: boolean }>`
    width: min(380px, calc(100vw - 112px));
    max-width: 380px;
    border-radius: 10px;
    border: ${({selected}) =>
            selected ? "1px solid var(--main-color)" : "1px solid var(--light-text-color)"};
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: var(--white-color);

    &:hover {
        transform: ${({selected}) => (selected ? "none" : "scale(1.02)")};
    }
`;

const List = styled.ul`
    list-style-type: disc;
    padding-left: 14px;
    color: inherit;
    text-align: left;
    li {
        margin-bottom: 8px;
        color: ${theme.fontColor.main};
        font-size: ${theme.fontSize.P};
    }
`;

const NavArrowButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: 2px;
    width: fit-content;
    padding: 8px 10px;
    text-transform: lowercase;
    color: ${theme.fontColor.main};
    background-color: var(--white-color);
    
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "pointer")};

    &:hover {
        background-color: var(--add-color);
    }
`;

const SaunaContainer = styled.div`
    max-height: 320px;
    overflow-y: auto;
    margin-top: 14px;
    padding: 14px;
    background-color: var(--white-color);
    border: 1px solid var(--light-text-color);
    border-radius: 5px;
`;

const SlotButton = styled(Button)<{ selected?: boolean }>`
    width: 200px;
    padding: 8px 12px;
    ${({selected}) =>
            selected &&
            css`
                color: ${theme.fontColor.main};
                background-color: var(--light-text-color);
                &:hover {
                    background-color: var(--light-text-color);
                }
            `}
`;

const TubSection = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    label {
        font-weight: 500;
        cursor: pointer;
        user-select: none;
    }
`;

const CustomDropdownWrapper = styled.div`
    max-width: 420px;
    button {
        padding: 8px 24px;
        border-radius: 5px;
    }
    span{
        font-weight: 500;
        font-size: 16px;
    }
    li{
        padding: 10px 22px;
    }
`;