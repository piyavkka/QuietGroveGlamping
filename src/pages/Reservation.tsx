import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import styled, {css} from "styled-components";
import {useState} from "react";
import {H3Dark, P, Span, theme} from "../styles/theme.ts";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {housesData} from "../components/Data/housesData.ts";
import {SliderComponent} from "../components/common/SliderComponent.tsx";
import {Button} from "../components/common/Button.tsx";
import ResPageForm from "../components/ResPageForm.tsx";

import {format} from "date-fns";
import {ru as ruLocale} from "date-fns/locale";
import {fillOptions, Sauna} from "../components/Data/BathData.ts";
import {FillDropdown} from "../components/common/FillDropdown.tsx";
import {Checkbox, FormControlLabel} from "@mui/material";
import {differenceInCalendarDays} from "date-fns";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Reservation() {
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    const [page, setPage] = useState<number>(0);
    const [selectedHouse, setSelectedHouse] = useState<number | null>(null);
    const [selectedSaunaSlots, setSelectedSaunaSlots] = useState<Record<string, Set<string>>>({});
    const [addTub, setAddTub] = useState(false);
    const [selectedFillId, setSelectedFillId] = useState<number>(0);
    const [showAlert, setShowAlert] = useState(false);

    const handlePrev = () => setPage((p) => Math.max(0, p - 1));
    const handleNext = () => {
        if (page === 0 && selectedHouse === null) {
            setShowAlert(true);
            return;
        }
        if (page === 1 && saunaHoursCount > 0 && saunaHoursCount < 2) {
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        setPage((p) => Math.min(2, p + 1));
    };

    const pageTitles = ["Выберите домик", "Баня и чан", "Контакты"];

    const generateSaunaHours = () => {
        const hours: string[] = [];
        for (let h = 10; h < 22; h++) {
            hours.push(`${h.toString().padStart(2, '0')}:00`);
        }
        return hours;
    };

    const saunaSlotsData: { date: Date; slots: string[] }[] = [
        {date: new Date(2025, 4, 21), slots: generateSaunaHours()},
        {date: new Date(2025, 4, 22), slots: generateSaunaHours()},
        {date: new Date(2025, 4, 23), slots: generateSaunaHours()},
        {date: new Date(2025, 4, 24), slots: generateSaunaHours()},
    ];

    const toggleSlot = (dateKey: string, slot: string) => {
        setSelectedSaunaSlots((prev) => {
            const daySet = new Set(prev[dateKey] ?? []);
            if (daySet.has(slot)) daySet.delete(slot);
            else daySet.add(slot);
            return {...prev, [dateKey]: daySet};
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

    const handleSubmit = ({checkIn, checkOut}: { checkIn: Date | null; checkOut: Date | null }) => {
        setCheckIn(checkIn);
        setCheckOut(checkOut);
        console.log("📥 Получено в Reservation", checkIn, checkOut);
    };
    const saunaHoursCount = Object.values(selectedSaunaSlots).reduce((sum, set) => sum + set.size, 0);
    const saunaCost = saunaHoursCount * Sauna.find(s => s.id === 1)!.price;
    const tubBasePrice = Sauna.find(s => s.id === 2)!.price;
    const isTubFree = saunaHoursCount >= 2;
    const tubCost = addTub && !isTubFree ? tubBasePrice : 0;
    const tubFillPrice = addTub ? (fillOptions.find(f => f.id === selectedFillId)?.price ?? 0) : 0;

    const calculateTotal = () => {
        let total = 0;
        const selectedDays = checkIn && checkOut ? Math.max(1, differenceInCalendarDays(checkOut, checkIn)) : 0;
        if (selectedHouse !== null) {
            const house = housesData.find(h => h.id === selectedHouse);
            if (house) total += house.cost * selectedDays;
        }
        total += saunaCost + tubCost + tubFillPrice;
        return total;
    };

    return (
        <>
            <SectionWrapper style={{padding: 'clamp(40px, 5vw, 20px) clamp(15px, 5vw, 80px)'}}>
                <ResPageForm onSubmit={handleSubmit}/>
                <Wrapper>
                    <FlexWrapper justify="space-between" gap="24px" align="center">
                        <NavArrowButton onClick={handlePrev} disabled={page === 0}>
                            <ArrowBackIosNewIcon/> Назад
                        </NavArrowButton>

                        <Span>{pageTitles[page]}</Span>

                        <NavArrowButton onClick={handleNext} disabled={page === pageTitles.length - 1}>
                            Вперёд <ArrowForwardIosIcon/>
                        </NavArrowButton>

                        <Snackbar
                            open={showAlert}
                            autoHideDuration={6000}
                            onClose={() => setShowAlert(false)}
                            anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                        >
                            <Alert
                                elevation={6}
                                variant="filled"
                                onClose={() => setShowAlert(false)}
                                severity="warning"
                                sx={{width: "100%"}}
                            >
                                {page === 0
                                    ? "Пожалуйста, выберите домик перед переходом."
                                    : "Минимальное время аренды бани — 2 часа."
                                }
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
                                    ({id, title, images, timeFirst, timeSecond, people, cost}) => (
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
                            <FlexWrapper direction="column" gap="8px">
                                <P>
                                    Выберите не менее двух часов аренды бани. Стоимость: {Sauna.find(s => s.id === 1)?.price}₽ / час
                                </P>

                                <SaunaContainer>
                                    {saunaSlotsData.map(({date, slots}) => {
                                        const dateKey = format(date, "yyyy-MM-dd");
                                        return (
                                            <div style={{marginBottom: 24}} key={dateKey}>
                                                <P style={{ fontWeight: '600', marginBottom: '8px' }}>
                                                    {format(date, "d MMMM, EEEE", { locale: ruLocale })}
                                                </P>
                                                <FlexWrapper wrap="wrap" gap="8px">
                                                    {slots.map((slot) => {
                                                        const isSel = selectedSaunaSlots[dateKey]?.has(slot) ?? false;
                                                        return (
                                                            <SlotButton key={slot} selected={isSel} onClick={() => toggleSlot(dateKey, slot)}>
                                                                {slot}
                                                            </SlotButton>
                                                        );
                                                    })}
                                                </FlexWrapper>
                                            </div>
                                        );
                                    })}
                                </SaunaContainer>

                                <P>
                                    Аренда чана: {Sauna.find(s => s.id === 2)?.price}₽. При брони бани на 2+ часа — бесплатно
                                </P>

                                <TubSection>
                                    <FormControlLabel
                                        control={<Checkbox checked={addTub} onChange={() => setAddTub((v) => !v)} />}
                                        label={<P>Добавить чан</P>}
                                    />
                                    {addTub && (
                                        <CustomDropdownWrapper>
                                            <FillDropdown
                                                fillOptions={extendedFillOptions}
                                                selectedId={selectedFillId}
                                                setSelectedId={setSelectedFillId}
                                                renderOptionExtra={(option) => option.price ? `+${option.price}₽ ` : null}
                                            />
                                        </CustomDropdownWrapper>
                                    )}
                                </TubSection>
                                <div>
                                    {saunaHoursCount >= 2 && <P>Баня: {saunaCost}₽</P>}
                                    {addTub && !isTubFree && <P>Аренда чана: {tubBasePrice}₽</P>}
                                    {addTub && <P>Наполнение: {tubFillPrice}₽</P>}
                                    <Span>
                                        Всего: {
                                        (saunaHoursCount >= 2 ? saunaCost : 0) +
                                        (addTub && !isTubFree ? tubBasePrice : 0) +
                                        (addTub ? tubFillPrice : 0)
                                    }₽
                                    </Span>
                                </div>
                            </FlexWrapper>
                        )}

                        {page === 2 && (
                            <FlexWrapper>
                                <FlexWrapper direction="column" gap="16px">
                                    <P>Здесь будут контактные данные</P>
                                    <P style={{fontWeight: '600'}}>Итоговая стоимость: {calculateTotal()}₽</P>
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

    opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
    pointer-events: ${({disabled}) => (disabled ? "none" : "pointer")};

    &:hover {
        background-color: var(--add-color);
    }
`;

const SaunaContainer = styled.div`
    max-height: 300px;
    overflow-y: auto;
    padding: 14px;
    background-color: var(--white-color);
    border: 1px solid var(--light-text-color);
    border-radius: 5px;
`;

const SlotButton = styled(Button)<{ selected?: boolean }>`
    width: 180px;
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
    display: flex;
    flex-direction: column;
    
    label {
        cursor: pointer;
        user-select: none;
    }
`;

const CustomDropdownWrapper = styled.div`
    max-width: 380px;

    button {
        padding: 8px 24px;
        border-radius: 5px;
    }

    span {
        font-weight: 400;
        font-size: 16px;
    }

    li {
        padding: 10px 22px;
    }
`;